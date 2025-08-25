// Note: Button and Link not needed; using custom CTA component
import LiquidGlassButton from "@/components/liquid-glass-button"
import SpotlightCard from "@/components/spotlight-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Shield, Search, GraduationCap, Library, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-5 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Library className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground font-work-sans">IIPS Student Portal</h1>
                <p className="text-sm text-muted-foreground">Professional Educational Resources</p>
              </div>
            </div>
            <Badge variant="secondary" className="hidden sm:flex">
              Grades 8-12
            </Badge>
          </div>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 mt-15">

            {/* <Badge variant="outline" className="mb-6 text-sm font-medium">
              Trusted by Students & Educators
            </Badge> */}
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-work-sans leading-tight">
              Your Gateway to
              <span className="text-secondary block mt-2">Academic Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Access a comprehensive digital library of meticulously organized academic notes and educational materials.
              Designed for students from Grade 6 to Grade 12, our platform ensures seamless access to high-quality study
              resources.
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
            <h2 className="text-4xl font-bold text-foreground mb-4 font-work-sans">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with students and educators in mind, our platform delivers exceptional learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
                  Complete academic resources spanning all secondary education levels from Grade 6 through Grade 12.
                </p>
              </CardContent>
            </SpotlightCard>

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
          </div>
        </div>
      </section>

      

      <footer className="mt-auto border-t border-border bg-transparent py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="p-2 bg-primary rounded-lg">
                <Library className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Academic Notes Library</p>
                <p className="text-sm text-muted-foreground">Excellence in Education</p>
              </div>
            </div>
            {/* <p className="text-sm text-muted-foreground">
              © 2024 Academic Notes Library. Empowering students worldwide.
            </p> */}
          </div>
        </div>
      </footer>
    </div>
  )
}
