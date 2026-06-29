"use client"

import emailjs from "@emailjs/browser"
import { ExternalLink, FileText, Github, Linkedin, Loader2, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const projects = [
  {
    title: "Institution Inventory System",
    description:
      "A web-based inventory management system to streamline tracking and management of institutional assets, ensuring efficient resource management.",
    image: "/Noun_inventory_home.png",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "HTML/CSS"],
    demoUrl: "https://inventory-management-system-3-8tet.onrender.com/",
    codeUrl: null,
  },
  {
    title: "AI-Driven Image to Item Extractor",
    description:
      "A tool that uses AI to extract item master data from images, streamlining the process of creating and managing item master records.",
    image: "/imdb_home.png",
    tags: ["Python", "Flask", "Gemini AI", "Bootstrap", "HTML/CSS"],
    demoUrl: "https://gdss-2026-imdb-tool.onrender.com/",
    codeUrl: null,
  },
  {
    title: "EasyLendPC",
    description: "A platform that allows users to rent and lend computers to each other.",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    tags: ["Python", "Django", "SQLite", "HTML/CSS"],
    demoUrl: null,
    codeUrl: "https://github.com/Abdulquyum/EasyLendPC",
  },
  {
    title: "ResourceHub",
    description: "A platform that allows users to share and find educational resources with each other.",
    image: "https://resourcehub-0szu.onrender.com/static/images/logo.png",
    tags: ["Python", "Flask", "MySQL", "HTML/CSS"],
    demoUrl: "https://resourcehub-0szu.onrender.com/",
    codeUrl: "https://github.com/NiniolaX/ResourceHub",
  },
  {
    title: "Odiolowo Connect",
    description:
      "A platform for residents in Odi-olowo to register for youth empowerment programs and access local opportunities.",
    image: "https://www.odiolowoojuwoye.lg.gov.ng/public/image/logo2.png",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "HTML/CSS"],
    demoUrl: null,
    codeUrl: "https://github.com/Abdulquyum/odiolowoConnect",
  },
  {
    title: "Qiblatyn Travels",
    description:
      "A professional travel and tour website for booking and inquiries, featuring a clean and user-friendly interface.",
    image: "https://qiblatayntravels.com/assets/images/logo.png",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "HTML/CSS"],
    demoUrl: "https://qiblatayntravels.com/",
    codeUrl: null,
  },
]

function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Link href="#" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">MyPortfolio</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#about" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Ajumobi Abdulquyum</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="mailto:ajumobiabdulquyum@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <Image src="/passport.jpeg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-lg text-muted-foreground mb-4">
                I'm a passionate developer with a strong foundation in web technologies and a keen eye for design. With
                several years of experience in the industry, I've worked on a variety of projects ranging from small
                business websites to complex enterprise applications.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                My approach combines technical expertise with creative problem-solving to deliver solutions that are not
                only functional but also intuitive and enjoyable to use.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or building side projects.
              </p>
            </div>
            <div className="md:col-span-2 space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold min-w-[100px]">Name:</span>
                <span>Ajumobi Abdulquyum</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold min-w-[100px]">Email:</span>
                <span>ajumobiabdulquyum@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold min-w-[100px]">Location:</span>
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold min-w-[100px]">Education:</span>
                <span>Graduated from ALX, Africa</span>
              </div>
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <a href="/updated-Ajumobi-Abdulquyum-CV.pdf" download="Ajumobi-Abdulquyum-CV.pdf">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <TooltipProvider>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </TooltipProvider>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="https://github.com/Abdulquyum?tab=repositories">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              title="Frontend Development"
              items={["React", "HTML/CSS", "JavaScript", "TypeScript", "Bootstrap"]}
            />
            <SkillCard title="Backend Development" items={["PHP", "Laravel", "Python", "Flask", "Node.js", "RESTful APIs"]} />
            <SkillCard title="Databases" items={["MongoDB", "PostgreSQL", "MySQL", "Firebase"]} />
            <SkillCard title="DevOps & Tools" items={["Git", "CLI", "Trello", "unix system", "Vercel"]} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>ajumobiabdulquyum@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link href="https://linkedin.com/in/abdqooyum" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    linkedin.com/in/abdqooyum
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <Link href="https://github.com/Abdulquyum" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    github.com/Abdulquyum
                  </Link>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Abdulquyum. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://github.com/Abdulquyum" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/abdqooyum" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:ajumobiabdulquyum@gmail.com" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

type ProjectCardProps = {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string | null
  codeUrl: string | null
}

function ProjectCard({ title, description, image, tags, demoUrl, codeUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col group">
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {demoUrl ? (
            <Button size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          ) : (
            <Tooltip>
              <TooltipTrigger>
                <Button size="sm" disabled>
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Demo not available</p>
              </TooltipContent>
            </Tooltip>
          )}
          {codeUrl && (
            <Button size="sm" variant="outline" asChild>
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </Card>
  )
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Ajumobi Abdulquyum",
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast.success("Message sent successfully!")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
          className="min-h-[120px]"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  )
}
