import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Calculator, Atom, Microscope, BookOpen, Globe, Computer, Library, Users } from "lucide-react"
import SpotlightCard from "@/components/spotlight-card"

interface Subject {
  name: string
  icon: React.ComponentType<{ className?: string }>
  driveUrl: string
}

interface GradeSubjects {
  [key: string]: Subject[]
}

const gradeSubjects: GradeSubjects = {
  "8": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/1mmPWQCzZTyIAirrk-QKA8fKEg46faNDN",
    },
    {
      name: "Science",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/1PGLgXrOPc2ffv0TZYJJ_lWxZZYSCsbh_",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/1uHaPNq2hgrGdVf5MjAKM1kH7R5lav1Iu",
    },
    {
      name: "Social Science",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/1sPhvLOV_jaA5gvf97OxwmTeNxSDJZu73",
    },
    {
      name: "Hindi",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/1LaKHbu3gevIyNPZ5draRoYluXCR8BXb3",
    },
    {
      name: "3rd Language",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/1oiScT3J_cXwEhSxxuoxWDSauvCLWyWSR",
    },
  ],
  "9": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/1fUaItBCq-wDbWHun1zIYiRRunMv2JtN0?usp=drive_link",
    },
    {
      name: "Physics",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/1N4gqcbijgJSL3VK7Gbbu7bRMunBphC2b?usp=drive_link",
    },
    {
      name: "Chemistry",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/1Aez1X4jWVeG_IOXR1rh4-LwB2VRcpiG0?usp=drive_link",
    },
    {
      name: "Biology",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/1YzkCUvJa6-xg6eWFJPog5YltNowon5go?usp=drive_link",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/1wUDmam7cdaKUsG0oApq1FIMmG6UazWGN?usp=drive_link",
    },
    {
      name: "Social Science",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/1czZ7vHuTn9FNnwulNlmUFe8DqEWKrfy1?usp=drive_link",
    },
    {
      name: "2nd Language",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/11o634DGFfny_65DQcGo2bpboInmAMfiE?usp=drive_link",
    },
  ],
  "10": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/1qfP2Xyz-yPBRiYJYt52KCgYCHVuUWTJd?usp=drive_link",
    },
    {
      name: "Physics",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/1O8h4W5cLnVmAsZbXCjLp9xoriYlYmp8b?usp=drive_link",
    },
    {
      name: "Chemistry",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/1uX0DaLtfafGpRfP4Ah64-_oNCrWF3WWI?usp=drive_link",
    },
    {
      name: "Biology",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/1dV_PktTFRle8CKog4VhM72nNEeoh0v5k?usp=drive_link",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/1gjACDMa43HrtR0wRkUcaFXNKSvak2OQq?usp=drive_link",
    },
    {
      name: "Social Science",
      icon: Globe,
      driveUrl: "https://drive.google.com/drive/folders/1oucUgexLWeegblq1y8DeKo28vauZP2e4?usp=drive_link",
    },
  ],
  "11": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/1B6geYe9aPnoSp207ZyNZ2cGv0uNmK66R?usp=drive_link",
    },
    {
      name: "Physics",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/1bb4TuccaFiFBBT5tMVyUKxM6czpHjGNY?usp=drive_link",
    },
    {
      name: "Chemistry",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/1dLb06igQfC30wlcAlcdz7Gljl-wGWaFz?usp=drive_link",
    },
    {
      name: "Biology",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/1NhGdIhmgDV7P-fFBNs21UAeUc6NiPJ3o?usp=drive_link",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/1Z84QYpxG5kPP3V26MPpiO-161HlkIRgl?usp=drive_link",
    },
    {
      name: "Computer Science",
      icon: Computer,
      driveUrl: "https://drive.google.com/drive/folders/1Hw6H4uJJ1Dgp656Rt19V6IzUr7J6usGk?usp=drive_link",
    },
    {
      name: "Physical Education",
      icon: Computer,
      driveUrl: "https://drive.google.com/drive/folders/11_DRXHObWpf6Z3bSG8d6eWMPrTpuA8GC?usp=drive_link",
    },
  ],
  "12": [
    {
      name: "Mathematics",
      icon: Calculator,
      driveUrl: "https://drive.google.com/drive/folders/1eM6KoSPANRsw8FR9IPM130t1F_WxGcGR?usp=sharing",
    },
    {
      name: "Physics",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/1MUPm9k2Sjo0lHH6WeFq_Zph3gUFrUCUV?usp=drive_link",
    },
    {
      name: "Chemistry",
      icon: Atom,
      driveUrl: "https://drive.google.com/drive/folders/15LpJiQIzI9PS3JlcQzsFlQlt5JkZqMEg?usp=drive_link",
    },
    {
      name: "Biology",
      icon: Microscope,
      driveUrl: "https://drive.google.com/drive/folders/1do1PpmXPcbcEwG0XSVv58ef1ODwFTkPu?usp=drive_link",
    },
    {
      name: "English",
      icon: BookOpen,
      driveUrl: "https://drive.google.com/drive/folders/19oJSLmGGbArZfwBEVR7bahYfr091_XgL?usp=drive_link",
    },
    {
      name: "Computer Science",
      icon: Computer,
      driveUrl: "",
    },
    {
      name: "Physical Education",
      icon: Computer,
      driveUrl: "https://drive.google.com/drive/folders/19VubskagHT5FkLs798slgUJkCCJfBFie?usp=drive_link  ",
    },
  ],
}

export default function GradePage({ params }: { params: { grade: string } }) {
  const grade = params.grade
  const subjects = gradeSubjects[grade] || []

  if (!subjects.length) {
    return (
      <div className="min-h-screen">
        <header className="sticky top-0 z-50">
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
          <p className="text-muted-foreground">Please select a valid grade from 8 to 12.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50">
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
          <Badge variant="default" className="mb-4">
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
              <SpotlightCard
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
              </SpotlightCard>
            )
          })}
        </div>

        <div className="mt-20">
          <SpotlightCard className="max-w-4xl mx-auto border-0 bg-transparent">
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
          </SpotlightCard>
        </div>
      </div>
    </div>
  )
}
