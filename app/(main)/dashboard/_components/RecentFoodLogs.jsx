import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function RecentFoodLogs({ foodLogs }) {
  return (
    <Card className="col-span-12 md:col-span-8">
      <CardHeader>
        <CardTitle>Recent Food Logs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {foodLogs.length > 0 ? (
          <ul className="space-y-1">
            {foodLogs.map((log, idx) => (
              <li key={idx} className="flex justify-between text-sm">
                <span>{log.foodItem?.name}</span>
                <span>{log.foodItem?.calories} kcal</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No logs yet.</p>
        )}
      </CardContent>
    </Card>
  );
}
