"use client"
import React from "react"

// Premium animated background wrapper with blurred circles
// Usage: <PremiumGradient>...app content...</PremiumGradient>
// Renders a full-viewport solid background with animated blurred circles
// and places children above it.
export default function PremiumGradient({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes floatRightCircle {
          0% { 
            transform: translate(20vw, -80vh) scaleX(0.8) scaleY(1.2);
          }
          25% { 
            transform: translate(-20vw, -40vh) scaleX(1.2) scaleY(0.8);
          }
          50% { 
            transform: translate(10vw, 80vh) scaleX(0.9) scaleY(1.1);
          }
          75% { 
            transform: translate(-30vw, 40vh) scaleX(1.1) scaleY(0.9);
          }
          100% { 
            transform: translate(20vw, -80vh) scaleX(0.8) scaleY(1.2);
          }
        }
        
        @keyframes floatLeftCircle {
          0% { 
            transform: translate(-20vw, 80vh) scaleX(1.1) scaleY(0.8);
          }
          25% { 
            transform: translate(30vw, 40vh) scaleX(0.8) scaleY(1.2);
          }
          50% { 
            transform: translate(-10vw, -80vh) scaleX(1.2) scaleY(0.9);
          }
          75% { 
            transform: translate(20vw, -40vh) scaleX(0.9) scaleY(1.1);
          }
          100% { 
            transform: translate(-20vw, 80vh) scaleX(1.1) scaleY(0.8);
          }
        }
        
        .circle-animated-right {
          animation: floatRightCircle 40s ease-in-out infinite;
        }
        
        .circle-animated-left {
          animation: floatLeftCircle 40s ease-in-out infinite;
        }
      `}</style>

      {/* Fixed solid background layer */}
      <div
        className="fixed inset-0"
        style={{
          backgroundColor: "#FFE8D6",
        }}
      />

      {/* Animated blurred circles */}
      <div
        className="fixed rounded-full circle-animated-right"
        style={{
          top: '50%',
          right: '0%',
          width: '1440px',
          height: '1440px',
          marginTop: '-720px',
          marginRight: '-720px',
          backgroundColor: "rgb(231, 115, 97)",
          filter: "blur(120px)",
          opacity: 0.6,
        }}
      />
      
      <div
        className="fixed rounded-full circle-animated-left"
        style={{
          top: '50%',
          left: '0%',
          width: '1260px',
          height: '1260px',
          marginTop: '-630px',
          marginLeft: '-630px',
          backgroundColor: "rgb(231, 115, 97)",
          filter: "blur(110px)",
          opacity: 0.7,
        }}
      />
      
      
      
      

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}