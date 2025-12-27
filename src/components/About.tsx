import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Trophy } from "@phosphor-icons/react"
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
            About
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase size={24} className="text-primary" weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-semibold">Experience</h3>
                </div>
                <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Victoria Chen brings over 15 years of distinguished legal practice, specializing in corporate law and complex litigation. She has successfully represented Fortune 500 companies, emerging startups, and high-net-worth individuals.
                  </p>
                  <p>
                    Prior to establishing her practice, Victoria was a senior partner at Morrison & Associates, where she led the intellectual property division and secured numerous landmark victories.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap size={24} className="text-primary" weight="duotone" />
                  </div>
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Juris Doctor (J.D.)</p>
                    <p className="text-muted-foreground">Harvard Law School</p>
                    <p className="text-sm text-muted-foreground">Magna Cum Laude, 2008</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bachelor of Arts, Political Science</p>
                    <p className="text-muted-foreground">Yale University</p>
                    <p className="text-sm text-muted-foreground">Summa Cum Laude, 2005</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Trophy size={24} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-2xl font-semibold">Credentials & Achievements</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Bar Admissions</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">California State Bar</Badge>
                    <Badge variant="secondary">New York State Bar</Badge>
                    <Badge variant="secondary">U.S. Supreme Court</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Recognition</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Super Lawyers, 2018-2024</li>
                    <li>• Best Lawyers in America, 2020-2024</li>
                    <li>• Top 40 Under 40, Legal Times</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Publications</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• "Corporate Governance in Modern Era" - Harvard Law Review</li>
                    <li>• "IP Protection Strategies" - Stanford Law Journal</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Speaking Engagements</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• ABA Annual Conference Keynote (2023)</li>
                    <li>• Corporate Counsel Summit (2022, 2024)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
