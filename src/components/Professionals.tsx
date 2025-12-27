import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const professionals = [
  {
    name: "Ranjit Singh Ghuman",
    title: "Advocate",
    experience: "In practice since 1989",
    image: null
  },
  {
    name: "Shashi Ghuman",
    title: "Advocate",
    experience: "In practice since 1989",
    image: null
  },
  {
    name: "Bahaar Ghuman",
    title: "Advocate",
    experience: "",
    image: null
  }
]

export function Professionals() {
  return (
    <section id="professionals" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Our Professionals
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionals.map((professional, index) => (
            <motion.div
              key={professional.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Briefcase size={48} className="text-primary" weight="duotone" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {professional.name}
                  </h3>
                  <p className="text-base font-semibold text-accent mb-2">
                    {professional.title}
                  </p>
                  {professional.experience && (
                    <p className="text-sm text-muted-foreground">
                      {professional.experience}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
