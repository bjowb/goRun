// utils/howItWorks.js
import { Salad, Calculator, Dumbbell, BarChart4 } from "lucide-react";

export const howItWorks = [
  {
    title: "Set Up Your Profile",
    description: "Enter your age, weight, height, and goals to personalize your experience",
    icon: <Salad className="h-8 w-8 text-primary" />,
  },
  {
    title: "Calculate Your Calories",
    description: "Get your daily calorie needs using accurate nutritional formulas",
    icon: <Calculator className="h-8 w-8 text-primary" />,
  },
  {
    title: "Log Your Meals",
    description: "Track what you eat and see how it affects your daily intake",
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
  },
  {
    title: "Track Progress",
    description: "Visualize your progress with charts and performance analytics",
    icon: <BarChart4 className="h-8 w-8 text-primary" />,
  },
];
