'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Download, Award, BookOpen, Code, Briefcase, User, Star, MessageSquare } from 'lucide-react'

export default function Home() {
  const [matrixRain, setMatrixRain] = useState<string[][]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)

  const initializeMatrixRain = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0' // Green text
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      animationFrameId.current = requestAnimationFrame(draw)
    }

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current)
    }
    animationFrameId.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    initializeMatrixRain()
    window.addEventListener('resize', initializeMatrixRain)

    return () => {
      window.removeEventListener('resize', initializeMatrixRain)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [initializeMatrixRain])

  return (
    <div className="relative min-h-screen bg-black text-green-400 overflow-hidden font-mono">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20"></canvas>

      <header className="relative z-10 w-full p-4 flex justify-between items-center border-b border-green-700/50 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-green-300 neon-text">BALAJI NIDAVANCHE</h1>
        <nav className="space-x-4">
          <Link href="#hero" className="hover:text-green-200 transition-colors neon-hover">
            Home
          </Link>
          <Link href="#about" className="hover:text-green-200 transition-colors neon-hover">
            About
          </Link>
          <Link href="#skills" className="hover:text-green-200 transition-colors neon-hover">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-green-200 transition-colors neon-hover">
            Projects
          </Link>
          <Link href="#certificates" className="hover:text-green-200 transition-colors neon-hover">
            Certificates
          </Link>
          <Link href="#achievements" className="hover:text-green-200 transition-colors neon-hover">
            Achievements
          </Link>
          <Link href="#contact" className="hover:text-green-200 transition-colors neon-hover">
            Contact
          </Link>
        </nav>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8 space-y-20">
        {/* Hero Section */}
        <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center">
          <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-green-500 shadow-neon-green">
            <Image
              src="/images/balaji-new-photo.jpg"
              alt="Balaji Nidavanche"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h2 className="text-6xl font-bold text-green-300 mb-4 leading-tight neon-text">
            BALAJI NIDAVANCHE
          </h2>
          <p className="text-3xl text-green-500 mb-8 neon-glow">Full Stack Web Developer</p>
          <div className="flex space-x-4">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg shadow-neon-green transition-all duration-300 hover:scale-105"
            >
              <Link href="https://github.com/Balaji2004-bmn" target="_blank">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Link>
            </Button>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg shadow-neon-green transition-all duration-300 hover:scale-105"
            >
              <Link href="https://www.linkedin.com/in/balaji-nidavanche-a31363294" target="_blank">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Link>
            </Button>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg shadow-neon-green transition-all duration-300 hover:scale-105"
            >
              <Link href="/resume.pdf" download="Balaji_Nidavache_Resume.pdf">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t border-green-700/50">
          <h3 className="text-4xl font-bold text-green-300 mb-8 text-center neon-text">
            <User className="inline-block mr-4 h-8 w-8 text-green-500" /> About Me
          </h3>
          <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
            <CardContent className="p-8 text-lg leading-relaxed text-green-400">
              <p className="mb-4">
                Passionate Full Stack Web Developer skilled in React, Node.js, and Spring Boot. I
                build responsive, scalable web apps and enjoy solving real-world problems through
                clean code.
              </p>
              <p className="mb-4">
                A quick learner and strong team player, I actively participate in hackathons like
                Adobe Hackathon 2025. I am currently exploring cloud deployment and RESTful API
                design to further enhance my development capabilities.
              </p>
              <p>
                My goal is to leverage technology to create impactful and user-friendly solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 border-t border-green-700/50">
          <h3 className="text-4xl font-bold text-green-300 mb-8 text-center neon-text">
            <Code className="inline-block mr-4 h-8 w-8 text-green-500" /> Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Backend</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-green-600 text-black hover:bg-green-700">Node.js</Badge>
                <Badge className="bg-green-600 text-black hover:bg-green-700">Java</Badge>
                <Badge className="bg-green-600 text-black hover:bg-green-700">Spring Boot</Badge>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-green-600 text-black hover:bg-green-700">HTML5</Badge>
                <Badge className="bg-green-600 text-black hover:bg-green-700">CSS3</Badge>
                <Badge className="bg-green-600 text-black hover:bg-green-700">JavaScript</Badge>
                <Badge className="bg-green-600 text-black hover:bg-green-700">React.js</Badge>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Databases</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-green-600 text-black hover:bg-green-700">MySQL</Badge>
                <Badge className="bg-green-600 text-black hover:bg-green-700">MongoDB</Badge>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-green-600 text-black hover:bg-green-700">Communication</Badge>
                <Badge className="bg-green-600 text-black hover:bg-green-700">Leadership</Badge>
                <Badge className="bg-green-600 text-black hover:bg-green-700">Teamwork</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t border-green-700/50">
          <h3 className="text-4xl font-bold text-green-300 mb-8 text-center neon-text">
            <Briefcase className="inline-block mr-4 h-8 w-8 text-green-500" /> Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Student Management System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400 mb-4">
                  Built a full-stack portal for managing student records, implementing CRUD
                  operations, user authentication, and data validation. Designed intuitive UI
                  components and a secure backend.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-green-600 text-black">React</Badge>
                  <Badge className="bg-green-600 text-black">Spring Boot</Badge>
                  <Badge className="bg-green-600 text-black">MySQL</Badge>
                  <Badge className="bg-green-600 text-black">REST APIs</Badge>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-900 hover:text-green-300 transition-colors"
                >
                  <Link href="https://github.com/Balaji2004-bmn/student_managent_system1.git" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Hiring AI using AI Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400 mb-4">
                  Developed an AI-powered hiring assistant to screen resumes, analyze candidate
                  skills, and shortlist top applicants based on custom criteria. Achieved high
                  accuracy in candidate matching through iterative model refinement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-green-600 text-black">Python</Badge>
                  <Badge className="bg-green-600 text-black">Machine Learning</Badge>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-900 hover:text-green-300 transition-colors"
                >
                  <Link href="https://github.com/Balaji2004-bmn/hiring-ai-future.git" target="_blank">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Adaptive Dream Journey Analyzer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-400 mb-4">
                  Designed an intelligent system that takes user dream inputs in natural language
                  and analyzes the emotional and semantic meaning using NLP techniques. The system
                  then generates a personalized video visualization of the dream content using
                  AI-based video synthesis tools.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-green-600 text-black">Python</Badge>
                  <Badge className="bg-green-600 text-black">NLP</Badge>
                  <Badge className="bg-green-600 text-black">OpenAI/ML Models</Badge>
                  <Badge className="bg-green-600 text-black">Video Generation</Badge>
                </div>
                {/* No GitHub link provided for this project in the resume text */}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-12 border-t border-green-700/50">
          <h3 className="text-4xl font-bold text-green-300 mb-8 text-center neon-text">
            <BookOpen className="inline-block mr-4 h-8 w-8 text-green-500" /> Certificates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Certificate Name 1</CardTitle>
              </CardHeader>
              <CardContent className="text-green-400">
                <p>Issued by: Organization A</p>
                <p>Date: January 2023</p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 border-green-500 text-green-500 hover:bg-green-900 hover:text-green-300 transition-colors"
                >
                  <Link href="/placeholder.svg?height=400&width=600" target="_blank">
                    View Certificate
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Certificate Name 2</CardTitle>
              </CardHeader>
              <CardContent className="text-green-400">
                <p>Issued by: Organization B</p>
                <p>Date: March 2023</p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 border-green-500 text-green-500 hover:bg-green-900 hover:text-green-300 transition-colors"
                >
                  <Link href="/placeholder.svg?height=400&width=600" target="_blank">
                    View Certificate
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Certificate Name 3</CardTitle>
              </CardHeader>
              <CardContent className="text-green-400">
                <p>Issued by: Organization C</p>
                <p>Date: May 2023</p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 border-green-500 text-green-500 hover:bg-green-900 hover:text-green-300 transition-colors"
                >
                  <Link href="/placeholder.svg?height=400&width=600" target="_blank">
                    View Certificate
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-12 border-t border-green-700/50">
          <h3 className="text-4xl font-bold text-green-300 mb-8 text-center neon-text">
            <Award className="inline-block mr-4 h-8 w-8 text-green-500" /> Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Hackathon Winner</CardTitle>
              </CardHeader>
              <CardContent className="text-green-400">
                <p>Awarded 1st place in the Annual Tech Hackathon 2024 for developing an innovative solution for smart city management.</p>
                <p className="text-sm text-green-600 mt-2">Date: October 2024</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-green-700/50 shadow-neon-green">
              <CardHeader>
                <CardTitle className="text-green-300">Dean's List</CardTitle>
              </CardHeader>
              <CardContent className="text-green-400">
                <p>Consistently achieved academic excellence, recognized on the Dean's List for multiple semesters.</p>
                <p className="text-sm text-green-600 mt-2">CGPA: 8.6</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t border-green-700/50">
          <h3 className="text-4xl font-bold text-green-300 mb-8 text-center neon-text">
            <MessageSquare className="inline-block mr-4 h-8 w-8 text-green-500" /> Contact Me
          </h3>
          <Card className="bg-gray-900 border-green-700/50 shadow-neon-green max-w-lg mx-auto">
            <CardContent className="p-8">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-green-400">Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-gray-800 border-green-700 text-green-300 placeholder:text-green-600 focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-green-400">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-800 border-green-700 text-green-300 placeholder:text-green-600 focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-green-400">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} className="bg-gray-800 border-green-700 text-green-300 placeholder:text-green-600 focus:ring-green-500 focus:border-green-500" />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg shadow-neon-green transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="relative z-10 py-8 text-center text-green-500 border-t border-green-700/50 mt-12">
        <p>&copy; {new Date().getFullYear()} Balaji Nidavanche. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://github.com/Balaji2004-bmn" target="_blank" className="hover:text-green-300 transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/balaji-nidavanche-a31363294" target="_blank" className="hover:text-green-300 transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:bnidavanche@gmail.com" className="hover:text-green-300 transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

// Placeholder for Label component, assuming it's a shadcn/ui component
function Label({ htmlFor, children, className }: { htmlFor: string; children: React.ReactNode; className?: string }) {
  return <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>{children}</label>;
}
