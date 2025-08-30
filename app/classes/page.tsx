import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, BookOpen, Library, ArrowRight, Calculator, Microscope, Globe, Palette, Music } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"

export default function ClassesPage() {
  const grades = [
    {
      number: 8,
      subjects: 6,
      level: "Intermediate",
      icon: BookOpen, // Foundation subjects
      description: "Core fundamentals"
    },
    {
      number: 9,
      subjects: 7,
      level: "Advanced",
      icon: Calculator, // Math & sciences focus
      description: "Building skills"
    },
    {
      number: 10,
      subjects: 6,
      level: "Advanced", 
      icon: Microscope, // Science specialization
      description: "Board preparation"
    },
    {
      number: 11,
      subjects: 7,
      level: "Expert",
      icon: Globe, // Social studies & geography
      description: "Stream selection"
    },
    {
      number: 12,
      subjects: 7,
      level: "Expert",
      icon: Palette, // Arts & creativity for final year
      description: "Career preparation"
    },
  ]

  

  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Library className="h-5 w-5 text-secondary" />
              <span className="font-semibold text-foreground">Grade Selection</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <Badge className="mb-4">
            Choose Your Academic Level
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-work-sans">Select Your Grade</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your academic grade to access curated study materials, comprehensive notes, and educational resources
            tailored to your curriculum requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-9xl mx-auto">
          {grades.map((grade) => (
            <Link key={grade.number} href={`/grade/${grade.number}`}>
              <SpotlightCard className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full border-0 bg-transparent">
                {/* Card with consistent 20px padding and proper structure */}
                <div className="px-3 py-1 h-full flex flex-col justify-between">
                  
                  {/* Top Section: Grade Number and Title */}
                  <div className="space-y-6">
                    {/* Grade Number - Top Left with consistent positioning */}
                    <div className="flex justify-start">
                      <div className="text-4xl font-bold text-secondary leading-none">{grade.number}</div>
                    </div>
                    
                    {/* Grade Title - Left aligned with proper spacing */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold font-work-sans text-foreground group-hover:text-secondary transition-colors leading-tight">
                        Grade {grade.number}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">{grade.description}</p>
                    </div>
                  </div>

                  {/* Middle Section: Statistics Row with proper alignment */}
                  <div className="py-4">
                    <div className="flex items-center justify-between text-sm">
                      {/* Subjects Count - Left side */}
                      <div className="flex items-center gap-2">
                        <grade.icon className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="font-medium text-foreground">{grade.subjects} Subjects</span>
                      </div>
                      
                      {/* Active Status - Right side */}
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="font-medium text-muted-foreground">Active</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section: Button with consistent positioning */}
                  <div className="mt-auto">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 h-11 font-medium">
                      Access Notes
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
