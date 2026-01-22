import Link from "next/link"
import Image from "next/image"

const navigationCards = [
    {
        href: "/bienvenido",
        title: "Bienvenido a Plinng",
        description: "Conoce cómo puede ayudarte Plinng",
        linkText: "Empezamos",
        image: "/assets/Card image.png",
    },
    {
        href: "/descarga-app",
        title: "Descarga la app",
        description: "Instala la aplicación en tu dispositivo",
        linkText: "Descarga la app",
        image: "/assets/Card image-1.png",
    },
    {
        href: "/completa-perfil",
        title: "Completa tu perfil",
        description: "Configura tu información personal",
        linkText: "El esencial sobre tu negocio",
        image: "/assets/Card image-2.png",
    },
    {
        href: "/conecta-cuentas",
        title: "Conecta tus cuentas",
        description: "Vincula tus redes sociales y servicios",
        linkText: "Conectar",
        image: "/assets/Card image-3.png",
    },
    {
        href: "/tour",
        title: "Primero pasos",
        description: "Aprende a usar las funciones principales",
        linkText: "Echale un ojo",
        image: "/assets/Card image-4.png",
    },
    {
        href: "/faq",
        title: "Preguntas frecuentes",
        description: "Resuelve tus dudas más comunes",
        linkText: "Consultar",
        image: "/assets/Card image-5.png",
    },
]

export default function Home() {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4 py-8">
                <h1 className="text-[42px] font-bold tracking-[-1.5px]">
                    Pon en marcha Plinng
                </h1>
                <p className="text-[18px] leading-[28px] text-muted-foreground w-full">
                    Invierte unos minutos en poner en marcha tu app de Plinng y ahorra horas de trabajo cada semana.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {navigationCards.map((card) => {
                    return (
                        <Link key={card.href} href={card.href}>
                            <div className="h-[380px] w-full relative rounded-3xl bg-[#EDEEEC] flex flex-col items-start p-[30px] box-border gap-6 text-left text-xl text-black font-inter cursor-pointer transition-all hover:shadow-lg">
                                <div className="self-stretch flex flex-col items-start gap-2 shrink-0">
                                    <b className="relative tracking-[-0.5px] leading-7 text-xl font-bold">{card.title}</b>
                                    <div className="self-stretch relative text-base leading-6 text-[#2F4F4F]">{card.description}</div>
                                </div>
                                <div className="self-stretch h-[150px] relative rounded-3xl max-w-full overflow-hidden shrink-0">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover rounded-3xl"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="self-stretch h-px relative border-gray-300 border-solid border-t-[1px] box-border shrink-0" />
                                <div className="flex items-start gap-2 shrink-0 text-sm">
                                    <div className="relative">{card.linkText}</div>
                                    <Image
                                        src="/assets/icons/arrow2.svg"
                                        alt=""
                                        width={20}
                                        height={20}
                                        className="h-5 w-5"
                                    />
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
