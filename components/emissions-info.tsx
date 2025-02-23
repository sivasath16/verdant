"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type EmissionsData = {
  flight: number
  car: number
}

export function EmissionsInfo({ fromCity, toCity }: { fromCity: string; toCity: string }) {
  const [emissions, setEmissions] = useState<EmissionsData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (fromCity && toCity) {
      setLoading(true)
      // This is a mock API call. In a real application, you would fetch this data from your backend.
      fetch(`/api/emissions?from=${fromCity}&to=${toCity}`)
        .then((res) => res.json())
        .then((data: EmissionsData) => {
          setEmissions(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Failed to fetch emissions data:", err)
          setLoading(false)
        })
    }
  }, [fromCity, toCity])

  if (!fromCity || !toCity) {
    return null
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Emissions Information</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading emissions data...</p>
        ) : emissions ? (
          <div className="space-y-4">
            <p className="text-lg">
              Trip: <span className="font-semibold">{fromCity}</span> to <span className="font-semibold">{toCity}</span>
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Flight</h3>
                <p>{emissions.flight.toFixed(2)} kg CO2e</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Car</h3>
                <p>{emissions.car.toFixed(2)} kg CO2e</p>
              </div>
            </div>
          </div>
        ) : (
          <p>No emissions data available.</p>
        )}
      </CardContent>
    </Card>
  )
}

