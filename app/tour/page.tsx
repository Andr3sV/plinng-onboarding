"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MobileVideoContainer } from "@/components/mobile-video-container"

export default function TourPage() {
    const [selectedStep, setSelectedStep] = useState<number | null>(null)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const videoContainerRef = useRef<HTMLDivElement>(null)

    // En desktop, seleccionar el primer paso por defecto
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            setSelectedStep(0)
        }
    }, [])

    // Pasos del tour - cada uno tiene su propio video
    const steps = [
        {
            id: "step-1",
            title: "Calendario",
            shortDescription: "Gestiona tus publicaciones programadas",
            videoUrl: "/videos/Calendario - Tour.mp4",
        },
        {
            id: "step-2",
            title: "Maya",
            shortDescription: "Asistente AI de marketing",
            videoUrl: "/videos/Maya - Tour.mp4",
        },
        {
            id: "step-3",
            title: "Propuestas: feedback",
            shortDescription: "Aprobar contenido generado",
            videoUrl: "/videos/Feedback - Tour.mp4",
        },
        {
            id: "step-4",
            title: "Propuestas: solicitar cambios",
            shortDescription: "Personalizar propuestas",
            videoUrl: "/videos/Solicitar cambios - Maya.mp4",
        },
        {
            id: "step-5",
            title: "Sophia",
            shortDescription: "Recepcionista IA 24/7 y gestora de reseñas",
            videoUrl: "/videos/Sophia.mp4",
        },
        {
            id: "step-6",
            title: "Identidad Digital",
            shortDescription: "Configura tu marca",
            videoUrl: "/videos/Identidad digital - Tour.mp4",
        },
        {
            id: "step-7",
            title: "Galería",
            shortDescription: "Organiza tus recursos visuales",
            videoUrl: "/videos/Galeria - Tour.mp4",
        },
        {
            id: "step-8",
            title: "Menú",
            shortDescription: "Descubre como utilizar el menu",
            videoUrl: "/videos/Galeria - Tour.mp4",
        },
    ]

    const handleStepClick = (index: number) => {
        if (index === selectedStep) return

        setIsTransitioning(true)
        setTimeout(() => {
            setSelectedStep(index)
            setIsTransitioning(false)

            // Scroll automático al video en móvil
            if (videoContainerRef.current && window.innerWidth < 1024) {
                setTimeout(() => {
                    videoContainerRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    })
                }, 100)
            }
        }, 300)
    }

    const getEmbedUrl = (url: string) => {
        // Si es un video local (empieza con /videos/), devolver la URL directamente
        if (url.startsWith('/videos/')) {
            return url
        }

        // Google Drive share link
        const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
        if (fileIdMatch) {
            return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
        }
        return url
    }

    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                {/* Botón Siguiente en esquina superior derecha - Desktop */}
                <div className="hidden lg:flex justify-end mb-[56px]">
                    <Link href="/faq">
                        <div className="rounded-[18px] bg-black flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90">
                            <div className="relative leading-7 font-semibold text-white">Preguntas frecuentes</div>
                            <Image
                                src="/assets/icons/arrow2.svg"
                                className="h-5 w-7 ml-2 brightness-0 invert"
                                width={28}
                                height={20}
                                alt=""
                            />
                        </div>
                    </Link>
                </div>

                {/* Contenido principal */}
                <div className="relative flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-[54px]">
                    <div className="flex-1 flex flex-col items-start justify-center gap-4 w-full lg:w-auto">
                        <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[42px] sm:text-[36px] lg:text-[42px] font-bold">Tour por la app</b>
                        <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                            Aprende a usar todas las funciones de Plinng con este tour guiado. Explora cada sección para dominar tu asistente AI de marketing.
                        </div>

                        {/* Steps Cards */}
                        <div className="self-stretch flex flex-col gap-4">
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    onClick={() => handleStepClick(index)}
                                    data-ph-capture
                                    data-ph-capture-attribute-step-id={step.id}
                                    data-ph-capture-attribute-step-title={step.title}
                                    className={`self-stretch rounded-[18px] flex items-center py-4 px-8 cursor-pointer transition-all ${selectedStep === index
                                        ? "shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] bg-[#EDEEEC]"
                                        : "border border-[#EDEEEC] border-solid bg-white hover:bg-[#EDEEEC]/50"
                                        }`}
                                >
                                    <div className="flex-1 flex flex-col gap-1">
                                        <div className="relative text-[16px] leading-[24px] font-semibold text-black">
                                            {step.title}
                                        </div>
                                        <div className="relative text-[16px] leading-[24px] font-normal text-[#777777]">
                                            {step.shortDescription}
                                        </div>
                                    </div>
                                    <Image
                                        src="/assets/icons/arrow2.svg"
                                        className="h-5 w-7 ml-2 shrink-0"
                                        width={28}
                                        height={20}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Video Container with Animation */}
                    <div ref={videoContainerRef} className="relative shrink-0">
                        <div
                            className="relative rounded-[40px] bg-[#EDEEEC] border-[11px] border-black"
                            style={{
                                width: '277.3px',
                                height: '600px',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {steps.map((step, index) => {
                                const videoUrl = getEmbedUrl(step.videoUrl)
                                const isVideoLocal = videoUrl.startsWith('/videos/')
                                
                                return (
                                    <div
                                        key={step.id}
                                        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${selectedStep === index && !isTransitioning && selectedStep !== null
                                            ? "opacity-100 z-10"
                                            : "opacity-0 z-0"
                                            }`}
                                    >
                                        {isVideoLocal ? (
                                            <video
                                                src={videoUrl}
                                                title={step.title}
                                                controls
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        ) : (
                                            <iframe
                                                src={videoUrl}
                                                title={step.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    border: 'none',
                                                    margin: '0',
                                                    padding: '0',
                                                    display: 'block',
                                                }}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Botón Siguiente al final - Mobile */}
                <div className="flex lg:hidden mt-8 mb-[80px]">
                    <Link href="/faq" className="w-full">
                        <div className="rounded-[18px] bg-black flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90 w-full">
                            <div className="relative leading-7 font-semibold text-white">Preguntas frecuentes</div>
                            <Image
                                src="/assets/icons/arrow2.svg"
                                className="h-5 w-7 ml-2 brightness-0 invert"
                                width={28}
                                height={20}
                                alt=""
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
