import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Scales, Target, Globe, Clock, ShieldCheck } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useKV } from "@github/spark/hooks"

export function About() {
  const [isNRISite] = useKV<boolean>("is-nri-site", false)
  
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
            {isNRISite ? "Why Choose Us for NRI Legal Services" : "About Us"}
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
                {isNRISite ? (
                  <>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      As an NRI, managing legal matters in India from overseas can be complex and challenging. <span className="font-semibold text-foreground">Ghuman Law Associates</span> understands the unique legal needs of Non-Resident Indians and provides specialized services designed to bridge the distance between you and the Indian legal system.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      With over three decades of experience, we have successfully represented numerous NRI clients in matters ranging from property disputes to family law proceedings. We serve as your trusted legal representatives in India, ensuring your interests are protected while you remain abroad. Our team handles all court appearances, documentation, and follow-ups, keeping you informed at every step.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      We recognize that time zone differences, language barriers, and unfamiliarity with Indian legal procedures can create additional stress. That's why we offer comprehensive support including assistance with Power of Attorney documentation, remote consultations via video conference, regular case updates via email and WhatsApp, and coordination with local authorities on your behalf. At Ghuman Law Associates, we make it possible for you to effectively pursue your legal rights in India, no matter where you are in the world.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      For more than 33 years, <span className="font-semibold text-foreground">Ghuman Law Associates</span> have been dedicated to delivering trusted legal solutions across Punjab, Haryana and Chandigarh, representing clients in the High Court of Punjab and Haryana at Chandigarh, the Supreme Court of India, and in Courts, Commissions and Tribunals across Punjab, Haryana and Chandigarh. We take pride in offering personalized attention and strategic representation tailored to each client's unique needs.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      Our experienced team of advocates is committed to upholding the highest standards of integrity and professionalism. Whether handling complex litigation or providing sound legal advice, we bring a results-driven approach to every case, ensuring your rights and interests are always our top priority.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      With over three decades of legal practice, we have built a reputation for resolving complex legal matters with diligence and precision. Our extensive experience allows us to anticipate challenges, craft effective strategies, and achieve favourable outcomes for our clients. We understand that every case is unique, and we approach each one with the same commitment to excellence, ensuring that our clients feel supported and confident throughout the process. At Ghuman Law Associates, client satisfaction is not just a goal—it is the foundation of our enduring legacy.
                    </p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {isNRISite ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Globe size={32} className="text-accent" weight="duotone" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Global</h3>
                    <p className="text-muted-foreground">Serving NRIs Worldwide</p>
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
                      <Clock size={32} className="text-accent" weight="duotone" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">24/7</h3>
                    <p className="text-muted-foreground">Remote Consultations Available</p>
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
                      <ShieldCheck size={32} className="text-accent" weight="duotone" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">Trusted</h3>
                    <p className="text-muted-foreground">Your Legal Representatives in India</p>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </section>
  )
}
