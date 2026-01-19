import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { QRCode } from "@/components/qr-code"
import { ArrowRight, Download, Smartphone } from "lucide-react"

export default function DescargaAppPage() {
  const videoUrl = "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing"

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20 lg:pb-0">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Descarga la app
        </h1>
        <p className="text-lg text-muted-foreground">
          Descarga Plinng en tu dispositivo móvil para comenzar a usar todas las funciones 
          de tu asistente AI de marketing y recepcionista virtual.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Escanea el código QR</h2>
          <QRCode size="lg" />
          <div className="space-y-3">
            <Button asChild className="w-full" size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-5 w-5" />
                Descargar para iOS
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full" size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-5 w-5" />
                Descargar para Android
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Video tutorial</h2>
          <VideoPlayer src={videoUrl} title="Cómo descargar la app" />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <div className="fixed bottom-0 left-0 right-0 lg:relative lg:bottom-auto lg:left-auto lg:right-auto bg-background/95 backdrop-blur-sm border-t lg:border-t-0 p-4 lg:p-0 lg:bg-transparent z-10">
          <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
            <Link href="/completa-perfil">
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

