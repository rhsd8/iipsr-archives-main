"use client"

// Note: Button and Link not needed; using custom CTA component
import LiquidGlassButton from "@/components/liquid-glass-button"
import SpotlightCard from "@/components/spotlight-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Shield, Search, GraduationCap, Library, FileText, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <>
      <style jsx>{`
        .liquid-glass { 
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before { 
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.05);
          border-radius: inherit;
        }
        .liquid-glass:hover { 
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 60px rgba(233, 79, 55, 0.3), 
                      inset 0 1px 0 rgba(255, 255, 255, 0.4), 
                      inset 0 -1px 0 rgba(0, 0, 0, 0.1);
        }
        .liquid-glass:hover::before { 
          background: rgba(255, 255, 255, 0.08);
        }
        .liquid-glass:active { 
          transform: scale(0.98);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
      <div className="min-h-full flex flex-col">
      <header className="sticky top-5 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-primary rounded-lg">
                <Library className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-sm sm:text-lg md:text-xl font-bold text-foreground font-work-sans">IIPSR Student Portal</h1>
                <p className="text-xs sm:text-sm text-muted-foreground hidden xs:block">Professional Educational Resources</p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              Grades 8-12
            </Badge>
          </div>
        </div>
      </header>

      <section className="mt-12 py-12 px-4 sm:mt-16 sm:py-20 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">

            {/* <Badge variant="outline" className="mb-6 text-sm font-medium">
              Trusted by Students & Educators
            </Badge> */}
            
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground mb-4 sm:mb-6 font-work-sans leading-tight text-center w-full">
              Studying{" "}
              <span className="text-secondary italic">Simplified</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2 text-center w-full">
              Past papers, Resources and More. Made for students, by students
            </p>
            <div className="flex justify-center items-center w-full">
              <LiquidGlassButton />
            </div>
          </div>
          
        </div>
      </section>

      <section className="py-12 px-4 sm:py-20 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 font-work-sans">
                {["Why", "Choose", "Our", "Platform?"].map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeOut",
                      delay: index * 0.1
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
              >
                Built with students and educators in mind, our platform delivers exceptional learning experiences.
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SpotlightCard className="group hover:shadow-xl transition-all duration-300 border-0 bg-transparent h-full">
              <CardHeader className="pb-3 px-8 pt-8">
                <div className="flex items-start gap-4   mb-6">
                  <div className="p-2 bg-secondary/10 rounded-xl flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <GraduationCap className="h-7 w-7 text-secondary" />
                  </div>
                  <div className="flex-grow text-left">
                    <CardTitle className="text-xl font-work-sans leading-tight mb-3">
                      Past Paper Archives
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Grade 8–12 exam papers all in one place — no more digging through sketchy Facebook groups.
                </p>
              </CardContent>
            </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SpotlightCard className="group hover:shadow-xl transition-all duration-300 border-0 bg-transparent h-full">
              <CardHeader className="pb-3 px-8 pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-secondary/10 rounded-xl flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <FileText className="h-7 w-7 text-secondary" />
                  </div>
                  <div className="flex-grow text-left">
                    <CardTitle className="text-xl font-work-sans leading-tight mb-3">
                      Smart Study Timer
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Stay focused with built-in Pomodoro timers and productivity tools that actually make cramming less painful.
                </p>
              </CardContent>
            </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SpotlightCard className="group hover:shadow-xl transition-all duration-300 border-0 bg-transparent h-full">
              <CardHeader className="pb-3 px-8 pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-secondary/10 rounded-xl flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Shield className="h-7 w-7 text-secondary" />
                  </div>
                  <div className="flex-grow text-left">
                    <CardTitle className="text-xl font-work-sans leading-tight mb-3">
                      Curated Study Guides & Courses
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Step-by-step resources for each grade, designed by real educators to keep you on track.
                </p>
              </CardContent>
            </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SpotlightCard className="group hover:shadow-xl transition-all duration-300 border-0 bg-transparent h-full">
                <CardHeader className="pb-3 px-8 pt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-secondary/10 rounded-xl flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Users className="h-7 w-7 text-secondary" />
                  </div>
                  <div className="flex-grow text-left">
                    <CardTitle className="text-xl font-work-sans leading-tight mb-3">
                      Timetable Maker & Planner
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Build custom schedules and study plans that fit your life (and your procrastination habits).
                </p>
              </CardContent>
            </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SpotlightCard className="group hover:shadow-xl transition-all duration-300 border-0 bg-transparent h-full">
                <CardHeader className="pb-3 px-8 pt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-secondary/10 rounded-xl flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <BookOpen className="h-7 w-7 text-secondary" />
                  </div>
                  <div className="flex-grow text-left">
                    <CardTitle className="text-xl font-work-sans leading-tight mb-3">
                      Progress Tracker
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Visualize your study streaks, goals, and improvements — because nothing feels better than ticking boxes.
                </p>
              </CardContent>
            </SpotlightCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SpotlightCard className="group hover:shadow-xl transition-all duration-300 border-0 bg-transparent h-full">
                <CardHeader className="pb-3 px-8 pt-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-secondary/10 rounded-xl flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Search className="h-7 w-7 text-secondary" />
                  </div>
                  <div className="flex-grow text-left">
                    <CardTitle className="text-xl font-work-sans leading-tight mb-3">
                      Collaborative Study Hub
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Work with classmates, share notes, and prep together without the chaos of group chats.
                </p>
              </CardContent>
            </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      

      <footer className="mt-auto backdrop-blur-sm py-12 px-6 sm:py-16 sm:px-8 md:px-14">
        <div className="mx-auto max-w-full">
          {/* Mobile: Single column with better spacing, Desktop: Two columns */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-8 mb-12 md:mb-8">
            
            {/* Brand Section with Action Buttons */}
            <div className="space-y-8 md:space-y-6">
              {/* Logo and Title */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="p-2 bg-primary rounded-lg">
                  <Library className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-lg md:text-xl text-foreground">IIPSR Student Portal</h3>
                </div>
              </div>
              
              {/* Action Buttons - Mobile: Vertical stack, Desktop: Horizontal */}
              <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-3">
                <button className="liquid-glass inline-flex items-center justify-center gap-2 text-foreground px-6 py-3 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-all duration-300 min-h-[48px] md:min-h-0">
                  <FileText className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">FAQ's</span>
                </button>
                <button className="liquid-glass inline-flex items-center justify-center gap-2 text-foreground px-6 py-3 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-all duration-300 min-h-[48px] md:min-h-0">
                  <Users className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Feedback</span>
                </button>
                <button className="liquid-glass inline-flex items-center justify-center gap-2 text-foreground px-6 py-3 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-all duration-300 min-h-[48px] md:min-h-0">
                  <Shield className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Contact Us</span>
                </button>
              </div>
            </div>

            {/* Institution Section with proper spacing */}
            <div className="space-y-6 md:space-y-4 text-center md:text-left">
              {/* Divider line for mobile visual separation */}
              <div className="w-16 h-px bg-border/50 mx-auto md:hidden"></div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-base md:text-lg text-foreground">Institution</h4>
                <p className="text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto md:mx-0">
                  Visit our main school website for admissions, events, and institutional information.
                </p>
                <a 
                  href="https://iipsr.edu.sa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="liquid-glass inline-flex items-center justify-center gap-2 text-foreground px-6 py-3 md:px-4 md:py-2 rounded-lg text-sm font-medium transition-all duration-300 min-h-[48px] md:min-h-0"
                >
                  <span className="relative z-10">Visit IIPSR Website</span>
                  <ArrowRight className="h-4 w-4 relative z-10" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section with enhanced spacing */}
          <div className="pt-8 md:pt-6 border-t border-border/30">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4 text-center md:text-left">
              <p className="text-sm text-muted-foreground leading-relaxed">
                © 2025 IIPSR Student Portal.
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Grades 8-12</span>
                <span className="text-xs">•</span>
                <span>Academic Year 2025</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
