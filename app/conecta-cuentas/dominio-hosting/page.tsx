import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { VideoPlayer } from "@/components/video-player"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function DominioHostingPage() {
  const steps = [
    {
      id: "step-1",
      title: "Rellena el siguiente formulario",
      description: "Completa el formulario con la información de tu dominio y hosting para que Plinng pueda configurar todo correctamente.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Dominio / Hosting
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Sigue estos pasos para configurar tu dominio y hosting con Plinng.
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
            Volver
            <ArrowLeft className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

