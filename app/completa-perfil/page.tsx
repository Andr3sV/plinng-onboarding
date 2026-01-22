"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MobileVideoContainer } from "@/components/mobile-video-container"

export default function CompletaPerfilPage() {
    const [selectedStep, setSelectedStep] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    // Pasos del perfil - cada uno tiene su propio video
    const steps = [
        {
            id: "step-1",
            title: "Paso 1: Información básica",
            description: "Completa tu nombre, email y datos de contacto para personalizar tu experiencia.",
            videoUrl: "https://www.canva.com/design/DAG_C5KS3oU/EZD4sgA4sWXk877F3AgAJg/watch",
        },
        {
            id: "step-2",
            title: "Paso 2: Foto de perfil",
            description: "Sube una foto de perfil para que tu asistente AI pueda reconocerte mejor.",
            videoUrl: "https://www.canva.com/design/DAG_FlNWuV4/yDduRWFmCREjTzqAuyvPCQ/watch?utm_content=DAG_FlNWuV4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h351124928d",
        },
        {
            id: "step-3",
            title: "Paso 3: Preferencias básica",
            description: "Configura tus preferencias de notificaciones y ajustes de privacidad.",
            videoUrl: "https://www.canva.com/design/DAG_FlNWuV4/yDduRWFmCREjTzqAuyvPCQ/watch?utm_content=DAG_FlNWuV4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h351124928d",
        },
        {
            id: "step-4",
            title: "Paso 4: Verificación",
            description: "Verifica tu cuenta para activar todas las funciones de Plinng.",
            videoUrl: "https://www.canva.com/design/DAG_FlNWuV4/yDduRWFmCREjTzqAuyvPCQ/watch?utm_content=DAG_FlNWuV4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h351124928d",
        },
    ]

    const handleStepClick = (index: number) => {
        if (index === selectedStep) return

        setIsTransitioning(true)
        setTimeout(() => {
            setSelectedStep(index)
            setIsTransitioning(false)
        }, 300)
    }

    const getEmbedUrl = (url: string) => {
        // Canva: https://www.canva.com/design/DESIGN_ID/...
        const canvaMatch = url.match(/canva\.com\/design\/([a-zA-Z0-9_-]+)/)
        if (canvaMatch) {
            return `https://www.canva.com/design/${canvaMatch[1]}/view?embed`
        }

        // YouTube Shorts: https://www.youtube.com/shorts/VIDEO_ID
        const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
        if (shortsMatch) {
            return `https://www.youtube.com/embed/${shortsMatch[1]}`
        }

        // YouTube regular: https://www.youtube.com/watch?v=VIDEO_ID
        const youtubeMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/)
        if (youtubeMatch) {
            return `https://www.youtube.com/embed/${youtubeMatch[1]}`
        }

        // YouTube youtu.be: https://youtu.be/VIDEO_ID
        const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
        if (youtuBeMatch) {
            return `https://www.youtube.com/embed/${youtuBeMatch[1]}`
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
                {/* Botón Conecta tus cuentas en esquina superior derecha - Desktop */}
                <div className="hidden lg:flex justify-end mb-[56px]">
                    <Link href="/conecta-cuentas">
                        <div className="rounded-[18px] bg-[#BEFF50] flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90">
                            <div className="relative leading-7 font-semibold text-[#000000]">Conecta tus cuentas</div>
                            <Image
                                src="/assets/icons/arrow2.svg"
                                className="h-5 w-7 ml-2"
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
                        <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[42px] sm:text-[36px] lg:text-[42px] font-bold">Completa tu perfil</b>
                        <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                            Aquí nos <strong>cuentas lo esencial sobre tu negocio: qué haces, a quién te diriges, cómo quieres comunicar y cuáles son tus objetivos.</strong>
                            <br /><br />
                            Cuanto más claro seas, mejor entenderá Plinng tu negocio y mejores serán los resultados desde el primer día.
                        </div>

                        {/* Steps Cards */}
                        <div className="self-stretch flex flex-col gap-4">
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    onClick={() => handleStepClick(index)}
                                    className={`self-stretch rounded-[18px] flex items-center py-4 px-8 cursor-pointer transition-all ${selectedStep === index
                                        ? "shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] bg-[#EDEEEC]"
                                        : "border border-[#EDEEEC] border-solid bg-white hover:bg-[#EDEEEC]/50"
                                        }`}
                                >
                                    <div className="flex-1 flex flex-col items-start justify-center gap-1">
                                        <div className="self-stretch relative text-[18px] leading-[28px] font-semibold text-black">
                                            {step.title}
                                        </div>
                                        <div className="self-stretch relative text-[18px] leading-[28px] text-[#2F4F4F]">
                                            {step.description}
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
                    <div className="relative shrink-0">
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
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${selectedStep === index && !isTransitioning
                                        ? "opacity-100 z-10"
                                        : "opacity-0 z-0"
                                        }`}
                                >
                                    <iframe
                                        src={getEmbedUrl(step.videoUrl)}
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Botón Conecta tus cuentas al final - Mobile */}
                <div className="flex lg:hidden mt-8 mb-[80px]">
                    <Link href="/conecta-cuentas" className="w-full">
                        <div className="rounded-[18px] bg-[#BEFF50] flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90 w-full">
                            <div className="relative leading-7 font-semibold text-[#000000]">Conecta tus cuentas</div>
                            <Image
                                src="/assets/icons/arrow2.svg"
                                className="h-5 w-7 ml-2"
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

