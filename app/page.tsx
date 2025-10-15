import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, FileText, ExternalLink, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

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
          {/* <Button variant="outline" size="sm">
            Resume
          </Button> */}
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/abdulquyum.jpg?height=320&width=320" alt="Profile" fill className="object-cover" priority />
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
                or building side projects.
              </p>
            </div>
            <div className="space-y-4">
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
                  <Link href="../public/updated-Ajumobi-Abdulquyum-CV.pdf">
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
            {/* project 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Qiblatayn Travels</h3>
                <p className="text-muted-foreground mb-4">
                  Specialize in Hajj and Umrah Packages. I implement the Registration forms for the Hajj and Umrrah Pilgrims.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">HTML/CSS</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Bootstrap</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">PHP</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Laravel</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">MariaDB</span>
                </div>
                <div className="flex gap-3">
                  {/* <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/Abdulquyum/">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button> */}
                  <Button size="sm" asChild>
                    <Link href="www.qiblatayntravels.com">
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
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">EasyLendPC</h3>
                <p className="text-muted-foreground mb-4">
                  EasyLendPC is a platform that allows users to rent and lend computers to each other.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">HTML/CSS</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Django</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">SQLite</span>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/Abdulquyum/EasyLendPC">
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
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">ResourceHub</h3>
                <p className="text-muted-foreground mb-4">
                  ResourceHub is a platform that allows users to share and find resources with each other.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">HTML/CSS</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Flask</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">MySQL</span>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/NiniolaX/ResourceHub">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="https://resourcehub-0szu.onrender.com/">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Odiolowo Connect</h3>
                <p className="text-muted-foreground mb-4">
                  A website to ease access for residents in Odi-olowo, Providing them with a platform to register for youth empowerment programs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">HTML/CSS</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Bootstrap</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">PHP</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Laravel</span>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">MySQL</span>
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://github.com/Abdulquyum/odiolowoConnect">
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
              <Link href="https://github.com/Abdulquyum?tab=repositories">View All Projects</Link>
            </Button>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard
              title="Frontend Development"
              items={["React", "HTML/CSS", "JavaScript", "TypeScript", "Bootstrap"]}
            />
            <SkillCard title="Backend Development" items={["PHP", "Laravel", "Python", "Flask", "RESTful APIs"]} />
            <SkillCard title="Databases" items={["MongoDB", "PostgreSQL", "MySQL", "Firebase"]} />
            <SkillCard title="DevOps & Tools" items={["Git", "CLI", "Trello", "unix system", "Vercel"]} />
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
                  <span>ajumobiabdulquyum@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link href="#" className="hover:text-primary">
                    linkedin.com/in/abdqooyum
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <Link href="#" className="hover:text-primary">
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
            <Link href="github.com/Abdulquyum" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:abdulquyumajumobi@gmail.com" className="text-muted-foreground hover:text-primary">
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
        "service_wl3ol08",
        "template_qt0qmz8",
        templateParams,
        "fAzDDUZy5-HGNEf2b"
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
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
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
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
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
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your message"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
