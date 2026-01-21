import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VideoPlayer } from "@/components/video-player"
import { Play, Settings, BarChart3, MessageSquare } from "lucide-react"

const tourSteps = [
    {
        href: "/tour/paso-1",
        title: "Tour por la app",
        description: "Aprende a navegar por la app y usar las funciones básicas",
        icon: Play,
    },
    {
        href: "/tour/paso-2",
        title: "Configuración",
        description: "Personaliza tu asistente AI según tus necesidades",
        icon: Settings,
    },
    {
        href: "/tour/paso-3",
        title: "Analíticas",
        description: "Revisa el rendimiento de tus publicaciones y campañas",
        icon: BarChart3,
    },
    {
        href: "/tour/paso-4",
        title: "Mensajería",
        description: "Gestiona las conversaciones de tu recepcionista AI",
        icon: MessageSquare,
    },
]

export default function TourPage() {
    const videoUrl = "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing"

    return (
        <div className="space-y-8 max-w-6xl mx-auto pb-20 lg:pb-0 relative">
            {/* Botón Siguiente en esquina superior derecha */}
            <div className="flex justify-end mb-[56px]">
                <Link href="/faq">
                    <div className="rounded-[18px] bg-[#BEFF50] flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90">
                        <div className="relative leading-7 font-semibold text-[#000000]">Siguiente</div>
                        <Image
                            src="/assets/icons/arrow2.svg"
                            className="h-5 w-7 ml-2"
                            width={28}
                            height={20}
                            alt=""
                        />
                    </div>
                </Link>
            </div>

            <div className="space-y-4">
                <h1 className="text-[42px] font-bold tracking-[-1.5px]">
                    Tour por la app y primeros pasos
                </h1>
                <p className="text-[18px] leading-[28px] text-muted-foreground">
                    Aprende a usar todas las funciones de Plinng con este tour guiado.
                    Explora cada sección para dominar tu asistente AI de marketing.
                </p>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Video de introducción</h2>
                <VideoPlayer src={videoUrl} title="Tour por la app" />
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Pasos del tour</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tourSteps.map((step) => {
                        const Icon = step.icon
                        return (
                            <Link key={step.href} href={step.href}>
                                <Card className="h-full transition-all hover:shadow-lg hover:border-[#38ED82] cursor-pointer group">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-[#38ED82]/10 transition-colors">
                                                <Icon className="h-6 w-6 text-primary group-hover:text-[#38ED82] transition-colors" />
                                            </div>
                                            <CardTitle className="text-xl">{step.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">
                                            {step.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

