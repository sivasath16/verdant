"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { GrGrow } from "react-icons/gr"
import { FaFire } from "react-icons/fa"
import Lottie from "lottie-react"
import Rewards from "@/public/lottie-files/Rewards.json"
import Streak from "@/public/lottie-files/Streak.json"
import Wallet from "@/public/lottie-files/Wallet.json"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { GiDiamondTrophy } from "react-icons/gi"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SheetDemo() {
  return (
    <div className="flex gap-5 absolute top-5 right-5">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full" variant="outline">
            <GiDiamondTrophy />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4">
          <SheetHeader className="text-center">
            <SheetTitle className="text-2xl">Rewards Status</SheetTitle>
            <SheetDescription>Track your achievements and rewards</SheetDescription>
          </SheetHeader>
          <Lottie animationData={Rewards} className="w-[200px] mx-auto" loop />

          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Current Points</CardTitle>
                <CardDescription>Available to redeem</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">30,000</p>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <h4 className="font-medium">Recent Achievements</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>First Green Flight Booked</span>
                  <span className="text-primary">+5,000 pts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sustainable Travel Champion</span>
                  <span className="text-primary">+3,000 pts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Carbon Footprint Reducer</span>
                  <span className="text-primary">+2,000 pts</span>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full" variant="outline">
            <GrGrow />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4">
          <SheetHeader className="text-center">
            <SheetTitle className="text-2xl">Green Wallet</SheetTitle>
            <SheetDescription>Your sustainable travel savings</SheetDescription>
          </SheetHeader>
          <Lottie animationData={Wallet} className="w-[200px] mx-auto" loop />

          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Carbon Credits</CardTitle>
                <CardDescription>Total savings this year</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-green-600">2.5 tons CO₂</p>
                <Progress value={66} className="mt-2" />
                <p className="text-sm text-muted-foreground mt-1">66% of yearly goal</p>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <h4 className="font-medium">Savings Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Flight Optimizations</span>
                  <span className="text-green-600">1.2 tons CO₂</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Green Transport Choices</span>
                  <span className="text-green-600">0.8 tons CO₂</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Carbon Offset Contributions</span>
                  <span className="text-green-600">0.5 tons CO₂</span>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full" variant="outline">
            <FaFire />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-4">
          <SheetHeader className="text-center">
            <SheetTitle className="text-2xl">Green Streak</SheetTitle>
            <SheetDescription>Your sustainable travel journey</SheetDescription>
          </SheetHeader>
          <Lottie animationData={Streak} className="w-[200px] mx-auto" loop />

          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Current Streak</CardTitle>
                <CardDescription>Consecutive green choices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-orange-500">15</p>
                  <p className="text-muted-foreground">days</p>
                </div>
                <Progress value={75} className="mt-2" />
                <p className="text-sm text-muted-foreground mt-1">Next milestone: 20 days</p>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <h4 className="font-medium">Streak History</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Longest Streak</span>
                  <span className="text-orange-500">28 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Green Trips</span>
                  <span className="text-orange-500">42 trips</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monthly Rank</span>
                  <span className="text-orange-500">Top 5%</span>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

