import { z } from "zod";
import { dietaryPreferences, activityLevels } from "@/app/data/food";

export const onboardingSchema = z.object({
  age: z
    .number()
    .int("Age must be a whole number")
    .min(13, "Minimum age is 13")
    .max(120, "Maximum age is 120"),
  weight: z
    .number()
    .positive("Weight must be positive")
    .max(500, "Maximum weight is 500 kg"),
  height: z
    .number()
    .positive("Height must be positive")
    .max(250, "Maximum height is 250 cm"),
  gender: z.enum(["male", "female", "other"]).optional(),
  activityLevel: z.enum(activityLevels.map((level) => level.id), {
    required_error: "Activity level is required",
  }),
  dietaryPreference: z.enum(dietaryPreferences, {
    required_error: "Dietary preference is required",
    invalid_type_error: "Invalid dietary preference",
  }),
}).refine((data) => {
  // Additional validation for BMI sanity check
  if (data.height && data.weight) {
    const bmi = data.weight / ((data.height / 100) ** 2);
    return bmi >= 10 && bmi <= 50;
  }
  return true;
}, {
  message: "BMI calculated from weight/height appears unrealistic",
  path: ["weight"],
});
