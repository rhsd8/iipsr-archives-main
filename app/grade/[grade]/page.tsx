import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Calculator, Atom, Microscope, BookOpen, Globe, Computer, Library, Users } from "lucide-react"

interface Subject {
  name: string
  icon: React.ComponentType<{ className?: string }>
  driveUrl: string
  description: string
}

interface GradeSubjects {
  [key: string]: Subject[]
}

const gradeSubjects: GradeSubjects = {
  "6": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/MATH_GRADE6_FOLDER_ID",
      description: "Basic arithmetic and geometry",
    },
    {
      name: "Science",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/SCIENCE_GRADE6_FOLDER_ID",
      description: "Introduction to scientific concepts",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/ENGLISH_GRADE6_FOLDER_ID",
      description: "Language and literature basics",
    },
    {
      name: "Social Studies",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/SOCIAL_GRADE6_FOLDER_ID",
      description: "History and geography",
    },
  ],
  "7": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/MATH_GRADE7_FOLDER_ID",
      description: "Algebra and advanced arithmetic",
    },
    {
      name: "Science",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/SCIENCE_GRADE7_FOLDER_ID",
      description: "Physics, chemistry, and biology basics",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/ENGLISH_GRADE7_FOLDER_ID",
      description: "Advanced language skills",
    },
    {
      name: "Social Studies",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/SOCIAL_GRADE7_FOLDER_ID",
      description: "World history and cultures",
    },
  ],
  "8": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/MATH_GRADE8_FOLDER_ID",
      description: "Pre-algebra and geometry",
    },
    {
      name: "Science",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/SCIENCE_GRADE8_FOLDER_ID",
      description: "Integrated science concepts",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/ENGLISH_GRADE8_FOLDER_ID",
      description: "Literature and composition",
    },
    {
      name: "Social Studies",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/SOCIAL_GRADE8_FOLDER_ID",
      description: "Modern history and civics",
    },
  ],
  "9": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/MATH_GRADE9_FOLDER_ID",
      description: "Algebra I and coordinate geometry",
    },
    {
      name: "Physics",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/PHYSICS_GRADE9_FOLDER_ID",
      description: "Mechanics and basic physics",
    },
    {
      name: "Chemistry",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/CHEMISTRY_GRADE9_FOLDER_ID",
      description: "Atomic structure and reactions",
    },
    {
      name: "Biology",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/BIOLOGY_GRADE9_FOLDER_ID",
      description: "Cell biology and life processes",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/ENGLISH_GRADE9_FOLDER_ID",
      description: "Advanced literature studies",
    },
    {
      name: "Social Studies",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/SOCIAL_GRADE9_FOLDER_ID",
      description: "Contemporary world issues",
    },
  ],
  "10": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/MATH_GRADE10_FOLDER_ID",
      description: "Algebra II and trigonometry",
    },
    {
      name: "Physics",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/PHYSICS_GRADE10_FOLDER_ID",
      description: "Electricity and magnetism",
    },
    {
      name: "Chemistry",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/CHEMISTRY_GRADE10_FOLDER_ID",
      description: "Organic and inorganic chemistry",
    },
    {
      name: "Biology",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/BIOLOGY_GRADE10_FOLDER_ID",
      description: "Genetics and evolution",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/ENGLISH_GRADE10_FOLDER_ID",
      description: "Critical analysis and writing",
    },
    {
      name: "Social Studies",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/SOCIAL_GRADE10_FOLDER_ID",
      description: "Economics and political science",
    },
  ],
  "11": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/MATH_GRADE11_FOLDER_ID",
      description: "Calculus and advanced algebra",
    },
    {
      name: "Physics",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/PHYSICS_GRADE11_FOLDER_ID",
      description: "Waves, optics, and modern physics",
    },
    {
      name: "Chemistry",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/CHEMISTRY_GRADE11_FOLDER_ID",
      description: "Physical and analytical chemistry",
    },
    {
      name: "Biology",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/BIOLOGY_GRADE11_FOLDER_ID",
      description: "Molecular biology and ecology",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/ENGLISH_GRADE11_FOLDER_ID",
      description: "Advanced composition and rhetoric",
    },
    {
      name: "Computer Science",
      icon: Computer,
      driveUrl: "https://drive.google.com/drive/folders/CS_GRADE11_FOLDER_ID",
      description: "Programming and algorithms",
    },
  ],
  "12": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/MATH_GRADE12_FOLDER_ID",
      description: "Advanced calculus and statistics",
    },
    {
      name: "Physics",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/PHYSICS_GRADE12_FOLDER_ID",
      description: "Quantum physics and relativity",
    },
    {
      name: "Chemistry",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/CHEMISTRY_GRADE12_FOLDER_ID",
      description: "Advanced organic chemistry",
    },
    {
      name: "Biology",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/BIOLOGY_GRADE12_FOLDER_ID",
      description: "Biotechnology and advanced genetics",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/ENGLISH_GRADE12_FOLDER_ID",
      description: "Literary criticism and research",
    },
    {
      name: "Computer Science",
      icon: Computer,
      driveUrl: "https://drive.google.com/drive/folders/CS_GRADE12_FOLDER_ID",
      description: "Data structures and software engineering",
    },
  ],
}

export default function GradePage({ params }: { params: { grade: string } }) {
  const grade = params.grade
  const subjects = gradeSubjects[grade] || []

  if (!subjects.length) {
    return (
      <div className="min-h-screen">
        <header className="border-b border-border bg-transparent backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <Link href="/classes">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Classes
              </Button>
            </Link>
          </div>
        </header>
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Grade {grade} Not Available</h1>
          <p className="text-muted-foreground">Please select a valid grade from 6 to 12.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/classes">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Classes
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Library className="h-5 w-5 text-secondary" />
              <span className="font-semibold text-foreground">Grade {grade} Resources</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Grade {grade} Academic Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-work-sans">Subject Materials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access comprehensive study materials and educational resources for Grade {grade}. All content is organized
            by subject and stored securely in Google Drive for instant access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subjects.map((subject) => {
            const IconComponent = subject.icon
            return (
              <Card
                key={subject.name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-transparent"
              >
                <CardHeader className="pb-6">
                  <div className="relative flex items-center justify-between px-4 py-2 rounded-full bg-transparent overflow-hidden">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Grade {grade}
                  </Badge>
                  <CardTitle className="text-xl font-work-sans group-hover:text-secondary transition-colors">
                    {subject.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">{subject.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ExternalLink className="h-4 w-4" />
                    <span>Opens in Google Drive</span>
                  </div>

                  <a href={subject.driveUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      Access Materials
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-20">
          <Card className="max-w-4xl mx-auto border-0 bg-transparent">
            <CardContent className="py-12 px-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4 font-work-sans">Study Tips for Grade {grade}</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Make the most of your study materials with these recommended practices for effective learning and
                retention.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Regular Review</h3>
                  <p className="text-sm text-muted-foreground">Review notes consistently for better retention</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-3">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Group Study</h3>
                  <p className="text-sm text-muted-foreground">Collaborate with peers for deeper understanding</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-3">
                    <Library className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Organized Notes</h3>
                  <p className="text-sm text-muted-foreground">Keep materials organized for easy access</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
