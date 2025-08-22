"use client"
import React from "react"

// Premium animated gradient background wrapper
// Usage: <PremiumGradient>...app content...</PremiumGradient>
// Renders a full-viewport animated gradient with a subtle grain overlay
// and places children above it.
export default function PremiumGradient({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes premiumFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-animated {
          background-size: 400% 400% !important;
          animation: premiumFlow 15s ease-in-out infinite !important;
        }
      `}</style>

      {/* Fixed gradient background layer */}
      <div
        className="fixed inset-0 gradient-animated"
        style={{
          background:
            "linear-gradient(135deg,rgb(231, 115, 97) 0%, #FFE8D6 25%,rgb(226, 131, 117) 50%, #FFE8D6 75%,rgb(229, 140, 127) 100%)",
        }}
      />

      {/* Minimal grain texture overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          opacity: 0.08,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.45' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
