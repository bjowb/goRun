"use client";

import React, { useEffect, useState } from "react";
import { getFoodSuggestions } from "@/actions/dashboard";
import BarLoader from "react-spinners/BarLoader";

const Dashboard = () => {
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFoodSuggestions = async () => {
      try {
        const data = await getFoodSuggestions();
        setFoodData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading food suggestions:", err);
        setError(err.message || "Failed to load food suggestions");
        setLoading(false);
      }
    };

    loadFoodSuggestions();
  }, []);

  if (loading) {
    return <BarLoader className="mt-4" width={"100%"} color="gray" />;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 p-4 rounded-lg shadow-sm">
        <p className="text-red-600">Error: {error}</p>
        <p className="mt-2">Please complete your profile to get food suggestions.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-title">Daily Meal Plan</h2>
        <p className="text-gray-700">{foodData?.suggestion}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700">Total Calories</h3>
            <p className="text-2xl">{foodData?.calories} kcal</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-700">Water Intake</h3>
            <p className="text-2xl">{foodData?.recommendedWaterIntake}</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-700">Diet Type</h3>
            <p className="text-2xl">{foodData?.dietaryPreferences}</p>
          </div>
        </div>
      </div>

      {/* Nutritional Balance */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 gradient-title">Nutritional Balance</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[150px]">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500" 
                style={{ width: foodData?.nutritionalBalance?.protein || '0%' }}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-sm font-medium">Protein</span>
              <span className="text-sm">{foodData?.nutritionalBalance?.protein}</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-[150px]">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500" 
                style={{ width: foodData?.nutritionalBalance?.carbs || '0%' }}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-sm font-medium">Carbs</span>
              <span className="text-sm">{foodData?.nutritionalBalance?.carbs}</span>
            </div>
          </div>
          
          <div className="flex-1 min-w-[150px]">
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-yellow-500" 
                style={{ width: foodData?.nutritionalBalance?.fat || '0%' }}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-sm font-medium">Fat</span>
              <span className="text-sm">{foodData?.nutritionalBalance?.fat}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Meals Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold gradient-title">Meal Plan</h2>
        
        {foodData?.meals?.map((meal, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{meal.name}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm capitalize">
                  {meal.mealType}
                </span>
              </div>
              <p className="text-gray-500 mt-1">
                {meal.totalCalories} kcal · {meal.totalProtein}g protein · {meal.totalCarbs}g carbs · {meal.totalFat}g fat
              </p>
            </div>
            
            <div className="p-6">
              <h4 className="font-semibold mb-3">Food Items</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Food</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calories</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protein</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbs</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fat</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {meal.foodItems.map((item, i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.calories}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.protein}g</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.carbs}g</td>
                        <td className="px-6 py-4 whitespace-nowrap">{item.fat}g</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Preparation Instructions</h4>
                <p className="text-gray-700">{meal.preparationInstructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tags Section */}
      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {foodData?.tags?.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;