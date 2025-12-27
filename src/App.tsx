import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { PracticeAreas } from "@/components/PracticeAreas"
import { About } from "@/components/About"
import { Professionals } from "@/components/Professionals"
import { Contact, ContactInfo } from "@/components/Contact"
import { QRCodes } from "@/components/QRCodes"
import { Footer } from "@/components/Footer"
import { Disclaimer } from "@/components/Disclaimer"
import { Toaster } from "@/components/ui/sonner"
import { useState, useEffect } from "react"
import { useKV } from "@github/spark/hooks"

function App() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useKV<boolean>("disclaimer-accepted", false)
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    if (!disclaimerAccepted) {
      setShowDisclaimer(true)
    }
  }, [disclaimerAccepted])

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
        <Contact />
        <ContactInfo />
        <QRCodes />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
