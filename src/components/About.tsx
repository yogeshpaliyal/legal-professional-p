import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Scales, Target } from "@phosphor-icons/react"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            About Us
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  For more than 33 years, <span className="font-semibold text-foreground">Ghuman Law Associates</span> have been dedicated to delivering trusted legal solutions across Punjab, Haryana and Chandigarh, representing clients in the High Court of Punjab and Haryana at Chandigarh, the Supreme Court of India, and in Courts, Commissions and Tribunals across Punjab, Haryana and Chandigarh. We take pride in offering personalized attention and strategic representation tailored to each client's unique needs.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Our experienced team of advocates is committed to upholding the highest standards of integrity and professionalism. Whether handling complex litigation or providing sound legal advice, we bring a results-driven approach to every case, ensuring your rights and interests are always our top priority.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With over three decades of legal practice, we have built a reputation for resolving complex legal matters with diligence and precision. Our extensive experience allows us to anticipate challenges, craft effective strategies, and achieve favourable outcomes for our clients. We understand that every case is unique, and we approach each one with the same commitment to excellence, ensuring that our clients feel supported and confident throughout the process. At Ghuman Law Associates, client satisfaction is not just a goal—it is the foundation of our enduring legacy.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Trophy size={32} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">33+</h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Scales size={32} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Supreme Court</h3>
                <p className="text-muted-foreground">Representation at the Highest Level</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Client-Focused</h3>
                <p className="text-muted-foreground">Personalized Legal Solutions</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
