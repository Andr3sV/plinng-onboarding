import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { VideoPlayer } from "@/components/video-player"
import { ArrowRight } from "lucide-react"

export default function CompletaPerfilPage() {
  // Pasos del perfil - cada uno será un accordion item
  const steps = [
    {
      id: "step-1",
      title: "Paso 1: Información básica",
      description: "Completa tu nombre, email y datos de contacto para personalizar tu experiencia.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
    {
      id: "step-2",
      title: "Paso 2: Foto de perfil",
      description: "Sube una foto de perfil para que tu asistente AI pueda reconocerte mejor.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
    {
      id: "step-3",
      title: "Paso 3: Preferencias",
      description: "Configura tus preferencias de notificaciones y ajustes de privacidad.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
    {
      id: "step-4",
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

      <Accordion type="multiple" className="w-full space-y-4">
        {steps.map((step) => (
          <AccordionItem key={step.id} value={step.id} className="border rounded-lg px-4">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="text-lg font-semibold">{step.title}</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p className="text-muted-foreground">{step.description}</p>
              <div className="flex justify-center">
                <VideoPlayer src={step.videoUrl} title={step.title} aspectRatio="vertical" />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex justify-end pt-4">
        <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
          <Link href="/conecta-cuentas">
            Siguiente
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

