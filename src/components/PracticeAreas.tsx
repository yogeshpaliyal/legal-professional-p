import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Buildings, Lightbulb, Scales, FileText, Users } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const practiceAreas = [
  {
    icon: Buildings,
    title: "Corporate Law",
    description: "Comprehensive legal counsel for businesses including mergers, acquisitions, corporate governance, and regulatory compliance."
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    description: "Protection and enforcement of patents, trademarks, copyrights, and trade secrets across diverse industries."
  },
  {
    icon: Scales,
    title: "Complex Litigation",
    description: "Strategic representation in high-stakes commercial disputes, with a proven track record in federal and state courts."
  },
  {
    icon: FileText,
    title: "Contract Law",
    description: "Drafting, negotiation, and litigation of complex commercial agreements to protect your business interests."
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Guidance on employment contracts, workplace policies, discrimination claims, and executive compensation."
  },
  {
    icon: Users,
    title: "Business Transactions",
    description: "Expert advice on joint ventures, partnerships, financing arrangements, and strategic business planning."
  }
]

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Practice Areas
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized legal expertise across multiple practice areas to serve your unique needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon size={28} className="text-primary group-hover:text-accent transition-colors" weight="duotone" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
