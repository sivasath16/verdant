"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Plane, Car } from "lucide-react"

interface TransportCardProps {
  mode: "flight" | "car"
  onClick: () => void
}

export function TransportCard({ mode, onClick }: TransportCardProps) {
  return (
    <Card className="group w-[300px] cursor-pointer transition-all hover:shadow-lg" onClick={onClick}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
            {mode === "flight" ? <Plane className="h-8 w-8 text-primary" /> : <Car className="h-8 w-8 text-primary" />}
          </div>
          <h3 className="font-semibold text-xl">{mode === "flight" ? "Flight Route" : "Car Journey"}</h3>
          <p className="text-sm text-muted-foreground text-center">
            {mode === "flight"
              ? "Compare flight options and their environmental impact"
              : "Calculate driving emissions and route details"}
          </p>
          <div className="w-full h-[150px] rounded-lg overflow-hidden">
            <img
              src={
                mode === "flight"
                  ? "https://surffares.com/travelguru/wp-content/uploads/2022/05/1595972233_1594320268_shutterstock_699697081.jpg"
                  : "https://mclaren.scene7.com/is/image/mclaren/07_GT_Front_34_Dynamic-1:crop-16x9?wid=1920&hei=1080"
              }
              alt={mode === "flight" ? "Flight" : "Car"}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

