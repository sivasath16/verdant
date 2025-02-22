import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to Verdant</h1>
      <p className="text-xl text-muted-foreground">Track and reduce your carbon footprint</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Carbon Footprint Overview</CardTitle>
            <CardDescription>Your current carbon footprint status</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={33} className="mb-2" />
            <p>Youre doing great! 33% lower than average.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest tracked activities</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Cycled to work - Saved 2kg CO2</li>
              <li>Used reusable shopping bags - Saved 0.1kg CO2</li>
              <li>Ate a vegetarian meal - Saved 1.5kg CO2</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tips for Improvement</CardTitle>
            <CardDescription>Ways to reduce your carbon footprint</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Use public transportation more often</li>
              <li>Reduce meat consumption</li>
              <li>Switch to energy-efficient appliances</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

