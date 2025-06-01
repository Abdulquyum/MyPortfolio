import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, FileText, ExternalLink, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Portfolio</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm">
            Resume
          </Button>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/placeholder.svg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                I'm a passionate developer with a strong foundation in web technologies and a keen eye for design. With
                several years of experience in the industry, I've worked on a variety of projects ranging from small
                business websites to complex enterprise applications.
              </p>
              <p className="text-lg mb-4">
                My approach combines technical expertise with creative problem-solving to deliver solutions that are not
                only functional but also intuitive and enjoyable to use.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold min-w-[100px]">Name:</span>
                <span>Your Name</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold min-w-[100px]">Email:</span>
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold min-w-[100px]">Location:</span>
                <span>City, Country</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold min-w-[100px]">Education:</span>
                <span>Bachelor's in Computer Science</span>
              </div>
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A full-featured online store with product management, cart functionality, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">React</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Node.js</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">
                  A productivity application for organizing tasks with drag-and-drop functionality and team
                  collaboration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Next.js</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">TypeScript</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Prisma</span>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Content Generator</h3>
                <p className="text-muted-foreground mb-4">
                  A tool that leverages AI to help users create blog posts, social media content, and marketing copy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Vue.js</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">OpenAI API</span>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="#">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard
              title="Frontend Development"
              items={["React", "Next.js", "HTML/CSS", "JavaScript", "TypeScript"]}
            />
            <SkillCard title="Backend Development" items={["Node.js", "Express", "Python", "Django", "RESTful APIs"]} />
            <SkillCard title="Databases" items={["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"]} />
            <SkillCard title="DevOps & Tools" items={["Git", "Docker", "AWS", "CI/CD", "Vercel"]} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link href="#" className="hover:text-primary">
                    linkedin.com/in/yourname
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <Link href="#" className="hover:text-primary">
                    github.com/yourusername
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
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Subject"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your message"
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
