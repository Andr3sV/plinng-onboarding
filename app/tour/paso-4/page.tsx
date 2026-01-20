import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Paso4Page() {
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
          <MessageSquare className="h-8 w-8 text-primary" />
          <h1 className="text-[42px] font-bold tracking-[-1.5px]">
            Mensajería
          </h1>
        </div>
        <p className="text-[18px] leading-[28px] text-muted-foreground">
          Gestiona las conversaciones de tu recepcionista AI y atiende a tus clientes.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Centro de mensajes</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Revisa todas las conversaciones de WhatsApp atendidas por el recepcionista AI. 
              Puedes ver el historial completo y tomar el control cuando sea necesario.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Respuestas automáticas</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              El recepcionista AI responde automáticamente a preguntas frecuentes, toma 
              pedidos, agenda citas y proporciona información sobre tu negocio.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intervención manual</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Cuando el AI detecta una consulta compleja o importante, te notifica para que 
              puedas intervenir personalmente. También puedes tomar el control en cualquier momento.
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

