"use client"

import { useState } from "react"
import { PointsDisplay } from "@/components/points-display"
import { RewardCard } from "@/components/reward-card"
import { RedeemModal } from "@/components/redeem-modal"
import { rewards, type Reward } from "@/lib/rewards-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RewardsPage() {
  const [userPoints, setUserPoints] = useState(30000) // Initial points
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null)
  const [showModal, setShowModal] = useState(false)

  const categories = Array.from(new Set(rewards.map((reward) => reward.category)))

  const handleRedeem = (reward: Reward) => {
    setSelectedReward(reward)
    setShowModal(true)
    // Deduct points after successful redemption
    setUserPoints((prev) => prev - reward.points)
  }

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Rewards Center</h1>

      <PointsDisplay points={userPoints} />

      <Tabs defaultValue={categories[0]} className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rewards
                .filter((reward) => reward.category === category)
                .map((reward) => (
                  <RewardCard key={reward.id} reward={reward} userPoints={userPoints} onRedeem={handleRedeem} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <RedeemModal isOpen={showModal} onClose={() => setShowModal(false)} reward={selectedReward} />
    </div>
  )
}

