import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProfileSlides } from "@/components/profile-slides"
import { ArrowRight } from "lucide-react"

export default function CompletaPerfilPage() {
  // Placeholder slides - replace with actual content
  const slides = [
    {
      title: "Paso 1: Información básica",
      description: "Completa tu nombre, email y datos de contacto para personalizar tu experiencia.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
    {
      title: "Paso 2: Foto de perfil",
      description: "Sube una foto de perfil para que tu asistente AI pueda reconocerte mejor.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
    {
      title: "Paso 3: Preferencias",
      description: "Configura tus preferencias de notificaciones y ajustes de privacidad.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
    {
      title: "Paso 4: Verificación",
      description: "Verifica tu cuenta para activar todas las funciones de Plinng.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
  ]

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20 lg:pb-0">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Completa tu perfil
        </h1>
        <p className="text-lg text-muted-foreground">
          Sigue estos pasos para configurar tu perfil y comenzar a usar todas las funciones 
          de Plinng. Cada paso incluye un video tutorial para guiarte.
        </p>
      </div>

      <ProfileSlides slides={slides} />

      <div className="flex justify-end pt-4">
        <div className="fixed bottom-0 left-0 right-0 lg:relative lg:bottom-auto lg:left-auto lg:right-auto bg-background/95 backdrop-blur-sm border-t lg:border-t-0 p-4 lg:p-0 lg:bg-transparent z-10">
          <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
            <Link href="/conecta-cuentas">
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

