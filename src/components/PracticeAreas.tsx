import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Buildings, Lightbulb, Scales, FileText, Users, Gavel, House, ShieldCheck, CheckSquare, UserCircle, HandHeart, Globe, Certificate, IdentificationCard, FolderUser, Coins } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useKV } from "@github/spark/hooks"

const practiceAreas = [
  {
    icon: Gavel,
    title: "Criminal Laws",
    description: "Comprehensive criminal defense representation across all courts with strategic defense planning."
  },
  {
    icon: Scales,
    title: "Civil Laws",
    description: "Expert counsel in civil disputes including contracts, torts, and general civil litigation matters."
  },
  {
    icon: Users,
    title: "Family Laws",
    description: "Compassionate guidance through family legal matters with focus on achieving favorable outcomes."
  },
  {
    icon: HandHeart,
    title: "Matrimonial Laws",
    description: "Sensitive handling of matrimonial disputes including divorce, alimony, and related proceedings."
  },
  {
    icon: House,
    title: "Property & Real Estate Laws",
    description: "Complete legal solutions for property transactions, disputes, and real estate matters."
  },
  {
    icon: ShieldCheck,
    title: "Consumer Protection Laws",
    description: "Protecting consumer rights and representing clients in consumer forums and commissions."
  },
  {
    icon: CheckSquare,
    title: "Election Disputes",
    description: "Specialized representation in election-related legal matters and electoral disputes."
  },
  {
    icon: Briefcase,
    title: "Service Matters",
    description: "Expert advice on employment disputes, service conditions, and tribunal matters."
  },
  {
    icon: Buildings,
    title: "White Collar Crimes",
    description: "Defense in complex financial crimes and corporate fraud cases with proven track record."
  },
  {
    icon: FileText,
    title: "Constitutional Matters",
    description: "High-level constitutional law matters before the High Court and Supreme Court."
  },
  {
    icon: UserCircle,
    title: "Human Rights Matters",
    description: "Dedicated advocacy for protection and enforcement of fundamental human rights."
  },
  {
    icon: Globe,
    title: "Services for Overseas Indians/NRIs",
    description: "Specialized legal services for Non-Resident Indians and overseas Indian citizens.",
    link: true
  }
]

const nriPracticeAreas = [
  {
    icon: Gavel,
    title: "Criminal Litigation",
    description: "Expert representation for NRIs facing criminal charges in India, including bail applications and case management from abroad."
  },
  {
    icon: Scales,
    title: "Civil Litigation",
    description: "Comprehensive civil litigation services for property disputes, contract breaches, and other civil matters affecting NRIs."
  },
  {
    icon: House,
    title: "Property Disputes Litigation",
    description: "Protecting NRI property rights including illegal possession cases, title disputes, and property recovery matters."
  },
  {
    icon: Buildings,
    title: "Landlord-Tenant Disputes",
    description: "Resolution of rental disputes, eviction matters, and tenant issues for NRI property owners in India."
  },
  {
    icon: CheckSquare,
    title: "Adverse Possession",
    description: "Legal action to protect your property from adverse possession claims and unauthorized occupation."
  },
  {
    icon: Users,
    title: "Partition of Property",
    description: "Fair division of ancestral and jointly-owned properties with representation of NRI interests."
  },
  {
    icon: UserCircle,
    title: "Family Matters Litigation",
    description: "Sensitive handling of family disputes including guardianship, maintenance, and adoption proceedings."
  },
  {
    icon: HandHeart,
    title: "Matrimonial Matters Litigation",
    description: "Expert representation in divorce, restitution of conjugal rights, and other matrimonial disputes for NRIs."
  },
  {
    icon: FolderUser,
    title: "Child Custody Litigation",
    description: "Protecting parental rights in custody battles, visitation rights, and international child custody matters."
  },
  {
    icon: Coins,
    title: "Inheritance",
    description: "Claiming rightful inheritance, handling estate disputes, and ensuring proper distribution of ancestral property."
  },
  {
    icon: Certificate,
    title: "Succession Certificates",
    description: "Obtaining succession certificates for NRIs to claim movable assets and securities of deceased relatives."
  },
  {
    icon: FileText,
    title: "Wills",
    description: "Drafting, registration, and execution of wills, plus contesting invalid wills in Indian courts."
  },
  {
    icon: Lightbulb,
    title: "Power of Attorneys",
    description: "Preparation and registration of power of attorney documents enabling trusted representatives to act on your behalf in India."
  },
  {
    icon: IdentificationCard,
    title: "Passport Seize Matters",
    description: "Legal assistance in passport impoundment cases, including representation before authorities and courts."
  }
]

export function PracticeAreas() {
  const [isNRISite] = useKV<boolean>("is-nri-site", false)
  const areas = isNRISite ? nriPracticeAreas : practiceAreas
  
  return (
    <section id="practice-areas" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {isNRISite ? "NRI Legal Services" : "Areas of Service"}
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isNRISite 
              ? "Specialized legal services designed for Non-Resident Indians managing legal matters in India"
              : "Comprehensive legal expertise across multiple practice areas serving Punjab, Haryana and Chandigarh"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon
            const hasLink = 'link' in area && area.link
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className={`h-full border-border hover:border-accent transition-all duration-300 hover:shadow-lg group ${hasLink ? 'cursor-pointer' : ''}`}>
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon size={28} className="text-primary group-hover:text-accent transition-colors" weight="duotone" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                    {hasLink ? (
                      <p className="text-accent font-medium text-sm mt-3">Learn more →</p>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
