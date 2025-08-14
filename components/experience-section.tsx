import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Salesforce",
    location: "Remote",
    period: "2022 - Present",
    description:
      "Working on usage-based billing, payments, and enterprise licensing at Heroku.",
    achievements: [
      "Planned, executed, and delivered the migration of 1.5 million customers from Braintree to Stripe",
      "Built a historical license engine, used to recoup millions of dollars in lost revenue",
      "Led improvements to Indian E-Mandates at Heroku, saving 100’s of hours of developer toil",
      "Automated provisioning of resources for enterprise customers, cutting wait times from 48 hours to seconds",
      "Won 1st place in internal company wide hackathon for Best Internal Tool",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Salesforce",
    location: "Remote",
    period: "May 2021 - August 2021",
    description:
      "Worked on the Salesforce Platform, building internal tools to help developers.",
    achievements: [
      "Delivered features and bug fixes to Salesforce’s core product, serving over 150,000 customers",
      "Completed 9 user stories and 4 QA tasks over 12 weeks, a rate equivalent to senior engineers on the team",
      "Enhanced UI/UX across various areas of Salesforce 1GP Packaging, a developer tool to create applications",
      "Designed and implemented improvements to Salesforce CLI, an interface for all Salesforce DX features",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "H-E-B Digital",
    location: "Remote",
    period: "June 2020 - August 2020",
    description:
      "Worked on digital retail solutions and e-commerce platform development.",
    achievements: [
      "Remediated online cart conflicts, an issue produced by 10.5% of API calls to change store",
      "Implemented a Java backend microservice to supply product recommendations based on user's cart and store",
      "Integrated backend services with GraphQL to allow for streamlined queries and mutations",
      "Designed and implemented frontend React components to display relevant product information on the website",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Emerson",
    location: "Austin, TX",
    period: "May 2019 - August 2019",
    description:
      "Contributed to industrial automation and technology solutions. Developed software for manufacturing and process control systems in the industrial technology sector.",
    achievements: [
      "Automated 200 integration test cases, eliminating 4800 hours of manual testing per year",
      "Developed 200 scripts to interface with the UI, simulate clicks and enter parameters",
    ],
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
