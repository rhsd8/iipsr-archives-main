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
      <div className="min-h-screen flex flex-col">
      <header className="sticky top-5 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Library className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground font-work-sans">IIPSR Student Portal</h1>
                <p className="text-sm text-muted-foreground">Professional Educational Resources</p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              Grades 8-12
            </Badge>
          </div>
        </div>
      </header>

      <section className="mt-21 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 mt-15">

            {/* <Badge variant="outline" className="mb-6 text-sm font-medium">
              Trusted by Students & Educators
            </Badge> */}
            
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 font-work-sans leading-tight">
              Studying{" "}
              <span className="text-secondary mt-2">Simplified</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Past papers, Resources and More. Made for students, by students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <LiquidGlassButton />
            </div>
          </div>
          
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4 font-work-sans">
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
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
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
                      Comprehensive Coverage
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Complete academic resources spanning all secondary education levels from Grade 8 through Grade 12.
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
                      Subject Organization
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Systematically organized by subject areas including Mathematics, Sciences, Languages, and Social Studies.
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
                      Secure Access
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Reliable Google Drive integration ensures secure storage and instant access to all educational materials.
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
                      Educator Approved
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  All materials are curated and uploaded by qualified educators ensuring academic quality and relevance.
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
                      Always Updated
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Regular updates ensure content remains current with educational standards and curriculum requirements.
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
                      Easy Navigation
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8 text-left">
                <p className="text-muted-foreground leading-[1.7] text-base">
                  Intuitive interface design makes finding and accessing specific study materials quick and effortless.
                </p>
              </CardContent>
            </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      

      <footer className="mt-auto backdrop-blur-sm py-12 px-14">
        <div className="mx-auto max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Brand Section with Action Buttons */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-lg">
                  <Library className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">IIPSR Student Portal</h3>
                  <p className="text-sm text-muted-foreground">Educational Excellence</p>
                </div>
              </div>
              
              {/* Action Buttons with liquid glass effect */}
              <div className="flex flex-wrap gap-3">
                <button className="liquid-glass inline-flex items-center gap-2 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                  <FileText className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">FAQ's</span>
                </button>
                <button className="liquid-glass inline-flex items-center gap-2 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                  <Users className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Feedback</span>
                </button>
                <button className="liquid-glass inline-flex items-center gap-2 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                  <Shield className="h-4 w-4 relative z-10" />
                  <span className="relative z-10">Contact Us</span>
                </button>
              </div>
            </div>

            {/* School Website Link */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Institution</h4>
              <p className="text-sm text-muted-foreground">
                Visit our main school website for admissions, events, and institutional information.
              </p>
              <a 
                href="https://iipsr.edu.sa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="liquid-glass inline-flex items-center gap-2 text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                <span className="relative z-10">Visit IIPSR Website</span>
                <ArrowRight className="h-4 w-4 relative z-10" />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 IIPSR Student Portal. Educational resources platform.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Grades 8-12</span>
                <span>•</span>
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
