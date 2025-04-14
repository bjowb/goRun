export const dietaryPreferences = [
  "Vegetarian",
  "Vegan",
  "Keto",
  "Paleo",
  "Gluten-Free",
  "Low-Carb",
  "Mediterranean",
  "Pescatarian",
  "Balanced",
  "Custom",
];

export const activityLevels = [
  {
    id: "sedentary",
    label: "Sedentary (Little or no exercise)",
    multiplier: 1.2,
  },
  {
    id: "light",
    label: "Lightly Active (1-3 days/week)",
    multiplier: 1.375,
  },
  {
    id: "moderate",
    label: "Moderately Active (3-5 days/week)",
    multiplier: 1.55,
  },
  {
    id: "active",
    label: "Very Active (6-7 days/week)",
    multiplier: 1.725,
  },
  {
    id: "super",
    label: "Super Active (twice per day, physical job)",
    multiplier: 1.9,
  },
];

export const mealTypes = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Pre-Workout",
  "Post-Workout",
];

export const progressTags = [
  "Weight",
  "Body Fat %",
  "BMI",
  "Muscle Mass",
  "Water %",
  "Waist Circumference",
];

export const aiModelOptions = [
  "OpenAI GPT",
  "Custom GPT",
  "NutritionPro AI",
  "TFLite Meal AI",
];
