"use client"
import { useUser } from "@clerk/nextjs"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import SheetDemo from "../components/SideSheets"
import Lottie from "lottie-react"
import JoinCommunity from "@/public/lottie-files/Join challenge.json"
import Walking from "@/public/lottie-files/Walking.json"
import Inital_load from "@/public/lottie-files/Inital_load.json"
import Invite from "@/public/lottie-files/Invite.json"
import Viral from "@/public/lottie-files/Viral.json"
import Graph from "@/public/lottie-files/Grpah.json"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, Trophy, Users } from "lucide-react"

export default function BentoGridDemo() {
  const { user } = useUser()
  const firstName = user?.firstName || "there"

  return (
    <>
      <div className="mb-4 max-w-4xl mx-auto pt-12">
        <h1 className="text-4xl font-bold mb-4 mx-auto">👋 Hello, {firstName}!</h1>
      </div>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative mx-auto group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-auto h-auto rounded-xl p-6 border mb-4">
          <CardItem translateZ="50" className="text-2xl font-bold text-neutral-600 dark:text-white">
            Your Carbon Footprint
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Greenhouse gas emissions from your daily activities.
          </CardItem>
          <CardItem>
            <div className="flex flex-col justify-center relative items-center">
              <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
                17.34 kg CO2
              </div>
              <Lottie animationData={Inital_load} className="w-[475px] mx-auto" loop />
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>

      <SheetDemo />

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      {/* New Achievements and Challenges Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Active Challenges */}
          <div className="bg-card rounded-xl border p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Active Challenges</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">30 Days Green Commute</h3>
                    <p className="text-sm text-muted-foreground">23 days remaining</p>
                  </div>
                  <Badge variant="secondary">1500 pts</Badge>
                </div>
                <Progress value={33} className="mt-2" />
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Zero Waste Week</h3>
                    <p className="text-sm text-muted-foreground">5 days remaining</p>
                  </div>
                  <Badge variant="secondary">1000 pts</Badge>
                </div>
                <Progress value={65} className="mt-2" />
              </div>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-card rounded-xl border p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Recent Achievements</h2>
              <Trophy className="h-5 w-5 text-yellow-500" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Community Champion</h3>
                  <p className="text-sm text-muted-foreground">Invited 5 friends to join</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">15 Day Streak</h3>
                  <p className="text-sm text-muted-foreground">Consistent green choices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-card rounded-xl border p-6 mb-32">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Upcoming Community Events</h2>
            <Button variant="outline" size="sm">
              See All Events
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Beach Cleanup Drive",
                date: "March 15",
                participants: 45,
                points: 500,
              },
              {
                title: "Sustainable Living Workshop",
                date: "March 20",
                participants: 30,
                points: 300,
              },
              {
                title: "Tree Planting Day",
                date: "March 25",
                participants: 60,
                points: 750,
              },
            ].map((event, index) => (
              <div key={index} className="bg-muted/50 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold">{event.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{event.date}</span>
                  <span>{event.participants} joined</span>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">{event.points} pts</Badge>
                  <Button size="sm">Join</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const items = [
  {
    title: "🌍 Trending Now",
    description: "Discover the latest eco-friendly trends and insights. Stay ahead in your sustainability journey!",
    header: (
      <Lottie
        animationData={Viral}
        className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        loop
      />
    ),
  },
  {
    title: "🚶 Step Count & Carbon Impact",
    description: "Walk more, emit less! Track your steps and see how they contribute to a greener planet.",
    header: (
      <Lottie
        animationData={Walking}
        className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        loop
      />
    ),
  },
  {
    title: "🏆 Join Challenges",
    description: "Compete, learn, and reduce! Take on exciting sustainability challenges and make a real impact",
    header: (
      <Lottie
        animationData={JoinCommunity}
        className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        loop
      />
    ),
  },
  {
    title: "📊 Carbon Emission Tracker",
    description: "Visualize your carbon footprint in real-time. Set goals and reduce your emissions effortlessly!",
    header: (
      <Lottie
        animationData={Graph}
        className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        loop
      />
    ),
  },
  {
    title: "📢 Invite & Inspire",
    description: "Sustainability is better together! Invite friends and grow a community that cares for the planet.",
    header: (
      <Lottie
        animationData={Invite}
        className="w-[150px] h-[150px] mx-auto flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
        loop
      />
    ),
  },
]

