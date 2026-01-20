import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { ArrowRight } from "lucide-react"

export default function DescargaAppPage() {
    const videoUrl = "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing"

    return (
        <div className="max-w-4xl mx-auto pb-20 lg:pb-0">
            <div className="space-y-4 mb-6">
                <h1 className="text-[42px] font-bold tracking-[-1.5px]">
                    Descarga la app
                </h1>
                <p className="text-[18px] leading-[28px] text-muted-foreground">
                    Aquí te enseñamos cómo descargar la app de Plinng y entrar en segundos.
                    Así podrás gestionar tu marketing desde el móvil, aprobar contenidos y seguir todo en un solo lugar.
                </p>
            </div>

            <div className="mb-8">
                <VideoPlayer src={videoUrl} title="Cómo descargar la app" aspectRatio="vertical" />
            </div>

            <div className="flex justify-end">
                <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
                    <Link href="/completa-perfil">
                        Completa tu perfil
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}
