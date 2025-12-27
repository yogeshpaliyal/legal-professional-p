import { Button } from "@/components/ui/button"
import { Envelope, Phone } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useKV } from "@github/spark/hooks"

export function Hero() {
  const [isNRISite] = useKV<boolean>("is-nri-site", false)
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            currentColor 35px,
            currentColor 70px
          )`
        }} />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          {isNRISite ? (
            <>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-6 leading-tight">
                <span className="text-accent">NRI Legal Solutions</span><br />
                by Ghuman Law Associates<br />
                Protecting Your Rights<br />
                Across Borders
              </h1>
              <div className="h-1 w-32 bg-accent mx-auto" />
            </>
          ) : (
            <>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-6 leading-tight">
                A Legacy of<br />
                <span className="text-accent">Proven Excellence</span><br />
                in Litigation<br />
                for Over Three Decades
              </h1>
              <div className="h-1 w-32 bg-accent mx-auto" />
            </>
          )}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-primary-foreground/90 mb-12 font-medium max-w-3xl mx-auto"
        >
          {isNRISite 
            ? "Specialized legal services for Non-Resident Indians navigating the Indian legal system from abroad"
            : "Trusted legal solutions across Punjab, Haryana and Chandigarh for more than 33 years"
          }
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
          >
            <Envelope className="mr-2" weight="fill" />
            Submit a Query
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg backdrop-blur-sm transition-all hover:scale-105"
            asChild
          >
            <a href="tel:+919814004646">
              <Phone className="mr-2" weight="fill" />
              +91 98140 04646
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
