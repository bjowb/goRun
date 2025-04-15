"use server";

import { dietaryPreferences } from "@/app/data/food";
import { db } from "@/lib/inngest/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { processEnv } from "inngest/helpers/env";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-turbo",
});

export const generateAI = async (dietaryPreferences) => {
    const prompt  = `
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

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();


  const cleanText = text.replace(/'''(?:json)?\n?/g, "").trim();
  return JSON.parse(cleanText);
};

export async function FoodSugestions() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  if (!user.dietaryPreference) {
    const suggestions = await generateAI(user.dietaryPreference);
    const foodsuggest = await db.foodsuggest.create({
      data: {
        dietaryPreferences: user.dietaryPreference,
        ...suggestions,
        // nextUpdate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) // 7 days from now
      },
    });
    return foodsuggest;
  }
  return user.dietaryPreference;
}
