"use client"

import { useState } from "react"
import { TextRevealCard } from "@/components/ui/text-reveal-card"
import { CityCombobox } from "@/components/city-combobox"
import { EmissionsModal } from "@/components/emissions-modal"
import { TransportCard } from "@/components/transport-card"

export default function TravelPage() {
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [travelMode, setTravelMode] = useState<"flight" | "car">("flight")

  const handleTransportClick = (mode: "flight" | "car") => {
    if (!fromCity || !toCity) {
      alert("Please select both cities first")
      return
    }
    setTravelMode(mode)
    setModalOpen(true)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-12 p-6">
      <div className="flex items-center justify-center rounded-2xl w-full">
        <TextRevealCard text="Select your sustainable travel itinerary." revealText="And support a greater cause." />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
        <CityCombobox value={fromCity} onChange={setFromCity} placeholder="From" />
        <CityCombobox value={toCity} onChange={setToCity} placeholder="To" />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <TransportCard mode="flight" onClick={() => handleTransportClick("flight")} />
        <TransportCard mode="car" onClick={() => handleTransportClick("car")} />
      </div>

      <EmissionsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        fromCity={fromCity}
        toCity={toCity}
        mode={travelMode}
      />
    </div>
  )
}

