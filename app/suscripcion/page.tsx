"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type AnswerBlock =
    | { type: "text"; content: string }
    | { type: "numbered"; items: string[] }
    | { type: "bullets"; items: string[] }
    | { type: "link"; label: string; url: string }
    | { type: "warning"; content: string }
    | { type: "info"; content: string }

function LinkedText({ text }: { text: string }) {
    const parts = text.split(/(__https?:\/\/[^_]+__)/)
    return (
        <>
            {parts.map((part, i) => {
                const match = part.match(/^__(https?:\/\/[^_]+)__$/)
                if (match) {
                    return (
                        <a key={i} href={match[1]} target="_blank" rel="noopener noreferrer"
                            className="text-black underline underline-offset-2 font-medium hover:opacity-70 break-all">
                            {match[1]}
                        </a>
                    )
                }
                return <span key={i}>{part}</span>
            })}
        </>
    )
}

function StructuredAnswer({ blocks }: { blocks: AnswerBlock[] }) {
    return (
        <div className="flex flex-col gap-3 text-[15px] leading-[26px] text-[#2F4F4F]">
            {blocks.map((block, i) => {
                if (block.type === "text") {
                    return <p key={i}><LinkedText text={block.content} /></p>
                }
                if (block.type === "numbered") {
                    return (
                        <ol key={i} className="flex flex-col gap-1 ml-1">
                            {block.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2">
                                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-xs font-bold shrink-0 mt-[3px]">{j + 1}</span>
                                    <LinkedText text={item} />
                                </li>
                            ))}
                        </ol>
                    )
                }
                if (block.type === "bullets") {
                    return (
                        <ul key={i} className="flex flex-col gap-1 ml-1">
                            {block.items.map((item, j) => (
                                <li key={j} className="flex items-start gap-2">
                                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#2F4F4F] shrink-0" />
                                    <LinkedText text={item} />
                                </li>
                            ))}
                        </ul>
                    )
                }
                if (block.type === "link") {
                    return (
                        <p key={i}>
                            {block.label}{" "}
                            <a href={block.url} target="_blank" rel="noopener noreferrer"
                                className="text-black underline underline-offset-2 font-medium hover:opacity-70 break-all">
                                {block.url}
                            </a>
                        </p>
                    )
                }
                if (block.type === "warning") {
                    return (
                        <div key={i} className="flex items-start gap-2 p-3 rounded-[10px] bg-amber-50 border border-amber-200">
                            <span className="shrink-0">⚠️</span>
                            <LinkedText text={block.content} />
                        </div>
                    )
                }
                if (block.type === "info") {
                    return (
                        <div key={i} className="flex items-start gap-2 p-3 rounded-[10px] bg-blue-50 border border-blue-200">
                            <span className="shrink-0">ℹ️</span>
                            <LinkedText text={block.content} />
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}

const articles = [
    {
        title: "Precios e impuestos",
        questions: [
            {
                question: "¿Dónde puedo ver el precio de mi plan?",
                blocks: [
                    { type: "text", content: "Puedes verlo desde la app:" },
                    { type: "numbered", items: ["Entra en el menú inferior", "Accede a Mis servicios", "Ahí verás el precio de tu plan activo"] },
                ] as AnswerBlock[],
            },
            {
                question: "¿El precio incluye impuestos?",
                blocks: [
                    { type: "text", content: "No. El precio no incluye impuestos." },
                    { type: "text", content: "El IVA solo se aplica a clientes ubicados en la península de España." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Pueden cambiar los precios?",
                blocks: [
                    { type: "text", content: "Sí. Si ya eres cliente, cualquier cambio de precio se aplicará a partir de la siguiente renovación, nunca a mitad del periodo contratado." },
                ] as AnswerBlock[],
            },
        ],
    },
    {
        title: "Pagos",
        questions: [
            {
                question: "¿Cómo y cuándo se paga la suscripción?",
                blocks: [
                    { type: "text", content: "El pago es por adelantado:" },
                    { type: "bullets", items: ["Puede ser mensual o anual", "El cobro se realiza siempre el mismo día del mes o del año, según tu plan"] },
                ] as AnswerBlock[],
            },
            {
                question: "¿Qué pasa si un pago falla?",
                blocks: [
                    { type: "text", content: "Si no se puede realizar el cobro, antes te enviaremos una comunicación para que puedas:" },
                    { type: "bullets", items: ["Actualizar tu método de pago, o", "Abonar las facturas pendientes"] },
                    { type: "text", content: "Si el pago no se regulariza:" },
                    { type: "bullets", items: ["El servicio puede no activarse", "Puede quedar suspendido temporalmente", "O cancelarse si el impago continúa"] },
                ] as AnswerBlock[],
            },
        ],
    },
    {
        title: "Facturas y método de pago",
        questions: [
            {
                question: "¿Cómo puedo acceder a mis facturas y gestionar mis pagos?",
                blocks: [
                    { type: "text", content: "Puedes acceder a todas tus facturas y a la gestión de pagos desde nuestro portal de clientes." },
                    { type: "text", content: "Desde ahí podrás:" },
                    { type: "bullets", items: ["Ver y descargar tus facturas", "Actualizar los datos de facturación", "Pagar facturas pendientes", "Cambiar o actualizar el método de pago"] },
                    { type: "link", label: "👉 Accede al portal de clientes desde este enlace:", url: "https://billing.stripe.com/p/login/7sI6oI7EAdzGeSk6oo" },
                    { type: "info", content: "Debes acceder con el mismo correo electrónico que utilizaste al realizar el pago." },
                ] as AnswerBlock[],
            },
        ],
    },
    {
        title: "FAQ",
        questions: [
            {
                question: "¿Cómo puedo cambiar de plan?",
                blocks: [
                    { type: "text", content: "Muy fácil. Escríbenos a hello@plinng.com y te ayudamos a hacer el cambio." },
                ] as AnswerBlock[],
            },
            {
                question: "¿La suscripción se renueva automáticamente?",
                blocks: [
                    { type: "text", content: "Sí. La suscripción se renueva automáticamente al final de cada periodo, ya sea mensual o anual." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Cuándo se activa el servicio?",
                blocks: [
                    { type: "text", content: "El servicio se activa cuando el primer pago se ha procesado correctamente." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Cómo puedo cancelar mi suscripción?",
                blocks: [
                    { type: "text", content: "La cancelación de tu suscripción se gestiona desde la app de forma guiada." },
                    { type: "numbered", items: [
                        "Accede al Menú desde la barra inferior",
                        "Entra en Tus servicios",
                        "Desplázate hasta el final de la pantalla",
                        "Selecciona Solicitar cancelación",
                        "Confirma la solicitud",
                    ]},
                    { type: "warning", content: "Es importante hacerlo con al menos 30 días de antelación antes de la próxima renovación." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Desinstalar la app cancela la suscripción?",
                blocks: [
                    { type: "text", content: "No. Desinstalar la app no cancela la suscripción. La cancelación debe solicitarse siguiendo el proceso indicado." },
                ] as AnswerBlock[],
            },
        ],
    },
]

export default function SuscripcionPage() {
    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                <div className="w-full relative flex flex-col items-start justify-center gap-4">
                    <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[42px] sm:text-[36px] lg:text-[42px] font-bold">
                        Suscripción
                    </b>
                    <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                        Todo lo que necesitas saber sobre tu suscripción, pagos y facturas.
                    </div>

                    <div className="self-stretch flex flex-col gap-6 mt-4">
                        {articles.map((article) => (
                            <div key={article.title} className="self-stretch flex flex-col gap-4">
                                <b className="w-full relative text-[28px] tracking-[-1.5px] inline-block font-inter text-black text-left">
                                    {article.title}
                                </b>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {article.questions.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${article.title}-${index}`}
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
                                                <StructuredAnswer blocks={faq.blocks} />
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
