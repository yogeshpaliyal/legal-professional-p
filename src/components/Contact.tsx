import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Envelope, Clock } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { toast } from "sonner"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Thank you for your inquiry! We will contact you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      content: "500 Market Street, Suite 2500\nSan Francisco, CA 94102"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567"
    },
    {
      icon: Envelope,
      title: "Email",
      content: "victoria.chen@lawfirm.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: By Appointment"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a consultation to discuss your legal needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2 h-12"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-base">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 h-12"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-base">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 h-12"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-base">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="mt-2 min-h-32"
                      placeholder="Please describe your legal matter..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all hover:scale-[1.02]"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-accent" weight="duotone" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
