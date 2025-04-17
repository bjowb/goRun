"use client"; // Add this at the top

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addFoodLog } from "@/actions/dashboard";

function CalorieLogger() {
  const [foodItem, setFoodItem] = useState("");
  const [calories, setCalories] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!foodItem || !calories) return;
    
    await addFoodLog({
      foodItem,
      calories: Number(calories),
    });
    
    // Clear form fields
    setFoodItem("");
    setCalories("");
    
    // Refresh server components
    router.refresh();
  };

  return (
    <Card className="col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlusCircle className="h-5 w-5 text-primary" />
          Log Calories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Food Item</label>
            <input
              type="text"
              placeholder="What did you eat?"
              className="w-full mt-1 px-3 py-2 border rounded-md"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Calories</label>
            <input
              type="number"
              placeholder="kcal"
              className="w-full mt-1 px-3 py-2 border rounded-md"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Add to Log
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}