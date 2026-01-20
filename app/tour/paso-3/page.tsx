import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Paso3Page() {
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
          <BarChart3 className="h-8 w-8 text-primary" />
          <h1 className="text-[42px] font-bold tracking-[-1.5px]">
            Analíticas
          </h1>
        </div>
        <p className="text-[18px] leading-[28px] text-muted-foreground">
          Revisa el rendimiento de tus publicaciones y campañas de marketing.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard de estadísticas</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              El dashboard muestra métricas clave como engagement, alcance, clics y 
              conversiones. Puedes filtrar por período de tiempo y plataforma.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reportes de rendimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Genera reportes detallados sobre el rendimiento de tus publicaciones. 
              Identifica qué contenido funciona mejor y optimiza tu estrategia.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análisis de SEO</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Monitorea tu posicionamiento en los motores de búsqueda y recibe 
              recomendaciones para mejorar tu visibilidad online.
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

