import { Button } from "@/components/ui/button"
import { Scales, List, X } from "@phosphor-icons/react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Areas of Service", href: "#practice-areas" },
  { label: "About Us", href: "#about" },
  { label: "Our Professionals", href: "#professionals" },
  { label: "Submit a Query", href: "#contact" },
  { label: "Contact Us", href: "#contact-info" }
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors">
              <Scales size={22} className="text-primary-foreground group-hover:text-accent-foreground" weight="fill" />
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:block">Ghuman Law Associates</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                onClick={() => scrollToSection(link.href)}
                className="text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              >
                {link.label}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  className="w-full justify-start text-foreground hover:text-accent hover:bg-accent/10 h-12"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
