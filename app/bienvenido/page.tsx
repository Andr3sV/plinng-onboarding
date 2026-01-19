import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { QRCode } from "@/components/qr-code"
import { ArrowRight, Download } from "lucide-react"

export default function BienvenidoPage() {
  const videoUrl = "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing"

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20 lg:pb-0">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Bienvenido a Plinng
        </h1>
        <p className="text-lg text-muted-foreground">
          Plinng es tu asistente AI de marketing que genera posts para redes sociales y 
          posicionamiento SEO, además de ser tu recepcionista AI que atiende llamadas y 
          mensajes de WhatsApp. Te guiaremos paso a paso para poner en marcha tu app.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Descarga la app</h2>
          <p className="text-muted-foreground">
            Escanea el código QR con tu dispositivo móvil para descargar la aplicación.
          </p>
          <QRCode size="lg" />
          <Button asChild className="w-full lg:w-auto">
            <Link href="/descarga-app">
              <Download className="mr-2 h-4 w-4" />
              Descargar app
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Video de introducción</h2>
          <VideoPlayer src={videoUrl} title="Bienvenido a Plinng" />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <div className="fixed bottom-0 left-0 right-0 lg:relative lg:bottom-auto lg:left-auto lg:right-auto bg-background/95 backdrop-blur-sm border-t lg:border-t-0 p-4 lg:p-0 lg:bg-transparent z-10">
          <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
            <Link href="/descarga-app">
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

