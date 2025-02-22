"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Leaf } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const routes = [
  { name: "Health", href: "/health" },
  { name: "Travel", href: "/travel" },
  { name: "Smart House", href: "/smart_house" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <NavigationMenu className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Leaf className="mr-2 h-4 w-4" />
                Verdant
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {routes.map((route) => (
            <NavigationMenuItem key={route.href}>
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === route.href && "bg-accent text-accent-foreground",
                  )}
                >
                  {route.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

