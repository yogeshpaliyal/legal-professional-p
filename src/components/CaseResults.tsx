import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const caseResults = [
  {
    title: "Tech Startup Acquisition",
    category: "Corporate Law",
    description: "Successfully negotiated $250M acquisition deal for emerging AI technology company, securing favorable terms for all stakeholders.",
    outcome: "$250M Settlement"
  },
  {
    title: "Patent Infringement Victory",
    category: "Intellectual Property",
    description: "Won landmark patent infringement case protecting client's proprietary software technology against Fortune 100 competitor.",
    outcome: "Complete Victory"
  },
  {
    title: "Commercial Dispute Resolution",
    category: "Complex Litigation",
    description: "Achieved favorable settlement in high-stakes breach of contract dispute, recovering $45M in damages for manufacturing client.",
    outcome: "$45M Recovered"
  },
  {
    title: "Corporate Restructuring",
    category: "Corporate Law",
    description: "Led comprehensive corporate restructuring for multinational corporation, ensuring regulatory compliance across 12 jurisdictions.",
    outcome: "Successful Completion"
  },
  {
    title: "Trade Secret Protection",
    category: "Intellectual Property",
    description: "Secured injunction and damages for client whose trade secrets were misappropriated by former executive.",
    outcome: "$12M Settlement"
  },
  {
    title: "Class Action Defense",
    category: "Complex Litigation",
    description: "Successfully defended technology company against class action lawsuit, resulting in complete dismissal.",
    outcome: "Case Dismissed"
  }
]

export function CaseResults() {
  return (
    <section id="case-results" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Notable Results
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of successful outcomes demonstrating our commitment to client success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseResults.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50 group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                      {result.category}
                    </Badge>
                    <CheckCircle size={24} className="text-accent flex-shrink-0" weight="fill" />
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-accent transition-colors">
                    {result.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {result.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-accent">
                      Outcome: {result.outcome}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            Case results depend upon a variety of factors unique to each case. Past results do not guarantee or predict a similar outcome.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
