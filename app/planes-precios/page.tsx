"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type AnswerBlock =
    | { type: "text"; content: string }
    | { type: "bullets"; items: string[] }
    | { type: "link"; label: string; url: string }
    | { type: "warning"; content: string }

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
                return null
            })}
        </div>
    )
}

// ─── Plan cards ────────────────────────────────────────────────────────────────

const plans = [
    {
        name: "Plan Starter",
        price: "80 € / mes",
        note: "IVA no incluido",
        tagline: "Para empezar y tener presencia online.",
        features: [
            "4 posts al mes en Instagram",
            "Estrategia Redes Sociales anual",
            "SEO básico: 1 blogpost trimestral + auditoría anual",
            "Web optimizada, segura y con dominio incluido",
            "Backup mensual + hosting incluido",
            "Agente AI Maya (50 mensajes)",
            "Soporte en 72h",
        ],
    },
    {
        name: "Plan Pro",
        price: "97 € / mes",
        note: "IVA no incluido",
        tagline: "Para crecer y ganar visibilidad.",
        features: [
            "4 posts + 2 carruseles + 2 stories + 2 reels al mes",
            "Estrategia Redes Sociales semestral + solicitudes extraordinarias",
            "SEO avanzado: 1 blogpost trimestral + SEO on-page trimestral",
            "Web con 30 min de cambios / mes + backup semanal",
            "Identidad digital: tarjeta de visita + creación de brand",
            "Agente AI Maya (200 mensajes)",
            "Soporte en 48h",
        ],
        highlighted: true,
    },
    {
        name: "Plan Elite",
        price: "240 € / mes",
        note: "IVA no incluido",
        tagline: "Para delegarlo todo y maximizar resultados.",
        features: [
            "8 posts + 4 carruseles + 4 stories + 4 reels al mes",
            "Estrategia Redes Sociales trimestral + solicitudes extraordinarias",
            "SEO premium: 1 blogpost mensual + SEO on-page mensual",
            "Web con 45 min de cambios / mes + backup diario",
            "Videos con avatar IA + voz propia",
            "Agente AI Maya (500 mensajes)",
            "Soporte en 24h",
        ],
    },
]

// ─── Comparison table ──────────────────────────────────────────────────────────

type TableRow = { category?: string; label: string; starter: string; pro: string; elite: string }

const tableRows: TableRow[] = [
    // Marketing
    { category: "Redes Sociales", label: "Redes Sociales - Estrategia", starter: "Anual", pro: "Semestral", elite: "Trimestral" },
    { label: "Redes Sociales - Plinng Profile Optimizer", starter: "✓", pro: "✓", elite: "✓" },
    { label: "Calendario de publicaciones", starter: "✓", pro: "✓", elite: "✓" },
    { label: "Posts Instagram / mes", starter: "4", pro: "4", elite: "8" },
    { label: "Carruseles / mes", starter: "–", pro: "2", elite: "4" },
    { label: "Stories / mes", starter: "–", pro: "2", elite: "4" },
    { label: "Reels / mes", starter: "–", pro: "2", elite: "4" },
    { label: "Cambios Redes Sociales", starter: "3", pro: "3", elite: "3" },
    { label: "Solicitud extraordinaria", starter: "–", pro: "✓", elite: "✓" },
    { label: "Galería", starter: "✓", pro: "✓", elite: "✓" },
    { label: "Identidad digital - Repositorio", starter: "✓", pro: "✓", elite: "✓" },
    { label: "Agente AI Maya", starter: "50 mensajes", pro: "200 mensajes", elite: "500 mensajes" },
    // SEO
    { category: "SEO", label: "SEO - Estrategia", starter: "Anual", pro: "Semestral", elite: "Trimestral" },
    { label: "SEO - Blogpost", starter: "1 / trimestre", pro: "1 / trimestre", elite: "1 / mes" },
    { label: "SEO - Acciones On-Page", starter: "–", pro: "1 / trimestre", elite: "1 / mes" },
    { label: "SEO - Técnico", starter: "Anual", pro: "Semestral", elite: "Trimestral" },
    { label: "SEO - Informe", starter: "Parcial", pro: "Completo", elite: "Completo" },
    { label: "GMB Magic link + QR reseñas", starter: "–", pro: "–", elite: "✓" },
    { label: "Identidad digital - Tarjeta visita", starter: "–", pro: "✓", elite: "✓" },
    { label: "Identidad digital - Crear brand", starter: "–", pro: "✓", elite: "✓" },
    { label: "Videos con avatar IA", starter: "–", pro: "–", elite: "✓" },
    { label: "Voz propia en videos y llamadas", starter: "–", pro: "–", elite: "✓" },
    // Atención al cliente
    { category: "Atención al cliente", label: "Reseñas Google", starter: "10 resp.", pro: "100 resp.", elite: "1000 resp." },
    { label: "Comentarios y DMs Instagram", starter: "10 resp.", pro: "100 resp.", elite: "1000 resp." },
    { label: "Configuración de tono", starter: "Avanzado", pro: "Avanzado", elite: "Avanzado" },
    { label: "Asistente redacción emails", starter: "–", pro: "✓", elite: "✓" },
    { label: "WhatsApp Business", starter: "✓", pro: "✓", elite: "✓" },
    { label: "WB - Configuración de tono", starter: "Avanzada", pro: "Avanzada", elite: "Avanzada" },
    // Técnico
    { category: "Técnico / Web", label: "WEB - Configuración técnica", starter: "✓", pro: "✓", elite: "✓" },
    { label: "WEB - Seguridad", starter: "✓", pro: "✓", elite: "✓" },
    { label: "WEB - Mantenimiento", starter: "✓", pro: "✓", elite: "✓" },
    { label: "WEB - Copia de seguridad", starter: "Mensual", pro: "Semanal", elite: "Diaria" },
    { label: "WEB - Dominio", starter: "✓", pro: "✓", elite: "✓" },
    { label: "WEB - Creación con IA", starter: "IA", pro: "IA (3 iteraciones)", elite: "IA (5 iteraciones)" },
    { label: "WEB - Cambios incluidos", starter: "–", pro: "30 min / mes", elite: "45 min / mes" },
    { label: "WEB - Informe", starter: "Parcial", pro: "Completo", elite: "Completo" },
    { label: "Hosting", starter: "✓", pro: "✓", elite: "✓" },
]

// ─── FAQ ───────────────────────────────────────────────────────────────────────

const faqItems = [
    {
        question: "¿Qué plan elegir?",
        blocks: [
            { type: "bullets", items: ["Starter → si quieres empezar y tener presencia online", "Pro → si quieres más contenido y empezar a notar resultados", "Elite → si quieres delegarlo todo y maximizar visibilidad"] },
        ] as AnswerBlock[],
    },
    {
        question: "¿Puedo cambiar de plan?",
        blocks: [
            { type: "text", content: "Sí. Puedes cambiar de plan en cualquier momento escribiéndonos a hello@plinng.com y el equipo te ayudará a gestionarlo." },
        ] as AnswerBlock[],
    },
    {
        question: "Información legal importante",
        blocks: [
            { type: "text", content: "Al contratar cualquiera de los planes de Plinng, se aplican las Condiciones Generales de Contratación." },
            { type: "text", content: "De forma resumida:" },
            { type: "bullets", items: [
                "La suscripción se paga por adelantado (mensual o anual, según el plan)",
                "Las suscripciones se renuevan automáticamente al final de cada periodo",
                "Puedes cancelar en cualquier momento, siempre que lo hagas con al menos 30 días de antelación antes de la próxima renovación",
                "La cancelación no implica la devolución de importes ya abonados",
                "Los precios pueden modificarse y se aplicarán a partir de la siguiente renovación",
                "Desinstalar la app no cancela la suscripción",
            ]},
            { type: "link", label: "👉 Puedes consultar el texto legal completo aquí:", url: "https://plinng.com/es/politica-de-privacidad#condiciones-contratacion" },
        ] as AnswerBlock[],
    },
]

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PlanesPreciosPage() {
    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                <div className="w-full relative flex flex-col items-start justify-center gap-4">
                    <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[42px] sm:text-[36px] lg:text-[42px] font-bold">
                        Planes y Precios
                    </b>
                    <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                        Elige el plan que mejor se adapta a tu negocio.
                    </div>

                    {/* Plan Cards */}
                    <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`rounded-[24px] p-6 flex flex-col gap-4 ${
                                    plan.highlighted
                                        ? "bg-[#BEFF50] border-2 border-black"
                                        : "bg-[#EDEEEC] border border-[#EDEEEC]"
                                }`}
                            >
                                <div>
                                    <div className="text-[13px] font-semibold uppercase tracking-wider text-[#555] mb-1">{plan.name}</div>
                                    <div className="text-[32px] font-bold tracking-[-1px] text-black leading-none">{plan.price}</div>
                                    <div className="text-[13px] text-[#2F4F4F] mt-1">{plan.note}</div>
                                </div>
                                <div className="text-[15px] text-[#2F4F4F] font-medium">{plan.tagline}</div>
                                <div className="h-px bg-black/10" />
                                <ul className="flex flex-col gap-2">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-2 text-[14px] text-[#2F4F4F]">
                                            <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-black shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Table */}
                    <div className="self-stretch mt-8 flex flex-col gap-4">
                        <b className="w-full relative text-[28px] tracking-[-1.5px] inline-block font-inter text-black text-left">
                            Tabla comparativa de planes
                        </b>
                        <div className="w-full overflow-x-auto rounded-[18px] border border-[#EDEEEC]">
                            <table className="w-full text-[14px] text-[#2F4F4F]">
                                <thead>
                                    <tr className="bg-[#EDEEEC] text-black">
                                        <th className="text-left px-6 py-4 font-semibold rounded-tl-[18px]">Funcionalidad</th>
                                        <th className="text-center px-4 py-4 font-semibold">Starter</th>
                                        <th className="text-center px-4 py-4 font-semibold bg-[#BEFF50]">Pro</th>
                                        <th className="text-center px-4 py-4 font-semibold rounded-tr-[18px]">Elite</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableRows.map((row, i) => (
                                        row.category ? (
                                            <>
                                                <tr key={`cat-${i}`} className="bg-[#F5F5F3] border-t-2 border-[#DEDEDE]">
                                                    <td colSpan={4} className="px-6 py-2 text-[12px] font-bold uppercase tracking-widest text-[#888]">
                                                        {row.category}
                                                    </td>
                                                </tr>
                                                <tr key={i} className="border-t border-[#EDEEEC] bg-white">
                                                    <td className="px-6 py-3 font-medium text-black">{row.label}</td>
                                                    <td className="px-4 py-3 text-center">{row.starter}</td>
                                                    <td className="px-4 py-3 text-center bg-[#BEFF50]/20 font-medium text-black">{row.pro}</td>
                                                    <td className="px-4 py-3 text-center">{row.elite}</td>
                                                </tr>
                                            </>
                                        ) : (
                                            <tr key={i} className={`border-t border-[#EDEEEC] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}>
                                                <td className="px-6 py-3 font-medium text-black">{row.label}</td>
                                                <td className="px-4 py-3 text-center">{row.starter}</td>
                                                <td className="px-4 py-3 text-center bg-[#BEFF50]/20 font-medium text-black">{row.pro}</td>
                                                <td className="px-4 py-3 text-center">{row.elite}</td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="self-stretch mt-8 flex flex-col gap-4">
                        <b className="w-full relative text-[28px] tracking-[-1.5px] inline-block font-inter text-black text-left">
                            FAQ
                        </b>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqItems.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
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

                </div>
            </div>
        </div>
    )
}
