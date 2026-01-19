import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/video-player"
import { ArrowRight, Play, Settings, BarChart3, MessageSquare } from "lucide-react"

const tourSteps = [
  {
    href: "/tour/paso-1",
    title: "Primeros pasos",
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
    <div className="space-y-8 max-w-6xl mx-auto pb-20 lg:pb-0">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tour por la app y primeros pasos
        </h1>
        <p className="text-lg text-muted-foreground">
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

      <div className="flex justify-end pt-4">
        <div className="fixed bottom-0 left-0 right-0 lg:relative lg:bottom-auto lg:left-auto lg:right-auto bg-background/95 backdrop-blur-sm border-t lg:border-t-0 p-4 lg:p-0 lg:bg-transparent z-10">
          <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
            <Link href="/faq">
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

