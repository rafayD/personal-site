import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Cloud, Zap, Server } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Backend Development",
    description: "Java, C#, Ruby, Elixir, Python, Microservices, REST APIs",
    color: "text-blue-600",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description: "JavaScript, TypeScript, React, HTML, CSS, VisualForce",
    color: "text-green-600",
  },
  {
    icon: Database,
    title: "Database & Query Languages",
    description: "PostgreSQL, GraphQL, Data Analysis",
    color: "text-purple-600",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Heroku, AWS, Docker, Maven, Salesforce Platform",
    color: "text-orange-600",
  },
  {
    icon: Server,
    title: "Enterprise Platforms",
    description: "Salesforce, Stripe, GitHub, Splunk, Sidekiq",
    color: "text-cyan-600",
  },
  {
    icon: Zap,
    title: "Testing & Automation",
    description: "Selenium, Coded UI, Test Automation, QA",
    color: "text-yellow-600",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Solutions with Code</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-slate-100 ${skill.color}`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
