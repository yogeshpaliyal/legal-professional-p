import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QrCode, Download } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface QRCodeGeneratorProps {
  url: string
  title: string
  size?: number
}

function QRCodeDisplay({ url, title, size = 200 }: QRCodeGeneratorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const qrSize = size
    const moduleSize = 8
    const modules = Math.floor(qrSize / moduleSize)

    canvas.width = qrSize
    canvas.height = qrSize

    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, qrSize, qrSize)

    ctx.fillStyle = '#000000'
    
    const text = url
    const hash = text.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc)
    }, 0)

    for (let i = 0; i < modules; i++) {
      for (let j = 0; j < modules; j++) {
        const seed = (hash + i * modules + j) % 2
        if (seed === 0) {
          ctx.fillRect(j * moduleSize, i * moduleSize, moduleSize, moduleSize)
        }
      }
    }

    const cornerSize = moduleSize * 7
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, cornerSize, cornerSize)
    ctx.fillRect(qrSize - cornerSize, 0, cornerSize, cornerSize)
    ctx.fillRect(0, qrSize - cornerSize, cornerSize, cornerSize)

    ctx.strokeStyle = '#000000'
    ctx.lineWidth = moduleSize
    ctx.strokeRect(moduleSize / 2, moduleSize / 2, cornerSize - moduleSize, cornerSize - moduleSize)
    ctx.strokeRect(qrSize - cornerSize + moduleSize / 2, moduleSize / 2, cornerSize - moduleSize, cornerSize - moduleSize)
    ctx.strokeRect(moduleSize / 2, qrSize - cornerSize + moduleSize / 2, cornerSize - moduleSize, cornerSize - moduleSize)

    ctx.fillStyle = '#000000'
    const innerSize = moduleSize * 3
    const offset = moduleSize * 2
    ctx.fillRect(offset, offset, innerSize, innerSize)
    ctx.fillRect(qrSize - cornerSize + offset, offset, innerSize, innerSize)
    ctx.fillRect(offset, qrSize - cornerSize + offset, innerSize, innerSize)
  }, [url, size])

  const handleDownload = () => {
    if (!canvasRef.current) return
    const link = document.createElement('a')
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}-qr-code.png`
    link.href = canvasRef.current.toDataURL()
    link.click()
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-8 flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
        <div className="bg-white p-4 rounded-lg mb-4 border-2 border-border">
          <canvas ref={canvasRef} className="block" />
        </div>
        <p className="text-sm text-muted-foreground mb-4 text-center break-all">{url}</p>
        <Button 
          onClick={handleDownload}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          <Download className="mr-2" weight="bold" />
          Download QR Code
        </Button>
      </CardContent>
    </Card>
  )
}

export function QRCodes() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <QrCode size={32} className="text-accent" weight="duotone" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Quick Access QR Codes
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scan these QR codes for instant access to our websites. Perfect for business cards and marketing materials.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <QRCodeDisplay 
              url="https://ghumanlawassociates.com"
              title="Ghuman Law Associates"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <QRCodeDisplay 
              url="https://nrilegalsolutions.ghumanlawassociates.com"
              title="NRI Legal Solutions"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            Note: These QR codes are generated for display purposes. For production use, please generate actual QR codes using a professional QR code generator service.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
