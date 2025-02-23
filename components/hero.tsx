import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import Globe from "./globe"
import { TracingBeam } from "./tracing-beam"
import {AnimatedTooltip} from "@/components/ui/animated-tooltip"

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function Hero() {
  return (
    <TracingBeam className="py-10">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-start space-y-6 lg:w-1/2">
          <div className="inline-flex items-center rounded-full border border-black-600/30 bg-black px-3 py-1 text-sm backdrop-blur-xl">
            <Leaf className="mr-2 h-4 w-4 text-white" />
            <span className="text-white">Join the green revolution</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
            Track & Offset
            <br />
            <span className="text-green-600 dark:text-green-500">Your Carbon</span>
            <br />
            Footprint
          </h1>

          <p className="text-lg text-muted-foreground">
            Join thousands making a difference. Track your emissions, earn eco-points, and contribute to a sustainable
            future.
          </p>

          <div className="flex gap-4">
            <Button size="lg">
              <a href="/home"> Start Your Journey</a>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-12">
              <AnimatedTooltip items={people} />
            </div>
            <div className="ml-4">
              Join <span className="text-green-600 dark:text-green-500 font-semibold">2,163</span> others tracking their
              impact
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-3xl" />
          <Globe />
        </div>
      </div>
    </TracingBeam>
  )
}

