import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, BookOpen, Library, ArrowRight } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"

export default function ClassesPage() {
  const grades = [
    {
      number: 8,
      title: "Core Concepts",
      subjects: 4,
      level: "Intermediate",
    },
    {
      number: 9,
      title: "Advanced Learning",
      subjects: 6,
      level: "Advanced",
    },
    {
      number: 10,
      title: "Board Preparation",
      subjects: 6,
      level: "Advanced",
    },
    {
      number: 11,
      title: "Specialization",
      subjects: 6,
      level: "Expert",
    },
    {
      number: 12,
      title: "Final Year",
      subjects: 6,
      level: "Expert",
    },
  ]

  

  return (
    <div className="min-h-screen">
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
          <Badge variant="outline" className="mb-4">
            Choose Your Academic Level
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-work-sans">Select Your Grade</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your academic grade to access curated study materials, comprehensive notes, and educational resources
            tailored to your curriculum requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {grades.map((grade) => (
            <Link key={grade.number} href={`/grade/${grade.number}`}>
              <SpotlightCard className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full border-0 bg-transparent">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl font-bold text-secondary">{grade.number}</div>
                  </div>
                  <CardTitle className="text-xl font-work-sans group-hover:text-secondary transition-colors">
                    Grade {grade.number}
                  </CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">{grade.title}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="relative flex items-center justify-between px-4 py-2 rounded-full bg-transparent overflow-hidden">
                      <BookOpen className="h-4 w-4" />
                      <span>{grade.subjects} Subjects</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>Active</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-popover transition-colors">
                    Access Notes
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
