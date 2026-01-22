"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                {/* Botón Siguiente en esquina superior derecha */}
                <div className="flex justify-end mb-[56px]">
                    <div className="rounded-[18px] bg-[#BEFF50] flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90">
                        <div className="relative leading-7 font-semibold text-[#000000]">Siguiente</div>
                        <Image
                            src="/assets/icons/arrow2.svg"
                            className="h-5 w-7 ml-2"
                            width={28}
                            height={20}
                            alt=""
                        />
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="w-full relative flex flex-col items-start justify-center gap-4">
                    <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[32px] sm:text-[36px] lg:text-[42px] font-bold">
                        Preguntas frecuentes
                    </b>
                    <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                        Encuentra respuestas a las preguntas más comunes sobre Plinng.
                    </div>

                    {/* Secciones de FAQ */}
                    <div className="self-stretch flex flex-col gap-6 mt-4">
                        {faqCategories.map((category) => (
                            <div key={category.category} className="self-stretch flex flex-col gap-4">
                                <b className="w-full relative text-[28px] tracking-[-1.5px] inline-block font-inter text-black text-left">
                                    {category.category}
                                </b>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {category.questions.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${category.category}-${index}`}
                                            className="rounded-[18px] border border-[#EDEEEC] border-solid bg-white border-b"
                                        >
                                            <AccordionTrigger className="px-8 py-4 hover:no-underline [&[data-state=open]]:rounded-t-[18px] [&[data-state=closed]]:rounded-[18px]">
                                                <div className="flex-1 flex flex-col items-start justify-center text-left">
                                                    <div className="self-stretch relative leading-[28px] font-semibold text-black">
                                                        {faq.question}
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-8 pb-4 pt-0">
                                                <div className="self-stretch relative leading-[28px] text-[#2F4F4F]">
                                                    {faq.answer}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

