import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import PremiumGradient from "@/components/premium-gradient"

export const metadata: Metadata = {
  title: "School Notes Library",
  description: "A central place for students from Grade 8 to Grade 12 to access their class notes easily.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-transparent">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen bg-transparent">
        <PremiumGradient>{children}</PremiumGradient>
      </body>
    </html>
  )
}
