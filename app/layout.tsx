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
    <html lang="en" className="bg-transparent h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  height: 100%;
  /* iOS Safari specific fixes */
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  /* iOS Safari dynamic viewport fixes */
  min-height: -webkit-fill-available;
  min-height: 100dvh; /* Dynamic viewport height for modern browsers */
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  /* Prevent iOS Safari bounce */
  -webkit-overflow-scrolling: touch;
  /* Handle safe area for iPhone X+ */
  padding-bottom: env(safe-area-inset-bottom);
}

/* iOS Safari specific viewport fix */
@supports (-webkit-touch-callout: none) {
  body {
    min-height: -webkit-fill-available;
  }
}

/* Modern browsers with dynamic viewport support */
@supports (height: 100dvh) {
  body {
    min-height: 100dvh;
  }
}

/* Additional iOS Safari fixes */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Prevent horizontal scroll on mobile */
html, body {
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
}

/* Fix for iOS Safari bottom bar issue */
@media screen and (max-width: 768px) {
  body {
    position: relative;
    /* Force height calculation */
    min-height: calc(100vh - env(keyboard-inset-height, 0px));
  }
  
  /* iOS 15+ dynamic viewport */
  @supports (height: 100dvh) {
    body {
      min-height: calc(100dvh - env(keyboard-inset-height, 0px));
    }
  }
}
        `}</style>
      </head>
      <body className="bg-transparent">
        <PremiumGradient>{children}</PremiumGradient>
      </body>
    </html>
  )
}
