import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Salesforce",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Heroku Eventing Metering and Usage - Leading usage-based billing, payments, and enterprise licensing at Heroku.",
    achievements: [
      "Developing cloud platform features",
      "Working with enterprise-scale systems",
      "Contributing to developer experience improvements",
    ],
  },
  {
    title: "Software Engineer",
    company: "H-E-B",
    location: "San Antonio, TX",
    period: "2021 - 2022",
    description:
      "Developed and maintained software solutions for one of the largest private companies in the US. Worked on systems supporting retail operations and customer experiences.",
    achievements: [
      "Built scalable retail software solutions",
      "Worked with high-volume transaction systems",
      "Contributed to customer-facing applications",
    ],
  },
  {
    title: "Software Engineer",
    company: "Emerson",
    location: "Austin, TX",
    period: "2020 - 2021",
    description:
      "Contributed to industrial automation and technology solutions. Developed software for manufacturing and process control systems in the industrial technology sector.",
    achievements: [
      "Developed industrial automation software",
      "Worked with manufacturing control systems",
      "Implemented process optimization solutions",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Led development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.",
    achievements: [
      "Architected scalable backend systems",
      "Reduced API response time by 40%",
      "Led team of 5 developers",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "Austin, TX",
    period: "2020 - 2022",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with design team to create responsive, user-friendly interfaces.",
    achievements: [
      "Built 15+ production applications",
      "Improved user engagement by 35%",
      "Implemented automated testing",
    ],
  },
  {
    title: "Software Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2019 - 2020",
    description:
      "Contributed to early-stage startup development. Built MVP features and helped scale the platform from 0 to 10,000 users.",
    achievements: ["Developed core platform features", "Optimized database queries", "Implemented user authentication"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Journey</h2>
          <p className="text-xl text-muted-foreground">
            Building impactful solutions across diverse industries and technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-600 font-medium mb-2">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
