import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NutritionSummary({ stats }) {
  const { calories, protein, carbs, fat } = stats || {};

  return (
    <Card className="col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle>Nutrition Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>Calories: {calories ?? 0} kcal</div>
        <div>Protein: {protein ?? 0} g</div>
        <div>Carbs: {carbs ?? 0} g</div>
        <div>Fat: {fat ?? 0} g</div>
      </CardContent>
    </Card>
  );
}
