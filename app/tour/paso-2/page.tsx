import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Paso2Page() {
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
          <Settings className="h-8 w-8 text-primary" />
          <h1 className="text-[42px] font-bold tracking-[-1.5px]">
            Configuración
          </h1>
        </div>
        <p className="text-[18px] leading-[28px] text-muted-foreground">
          Personaliza tu asistente AI según tus necesidades y preferencias.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Preferencias de contenido</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Configura el tono, estilo y temas de tus publicaciones. Puedes elegir entre 
              formal, casual, profesional o creativo, y especificar los temas que quieres 
              que el AI priorice.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Configuración del recepcionista</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Personaliza las respuestas del recepcionista AI, establece horarios de 
              atención y configura las respuestas automáticas para situaciones comunes.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Decide qué notificaciones quieres recibir: nuevas publicaciones generadas, 
              mensajes importantes, estadísticas diarias, etc.
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

