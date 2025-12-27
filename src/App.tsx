import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { PracticeAreas } from "@/components/PracticeAreas"
import { About } from "@/components/About"
import { Professionals } from "@/components/Professionals"
import { Testimonials } from "@/components/Testimonials"
import { Contact, ContactInfo } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Disclaimer } from "@/components/Disclaimer"
import { Toaster } from "@/components/ui/sonner"
import { useState, useEffect } from "react"
import { useKV } from "@github/spark/hooks"

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useKV<boolean>("disclaimer-accepted", false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [isNRISite, setIsNRISite] = useKV<boolean>("is-nri-site", false)

  useEffect(() => {
    if (!disclaimerAccepted) {
      setShowDisclaimer(true)
    }
  }, [disclaimerAccepted])

  useEffect(() => {
    const path = window.location.pathname
    const nriSite = path.includes('/nri')
    setIsNRISite(() => nriSite)
    
    document.title = nriSite 
      ? "NRI Legal Solutions by Ghuman Law Associates | Specialized Legal Services for NRIs"
      : "Ghuman Law Associates | Legal Excellence for Over Three Decades"
  }, [setIsNRISite])

  const handleAgree = () => {
    setDisclaimerAccepted(() => true)
    setShowDisclaimer(false)
  }

  const handleDecline = () => {
    window.location.href = "about:blank"
  }

  return (
    <div className="min-h-screen">
      <Disclaimer 
        open={showDisclaimer} 
        onAgree={handleAgree}
        onDecline={handleDecline}
      />
      <Navigation />
      <main className="pt-16">
        <Hero />
        <PracticeAreas />
        <About />
        <Professionals />
        <Testimonials />
        <Contact />
        <ContactInfo />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
