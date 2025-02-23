import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/50 to-background/80" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-green-400/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-emerald-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Company Name */}
        <div className="absolute top-4 left-[388px] text-2xl font-bold text-green-800 dark:text-green-300">Verdant</div>

        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

