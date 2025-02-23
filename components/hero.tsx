import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import Globe from "./globe"
import { TracingBeam } from "./tracing-beam"

export default function Hero() {
  return (
    <TracingBeam className="py-20">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-start space-y-6 lg:w-1/2">
          <div className="inline-flex items-center rounded-full border border-green-600/30 bg-green-100/20 px-3 py-1 text-sm backdrop-blur-xl">
            <Leaf className="mr-2 h-4 w-4 text-green-600" />
            <span className="text-green-600">Join the green revolution</span>
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
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-green-100" />
              ))}
            </div>
            <div>
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

