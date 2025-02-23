"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Reward } from "@/lib/rewards-data"

interface RewardCardProps {
  reward: Reward
  userPoints: number
  onRedeem: (reward: Reward) => void
}

export function RewardCard({ reward, userPoints, onRedeem }: RewardCardProps) {
  const canRedeem = userPoints >= reward.points

  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <img src={reward.image || "/placeholder.svg"} alt={reward.name} className="object-cover w-full h-full" />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
          {reward.points.toLocaleString()} pts
        </div>
      </div>
      <CardHeader>
        <CardTitle>{reward.name}</CardTitle>
        <CardDescription>{reward.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" onClick={() => onRedeem(reward)} disabled={!canRedeem}>
          {canRedeem ? "Redeem" : "Not Enough Points"}
        </Button>
      </CardFooter>
    </Card>
  )
}

