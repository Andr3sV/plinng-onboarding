import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { QRCode } from "@/components/qr-code"
import { ArrowRight, Download } from "lucide-react"

export default function BienvenidoPage() {
    const videoUrl = "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing"

    return (
        <div className="max-w-4xl mx-auto pb-20 lg:pb-0">
            <div className="space-y-4 mb-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Bienvenido a Plinng
                </h1>
                <p className="text-lg text-muted-foreground">
                    Plinng es tu asistente AI de marketing que genera posts para redes sociales y
                    posicionamiento SEO, además de ser tu recepcionista AI que atiende llamadas y
                    mensajes de WhatsApp. Te guiaremos paso a paso para poner en marcha tu app.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-4">
                <div className="m-0 p-0">
                    <VideoPlayer src={videoUrl} title="Bienvenido a Plinng" aspectRatio="vertical" />
                </div>

                <div className="space-y-4 m-0">
                    <p className="text-muted-foreground m-0">
                        Escanea el código QR con tu dispositivo móvil para descargar la aplicación.
                    </p>
                    <div className="m-0 p-0">
                        <QRCode size="lg" />
                    </div>
                    <Button asChild className="w-full lg:w-auto bg-[#DBFF95] hover:bg-[#DBFF95]/90 text-foreground">
                        <Link href="/descarga-app">
                            <Download className="mr-2 h-4 w-4" />
                            Descargar app
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="flex justify-end">
                <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
                    <Link href="/descarga-app">
                        Siguiente
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}

