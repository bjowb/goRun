import { db } from "@/lib/inngest/prisma";
import { auth } from "@clerk/nextjs/server";

// ✅ Update user profile during onboarding
export async function updateUser(data) {
  const { userId } = await auth(); // properly extract userId
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  try {
    const result = await db.$transaction(
      async (tx) => {
        const updatedUser = await tx.user.update({
          where: {
            clerkUserId: userId,
          },
          data: {
            age: data.age ?? user.age ?? 18,
            height: data.height ?? user.height ?? 170,
            weight: data.weight ?? user.weight ?? 65,
            gender: data.gender ?? user.gender ?? "other",
            displayName: data.displayName ?? user.displayName,
            imageUrl: data.imageUrl ?? user.imageUrl,
            email: data.email ?? user.email,
          },
        });

        return { user: updatedUser };
      },
      {
        timeout: 10000,
      }
    );

    return result.user;
  } catch (error) {
    console.error("Error updating user", error.message);
    throw new Error("Error updating user");
  }
}

// ✅ Get onboarding status
export async function gettingUserOnboardingStatus() {
  const { userId } = auth(); // must extract `userId` like this
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      meals: true, // or profile or anything you use to define onboarding completion
    },
  });

  return {
    isOnboarded: user?.meals?.length > 0, // or whatever logic you use
  };
}
