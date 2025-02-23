import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-green-600 dark:text-green-500">Verdant</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/track" className="transition-colors hover:text-green-600 dark:hover:text-green-500">
            Carbon Tracking
          </Link>
          <Link href="/rewards" className="transition-colors hover:text-green-600 dark:hover:text-green-500">
            Eco Rewards
          </Link>
          <Link href="/offset" className="transition-colors hover:text-green-600 dark:hover:text-green-500">
            Offset Programs
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Start Tracking</Button>
        </div>
      </div>
    </header>
  )
}

