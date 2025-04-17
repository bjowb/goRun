import {
  getUserProfile,
  getMealSuggestions,
  getFoodLogStats,
} from "@/actions/dashboard";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpCircle,
  Award,
  Calendar,
  ChevronRight,
  Clipboard,
  Clock,
  CookingPot,
  InfoIcon,
  Leaf,
  Library,
  LineChart,
  ListTodo,
  PlusCircle,
  Utensils,
  Zap,
} from "lucide-react";
// import React, { useState, useEffect } from "react";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import { PlusCircle, Save, Trash2 } from "lucide-react";


// Loading component for Suspense

function DashboardLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Utensils className="h-8 w-8 animate-pulse text-primary" />
        <h3 className="text-xl font-semibold">
          Loading your nutrition dashboard...
        </h3>
      </div>
    </div>
  );
}

// User welcome section
function UserWelcome({ user }) {
  if (!user) return null;

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback>
            {user.name?.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back, {user.email.split("@")[0]}!
          </h1>
          <p className="text-muted-foreground">
            Let's plan your healthy meals for today
          </p>
        </div>
      </div>
      <Button className="gap-2">
        <PlusCircle className="h-4 w-4" />
        Log Food
      </Button>
    </div>
  );
}

// Nutrition summary component
function NutritionSummary({ stats }) {
  const { calories, protein, carbs, fat } = stats;

  // Assuming a 2000 calorie diet as default - this should ideally be calculated based on user profile
  const calorieGoal = 2000;
  const caloriePercentage = Math.min(
    Math.round((calories / calorieGoal) * 100),
    100
  );

  const macroTotal = protein + carbs + fat;
  const proteinPercentage =
    macroTotal > 0 ? Math.round((protein / macroTotal) * 100) : 0;
  const carbsPercentage =
    macroTotal > 0 ? Math.round((carbs / macroTotal) * 100) : 0;
  const fatPercentage =
    macroTotal > 0 ? Math.round((fat / macroTotal) * 100) : 0;

  return (
    <Card className="col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clipboard className="h-5 w-5 text-primary" />
          Today's Nutrition
        </CardTitle>
        <CardDescription>Your daily nutrition summary</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Calories</span>
            <span className="text-sm font-medium">
              {calories} / {calorieGoal} kcal
            </span>
          </div>
          <Progress value={caloriePercentage} className="h-2" />
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Protein</span>
              <span className="text-sm">
                {protein.toFixed(1)}g ({proteinPercentage}%)
              </span>
            </div>
            <Progress
              value={proteinPercentage}
              className="h-1.5 bg-blue-100"
              indicatorClassName="bg-blue-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Carbs</span>
              <span className="text-sm">
                {carbs.toFixed(1)}g ({carbsPercentage}%)
              </span>
            </div>
            <Progress
              value={carbsPercentage}
              className="h-1.5 bg-green-100"
              indicatorClassName="bg-green-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Fat</span>
              <span className="text-sm">
                {fat.toFixed(1)}g ({fatPercentage}%)
              </span>
            </div>
            <Progress
              value={fatPercentage}
              className="h-1.5 bg-yellow-100"
              indicatorClassName="bg-yellow-500"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}

// Meal plan component
function MealPlan({ mealSuggestion }) {
  if (!mealSuggestion || !mealSuggestion.meals) {
    return (
      <Card className="col-span-12 md:col-span-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CookingPot className="h-5 w-5 text-primary" />
            Meal Plan
          </CardTitle>
          <CardDescription>
            Complete your profile to get meal suggestions
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-10">
          <div className="text-center">
            <Utensils className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No meal plan available</h3>
            <p className="text-muted-foreground max-w-md">
              Update your profile with your dietary preferences and physical
              details to get personalized meal suggestions.
            </p>
            <Button className="mt-4">Complete Profile</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Sort meals by type in a specific order: breakfast, lunch, dinner, snacks
  const mealTypeOrder = { breakfast: 1, lunch: 2, dinner: 3, snack: 4 };
  const sortedMeals = [...mealSuggestion.meals].sort((a, b) => {
    return (
      mealTypeOrder[a.mealType.toLowerCase()] -
      mealTypeOrder[b.mealType.toLowerCase()]
    );
  });

  return (
    <Card className="col-span-12 md:col-span-8">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              <CookingPot className="h-5 w-5 text-primary" />
              Today's Meal Plan
            </CardTitle>
            <CardDescription>{mealSuggestion.suggestion}</CardDescription>
          </div>
          <Badge className="bg-primary">{mealSuggestion.calories} kcal</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedMeals.map((meal, index) => (
            <div key={index} className="rounded-lg border bg-card p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      meal.mealType.toLowerCase() === "breakfast"
                        ? "default"
                        : meal.mealType.toLowerCase() === "lunch"
                        ? "secondary"
                        : meal.mealType.toLowerCase() === "dinner"
                        ? "destructive"
                        : "outline"
                    }
                    className="capitalize"
                  >
                    {meal.mealType}
                  </Badge>
                  <h3 className="font-medium">{meal.name}</h3>
                </div>
                <span className="text-sm">{meal.totalCalories} kcal</span>
              </div>

              <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground mb-2">
                {meal.foodItems.slice(0, 3).map((item, idx) => (
                  <li key={idx}>
                    {item.name} - {item.quantity} ({item.calories} kcal)
                  </li>
                ))}
                {meal.foodItems.length > 3 && (
                  <li>+{meal.foodItems.length - 3} more items</li>
                )}
              </ul>

              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Macros: </span>
                <span>P: {meal.totalProtein.toFixed(1)}g</span> •
                <span> C: {meal.totalCarbs.toFixed(1)}g</span> •
                <span> F: {meal.totalFat.toFixed(1)}g</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <InfoIcon className="h-4 w-4" />
          <span>Meal suggestions are updated daily</span>
        </div>
        <Button size="sm">Log Meals</Button>
      </CardFooter>
    </Card>
  );
}

// User stats component
function UserStats({ user }) {
  if (!user) return null;

  // Generate BMI if height and weight are available
  let bmi = null;
  let bmiCategory = null;

  if (user.height && user.weight) {
    const heightInMeters = user.height / 100;
    bmi = user.weight / (heightInMeters * heightInMeters);

    if (bmi < 18.5)
      bmiCategory = { label: "Underweight", color: "text-blue-500" };
    else if (bmi < 25)
      bmiCategory = { label: "Normal", color: "text-green-500" };
    else if (bmi < 30)
      bmiCategory = { label: "Overweight", color: "text-yellow-500" };
    else bmiCategory = { label: "Obese", color: "text-red-500" };
  }

  return (
    <Card className="col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Your Profile
        </CardTitle>
        <CardDescription>Personal metrics and stats</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Profile Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Age</p>
            <p className="font-medium">{user.age || "N/A"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Height</p>
            <p className="font-medium">
              {user.height ? `${user.height} cm` : "N/A"}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Weight</p>
            <p className="font-medium">
              {user.weight ? `${user.weight} kg` : "N/A"}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Activity</p>
            <p className="font-medium">{user.activityLevel || "N/A"}</p>
          </div>
        </div>

        <Separator />

        {/* BMI */}
        {bmi && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">BMI</p>
              <p className={`text-sm font-medium ${bmiCategory.color}`}>
                {bmiCategory.label}
              </p>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  bmi < 18.5
                    ? "bg-blue-500"
                    : bmi < 25
                    ? "bg-green-500"
                    : bmi < 30
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${Math.min((bmi / 40) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              {bmi.toFixed(1)}
            </p>
          </div>
        )}

        {/* Dietary Preference */}
        <div className="flex items-center gap-2">
          <Leaf className="h-4 w-4 text-green-500" />
          <p className="text-sm">
            <span className="text-muted-foreground">Diet: </span>
            <span className="font-medium">
              {user.dietaryPreference || "Not specified"}
            </span>
          </p>
        </div>

        {/* Member since */}
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <p className="text-sm">
            <span className="text-muted-foreground">Member since: </span>
            <span className="font-medium">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Update Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

function CalorieLogger() {
  return (
    <Card className="col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlusCircle className="h-5 w-5 text-primary" />
          Log Calories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Food Item</label>
            <input
              type="text"
              placeholder="What did you eat?"
              className="w-full mt-1 px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Calories</label>
            <input
              type="number"
              placeholder="kcal"
              className="w-full mt-1 px-3 py-2 border rounded-md"
            />
          </div>
          <Button className="w-full">Add to Log</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Recent food logs component
function RecentFoodLogs({ foodLogs }) {
  if (!foodLogs || foodLogs.length === 0) {
    return (
      <Card className="col-span-12 md:col-span-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ListTodo className="h-5 w-5 text-primary" />
            Recent Food Logs
          </CardTitle>
          <CardDescription>Your recently logged food items</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-10">
          <div className="text-center">
            <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No recent food logs</h3>
            <p className="text-muted-foreground max-w-md">
              Start tracking your meals to see your food logs here.
            </p>
            <Button className="mt-4">Log Your First Meal</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-12 md:col-span-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListTodo className="h-5 w-5 text-primary" />
          Recent Food Logs
        </CardTitle>
        <CardDescription>Your recently logged food items</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {foodLogs.slice(0, 5).map((log, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Utensils className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{log.foodItem.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(log.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    •{log.mealType}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {log.foodItem.calories * log.quantity} kcal
                </p>
                <p className="text-xs text-muted-foreground">
                  {log.quantity} serving(s)
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button
          variant="outline"
          size="sm"
          className="w-full flex items-center gap-2"
        >
          View All Logs
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

// Progress chart component
function ProgressChart({ progressRecords }) {
  const hasRecords = progressRecords && progressRecords.length >= 2;

  return (
    <Card className="col-span-12 md:col-span-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LineChart className="h-5 w-5 text-primary" />
          Weight Progress
        </CardTitle>
        <CardDescription>Track your weight changes over time</CardDescription>
      </CardHeader>
      <CardContent>
        {!hasRecords ? (
          <div className="flex items-center justify-center py-10">
            <div className="text-center">
              <ArrowUpCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No progress data yet</h3>
              <p className="text-muted-foreground max-w-md">
                Log your weight regularly to see your progress chart here.
              </p>
              <Button className="mt-4">Log Weight</Button>
            </div>
          </div>
        ) : (
          <div className="h-[200px] flex items-end justify-between">
            {progressRecords.map((record, index) => {
              // Simple bar chart for now - in a real app, you'd use a proper charting library
              const heightPercentage = 30 + index * 10; // Just for demo
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 bg-primary/20 rounded-t-md relative overflow-hidden"
                    style={{ height: `${heightPercentage}%` }}
                  >
                    <div
                      className="absolute bottom-0 w-full bg-primary"
                      style={{ height: `${heightPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(record.loggedAt).toLocaleDateString([], {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button variant="outline" size="sm" className="w-full">
          Log New Weight
        </Button>
      </CardFooter>
    </Card>
  );
}

// Quick actions component
function QuickActions() {
  const actions = [
    {
      icon: <PlusCircle className="h-5 w-5" />,
      label: "Log Food",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Utensils className="h-5 w-5" />,
      label: "Meal Plan",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      label: "Track Weight",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Library className="h-5 w-5" />,
      label: "Recipes",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="col-span-12 flex gap-4 overflow-x-auto pb-2">
      {actions.map((action, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-xl border
          hover:border-primary hover:bg-primary/5 cursor-pointer transition-all"
        >
          <div className={`rounded-full p-3 ${action.color}`}>
            {action.icon}
          </div>
          <span className="text-sm font-medium">{action.label}</span>
        </div>
      ))}
    </div>
  );
}

// Main Dashboard Component
async function DashboardPage() {
  let user = null;
  let mealSuggestion = null;
  let foodStats = null;

  try {
    // Get user profile data
    user = await getUserProfile();

    // Check if user has completed onboarding
    const requiredFields = [
      "dietaryPreference",
      "age",
      "weight",
      "height",
      "gender",
      "activityLevel",
    ];
    const missingFields = requiredFields.filter((field) => !user[field]);

    if (missingFields.length > 0) {
      // In a real app, you might redirect to onboarding
      // return redirect("/onboarding");
    }

    // Get meal suggestions and food stats
    const mealSuggestionsResult = await getMealSuggestions();
    mealSuggestion = mealSuggestionsResult.mealSuggestion;

    foodStats = await getFoodLogStats();
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    // Handle errors gracefully
  }

  return (
    <div className="container py-8">
      {/* User welcome section */}
      <UserWelcome user={user} />

      {/* Quick Actions */}
      <QuickActions />

      {/* Dashboard tabs */}
      <Tabs defaultValue="overview" className="mt-6">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="meals">Meal Plan</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Main dashboard grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Nutrition summary card */}
            <NutritionSummary
              stats={foodStats || { calories: 500, protein: 30, carbs: 200, fat: 10 }}
            />
            {/* Manual Calorie Logger */}
            <CalorieLogger />

            {/* Meal plan card */}
            <MealPlan mealSuggestion={mealSuggestion} />

            {/* User stats card */}
            <UserStats user={user} />

            {/* Recent food logs */}
            <RecentFoodLogs foodLogs={user?.foodLogs} />

            {/* Progress chart */}
            <ProgressChart progressRecords={user?.progressRecords} />
          </div>
        </TabsContent>

        <TabsContent value="meals">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Meal Planning</h2>
            <p className="text-muted-foreground">
              Your personalized meal plans and recipes will appear here.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Generate a Custom Meal Plan</CardTitle>
                <CardDescription>
                  Get personalized meal suggestions based on your preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-10">
                  <div className="text-center">
                    <CookingPot className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Meal Planning</h3>
                    <p className="text-muted-foreground max-w-md">
                      This section is under development. More features coming
                      soon!
                    </p>
                    <Button className="mt-4">Generate Meal Plan</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Progress</h2>
            <p className="text-muted-foreground">
              Track your fitness and nutrition journey over time.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Your weight, measurements, and other metrics over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-10">
                  <div className="text-center">
                    <LineChart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      Track Your Progress
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      This section is under development. More features coming
                      soon!
                    </p>
                    <Button className="mt-4">Log New Measurement</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Profile Settings</h2>
            <p className="text-muted-foreground">
              Update your profile and preferences.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>User Settings</CardTitle>
                <CardDescription>
                  Manage your account and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center py-10">
                  <div className="text-center">
                    <InfoIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      Profile Settings
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      This section is under development. More features coming
                      soon!
                    </p>
                    <Button className="mt-4">Edit Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Wrap with Suspense for loading state
export default function DashboardPageWrapper() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardPage />
    </Suspense>
  );
}
