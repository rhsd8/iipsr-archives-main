"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Minimal, self-contained liquid glass button used on the landing page
export default function LiquidGlassButton({
  label = "Start Studying",
  href = "/classes",
}: {
  label?: string
  href?: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <style jsx>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        .liquid-glass { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px) saturate(180%); position: relative; overflow: hidden; }
        .liquid-glass::before { content: ""; position: absolute; inset: 0; background: rgba(255, 255, 255, 0.05); border-radius: inherit; }
        .liquid-glass:hover { background: rgba(255, 255, 255, 0.15); box-shadow: 0 20px 60px rgba(233, 79, 55, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.1); }
        .liquid-glass:hover::before { background: rgba(255, 255, 255, 0.08); }
        .liquid-glass:active { transform: scale(0.98); background: rgba(255, 255, 255, 0.05); }
        .ripple-effect { position: absolute; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%); animation: ripple 0.6s linear; pointer-events: none; }
      `}</style>

      <Link href={href} className="inline-block">
        <button
          type="button"
          className="liquid-glass text-lg px-8 py-6 rounded-full transition-all duration-300 ease-out text-black font-semibold flex items-center group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={(e) => {
            const button = e.currentTarget
            const rect = button.getBoundingClientRect()
            const ripple = document.createElement("span")
            const size = Math.max(rect.width, rect.height)
            const x = e.clientX - rect.left - size / 2
            const y = e.clientY - rect.top - size / 2
            ripple.className = "ripple-effect"
            ripple.style.width = ripple.style.height = size + "px"
            ripple.style.left = x + "px"
            ripple.style.top = y + "px"
            button.appendChild(ripple)
            setTimeout(() => { if (button.contains(ripple)) button.removeChild(ripple) }, 600)
          }}
        >
          <span className="relative z-10">{label}</span>
          <ArrowRight className={`ml-2 h-5 w-5 relative z-10 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)" }} />
        </button>
      </Link>
    </>
  )
}
