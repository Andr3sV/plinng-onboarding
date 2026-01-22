import Link from "next/link"
import Image from "next/image"
import { MobileVideoContainer } from "@/components/mobile-video-container"

export default function DescargaAppPage() {
    const videoUrl = "/videos/bajar-app.mp4"

    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                {/* Botón Completa tu perfil en esquina superior derecha */}
                <div className="flex justify-end mb-[56px]">
                    <Link href="/completa-perfil">
                        <div className="rounded-[18px] bg-[#BEFF50] flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90">
                            <div className="relative leading-7 font-semibold text-[#000000]">Completa tu perfil</div>
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
                        <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[32px] sm:text-[36px] lg:text-[42px] font-bold">Descarga la app</b>
                        <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                            Aquí te enseñamos cómo descargar la app de Plinng y entrar en segundos.
                            Así podrás gestionar tu marketing desde el móvil, aprobar contenidos y seguir todo en un solo lugar.
                        </div>

                        {/* App Store and Google Play buttons */}
                        <div className="flex items-start gap-4 text-[9px] text-white">
                            <div className="h-11 w-[130px] relative rounded-md bg-black border border-gray-600 border-solid box-border overflow-hidden shrink-0">
                                <Image
                                    src="/assets/download-plinng/Apple.svg"
                                    className="absolute top-[8px] left-[8px] w-5 h-6"
                                    width={20}
                                    height={24}
                                    alt="Apple logo"
                                />
                                <div className="absolute top-[calc(50%_-_13.5px)] left-[36px] w-[96px] flex flex-col items-start">
                                    <div className="self-stretch relative leading-[9px] font-medium">Download on the</div>
                                    <div className="self-stretch relative text-lg tracking-[-0.47px] leading-[100%] font-medium">App Store</div>
                                </div>
                            </div>
                            <div className="h-11 w-[130px] relative rounded-md bg-black border border-gray-600 border-solid box-border overflow-hidden shrink-0 text-[10px]">
                                <Image
                                    src="/assets/download-plinng/Playstore.svg"
                                    className="absolute top-[8px] left-[8px] w-[21px] h-6"
                                    width={21}
                                    height={24}
                                    alt="Google Play logo"
                                />
                                <div className="absolute top-[5px] left-[36px] flex flex-col items-start gap-[3px]">
                                    <div className="self-stretch relative uppercase">GET IT ON</div>
                                    <Image
                                        src="/assets/download-plinng/path90.svg"
                                        className="w-[74px] h-[15px] relative"
                                        width={74}
                                        height={15}
                                        alt="Google Play"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* QR Code section */}
                        <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                            o puedes escanear el código QR con tu dispositivo móvil:
                        </div>
                        <div className="rounded-[30px] bg-[#BEFF50] flex flex-col items-center justify-center p-4 gap-2 text-center text-sm w-fit">
                            <Image
                                src="/assets/download-plinng/QR code.png"
                                className="w-[100px] h-[100px] relative rounded-[10px] max-h-full object-cover"
                                width={100}
                                height={100}
                                alt="QR Code para descargar Plinng"
                            />
                            <div className="relative leading-6 font-semibold text-[#000000]">Descarga Plinng.</div>
                        </div>
                    </div>
                    <MobileVideoContainer
                        videoUrl={videoUrl}
                        title="Descarga la app"
                        showBorder={true}
                    />
                </div>
            </div>
        </div>
    )
}
