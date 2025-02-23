"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cities } from "@/lib/cities"
import { calculateDistance, calculateFlightEmissions, calculateCarEmissions } from "@/lib/utils"
import { Loader2, Plane, Car } from "lucide-react"
import { useEffect, useState } from "react"

interface EmissionsModalProps {
  isOpen: boolean
  onClose: () => void
  fromCity: string
  toCity: string
  mode: "flight" | "car"
}

interface Route {
  distance: number
  emissions: number
  duration: number
  price: number
}

export function EmissionsModal({ isOpen, onClose, fromCity, toCity, mode }: EmissionsModalProps) {
  const [loading, setLoading] = useState(true)
  const [routes, setRoutes] = useState<Route[]>([])

  useEffect(() => {
    if (isOpen) {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        const from = cities.find((city) => `${city.name}, ${city.state}` === fromCity)
        const to = cities.find((city) => `${city.name}, ${city.state}` === toCity)

        if (from && to) {
          const distance = calculateDistance(from.lat, from.lng, to.lat, to.lng)

          if (mode === "flight") {
            // Generate 3 flight options with varying durations and prices
            setRoutes([
              {
                distance,
                emissions: calculateFlightEmissions(distance),
                duration: (distance / 500) * 60, // Rough estimate of flight time
                price: distance * 0.18 + 80,
              },
              {
                distance,
                emissions: calculateFlightEmissions(distance) + 7, // Slightly higher emissions with layover
                duration: (distance / 500) * 60 + 45, // Longer duration with layover
                price: distance * 0.12 + 60, // Cheaper price
              },
              {
                distance,
                emissions: calculateFlightEmissions(distance) + 15,
                duration: (distance / 500) * 60 + 90, // Longest duration
                price: distance * 0.1 + 45, // Cheapest price
              },
            ])
          } else {
            // Car route
            setRoutes([
              {
                distance: distance,
                emissions: calculateCarEmissions(distance),
                duration: (distance / 60) * 60, // Assuming average speed of 60mph
                price: distance * 0.25 + 20, // Rough gas cost estimate
              },
              {
                distance: distance + 10, // Slightly longer distance with detour
                emissions: calculateCarEmissions(distance),
                duration: (distance / 80) * 60, // Assuming average speed of 60mph
                price: distance * 0.25 + 10, // Rough gas cost estimate
              },
              {
                distance: distance + 50,
                emissions: calculateCarEmissions(distance),
                duration: (distance / 90) * 60, // Assuming average speed of 60mph
                price: distance * 0.25, // Rough gas cost estimate
              },
            ])
          }
        }
        setLoading(false)
      }, 1500)
    }
  }, [isOpen, fromCity, toCity, mode])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "flight" ? "Flight Options" : "Driving Route"} - {fromCity} to {toCity}
          </DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="space-y-4">
            {routes.map((route, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  {mode === "flight" ? <Plane className="h-6 w-6" /> : <Car className="h-6 w-6" />}
                  <div>
                    <p className="font-medium">{Math.round(route.duration)} minutes</p>
                    <p className="text-sm text-muted-foreground">{Math.round(route.distance)} miles</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${Math.round(route.price)}</p>
                  <p className="text-sm text-muted-foreground">{route.emissions.toFixed(2)} kg CO2e</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

