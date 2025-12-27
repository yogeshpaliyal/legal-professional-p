import { Button } from "@/components/ui/button"
import { Envelope, Phone } from "@phosphor-icons/react"
import { motion } from "framer-motion"

export function Hero() {
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
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-4">
            Victoria Chen
          </h1>
          <div className="h-1 w-32 bg-accent mx-auto mb-6" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium"
        >
          Attorney at Law
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Providing exceptional legal representation in corporate law, intellectual property, and complex litigation with over 15 years of experience
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
            Schedule Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg backdrop-blur-sm transition-all hover:scale-105"
            asChild
          >
            <a href="tel:+15551234567">
              <Phone className="mr-2" weight="fill" />
              (555) 123-4567
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
