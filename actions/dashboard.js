"use server";

import { dietaryPreferences } from "@/app/data/food";
import { db } from "@/lib/inngest/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { processEnv } from "inngest/helpers/env";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});

function extractJSON(text) {
  console.log("Attempting to extract JSON from text");
  
  // First try: Look for content between curly braces including nested structures
  try {
    const jsonRegex = /([\s\S]*?({[\s\S]*})[\s\S]*)/;
    const match = text.match(jsonRegex);
    if (match && match[2]) {
      const possibleJson = match[2];
      return JSON.parse(possibleJson);
    }
  } catch (e) {
    console.log("First extraction method failed:", e.message);
  }
  
  // Second try: More aggressive - find first { and last }
  try {
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      const possibleJson = text.substring(firstBrace, lastBrace + 1);
      return JSON.parse(possibleJson);
    }
  } catch (e) {
    console.log("Second extraction method failed:", e.message);
  }
  
  // Final try: Just try parsing the whole thing as a last resort
  try {
    return JSON.parse(text);
  } catch (e) {
    console.log("Final extraction method failed:", e.message);
    throw new Error("Could not extract valid JSON");
  }
}

export const generateAI = async () => {
  // Get current user
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Get user data from database
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      dietaryPreference: true,
      age: true,
      weight: true,
      height: true,
      gender: true,
      activityLevel: true
    }
  });

  if (!user) throw new Error("User not found");
  
  // Check if all required fields are present
  if (!user.dietaryPreference || !user.age || !user.weight || 
      !user.height || !user.gender || !user.activityLevel) {
    throw new Error("User profile is incomplete. Please complete your profile first.");
  }

  // Create a structured prompt that encourages raw JSON output
  const prompt = `You are a nutritional API that returns ONLY raw JSON without any explanations or formatting.

User Profile:
- Dietary Preference: ${user.dietaryPreference}
- Age: ${user.age}
- Weight: ${user.weight} kg
- Height: ${user.height} cm
- Gender: ${user.gender}
- Activity Level: ${user.activityLevel}

Task: Generate a personalized meal plan for this user.

Response Format: Return ONLY a raw JSON object with this exact structure:
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
- Ensure all meals adhere to the ${user.dietaryPreference} dietary preference
- Calculate appropriate calorie distribution based on the user's profile
- Include a diverse range of food categories
- Aim for nutritionally balanced meals according to standard dietary guidelines
- Keep preparation instructions concise but clear
- Ensure total calorie count matches the user's metabolic needs based on age, weight, height, gender and activity level

IMPORTANT: Return ONLY the raw JSON. Do not include explanations, markdown formatting, or text before or after the JSON.`;

  try {
    // Set proper response format to JSON
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2, // Lower temperature for more predictable output
        maxOutputTokens: 2048,
      }
    });
    
    const response = result.response;
    const text = response.text();

    console.log("AI Response:", text);

    // Try to extract and parse the JSON
    try {
      // First attempt: clean the text and try to parse
      let cleanText = text
        .replace(/```(?:json)?\s*([\s\S]*?)```/g, '$1')
        .replace(/`/g, '')
        .replace(/'''(?:json)?\n?/g, '')
        .trim();
      
      console.log("Cleaned text:", cleanText);
      
      // Try to parse the cleaned text
      let mealData;
      try {
        mealData = JSON.parse(cleanText);
      } catch (parseError) {
        // If simple parsing fails, try more aggressive JSON extraction
        console.log("Simple parsing failed, trying extraction methods");
        mealData = extractJSON(cleanText);
      }
      
      // If we got valid data, save it to the database
      if (mealData && mealData.meals && mealData.suggestion) {
        // Store the generated meal plan in the database
        const foodSuggestion = await db.foodsuggest.create({
          data: {
            dietaryPreferences: user.dietaryPreference,
            suggestion: mealData.suggestion,
            meals: mealData.meals,
            calories: mealData.calories,
            recommendedWaterIntake: mealData.recommendedWaterIntake,
            nutritionalBalance: mealData.nutritionalBalance,
            tags: mealData.tags || ["balanced", user.dietaryPreference], // Fallback tags if none provided
            userId: userId // Link to user if your schema supports it
          },
        });

        return mealData;
      } else {
        throw new Error("Parsed JSON does not have the expected structure");
      }
    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      console.error("Raw AI response:", text);
      
      // Fallback: Create a basic meal plan structure
      const defaultMealPlan = {
        suggestion: `Personalized meal plan for ${user.dietaryPreference} diet`,
        meals: [
          {
            name: "Breakfast",
            mealType: "breakfast",
            foodItems: [{ 
              name: "Customized breakfast", 
              quantity: "1 serving", 
              calories: 400, 
              protein: 20, 
              carbs: 40, 
              fat: 15 
            }],
            totalCalories: 400,
            totalProtein: 20,
            totalCarbs: 40,
            totalFat: 15,
            preparationInstructions: "Custom preparation based on your preferences"
          },
          {
            name: "Lunch",
            mealType: "lunch",
            foodItems: [{ 
              name: "Customized lunch", 
              quantity: "1 serving", 
              calories: 600, 
              protein: 30, 
              carbs: 60, 
              fat: 20 
            }],
            totalCalories: 600,
            totalProtein: 30,
            totalCarbs: 60,
            totalFat: 20,
            preparationInstructions: "Custom preparation based on your preferences"
          },
          {
            name: "Dinner",
            mealType: "dinner",
            foodItems: [{ 
              name: "Customized dinner", 
              quantity: "1 serving", 
              calories: 500, 
              protein: 25, 
              carbs: 50, 
              fat: 15 
            }],
            totalCalories: 500,
            totalProtein: 25,
            totalCarbs: 50,
            totalFat: 15,
            preparationInstructions: "Custom preparation based on your preferences"
          },
          {
            name: "Morning Snack",
            mealType: "snack",
            foodItems: [{ 
              name: "Healthy snack", 
              quantity: "1 serving", 
              calories: 200, 
              protein: 10, 
              carbs: 20, 
              fat: 8 
            }],
            totalCalories: 200,
            totalProtein: 10,
            totalCarbs: 20,
            totalFat: 8,
            preparationInstructions: "Quick and easy snack"
          },
          {
            name: "Afternoon Snack",
            mealType: "snack",
            foodItems: [{ 
              name: "Healthy snack", 
              quantity: "1 serving", 
              calories: 200, 
              protein: 10, 
              carbs: 20, 
              fat: 8 
            }],
            totalCalories: 200,
            totalProtein: 10,
            totalCarbs: 20,
            totalFat: 8,
            preparationInstructions: "Quick and easy snack"
          }
        ],
        calories: 1900,
        recommendedWaterIntake: "2000 ml",
        nutritionalBalance: {
          protein: "25%",
          carbs: "50%",
          fat: "25%"
        },
        tags: ["balanced", user.dietaryPreference]
      };
      
      // Store the fallback meal plan
      const foodSuggestion = await db.foodsuggest.create({
        data: {
          dietaryPreferences: user.dietaryPreference,
          suggestion: defaultMealPlan.suggestion,
          meals: defaultMealPlan.meals,
          calories: defaultMealPlan.calories,
          recommendedWaterIntake: defaultMealPlan.recommendedWaterIntake,
          nutritionalBalance: defaultMealPlan.nutritionalBalance,
          tags: defaultMealPlan.tags,
          userId: userId,
          isGenerated: false // Flag this as a fallback plan
        },
      });
      
      console.log("Using fallback meal plan due to parsing error");
      return defaultMealPlan;
    }
  } catch (error) {
    console.error("Error generating meal plan:", error);
    throw new Error("Failed to generate meal suggestions");
  }
};

export async function getFoodSuggestions() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    // Simply generate new suggestions each time
    return await generateAI();
  } catch (error) {
    console.error("Error getting food suggestions:", error);
    throw new Error("Failed to get food suggestions: " + error.message);
  }
}