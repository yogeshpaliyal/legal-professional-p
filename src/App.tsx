import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { PracticeAreas } from "@/components/PracticeAreas"
import { About } from "@/components/About"
import { CaseResults } from "@/components/CaseResults"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <PracticeAreas />
        <About />
        <CaseResults />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App