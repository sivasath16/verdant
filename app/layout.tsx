import {
  ClerkProvider,
  SignedIn,
  SignIn,
  SignedOut,
} from '@clerk/nextjs'
import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import {BottomDock } from "@/components/top-dock"
import ChatWidget from "@/components/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Verdant",
  description: "Verdant",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" suppressHydrationWarning >
        <body className={`${inter.className} bg-background text-foreground antialiased`}>
          <SignedOut>
            <SignIn routing="hash" />
          </SignedOut>

          <SignedIn>
            <MouseMoveEffect />
            <BottomDock />
            {children}
            <ChatWidget />
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}

import './globals.css'