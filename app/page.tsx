"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Phone, MapPin, Code, Award, Trophy, Star, ExternalLink, Calendar } from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Balaji Nidavache
            </h1>
            <div className="flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "certificates", label: "Certificates" },
                { id: "achievements", label: "Achievements" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-4 pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 text-sm font-medium">Available for opportunities</span>
                </div>
                <p className="text-xl text-gray-600">Hello, I'm</p>
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Balaji Nidavache
                </h2>
                <p className="text-2xl text-gray-700">
                  And I'm a <span className="text-blue-600 font-bold">Full Stack</span> Developer
                </p>
              </div>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed max-w-2xl">
                <p>
                  Passionate about creating scalable web applications with modern technologies. I build responsive,
                  user-friendly solutions that bridge the gap between design and functionality, transforming ideas into
                  digital reality.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/balaji-nidavanche-a31363294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/Balaji2004-bmn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:bnidavanche@gmail.com"
                  className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="/resume.pdf" download="Balaji_Nidavache_Resume.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-1">
                    <div className="bg-white rounded-full p-2 w-full h-full">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240212_121534.jpg-HK6Z3mnw53TOX8HuegWvgIevz3acDE.jpeg"
                        alt="Balaji Nidavache"
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=320&width=320"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a passionate Full Stack Web Developer currently pursuing my Bachelor's in Computer Science and
                    Engineering at{" "}
                    <span className="font-semibold text-blue-600">Bangalore Technological Institute</span>. With a
                    strong foundation in both frontend and backend technologies, I love turning complex problems into
                    simple, beautiful solutions.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Quick learner, strong team player, and active in hackathons like{" "}
                    <span className="font-semibold text-green-600">Adobe Hackathon 2025</span>. Currently exploring
                    cloud deployment and RESTful API design while continuously expanding my knowledge in advanced data
                    structures, DevOps practices, and machine learning fundamentals.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-3 rounded-xl border border-pink-200">
                    <MapPin className="w-5 h-5 text-pink-600" />
                    <span className="text-pink-700 font-medium">Bangalore, Karnataka</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-3 rounded-xl border border-blue-200">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700 font-medium">+91 6361698728</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-800 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Languages I Speak
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { lang: "English", level: "Fluent", color: "bg-blue-500" },
                        { lang: "Kannada", level: "Native", color: "bg-green-500" },
                        { lang: "Hindi", level: "Fluent", color: "bg-orange-500" },
                        { lang: "Marathi", level: "Conversational", color: "bg-purple-500" },
                        { lang: "Telugu", level: "Basic", color: "bg-pink-500" },
                      ].map(({ lang, level, color }) => (
                        <div key={lang} className="flex items-center justify-between p-2 bg-white rounded-lg border">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${color}`}></div>
                            <span className="font-medium text-gray-700">{lang}</span>
                          </div>
                          <span className="text-xs text-gray-500">{level}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800 flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "Sass"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800 flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "Java", "Spring Boot", "Django", "Python"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    Database
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "MongoDB", "PostgreSQL"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-800 flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                    Currently Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "DevOps", "CI/CD", "Machine Learning"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-purple-300 text-purple-700 hover:bg-purple-100 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Advanced Scientific Calculator */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-red-50 to-orange-50 border-red-200 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 rounded-t-lg overflow-hidden flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🧮</div>
                  <h4 className="text-xl font-bold">Advanced Calculator</h4>
                  <p className="text-sm opacity-90">Scientific Functions</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  Advanced Scientific Calculator
                </CardTitle>
                <CardDescription className="text-gray-600">
                  A feature-rich, modern scientific calculator built with HTML, CSS, and JavaScript, providing
                  professional-grade mathematical functions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-red-100 text-red-800">HTML</Badge>
                  <Badge className="bg-orange-100 text-orange-800">CSS</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">JavaScript</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-1 hover:bg-red-50 border-red-200 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://github.com/Balaji2004-bmn/Advanced-Calculator.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button size="sm" className="flex items-center space-x-1 bg-red-600 hover:bg-red-700" asChild>
                    <a href="https://parallel-existence.surge.sh" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Student Management System */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-t-lg overflow-hidden flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🎓</div>
                  <h4 className="text-xl font-bold">Student Portal</h4>
                  <p className="text-sm opacity-90">Management System</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Student Management System
                </CardTitle>
                <CardDescription className="text-gray-600">
                  A comprehensive full-stack portal for managing student records with CRUD operations, user
                  authentication, and data validation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-800">React</Badge>
                  <Badge className="bg-green-100 text-green-800">Spring Boot</Badge>
                  <Badge className="bg-orange-100 text-orange-800">MySQL</Badge>
                  <Badge className="bg-purple-100 text-purple-800">REST APIs</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-1 hover:bg-blue-50 border-blue-200 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://github.com/Balaji2004-bmn/student_managent_system1.git"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button size="sm" className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hiring AI */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-t-lg overflow-hidden flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🤖</div>
                  <h4 className="text-xl font-bold">AI Hiring</h4>
                  <p className="text-sm opacity-90">Smart Recruitment</p>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Hiring AI using AI Tools
                </CardTitle>
                <CardDescription className="text-gray-600">
                  An intelligent AI-powered hiring assistant that screens resumes and analyzes candidate skills with
                  high accuracy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-yellow-100 text-yellow-800">Python</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Machine Learning</Badge>
                  <Badge className="bg-blue-100 text-blue-800">AI Tools</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-1 hover:bg-green-50 border-green-200 bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/Balaji2004-bmn/hiring-ai-future.git" target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button size="sm" className="flex items-center space-x-1 bg-green-600 hover:bg-green-700">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dream Journey Analyzer */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 rounded-t-lg overflow-hidden flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">✨</div>
                  <h4 className="text-xl font-bold">Dream Analyzer</h4>
                  <p className="text-sm opacity-90">AI-Powered Journey</p>
                </div>
                <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                  In Progress
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                  Adaptive Dream Journey Analyzer
                </CardTitle>
                <CardDescription className="text-gray-600">
                  An innovative system that analyzes dream inputs using NLP and generates personalized video
                  visualizations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-yellow-100 text-yellow-800">Python</Badge>
                  <Badge className="bg-blue-100 text-blue-800">NLP</Badge>
                  <Badge className="bg-green-100 text-green-800">OpenAI</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Video Generation</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center space-x-1 hover:bg-purple-50 border-purple-200 bg-transparent"
                    disabled
                  >
                    <Github className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certificates & Credentials
          </h3>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {/* Internship Completion Certificate */}
              <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-blue-800 text-lg">Internship Completion Certificate</CardTitle>
                      <CardDescription className="text-gray-600">Cognifyz Technologies</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Successfully completed internship program in web development and software engineering practices.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-700">
                      Verified
                    </Badge>
                    <span className="text-xs text-gray-500">Apr 2025</span>
                  </div>
                </CardContent>
              </Card>

              {/* Auraflix Certificate */}
              <Card className="bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-purple-600" />
                    <div>
                      <CardTitle className="text-purple-800 text-lg">Auraflix</CardTitle>
                      <CardDescription className="text-gray-600">Auraverse</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Completed advanced training in digital media and streaming technologies.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-purple-500/50 text-purple-700">
                      Verified
                    </Badge>
                    <span className="text-xs text-gray-500">Mar 2025</span>
                  </div>
                </CardContent>
              </Card>

              {/* DSA With Java Bootcamp */}
              <Card className="bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-green-600" />
                    <div>
                      <CardTitle className="text-green-800 text-lg">DSA With Java Bootcamp</CardTitle>
                      <CardDescription className="text-gray-600">LetsUpgrade</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Comprehensive bootcamp covering Data Structures and Algorithms using Java programming language.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-green-500/50 text-green-700">
                      Verified
                    </Badge>
                    <span className="text-xs text-gray-500">Mar 2025</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">ID: LUEDSANOV1241523</p>
                </CardContent>
              </Card>

              {/* Power BI Certificate */}
              <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-orange-600" />
                    <div>
                      <CardTitle className="text-orange-800 text-lg">Power BI</CardTitle>
                      <CardDescription className="text-gray-600">Microsoft</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Microsoft Power BI certification for data visualization, business intelligence, and analytics.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-orange-500/50 text-orange-700">
                      Verified
                    </Badge>
                    <span className="text-xs text-gray-500">Oct 2024</span>
                  </div>
                </CardContent>
              </Card>

              {/* Kodacy Certificate */}
              <Card className="bg-white/80 backdrop-blur-sm border-cyan-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-cyan-600" />
                    <div>
                      <CardTitle className="text-cyan-800 text-lg">Code Quality Certificate</CardTitle>
                      <CardDescription className="text-gray-600">Kodacy</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-3">
                    Certified in code quality analysis, best practices, and automated code review processes.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-700">
                      Verified
                    </Badge>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent" asChild>
                      <a
                        href="https://kodacy.com/kodacy-certificate/?cert_hash=20192f4eeef3aa86"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                    <div>
                      <CardTitle className="text-yellow-800">Adobe Hackathon 2025 Participant</CardTitle>
                      <CardDescription className="text-gray-600">Competitive Programming & Innovation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Participated in Adobe Hackathon 2025, demonstrating problem-solving skills and innovative thinking
                    in a competitive environment with developers from across the country.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Star className="w-8 h-8 text-green-600" />
                    <div>
                      <CardTitle className="text-green-800">Academic Excellence</CardTitle>
                      <CardDescription className="text-gray-600">
                        CGPA: 8.6 - Bangalore Technological Institute
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Maintaining excellent academic performance with a CGPA of 8.6 in Computer Science and Engineering,
                    consistently ranking among top performers in the class.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Code className="w-8 h-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-blue-800">Open Source Contributions</CardTitle>
                      <CardDescription className="text-gray-600">Active GitHub contributor</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Regular contributions to open source projects and maintaining personal repositories with innovative
                    solutions, clean code practices, and comprehensive documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white"
      >
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Let's Work Together</h3>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
            collaborate or discuss potential opportunities! Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="mailto:bnidavanche@gmail.com" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/balaji-nidavanche-a31363294"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">&copy; 2024 Balaji Nidavache. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Built with ❤️ using React & Next.js</p>
        </div>
      </footer>
    </div>
  )
}
