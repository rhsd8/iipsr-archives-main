import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Shield, Search, ArrowRight, GraduationCap, Library, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Library className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground font-work-sans">Academic Notes Library</h1>
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
          <div className="text-center mb-16">
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
              <Link href="/classes">
                <Button size="xlg" className="text-lg px-8 py-6 bg-popover hover:bg-primary rounded-full">
                  Start Studying
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="text-center border-0 bg-transparent">
              <CardContent className="pt-8 pb-6">
                <div className="text-3xl font-bold text-secondary mb-2">5</div>
                <p className="text-muted-foreground font-medium">Grade Levels</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-transparent">
              <CardContent className="pt-8 pb-6">
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <p className="text-muted-foreground font-medium">Subject Areas</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-transparent">
              <CardContent className="pt-8 pb-6">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <p className="text-muted-foreground font-medium">Organized</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-work-sans">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with students and educators in mind, our platform delivers exceptional learning experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-transparent">
              <CardHeader className="pb-4">
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-work-sans">Comprehensive Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Complete academic resources spanning all secondary education levels from Grade 6 through Grade 12.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-transparent">
              <CardHeader className="pb-4">
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-work-sans">Subject Organization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Systematically organized by subject areas including Mathematics, Sciences, Languages, and Social
                  Studies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-transparent">
              <CardHeader className="pb-4">
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-work-sans">Secure Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Reliable Google Drive integration ensures secure storage and instant access to all educational
                  materials.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-transparent">
              <CardHeader className="pb-4">
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-work-sans">Educator Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  All materials are curated and uploaded by qualified educators ensuring academic quality and relevance.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-transparent">
              <CardHeader className="pb-4">
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-work-sans">Always Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Regular updates ensure content remains current with educational standards and curriculum requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-transparent">
              <CardHeader className="pb-4">
                <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Search className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-work-sans">Easy Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Intuitive interface design makes finding and accessing specific study materials quick and effortless.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="border-0 bg-transparent">
            <CardContent className="py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-work-sans">
                Ready to Excel in Your Studies?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who have enhanced their academic performance with our comprehensive note
                library.
              </p>
              <Link href="/classes">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-popover">
                  Start Exploring Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
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
