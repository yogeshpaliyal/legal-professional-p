import { Card, CardContent } from "@/components/ui/card"
import { Quotes, Star } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useKV } from "@github/spark/hooks"

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Chandigarh",
    case: "Property Dispute",
    rating: 5,
    text: "After years of struggle with a property dispute, Ghuman Law Associates helped me recover my rightful property. Their dedication and expertise in property laws is unmatched. The team kept me informed throughout the process and achieved a favorable outcome in the High Court.",
    year: "2023"
  },
  {
    name: "Priya Singh",
    location: "Mohali",
    case: "Matrimonial Matter",
    rating: 5,
    text: "During the most difficult time of my life, the team at Ghuman Law Associates provided not just legal expertise but also emotional support. They handled my matrimonial case with sensitivity and professionalism, achieving a just settlement that protected my interests.",
    year: "2023"
  },
  {
    name: "Amit Sharma",
    location: "Panchkula",
    case: "Consumer Protection",
    rating: 5,
    text: "I was cheated by a builder who failed to deliver my flat on time. Ghuman Law Associates took up my consumer case and fought relentlessly. Within months, I received compensation and justice. Their knowledge of consumer protection laws is exceptional.",
    year: "2024"
  },
  {
    name: "Dr. Suresh Malhotra",
    location: "Ludhiana",
    case: "Service Matter",
    rating: 5,
    text: "When I faced unjust termination from my position, Ghuman Law Associates represented me before the tribunal. Their strategic approach and thorough preparation led to my reinstatement with full benefits. I am grateful for their expertise in service matters.",
    year: "2022"
  },
  {
    name: "Neha Verma",
    location: "Jalandhar",
    case: "Family Law",
    rating: 5,
    text: "The advocates at Ghuman Law Associates handled our family partition matter with utmost professionalism and fairness. They ensured that all family members received their rightful share while maintaining family harmony. Their approach was balanced and effective.",
    year: "2023"
  },
  {
    name: "Vikram Bhatia",
    location: "Ambala",
    case: "Criminal Defense",
    rating: 5,
    text: "Facing false charges was traumatic, but Ghuman Law Associates stood by me throughout. Their meticulous investigation and powerful court arguments led to my acquittal. Their expertise in criminal law saved my reputation and career.",
    year: "2024"
  }
]

const nriTestimonials = [
  {
    name: "Harpreet Singh Sandhu",
    location: "Toronto, Canada",
    case: "Property Recovery",
    rating: 5,
    text: "Living in Canada, I was helpless watching my ancestral property being illegally occupied. Ghuman Law Associates took complete charge, obtained a power of attorney, and successfully recovered my property. They provided regular updates despite the time difference and handled everything professionally.",
    year: "2023"
  },
  {
    name: "Meera Kapoor",
    location: "London, UK",
    case: "Inheritance Dispute",
    rating: 5,
    text: "After my father's passing, distant relatives tried to claim his property. Being in the UK, I felt powerless. Ghuman Law Associates fought for my rightful inheritance and secured all assets in my name. Their NRI-focused service made the entire process smooth despite me being thousands of miles away.",
    year: "2023"
  },
  {
    name: "Amarjit Singh Gill",
    location: "Melbourne, Australia",
    case: "Tenant Eviction",
    rating: 5,
    text: "My tenants in Punjab refused to vacate and pay rent for years. Ghuman Law Associates handled the entire eviction process, appeared in all court hearings on my behalf, and got the tenants evicted legally. They truly understand the challenges NRIs face with property management.",
    year: "2024"
  },
  {
    name: "Simran Kaur Brar",
    location: "Dubai, UAE",
    case: "Succession Certificate",
    rating: 5,
    text: "Obtaining a succession certificate from Dubai seemed impossible until I contacted Ghuman Law Associates. They guided me through the POA process, handled all court procedures, and secured the certificate within a reasonable timeframe. Their expertise in NRI matters is outstanding.",
    year: "2022"
  },
  {
    name: "Rajiv Malhotra",
    location: "New York, USA",
    case: "Matrimonial Dispute",
    rating: 5,
    text: "My divorce case was complicated by international jurisdictions. Ghuman Law Associates expertly handled the proceedings in Indian courts while keeping me updated through video calls and emails. They achieved a fair settlement that protected my interests and parental rights.",
    year: "2023"
  },
  {
    name: "Kuldeep Singh Dhillon",
    location: "Singapore",
    case: "Partition of Ancestral Property",
    rating: 5,
    text: "Dividing ancestral property among siblings while being in Singapore was challenging. Ghuman Law Associates ensured fair partition, handled all documentation, and represented my interests in every hearing. Their communication was excellent, and they achieved an amicable settlement.",
    year: "2024"
  }
]

export function Testimonials() {
  const [isNRISite] = useKV<boolean>("is-nri-site", false)
  const reviews = isNRISite ? nriTestimonials : testimonials
  
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            {isNRISite ? "NRI Client Success Stories" : "Client Testimonials"}
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isNRISite 
              ? "Discover how we've helped NRIs worldwide resolve their legal matters in India"
              : "Real experiences from our clients who trusted us with their legal matters"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-accent transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quotes size={48} className="text-accent" weight="fill" />
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} weight="fill" className="text-accent" />
                    ))}
                  </div>

                  <p className="text-base leading-relaxed text-muted-foreground mb-6 italic relative z-10">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs font-medium text-accent">{testimonial.case}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <p className="text-lg text-foreground mb-2">
                <span className="font-bold">Over 1,000+ cases successfully resolved</span>
              </p>
              <p className="text-muted-foreground">
                {isNRISite 
                  ? "Join hundreds of satisfied NRI clients who have successfully resolved their legal matters in India with our expert representation"
                  : "Three decades of delivering favorable outcomes across Punjab, Haryana, and Chandigarh"
                }
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
