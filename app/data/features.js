import { AppleIcon, CalculatorIcon, ForkKnifeCrossedIcon, GitGraphIcon } from "lucide-react";

export const features = [
    // {
    //   title: "Manage User Profile",
    //   description: "Create and manage your personal health profile including weight, age, and dietary preferences.",
    //   icon: "📝",
    //   path: "/profile"
    // },
    {
      title: "Calculate Calorie Needs",
      description: "Get personalized calorie recommendations based on your profile and fitness goals.",
      icon: <CalculatorIcon />,
      path: "/calorie-calculator"
    },
    {
      title: "Log Food Intake",
      description: "Easily log what you eat and monitor your nutritional intake daily.",
      icon: <ForkKnifeCrossedIcon />,
      path: "/food-log"
    },
    {
      title: "Suggest Meals",
      description: "Receive AI-powered healthy meal suggestions tailored to your preferences and goals.",
      icon: <AppleIcon />,
      path: "/meal-suggestions"
    },
    {
      title: "Track Progress",
      description: "Track your weight and calorie trends over time with progress charts.",
      icon: <GitGraphIcon></GitGraphIcon>,
      path: "/progress"
    },
    // {
    //   title: "Food Database",
    //   description: "Access a vast database of foods with detailed nutritional info.",
    //   icon: "🍱",
    //   path: "/food-database"
    // },
    // {
    //   title: "Calorie Info API",
    //   description: "Seamlessly integrated API to fetch calorie data for foods in real time.",
    //   icon: "🔗",
    //   path: "/api"
    // }
  ];
  
  export default features;
  