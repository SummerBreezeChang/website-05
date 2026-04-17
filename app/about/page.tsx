"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  Heart, 
  Lightbulb, 
  Users,
  GraduationCap,
  Sparkles,
  Wrench,
  Code,
  Server,
  Settings,
  BookOpen,
  Music,
  Film,
  Palette,
  Mic
} from "lucide-react"

// Section tag component matching the LinkedIn-style green tags
function SectionTag({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/15 text-success text-xs font-semibold uppercase tracking-wider mb-4">
      <Icon className="w-3.5 h-3.5" />
      {label}
    </div>
  )
}

// Skill pill component
function SkillPill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
      {name}
    </span>
  )
}

// Value card component
function ValueCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType
  title: string
  description: string 
}) {
  return (
    <div className="bg-card rounded-2xl border p-6 flex flex-col items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// Education card component
function EducationCard({ 
  degree, 
  school, 
  year, 
  skills 
}: { 
  degree: string
  school: string
  year: string
  skills: string[]
}) {
  return (
    <div className="bg-card rounded-2xl border p-6">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-success/15 flex items-center justify-center shrink-0">
          <GraduationCap className="w-5 h-5 text-success" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1">{degree}</h3>
          <p className="text-sm text-muted-foreground mb-1">{school}</p>
          <p className="text-xs text-muted-foreground mb-3">{year}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillPill key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Inspiration item component
function InspirationItem({ 
  image, 
  title, 
  type 
}: { 
  image: string
  title: string
  type: string
}) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-2">
        <Image 
          src={image} 
          alt={title}
          width={200}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-xs text-muted-foreground truncate">{title}</p>
    </div>
  )
}

// Skills data
const toolsData = {
  "Design & Prototyping": ["Figma", "Adobe Creative Suite", "Canva", "Framer", "Illustrator"],
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "REST APIs"],
  "DevOps & Tools": ["Git & GitHub", "Vercel", "VS Code", "Notion"]
}

// Values data
const valuesData = [
  {
    icon: Users,
    title: "User-Centered Design",
    description: "I prioritize the user experience, ensuring every feature adds real value and is intuitive to use."
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "I am committed to pushing boundaries and evolving to learn new technologies and ways of working."
  },
  {
    icon: Heart,
    title: "Integrity and Transparency",
    description: "I build with honesty and clarity, fostering trust with our users and partners."
  }
]

// Education data
const educationData = [
  {
    degree: "Certificate in Full-Stack Development with JavaScript",
    school: "University of Washington",
    year: "2024-2025",
    skills: ["JavaScript", "Frontend Development", "Backend Development", "React", "Node.js", "MongoDB"]
  },
  {
    degree: "Master of Fine Arts",
    school: "Rutgers University",
    year: "2018",
    skills: ["Printmaking", "Visual Arts", "Graphic Design"]
  },
  {
    degree: "Bachelor of Fine Arts",
    school: "The University of Tennessee, Knoxville",
    year: "2014",
    skills: ["Printmaking", "Art Education", "Design"]
  }
]

// Inspiration data
const inspirationData = [
  { image: "/placeholder.svg?height=200&width=200", title: "Life Kit", type: "Podcast" },
  { image: "/placeholder.svg?height=200&width=200", title: "Endless Thread", type: "Podcast" },
  { image: "/placeholder.svg?height=200&width=200", title: "99% Invisible", type: "Podcast" },
  { image: "/placeholder.svg?height=200&width=200", title: "Brutal London", type: "Book" },
  { image: "/placeholder.svg?height=200&width=200", title: "Nice Newsletter", type: "Newsletter" },
  { image: "/placeholder.svg?height=200&width=200", title: "Design Matters", type: "Podcast" }
]

const inspirationFilters = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "books", label: "Books", icon: BookOpen },
  { id: "music", label: "Music", icon: Music },
  { id: "podcast", label: "Podcast", icon: Mic },
  { id: "film", label: "Film & TV", icon: Film },
  { id: "art", label: "Art & Design", icon: Palette }
]

const skillCategories = [
  { id: "tools", label: "Tools" },
  { id: "skills", label: "Skills" }
]

export default function AboutPage() {
  const [activeSkillTab, setActiveSkillTab] = useState("tools")
  const [activeInspirationFilter, setActiveInspirationFilter] = useState("all")

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-card shadow-lg">
            <Image 
              src="/headshot.png" 
              alt="Summer Chang"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-balance">
            I&apos;m Summer and I am a{" "}
            <span className="text-primary">lifelong learner</span>
          </h1>
          
          {/* Bio */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            I am a designer with a love of code, systems-thinking, and emerging technology. 
            I have a previous career as an educator, which has led to a deep curiosity and 
            love of mentoring other designers.
          </p>
          
          {/* Connect Links */}
          <p className="text-base text-muted-foreground mb-8">
            Let&apos;s connect on{" "}
            <Link href="https://linkedin.com/in/summerbreezechang" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
              LinkedIn
            </Link>
            ,{" "}
            <Link href="https://github.com/SummerBreezeChang" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
              Github
            </Link>
            , or email me -{" "}
            <Link href="mailto:hello@summerchang.com" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
              hello@summerchang.com
            </Link>
          </p>
        </div>
      </section>

      {/* Download Resume Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-xl mx-auto">
          <div className="bg-card rounded-2xl border p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Download My Resume</h2>
            <p className="text-sm text-muted-foreground mb-6">Get my latest resume in PDF format</p>
            <a
              href="/Summer-Chang-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <SectionTag icon={Heart} label="Values" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What I Value</h2>
          <p className="text-muted-foreground mb-8">
            I believe in principles that guide my growth and inspire my community.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {valuesData.map((value) => (
              <ValueCard 
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <SectionTag icon={Wrench} label="Skills" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">My Skillset and Tools</h2>
          <p className="text-muted-foreground mb-8">
            Some of the tools and skills I use regularly.
          </p>

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-muted rounded-full w-fit mb-8">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSkillTab(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSkillTab === cat.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(toolsData).map(([category, skills]) => {
              const iconMap: Record<string, React.ElementType> = {
                "Design & Prototyping": Palette,
                "Frontend": Code,
                "Backend": Server,
                "DevOps & Tools": Settings
              }
              const Icon = iconMap[category] || Wrench
              
              return (
                <div key={category} className="bg-card rounded-2xl border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-success" />
                    </div>
                    <h3 className="font-semibold text-sm">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <SkillPill key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <SectionTag icon={GraduationCap} label="Education" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Degrees and Certificates</h2>
          <p className="text-muted-foreground mb-8">
            From teaching to design to coding, I&apos;ve always loved learning.
          </p>
          
          <div className="flex flex-col gap-4">
            {educationData.map((edu) => (
              <EducationCard 
                key={edu.degree}
                degree={edu.degree}
                school={edu.school}
                year={edu.year}
                skills={edu.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <SectionTag icon={Sparkles} label="Inspiration" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What I&apos;m Thinking About</h2>
          <p className="text-muted-foreground mb-8">
            Music, books, and other media I turn to for inspiration.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {inspirationFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveInspirationFilter(filter.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeInspirationFilter === filter.id 
                    ? "bg-foreground text-background" 
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Inspiration Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {inspirationData.map((item, index) => (
              <InspirationItem 
                key={index}
                image={item.image}
                title={item.title}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Say Hi Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">👋</span> Say Hi
          </h2>
          
          <div className="flex flex-col gap-3">
            <Link 
              href="mailto:hello@summerchang.com"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">hello@summerchang.com</span>
            </Link>
            <Link 
              href="https://linkedin.com/in/summerbreezechang"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">linkedin.com/in/summerbreezechang</span>
            </Link>
            <Link 
              href="https://github.com/SummerBreezeChang"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">github.com/SummerBreezeChang</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
