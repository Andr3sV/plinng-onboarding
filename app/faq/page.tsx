"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const faqCategories = [
  {
    category: "General",
    questions: [
      {
        question: "¿Qué es Plinng?",
        answer: "Plinng es una aplicación que te permite tener tu propio asistente AI de marketing que genera posts en redes sociales y posicionamiento SEO, además de un recepcionista AI que atiende llamadas y mensajes de WhatsApp.",
      },
      {
        question: "¿Cómo funciona el asistente AI de marketing?",
        answer: "El asistente AI analiza tu negocio y genera contenido personalizado para tus redes sociales, optimizado para SEO y listo para publicar. Puedes revisar y editar el contenido antes de publicarlo.",
      },
      {
        question: "¿Es seguro conectar mis cuentas?",
        answer: "Sí, utilizamos protocolos de seguridad estándar de la industria y solo solicitamos los permisos necesarios para publicar contenido. Tus credenciales están encriptadas y nunca las compartimos con terceros.",
      },
    ],
  },
  {
    category: "Configuración",
    questions: [
      {
        question: "¿Cuánto tiempo toma configurar la app?",
        answer: "La configuración inicial toma aproximadamente 10-15 minutos. Esto incluye completar tu perfil, conectar tus cuentas y realizar el tour inicial.",
      },
      {
        question: "¿Puedo cambiar la configuración después?",
        answer: "Sí, puedes modificar cualquier configuración en cualquier momento desde el menú de ajustes de la aplicación.",
      },
      {
        question: "¿Qué redes sociales puedo conectar?",
        answer: "Actualmente puedes conectar Instagram, Facebook, Twitter y LinkedIn. Estamos trabajando en agregar más plataformas.",
      },
    ],
  },
  {
    category: "Funcionalidades",
    questions: [
      {
        question: "¿El recepcionista AI puede responder cualquier pregunta?",
        answer: "El recepcionista AI está entrenado con información sobre tu negocio que tú proporcionas. Puede responder preguntas frecuentes, tomar pedidos, agendar citas y más. Para consultas complejas, puede transferir la conversación a ti.",
      },
      {
        question: "¿Puedo personalizar el tono de las publicaciones?",
        answer: "Sí, puedes configurar el tono, estilo y temas de las publicaciones según tu marca y preferencias en la sección de configuración.",
      },
      {
        question: "¿Cómo funciona el posicionamiento SEO?",
        answer: "El asistente AI analiza las mejores prácticas de SEO y optimiza tu contenido web y publicaciones para mejorar tu visibilidad en los motores de búsqueda.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFAQs = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0)

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Preguntas frecuentes
        </h1>
        <p className="text-lg text-muted-foreground">
          Encuentra respuestas a las preguntas más comunes sobre Plinng.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar preguntas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 w-full"
        />
      </div>

      <div className="space-y-6">
        {filteredFAQs.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No se encontraron preguntas que coincidan con tu búsqueda.
          </p>
        ) : (
          filteredFAQs.map((category) => (
            <div key={category.category} className="space-y-4">
              <h2 className="text-2xl font-semibold">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${category.category}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

