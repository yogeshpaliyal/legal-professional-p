import { Scales } from "@phosphor-icons/react"
import { useKV } from "@github/spark/hooks"

export function Footer() {
  const [isNRISite] = useKV<boolean>("is-nri-site", false)
  
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Scales size={22} className="text-accent-foreground" weight="fill" />
              </div>
              <span className="text-xl font-bold">
                {isNRISite ? "NRI Legal Solutions" : "Ghuman Law Associates"}
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              {isNRISite 
                ? "Specialized legal services for Non-Resident Indians navigating the Indian legal system from abroad."
                : "Over 33 years of proven excellence in litigation across Punjab, Haryana and Chandigarh."
              }
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button onClick={() => document.getElementById('practice-areas')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">
                  {isNRISite ? "NRI Legal Services" : "Areas of Service"}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">
                  {isNRISite ? "Why Choose Us" : "About Us"}
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('professionals')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">
                  Our Professionals
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">
                  Submit a Query
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-accent transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>House number: 1100</li>
              <li>Sector 15-B</li>
              <li>Chandigarh, 160015</li>
              <li className="pt-2">
                <a href="tel:+919814004646" className="hover:text-accent transition-colors">
                  +91 98140 04646
                </a>
              </li>
              <li>
                <a href="tel:+919855188646" className="hover:text-accent transition-colors">
                  +91 98551 88646
                </a>
              </li>
              <li>
                <a href="tel:+917837129934" className="hover:text-accent transition-colors">
                  +91 78371 29934
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Ghuman Law Associates. All rights reserved.</p>
            <div className="flex gap-4">
              <button className="hover:text-accent transition-colors">Privacy Policy</button>
              <button className="hover:text-accent transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
