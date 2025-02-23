/* eslint-disable @typescript-eslint/no-unused-vars */
import { Footprints, Wallet, TreePine, Award, BarChart3, Globe2, Zap } from "lucide-react"

const features = [
  {
    title: "Carbon Tracking",
    description: "Monitor your daily carbon emissions with our intuitive tracking system.",
    icon: Footprints,
    className: "md:col-span-2",
    iconClassName: "text-green-600 dark:text-green-500",
    bgClassName: "bg-green-100/20 dark:bg-green-500/10",
  },
  {
    title: "Eco Wallet",
    description: "Store and manage your earned eco-points securely.",
    icon: Wallet,
    iconClassName: "text-emerald-600 dark:text-emerald-500",
    bgClassName: "bg-emerald-100/20 dark:bg-emerald-500/10",
  },
  {
    title: "Impact Analytics",
    description: "Visualize your environmental impact over time.",
    icon: BarChart3,
    iconClassName: "text-teal-600 dark:text-teal-500",
    bgClassName: "bg-teal-100/20 dark:bg-teal-500/10",
  },
  {
    title: "Green Rewards",
    description: "Earn points for sustainable choices and lifestyle changes.",
    icon: Award,
    className: "md:col-span-2",
    iconClassName: "text-green-600 dark:text-green-500",
    bgClassName: "bg-green-100/20 dark:bg-green-500/10",
  },
  {
    title: "Offset Programs",
    description: "Support verified carbon offset projects worldwide.",
    icon: TreePine,
    iconClassName: "text-emerald-600 dark:text-emerald-500",
    bgClassName: "bg-emerald-100/20 dark:bg-emerald-500/10",
  },
  {
    title: "Real-time Insights",
    description: "Get instant feedback on your carbon reduction efforts.",
    icon: Zap,
    iconClassName: "text-teal-600 dark:text-teal-500",
    bgClassName: "bg-teal-100/20 dark:bg-teal-500/10",
  },
  {
    title: "Global Impact",
    description: "Join a worldwide community committed to sustainability.",
    icon: Globe2,
    className: "md:col-span-2",
    iconClassName: "text-green-600 dark:text-green-500",
    bgClassName: "bg-green-100/20 dark:bg-green-500/10",
  },
]

export default function Features() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
          Make Every Action <span className="text-green-600 dark:text-green-500">Count</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Track, reduce, and offset your carbon footprint while earning rewards for sustainable choices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-6xl">
        {features.map((feature, _i) => (
          <div
            key={feature.title}
            className={`group relative overflow-hidden rounded-3xl border bg-background/50 p-8 backdrop-blur-sm transition-all hover:bg-background/80 ${feature.className}`}
          >
            <div className="relative z-10">
              <div className={`mb-4 inline-flex rounded-lg ${feature.bgClassName} p-3`}>
                <feature.icon className={`h-6 w-6 ${feature.iconClassName}`} />
              </div>
              <h3 className="mb-2 font-semibold leading-none tracking-tight">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </section>
  )
}

