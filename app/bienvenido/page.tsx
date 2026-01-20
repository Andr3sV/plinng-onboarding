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
                <h1 className="text-[42px] font-bold tracking-[-1.5px]">
                    Bienvenido a Plinng
                </h1>
                <p className="text-[18px] leading-[28px] text-muted-foreground">
                    En este vídeo te doy la bienvenida y te contamos cómo Plinng va a ayudarte a comunicar mejor tu negocio, ganar visibilidad y sentir que tu marketing está bajo control, desde el primer día.
                </p>
                <p className="text-[18px] leading-[28px] font-semibold text-foreground">
                    ¡Haz clic y empezamos!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-4">
                <div className="m-0 p-0">
                    <VideoPlayer src={videoUrl} title="Bienvenido a Plinng" aspectRatio="vertical" />
                </div>

                <div className="space-y-4 m-0">
                    <p className="text-[18px] leading-[28px] text-muted-foreground m-0">
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

