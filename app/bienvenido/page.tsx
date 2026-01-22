import Link from "next/link"
import Image from "next/image"
import { MobileVideoContainer } from "@/components/mobile-video-container"

export default function BienvenidoPage() {
    const videoUrl = "/videos/hola-soy-maya.mp4"

    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                {/* Botón Siguiente en esquina superior derecha */}
                <div className="flex justify-end mb-[56px]">
                    <Link href="/descarga-app">
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
                <div className="relative flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-[54px]">
                    <div className="flex-1 flex flex-col items-start justify-center gap-4 w-full lg:w-auto">
                        <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[32px] sm:text-[36px] lg:text-[42px] font-bold">Bienvenido a Plinng</b>
                        <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                            En este vídeo te doy la bienvenida y te contamos cómo Plinng va a ayudarte a comunicar mejor tu negocio, ganar visibilidad y sentir que tu marketing está bajo control, desde el primer día.
                        </div>
                    </div>
                    <MobileVideoContainer
                        videoUrl={videoUrl}
                        title="Bienvenido a Plinng"
                    />
                </div>
            </div>
        </div>
    )
}
