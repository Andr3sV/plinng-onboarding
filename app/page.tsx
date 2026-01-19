import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const navigationCards = [
    {
        href: "/bienvenido",
        title: "Bienvenido a Plinng",
        description: "Conoce qué es Plinng y cómo puede ayudarte",
    },
    {
        href: "/descarga-app",
        title: "Descarga la app",
        description: "Instala la aplicación en tu dispositivo",
    },
    {
        href: "/completa-perfil",
        title: "Completa tu perfil",
        description: "Configura tu información personal",
    },
    {
        href: "/conecta-cuentas",
        title: "Conecta tus cuentas",
        description: "Vincula tus redes sociales y servicios",
    },
    {
        href: "/tour",
        title: "Tour por la app",
        description: "Aprende a usar las funciones principales",
    },
    {
        href: "/faq",
        title: "Preguntas frecuentes",
        description: "Resuelve tus dudas más comunes",
    },
]

export default function Home() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4 py-8">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    Bienvenido a Plinng
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Tu asistente AI de marketing y recepcionista virtual. Sigue estos pasos para comenzar.
                </p>
                <div className="pt-4">
                    <Button asChild size="lg" className="text-lg px-8">
                        <Link href="/bienvenido">
                            Empezar
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {navigationCards.map((card, index) => {
                    return (
                        <Link key={card.href} href={card.href}>
                            <Card className="h-full transition-all hover:shadow-lg hover:border-[#38ED82] cursor-pointer group">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-[#38ED82]/10 transition-colors">
                                            <span className="text-xl font-bold text-primary group-hover:text-[#38ED82] transition-colors">
                                                {index + 1}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl">{card.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {card.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

