"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { VideoPlayer } from "@/components/video-player"

const accountTypes = [
    {
        id: "facebook-instagram",
        title: "Facebook/Instagram",
    },
    {
        id: "google-empresa",
        title: "Google Empresa",
    },
    {
        id: "dominio-hosting",
        title: "Dominio/Hosting",
    },
]

const accountSteps = {
    "facebook-instagram": [
        {
            id: "step-1",
            title: "Paso 1: Crear la página de Facebook de la empresa.",
            description: "Si la página ya está creada, continúa con el paso 2.",
            videoUrl: "https://drive.google.com/file/d/1HvSpGU6wSp1e6tUJ83IhaxLyaGhJf4Pg/view?usp=sharing",
        },
        {
            id: "step-2",
            title: "Paso 2: Otorgar acceso a Plinng a la página de Facebook de la empresa.",
            description: "",
            videoUrl: "https://drive.google.com/file/d/1oWctoy4n_PsP8G9kXHDuOeLn3ketqdrS/view?usp=sharing",
        },
        {
            id: "step-3",
            title: "Paso 3: Verificar la vinculación de Instagram con Facebook",
            description: "",
            videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
            subSteps: [
                {
                    id: "substep-3a",
                    title: "Si ya tienes cuenta de Instagram",
                    description: "",
                    videoUrl: "https://drive.google.com/file/d/1qqAqnaLSrSG1L-9B3UsB-CxOC3fUWZ_q/view?usp=sharing",
                },
                {
                    id: "substep-3b",
                    title: "Si aún no tienes cuenta de Instagram",
                    description: "",
                    videoUrl: "https://drive.google.com/file/d/1PPoA7In0bIURuDNi6ahSzZsNuKPor2tO/view?usp=sharing",
                },
            ],
        },
    ],
    "google-empresa": [
        {
            id: "step-1",
            title: "Crear perfil de Google Empresa",
            description: "Puedes hacerlo desde este enlace: https://business.google.com/es-all/business-profile/",
            videoUrl: "https://drive.google.com/file/d/17J8JW3ksVl8GPJH9jMRBIdFQcgw5Z98k/view?usp=sharing",
        },
        {
            id: "step-2",
            title: "Añadir Plinng como gestor de la cuenta Google Empresa",
            description: "",
            videoUrl: "https://drive.google.com/file/d/1ffVkV1hjdVAat4ctqKajaIyzlyMfsfv1/view?usp=sharing",
        },
    ],
    "dominio-hosting": [
        {
            id: "step-1",
            title: "Rellena el siguiente formulario",
            description: "",
            videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
        },
    ],
}

export default function ConectaCuentasPage() {
    const [selectedAccount, setSelectedAccount] = useState<string | null>("facebook-instagram")

    const handleAccountClick = (accountId: string) => {
        if (selectedAccount === accountId) {
            setSelectedAccount(null)
        } else {
            setSelectedAccount(accountId)
        }
    }

    const getAccountSteps = (accountId: string) => {
        return accountSteps[accountId as keyof typeof accountSteps] || []
    }

    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                {/* Botón Siguiente en esquina superior derecha */}
                <div className="flex justify-end mb-[56px]">
                    <Link href="/tour">
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
                    </Link>
                </div>

                {/* Contenido principal */}
                <div className="w-full relative flex items-start text-left text-base text-black">
                    <div className="flex-1 flex flex-col items-start justify-center gap-4">
                        <b className="self-stretch relative text-[42px] tracking-[-1.5px] leading-[60px] font-bold">
                            Conecta tus cuentas
                        </b>
                        <div className="self-stretch relative text-[18px] leading-[28px] text-[#2F4F4F]">
                            Para que Plinng pueda trabajar por ti, <strong>necesitamos conectar tus herramientas</strong>.
                            Así podremos crear, programar y analizar tu contenido de forma automática, siempre con tu aprobación.
                        </div>

                        {/* Cards de selección */}
                        <div className="self-stretch flex items-start gap-4 text-center">
                            {accountTypes.map((account) => {
                                const isSelected = selectedAccount === account.id
                                return (
                                    <div
                                        key={account.id}
                                        onClick={() => handleAccountClick(account.id)}
                                        className={`self-stretch flex-1 rounded-[18px] flex items-start justify-center p-4 cursor-pointer transition-all ${isSelected
                                            ? "bg-[#BEFF50]"
                                            : "border border-[#EDEEEC] border-solid bg-white hover:bg-[#EDEEEC]/50"
                                            }`}
                                    >
                                        <div className="self-stretch w-full relative leading-[28px] font-semibold flex items-center justify-center shrink-0">
                                            {account.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Steps en acordeón cuando hay una cuenta seleccionada */}
                        {selectedAccount && (
                            <div className="self-stretch flex flex-col gap-4 mt-4">
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {getAccountSteps(selectedAccount).map((step) => (
                                        <AccordionItem
                                            key={step.id}
                                            value={step.id}
                                            className="rounded-[18px] border border-[#EDEEEC] border-solid bg-white border-b"
                                        >
                                            <AccordionTrigger className="px-8 py-4 hover:no-underline [&[data-state=open]]:rounded-t-[18px] [&[data-state=closed]]:rounded-[18px]">
                                                <div className="flex-1 flex flex-col items-start justify-center text-left">
                                                    <div className="self-stretch relative leading-[28px] font-semibold text-black">
                                                        {step.title}
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-8 pb-4 pt-0">
                                                {step.description && (
                                                    <div className="self-stretch relative leading-[28px] text-[#2F4F4F] mb-4">
                                                        {step.description.includes('http') ? (
                                                            <>
                                                                {step.description.split(/(https?:\/\/[^\s]+)/).map((part, index) =>
                                                                    part.match(/^https?:\/\//) ? (
                                                                        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-[#0000EE] underline hover:text-[#0000CC]">
                                                                            {part}
                                                                        </a>
                                                                    ) : (
                                                                        <span key={index}>{part}</span>
                                                                    )
                                                                )}
                                                            </>
                                                        ) : (
                                                            step.description
                                                        )}
                                                    </div>
                                                )}

                                                {"subSteps" in step && step.subSteps ? (
                                                    <div className="space-y-4">
                                                        <Accordion type="single" collapsible className="w-full space-y-2">
                                                            {step.subSteps.map((subStep: { id: string; title: string; description: string; videoUrl: string }) => (
                                                                <AccordionItem
                                                                    key={subStep.id}
                                                                    value={subStep.id}
                                                                    className="rounded-[18px] border border-[#EDEEEC] border-solid bg-[#EDEEEC]/30"
                                                                >
                                                                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                                                                        <div className="flex-1 flex flex-col items-start justify-center text-left">
                                                                            <div className="self-stretch relative leading-[28px] font-semibold text-black">
                                                                                {subStep.title}
                                                                            </div>
                                                                        </div>
                                                                    </AccordionTrigger>
                                                                    <AccordionContent className="px-4 pb-4">
                                                                        {subStep.description && (
                                                                            <div className="self-stretch relative leading-[28px] text-[#2F4F4F] mb-4">
                                                                                {subStep.description}
                                                                            </div>
                                                                        )}
                                                                        <div className="w-full">
                                                                            <VideoPlayer
                                                                                src={subStep.videoUrl}
                                                                                title={subStep.title}
                                                                                aspectRatio="horizontal"
                                                                            />
                                                                        </div>
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            ))}
                                                        </Accordion>
                                                    </div>
                                                ) : (
                                                    <div className="w-full">
                                                        <VideoPlayer
                                                            src={step.videoUrl}
                                                            title={step.title}
                                                            aspectRatio="horizontal"
                                                        />
                                                    </div>
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
