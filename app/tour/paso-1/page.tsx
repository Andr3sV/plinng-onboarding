import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Paso1Page() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
                <Button asChild variant="ghost" className="mb-4">
                    <Link href="/tour">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver
                    </Link>
                </Button>
                <div className="flex items-center gap-3">
                    <Play className="h-8 w-8 text-primary" />
                    <h1 className="text-[42px] font-bold tracking-[-1.5px]">
                        Tour por la app
                    </h1>
                </div>
                <p className="text-[18px] leading-[28px] text-muted-foreground">
                    Aprende a navegar por la app y usar las funciones básicas de Plinng.
                </p>
            </div>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Navegación principal</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            La pantalla principal muestra un resumen de tus publicaciones, estadísticas
                            y mensajes recientes. Usa el menú lateral para acceder a las diferentes secciones.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Crear tu primera publicación</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Haz clic en el botón &quot;Nueva publicación&quot; y el asistente AI generará contenido
                            personalizado basado en tu negocio. Puedes editar el contenido antes de publicarlo.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Gestionar mensajes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            El recepcionista AI atiende automáticamente los mensajes de WhatsApp. Puedes
                            revisar las conversaciones y tomar el control cuando sea necesario.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

            <div className="flex justify-end pt-4">
                <Button asChild>
                    <Link href="/tour">Volver al Tour</Link>
                </Button>
            </div>
        </div>
    )
}

