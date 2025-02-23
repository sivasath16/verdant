import { Button } from "@/components/ui/button"
import { TreePine } from "lucide-react"

export default function CTA() {
  return (
    <section className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <div className="rounded-full bg-primary/10 p-3">
          <TreePine className="h-6 w-6 text-primary" />
        </div>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Start Your Sustainable Journey Today
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join our community of eco-conscious individuals and businesses making a real impact on the planet.
        </p>
        <Button size="lg" className="mt-4 bg-primary hover:bg-primary/90">
          Create Free Account
        </Button>
      </div>
    </section>
  )
}

