"use server";

import { db } from "@/lib/inngest/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) throw new Error("User not found");

  try {
    // ✅ Step 1: Check if any food item with that category exists
    const existingCategoryFood = await db.foodItem.findFirst({
      where: {
        category: data.dietaryPreference,
      },
    });

    // ✅ Step 2: If not, insert a placeholder food item
    if (!existingCategoryFood) {
      await db.foodItem.create({
        data: {
          name: `Placeholder for ${data.dietaryPreference}`,
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          category: data.dietaryPreference,
          isCustom: true,
        },
      });
    }

    // ✅ Step 3: Update the user
    const updatedUser = await db.user.update({
      where: { id: user.id },
      data: {
        name: data.name || user.name,
        age: data.age || user.age,
        height: data.height || user.height,
        weight: data.weight || user.weight,
        gender: data.gender || user.gender,
        activityLevel: data.activityLevel || user.activityLevel,
        dietaryPreference: data.dietaryPreference || user.dietaryPreference,
      },
    });

    revalidatePath("/");
    return updatedUser;
  } catch (error) {
    console.error("Error updating user and category:", error.message);
    throw new Error("Failed to update user profile");
  }
}


export async function getUserOnboardingStatus(){
  let category = await db.foodCategory.findUnique({
    where: {
      name: data.dietaryPreference,
    },
  });

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select:{
        dietaryPreference: true,
      }
    });

    return {
      isOnboarded: !!user?.industry,
    };

  } catch (error) {
    console.error("Error fetching user onboarding status:", error.message);
    throw new Error("Failed to fetch user onboarding status");
    
  }

}
