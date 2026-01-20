import Link from "next/link"
import Image from "next/image"

export default function DescargaAppPage() {
    const videoUrl = "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing"

    return (
        <div className="w-full flex items-center justify-center px-4 pt-16 sm:px-6 sm:pt-12 lg:px-[40px] lg:pt-16 pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-[54px]">
                <div className="flex-1 flex flex-col items-start justify-center gap-4 w-full lg:w-auto">
                    <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[32px] sm:text-[36px] lg:text-[42px] font-bold">Descarga la app</b>
                    <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                        Aquí te enseñamos cómo descargar la app de Plinng y entrar en segundos.
                        Así podrás gestionar tu marketing desde el móvil, aprobar contenidos y seguir todo en un solo lugar.
                    </div>
                    <Link href="/completa-perfil" className="w-full sm:w-auto">
                        <div className="rounded-[18px] bg-[#BEFF50] flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90 w-full sm:w-auto">
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
                <div className="h-[500px] sm:h-[550px] lg:h-[600px] w-full max-w-[300px] lg:w-[300px] relative rounded-[40px] bg-[#EDEEEC] border-black border-solid border-[8px] sm:border-[10px] lg:border-[11px] box-border overflow-hidden shrink-0 flex items-center justify-center">
                    <iframe
                        src="https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/preview"
                        title="Descarga la app"
                        className="w-full h-full border-0 rounded-[29px]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}
