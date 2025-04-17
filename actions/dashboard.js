"use server";

import { db } from "@/lib/inngest/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

export async function addFoodLog(foodData) {
  revalidatePath("/dashboard");
}

export const generateAI = async (userProfile) => {
  const { dietaryPreference, age, weight, height, gender, activityLevel } = userProfile;
  
  const prompt = `
    Generate personalized meal suggestions for a user with the following profile:
    - Dietary Preference: ${dietaryPreference}
    - Age: ${age}
    - Weight: ${weight} kg
    - Height: ${height} cm
    - Gender: ${gender}
    - Activity Level: ${activityLevel}

    Please respond STRICTLY in the following JSON format without any additional text:
    {
      "suggestion": "Brief summary of the meal plan",
      "meals": [
        {
          "name": "Meal name",
          "mealType": "breakfast|lunch|dinner|snack",
          "foodItems": [
            {
              "name": "Food item name",
              "quantity": "quantity with unit (e.g., 100g)",
              "calories": number,
              "protein": number,
              "carbs": number,
              "fat": number
            }
          ],
          "totalCalories": number,
          "totalProtein": number,
          "totalCarbs": number,
          "totalFat": number,
          "preparationInstructions": "Brief instructions"
        }
      ],
      "calories": number,
      "recommendedWaterIntake": "Amount in ml",
      "nutritionalBalance": {
        "protein": "percentage",
        "carbs": "percentage",
        "fat": "percentage"
      },
      "tags": ["tag1", "tag2"]
    }

    Requirements:
    - Include exactly 5 meals (breakfast, lunch, dinner, and 2 snacks)
    - Ensure all meals adhere to the ${dietaryPreference} dietary preference
    - Calculate appropriate calorie distribution based on the user's profile
    - Include a diverse range of food categories
    - Aim for nutritionally balanced meals according to standard dietary guidelines
    - Keep preparation instructions concise but clear
    - Ensure total calorie count matches the user's metabolic needs based on age, gender, weight, height and activity level
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    
    // Clean the response text and parse JSON
    const cleanText = text.replace(/```(?:json)?\n?|```/g, "").trim();
    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Error generating meal suggestions:", error);
    throw new Error("Failed to generate meal suggestions");
  }
};

export async function getMealSuggestions() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      id: true,
      dietaryPreference: true,
      age: true,
      weight: true,
      height: true,
      gender: true,
      activityLevel: true,
      mealSuggestions: {
        orderBy: {
          createdAt: 'desc'
        },
        take: 1
      }
    }
  });

  if (!user) throw new Error("User not found");

  // Check if we have all required profile information
  const requiredFields = ['dietaryPreference', 'age', 'weight', 'height', 'gender', 'activityLevel'];
  const missingFields = requiredFields.filter(field => !user[field]);
  
  if (missingFields.length > 0) {
    return {
      complete: false,
      missingFields,
      message: "Please complete your profile to get meal suggestions",
      mealSuggestion: null
    };
  }

  // Check if there's a recent meal suggestion (less than 24 hours old)
  const recentSuggestion = user.mealSuggestions[0];
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  
  if (recentSuggestion && new Date(recentSuggestion.createdAt) > twentyFourHoursAgo) {
    return {
      complete: true,
      mealSuggestion: recentSuggestion,
      message: "Using recent meal suggestion"
    };
  }

  // Generate new meal suggestions
  try {
    const suggestions = await generateAI({
      dietaryPreference: user.dietaryPreference,
      age: user.age,
      weight: user.weight,
      height: user.height,
      gender: user.gender,
      activityLevel: user.activityLevel
    });

    console.log("AI SUGGESTIONS:",suggestions)

    // Calculate total calories
    const totalCalories = suggestions.calories || 
      suggestions.meals.reduce((sum, meal) => sum + meal.totalCalories, 0);

    // Create new meal suggestion in the database
    const mealSuggestion = await db.mealSuggestion.create({
      data: {
        userId: user.id,
        suggestion: suggestions.suggestion,
        meals: suggestions.meals,
        calories: totalCalories,
        aiModelUsed: "gemini-1.5-pro"
      }
    });

    
    return {
      complete: true,
      mealSuggestion,
      message: "New meal suggestion generated"
    };
  } catch (error) {
    console.error("Error in getMealSuggestions:", error);
    throw new Error("Failed to generate meal suggestions");
  }
}

export async function getUserProfile() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      age: true,
      weight: true,
      height: true,
      gender: true,
      activityLevel: true,
      dietaryPreference: true,
      createdAt: true,
      progressRecords: {
        orderBy: {
          loggedAt: 'desc'
        },
        take: 5
      },
      foodLogs: {
        include: {
          foodItem: true
        },
        orderBy: {
          timestamp: 'desc'
        },
        take: 10
      }
    }
  });

  if (!user) throw new Error("User not found");
  return user;
}

export async function getFoodLogStats() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  
  if (!user) throw new Error("User not found");

  // Get today's food logs
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayFoodLogs = await db.foodLog.findMany({
    where: {
      userId: user.id,
      timestamp: {
        gte: today,
        lt: tomorrow
      }
    },
    include: {
      foodItem: true
    }
  });

  // Calculate nutritional totals
  const totals = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    meals: {
      breakfast: { count: 0, calories: 0 },
      lunch: { count: 0, calories: 0 },
      dinner: { count: 0, calories: 0 },
      snack: { count: 0, calories: 0 }
    }
  };

  for (const log of todayFoodLogs) {
    const { foodItem, quantity, mealType } = log;
    
    // Calculate nutrition based on quantity
    const calories = foodItem.calories * quantity;
    const protein = foodItem.protein * quantity;
    const carbs = foodItem.carbs * quantity;
    const fat = foodItem.fat * quantity;
    
    // Add to totals
    totals.calories += calories;
    totals.protein += protein;
    totals.carbs += carbs;
    totals.fat += fat;
    
    // Categorize by meal type
    const normalizedMealType = mealType.toLowerCase();
    const mealCategory = normalizedMealType.includes('breakfast') ? 'breakfast' :
                         normalizedMealType.includes('lunch') ? 'lunch' :
                         normalizedMealType.includes('dinner') ? 'dinner' : 'snack';
    
    totals.meals[mealCategory].count++;
    totals.meals[mealCategory].calories += calories;
  }

  return totals;
}