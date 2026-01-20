import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { VideoPlayer } from "@/components/video-player"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function FacebookInstagramPage() {
  const steps = [
    {
      id: "step-1",
      title: "Paso 1: Crear la página de Facebook de la empresa",
      description: "Si aún no tienes una página de Facebook para tu empresa, sigue estos pasos para crearla.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
    {
      id: "step-2",
      title: "Paso 2: Otorgar acceso a Plinng a la página de Facebook de la empresa",
      description: "Concede los permisos necesarios para que Plinng pueda gestionar y publicar contenido en tu página de Facebook.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
    {
      id: "step-3",
      title: "Paso 3: Verificar que la cuenta de Instagram esté vinculada a la página de Facebook o realizar la vinculación si aún no está hecha",
      description: "Asegúrate de que tu cuenta de Instagram esté correctamente vinculada a tu página de Facebook, o realiza la vinculación si aún no está hecha.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
      subSteps: [
        {
          id: "substep-3a",
          title: "Si ya tienes cuenta de Instagram",
          description: "Si ya tienes una cuenta de Instagram creada, sigue estos pasos para vincularla a tu página de Facebook.",
          videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
        },
        {
          id: "substep-3b",
          title: "Si aún no tienes cuenta de Instagram",
          description: "Si aún no has creado tu cuenta de Instagram, sigue estos pasos para crearla y vincularla a tu página de Facebook.",
          videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
        },
      ],
    },
  ]

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20 lg:pb-0">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/conecta-cuentas">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-[42px] font-bold tracking-[-1.5px]">
            Facebook / Instagram
          </h1>
        </div>
        <p className="text-[18px] leading-[28px] text-muted-foreground">
          Sigue estos pasos para conectar tus cuentas de Facebook e Instagram con Plinng.
        </p>
      </div>

      <Accordion type="multiple" className="w-full space-y-4">
        {steps.map((step) => (
          <AccordionItem key={step.id} value={step.id} className="border rounded-lg px-4">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="text-lg font-semibold">{step.title}</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p className="text-[18px] leading-[28px] text-muted-foreground">{step.description}</p>
              
              {step.subSteps ? (
                <div className="space-y-4">
                  <Accordion type="multiple" className="w-full">
                    {step.subSteps.map((subStep) => (
                      <AccordionItem key={subStep.id} value={subStep.id} className="border rounded-lg px-4 bg-muted/30">
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium">{subStep.title}</span>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 pb-4">
                          <p className="text-[18px] leading-[28px] text-muted-foreground">{subStep.description}</p>
                          <div className="flex justify-center">
                            <VideoPlayer src={subStep.videoUrl} title={subStep.title} aspectRatio="vertical" />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ) : (
                <div className="flex justify-center">
                  <VideoPlayer src={step.videoUrl} title={step.title} aspectRatio="vertical" />
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex justify-end pt-4">
        <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
          <Link href="/conecta-cuentas">
            Volver
            <ArrowLeft className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

