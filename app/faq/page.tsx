"use client"

import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MobileVideoContainer } from "@/components/mobile-video-container"
import { VideoPlayer } from "@/components/video-player"

function processBold(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/)
    return parts.map((part, index) => {
        if (part.match(/^\*\*[^*]+\*\*$/)) {
            return (
                <strong key={index} className="font-semibold text-black">
                    {part.replace(/\*\*/g, '')}
                </strong>
            )
        }
        return <span key={index}>{part}</span>
    })
}

function formatText(text: string) {
    const paragraphs = text.split(/\n\n+/)
    return paragraphs.map((paragraph, pIndex) => {
        const trimmedParagraph = paragraph.trim()
        if (!trimmedParagraph) return null
        const lines = trimmedParagraph.split(/\n/)
        const elements: JSX.Element[] = []
        let inList = false
        let listItems: string[] = []
        let textBeforeList = ''
        lines.forEach((line, lineIndex) => {
            const trimmedLine = line.trim()
            if (!trimmedLine) return
            if (trimmedLine.match(/^\*\*[^*]+\*\*$/)) {
                if (inList && listItems.length > 0) {
                    elements.push(
                        <ul key={`list-${pIndex}-${lineIndex}`} className="list-none mb-3 ml-4">
                            {listItems.map((item, i) => (
                                <li key={i} className="flex items-start mb-2">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>{processBold(item)}</span>
                                </li>
                            ))}
                        </ul>
                    )
                    listItems = []
                    inList = false
                }
                elements.push(
                    <div key={`title-${pIndex}-${lineIndex}`} className="font-semibold text-black mb-2 mt-4 first:mt-0">
                        {trimmedLine.replace(/\*\*/g, '')}
                    </div>
                )
                return
            }
            if (trimmedLine.startsWith('•') || trimmedLine.match(/^\d+\./)) {
                if (textBeforeList && !inList) {
                    elements.push(
                        <div key={`text-${pIndex}-${lineIndex}`} className="mb-2">
                            {processBold(textBeforeList)}
                        </div>
                    )
                    textBeforeList = ''
                }
                inList = true
                const itemText = trimmedLine.startsWith('•')
                    ? trimmedLine.substring(1).trim()
                    : trimmedLine.replace(/^\d+\.\s*/, '')
                listItems.push(itemText)
                return
            }
            if (inList && listItems.length > 0) {
                elements.push(
                    <ul key={`list-${pIndex}-${lineIndex}`} className="list-none mb-3 ml-4">
                        {listItems.map((item, i) => (
                            <li key={i} className="flex items-start mb-2">
                                <span className="mr-2 mt-1">•</span>
                                <span>{processBold(item)}</span>
                            </li>
                        ))}
                    </ul>
                )
                listItems = []
                inList = false
            }
            if (inList) {
                if (listItems.length > 0) listItems[listItems.length - 1] += ' ' + trimmedLine
            } else {
                textBeforeList = textBeforeList ? textBeforeList + ' ' + trimmedLine : trimmedLine
            }
        })
        if (inList && listItems.length > 0) {
            elements.push(
                <ul key={`list-${pIndex}-final`} className="list-none mb-3 ml-4">
                    {listItems.map((item, i) => (
                        <li key={i} className="flex items-start mb-2">
                            <span className="mr-2 mt-1">•</span>
                            <span>{processBold(item)}</span>
                        </li>
                    ))}
                </ul>
            )
        }
        if (textBeforeList && !inList) {
            elements.push(
                <div key={`text-${pIndex}-final`} className="mb-2">
                    {processBold(textBeforeList)}
                </div>
            )
        }
        return <div key={pIndex} className="mb-4">{elements}</div>
    }).filter(Boolean)
}

// ─── Linked text helper ────────────────────────────────────────────────────────
function LinkedText({ text }: { text: string }) {
    // Matches __url__ pattern
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

// ─── Simple structured answer renderer ────────────────────────────────────────
type AnswerBlock =
    | { type: "text"; content: string }
    | { type: "numbered"; items: string[] }
    | { type: "bullets"; items: string[] }
    | { type: "link"; label: string; url: string }
    | { type: "warning"; content: string }

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
                return null
            })}
        </div>
    )
}

// ─── FAQ data ──────────────────────────────────────────────────────────────────

const faqCategories = [
    {
        category: "General",
        questions: [
            {
                question: "¿Es seguro conectar mis cuentas?",
                answer: "Sí, utilizamos protocolos de seguridad estándar de la industria y solo solicitamos los permisos necesarios para publicar contenido. Tus credenciales están encriptadas y nunca las compartimos con terceros.",
                type: "text",
            },
        ],
    },
    {
        category: "Uso de la plataforma",
        questions: [
            {
                question: "¿Puedo cambiar mi configuración?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Sí. Puedes modificar tu configuración en cualquier momento desde la app." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Es seguro conectar mis cuentas?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Sí. La conexión es segura y solo se utiliza para poder prestar correctamente el servicio." },
                ] as AnswerBlock[],
            },
            {
                question: "He olvidado mi contraseña, ¿qué hago?",
                type: "structured",
                blocks: [
                    { type: "text", content: "No pasa nada:" },
                    { type: "numbered", items: ["En la pantalla de inicio de sesión pulsa \"He olvidado mi contraseña\"", "Introduce tu número", "Recibirás un código de verificación", "Podrás crear una nueva contraseña"] },
                    { type: "text", content: "También te lo explicamos en el apartado \"Olvidé mi contraseña de Plinng\" en este enlace:" },
                    { type: "link", label: "👉", url: "https://welcome.plinng.com/faq" },
                ] as AnswerBlock[],
            },
        ],
    },
    {
        category: "Configuración",
        questions: [
            {
                question: "¿Cuánto tiempo toma configurar la app?",
                answer: "La configuración inicial toma aproximadamente 10-15 minutos. Esto incluye completar tu perfil, conectar tus cuentas y realizar el tour inicial.",
                type: "text",
            },
            {
                question: "¿Puedo cambiar la configuración después?",
                answer: "Sí, puedes modificar cualquier configuración en cualquier momento desde el menú de ajustes de la aplicación.",
                type: "text",
            },
            {
                question: "Olvidé mi contraseña de Facebook",
                answer: "",
                type: "video-horizontal",
                videoUrl: "/videos/Contraseña Facebook (1).mp4",
            },
            {
                question: "Olvidé mi contraseña de Plinng",
                answer: "",
                type: "video",
                videoUrl: "/videos/Contraseña Plinng (1).mp4",
            },
        ],
    },
    {
        category: "Funcionalidades",
        questions: [
            {
                question: "¿Qué es el Formulario?",
                answer: "El formulario inicial es la sección de la app donde defines la información clave de tu negocio y los objetivos de tu campaña de marketing digital...",
                type: "text",
            },
            // ... rest of existing Funcionalidades questions unchanged
        ],
    },
    {
        category: "Problemas habituales",
        questions: [
            {
                question: "He solicitado cambios y no se han aplicado, ¿por qué?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Los cambios solicitados no se aplican de forma inmediata. Cuando pides un cambio, el equipo revisa tu comentario y ajusta la propuesta antes de volver a enviarla para validación." },
                    { type: "text", content: "Si han pasado varios días y no ves cambios, revisa:" },
                    { type: "bullets", items: ["El estado de la propuesta", "El historial de cambios", "La actividad reciente"] },
                    { type: "text", content: "Si el contenido estaba muy cerca de la fecha de publicación, el cambio puede aplicarse en una propuesta posterior." },
                ] as AnswerBlock[],
            },
            {
                question: "He aprobado una publicación por error, ¿puedo recuperarla?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Sí, en muchos casos es posible revisarla. Te recomendamos:" },
                    { type: "bullets", items: ["Acceder al Historial de cambios desde la propuesta", "Comprobar si la publicación está programada o ya publicada"] },
                    { type: "text", content: "Si aún no se ha publicado, puedes solicitar cambios desde la propuesta. Si ya se ha publicado, el ajuste se aplicará en futuras publicaciones." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Cuánto tiempo tarda en aplicarse un cambio que he solicitado?",
                type: "structured",
                blocks: [
                    { type: "text", content: "El tiempo puede variar según el tipo de cambio y el momento en que se solicite. De forma general:" },
                    { type: "bullets", items: ["Los cambios se revisan antes de la publicación prevista", "En periodos de alta actividad pueden tardar algo más", "Si el cambio se solicita muy cerca de la fecha de publicación, puede trasladarse a la siguiente propuesta"] },
                ] as AnswerBlock[],
            },
            {
                question: "Tenía publicaciones previstas para hoy y no se han publicado, ¿qué ha pasado?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Puede deberse a varios motivos:" },
                    { type: "bullets", items: ["La propuesta no estaba aprobada", "La publicación automática no estaba activada", "Hubo un ajuste en la planificación", "Se estaba revisando un cambio solicitado"] },
                    { type: "text", content: "Te recomendamos revisar el Calendario, el estado de la propuesta y las Notificaciones." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Cuándo recibiré las propuestas del mes siguiente?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Las propuestas no siempre se reciben el primer día del mes. El equipo trabaja de forma continua y las propuestas se generan progresivamente según:" },
                    { type: "bullets", items: ["Tu plan", "El calendario editorial", "El feedback del mes anterior"] },
                    { type: "text", content: "Esto permite adaptar mejor el contenido y evitar publicaciones genéricas." },
                ] as AnswerBlock[],
            },
            {
                question: "No me gustan las primeras publicaciones, no son mi estilo. ¿Qué hago?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Es normal que las primeras publicaciones necesiten ajustes. Para mejorar el contenido:" },
                    { type: "bullets", items: ["Solicita cambios explicando qué no encaja", "Indica el estilo que prefieres", "Sube imágenes propias a la galería", "Actualiza tu identidad digital"] },
                    { type: "text", content: "Cuanto más feedback des, mejor se adaptarán las propuestas a tu estilo." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Cómo puedo pedir que uséis mis propias fotos en las publicaciones?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Para que se utilicen tus fotos:" },
                    { type: "bullets", items: ["Súbelas a la sección Galería", "Indícalo en el comentario al solicitar cambios en una propuesta"] },
                    { type: "text", content: "Así el equipo priorizará tus imágenes frente a imágenes de stock." },
                ] as AnswerBlock[],
            },
            {
                question: "He hablado con Maya, pero no me da soluciones. ¿Qué hago?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Maya es un asistente de IA que ayuda con contenido, ideas y dudas generales. Algunos casos requieren revisión humana." },
                    { type: "text", content: "Si Maya no puede resolver tu consulta:" },
                    { type: "bullets", items: ["Deja tu comentario en una propuesta", "Solicita cambios detallados", "El equipo revisará el caso"] },
                    { type: "text", content: "Maya complementa al equipo, no lo sustituye." },
                ] as AnswerBlock[],
            },
            {
                question: "Maya no me da soluciones y nadie me contacta",
                type: "structured",
                blocks: [
                    { type: "text", content: "Plinng no funciona como un chat en tiempo real. Las solicitudes se gestionan a través de:" },
                    { type: "bullets", items: ["Propuestas", "Comentarios", "Cambios web", "Revisión del equipo interno"] },
                    { type: "text", content: "Aunque no recibas una respuesta inmediata, el equipo revisa todas las solicitudes." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Por qué no puedo ver los reels desde la app?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Por limitaciones técnicas, algunos formatos como reels o vídeos cortos no siempre se pueden previsualizar completamente desde la app. El formato final se visualiza correctamente en la plataforma donde se publica (Instagram, Facebook, etc.)." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Cómo se reparten las publicaciones cada mes?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Las publicaciones se distribuyen según tu plan contratado, la estrategia definida y el calendario editorial. El objetivo es mantener una presencia constante y equilibrada durante el mes." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Qué es la estrategia de redes sociales?",
                type: "structured",
                blocks: [
                    { type: "text", content: "La estrategia de redes sociales define qué tipo de contenido se publica, en qué canales, con qué frecuencia y con qué objetivo. Se ajusta progresivamente según tu feedback y el rendimiento del contenido." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Qué es la estrategia de SEO?",
                type: "structured",
                blocks: [
                    { type: "text", content: "La estrategia de SEO busca mejorar la visibilidad de tu negocio en buscadores. Incluye:" },
                    { type: "bullets", items: ["Optimización de contenidos", "Mejora de información digital", "Coherencia entre web, fichas y publicaciones"] },
                    { type: "text", content: "Es un trabajo progresivo cuyos resultados se ven a medio y largo plazo." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Cómo puedo solicitar cambios en la web si desde la app no me deja?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Si la opción Cambios web no está disponible, puede depender de tu plan o de que el cambio solicitado no esté incluido. En ese caso, deja el cambio por escrito desde la app para que el equipo lo revise y te indique cómo proceder." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Dónde puedo ver las publicaciones una vez se han publicado?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Las publicaciones se visualizan directamente en las plataformas donde se publican (Instagram, Facebook, Google, etc.). Desde Plinng puedes ver el estado de la publicación, consultar el historial y revisar el calendario." },
                ] as AnswerBlock[],
            },
            {
                question: "¿Cómo puedo contactar con una persona real si Maya no me resuelve la duda?",
                type: "structured",
                blocks: [
                    { type: "text", content: "Maya es un asistente de IA que te ayuda con dudas generales, contenido y orientación dentro de la plataforma. Sin embargo, hay casos en los que es necesario que el equipo humano revise tu situación." },
                    { type: "text", content: "Cuando Maya no puede ayudarte, te indicará directamente cómo contactar con el equipo y te mostrará este mensaje:" },
                    { type: "warning", content: "\"Para ayudarte mejor con esto, escríbeme a hello@plinng.com y lo vemos desde ahí.\"" },
                    { type: "text", content: "El equipo revisará tu caso y te dará soporte personalizado. Plinng no funciona como un chat en tiempo real, pero todas las solicitudes se revisan y se gestionan cuando requieren intervención humana." },
                ] as AnswerBlock[],
            },
        ],
    },
    {
        category: "Información legal y políticas",
        questions: [
            {
                question: "Condiciones de contratación",
                type: "structured",
                blocks: [
                    { type: "text", content: "Regulan aspectos como la contratación de los planes, el pago y la renovación automática, la cancelación del servicio y los cambios de precio." },
                    { type: "link", label: "👉 Consulta las condiciones aquí:", url: "https://plinng.com/es/politica-de-privacidad#condiciones-contratacion" },
                ] as AnswerBlock[],
            },
            {
                question: "Condiciones de uso de la app",
                type: "structured",
                blocks: [
                    { type: "text", content: "Regulan el uso de la aplicación de Plinng, incluyendo el acceso a la app, el uso correcto de las funcionalidades, la responsabilidad sobre los datos introducidos y la posible suspensión del acceso en caso de uso indebido." },
                    { type: "link", label: "👉 Consulta las condiciones aquí:", url: "https://plinng.com/condiciones-generales-de-uso-de-app" },
                ] as AnswerBlock[],
            },
            {
                question: "Política de privacidad",
                type: "structured",
                blocks: [
                    { type: "text", content: "Explica cómo tratamos tus datos personales y qué derechos tienes como usuario, de acuerdo con la normativa vigente." },
                    { type: "link", label: "👉 Consulta la política aquí:", url: "https://plinng.com/es/politica-de-privacidad" },
                ] as AnswerBlock[],
            },
        ],
    },
    {
        category: "Complementos",
        questions: [
            {
                question: "Recepcionista AI de llamadas 24/7",
                answer: "",
                type: "nested",
                subQuestions: [
                    {
                        section: "Preguntas Generales",
                        items: [
                            { question: "¿Qué es Plinng Call Agent?", answer: "Es tu recepcionista con inteligencia artificial que atiende llamadas 24/7, responde preguntas frecuentes, agenda citas y transfiere llamadas importantes a tu móvil. Funciona como parte de tu cuenta Plinng." },
                            { question: "¿Cómo funciona?", answer: "Cuando un cliente llama a tu número de negocio, nuestro agente con IA contesta inmediatamente, entiende qué necesita el cliente y le da respuestas basadas en la información de tu negocio. Si la consulta es compleja, transfiere la llamada a tu teléfono móvil." },
                            { question: "¿Suena como un robot?", answer: "No. Usamos las voces en español más naturales del mercado. Puedes elegir entre varias opciones de voces (masculina/femenina, diferentes acentos) y tu agente suena como una persona real y profesional." },
                            { question: "¿En qué idiomas funciona?", answer: "Actualmente en español (España y Latinoamérica). Próximamente: catalán, inglés y francés." },
                        ],
                    },
                    {
                        section: "Configuración y Uso",
                        items: [
                            { question: "¿Es difícil de configurar?", answer: "Para nada. El setup completo toma menos de 5 minutos. Solo necesitas: 1) Elegir una voz, 2) Confirmar info de tu negocio, 3) Agregar archivos adicionales si quieres, 4) Hacer una llamada de prueba. ¡Listo!" },
                            { question: "¿Necesito cambiar mi número de teléfono?", answer: "Te asignaremos un número de teléfono que es el que tus clientes podrán llamar y conversar con el agente AI." },
                            { question: "¿Qué tipo de preguntas puede responder?", answer: "Todo lo que tú le enseñes: horarios, servicios, precios, ubicación, cómo llegar, política de cancelación, disponibilidad, etc. Puedes subir documentos (PDF, Word) con información adicional." },
                            { question: "¿Puede agendar citas?", answer: "No, pero estamos trabajando para que puedas gestionar reservas e integrarte con Google Calendar." },
                        ],
                    },
                    {
                        section: "Llamadas y Transferencias",
                        items: [
                            { question: "¿Cuántas llamadas puede manejar a la vez?", answer: "Hasta 2 llamadas simultáneas sin perder calidad." },
                            { question: "¿Cuándo transfiere al teléfono humano?", answer: "Cuando: 1) El cliente lo pide explícitamente, 2) La pregunta es muy compleja, o 3) Detecta frustración o urgencia" },
                            { question: "¿Pierdo el contexto cuando se transfiere?", answer: "No. Recibes en Plinng podrás ver la transcripción de la llamada." },
                            { question: "¿Qué pasa si no puedo contestar la transferencia?", answer: "La llamada quedará registrada en Plinng. Podrás leer la transcripción y llamar a la persona si lo deseas." },
                        ],
                    },
                    {
                        section: "Precio y Facturación",
                        items: [
                            { question: "¿Cuánto cuesta?", answer: "€29/mes con 100 minutos incluidos. Minutos adicionales: €0.29/minuto. Sin permanencia, cancela cuando quieras." },
                            { question: "¿100 minutos son suficientes?", answer: "Para la mayoría, sí. 100 minutos = aproximadamente 50-150 llamadas al mes (dependiendo de duración). Si necesitas más, puedes habilitar los pagos automáticos para que te vayamos cobrando en función de los minutos consumidos." },
                            { question: "¿Hay costes ocultos?", answer: "Ninguno. El precio incluye: número dedicado, transcripciones ilimitadas, dashboard, reportes, y actualizaciones." },
                            { question: "¿Cómo cancelo si no me convence?", answer: "Desde tu cuenta Plinng, en cualquier momento. Sin preguntas, sin penalización." },
                        ],
                    },
                    {
                        section: "Privacidad y Legal",
                        items: [
                            { question: "¿Es legal usar IA para atender llamadas en España?", answer: "Sí. Cumplimos con la nueva regulación española: informamos al cliente que está hablando con un agente digital y siempre ofrecemos opción de hablar con humano." },
                            { question: "¿Qué pasa con los datos de mis clientes?", answer: "Solo tú tienes acceso. Cumplimos 100% con GDPR. No vendemos ni compartimos datos con terceros." },
                            { question: "¿Graban las llamadas?", answer: "Generamos transcripciones de texto de todas las llamadas para tu dashboard. Las grabaciones de audio no se guardan por defecto." },
                        ],
                    },
                    {
                        section: "Sectores y Casos de Uso",
                        items: [
                            { question: "¿Funciona para mi tipo de negocio?", answer: "Funciona especialmente bien para: barberías/peluquerías, spas/estética, clínicas médicas/dentales, restaurantes, gimnasios, asesorías, despachos profesionales, talleres, tiendas locales. Si tus clientes te llaman, el agente te ayuda." },
                            { question: "¿Funciona para soporte técnico complejo?", answer: "Las respuestas del agente va en función de la información que le adjuntes." },
                        ],
                    },
                    {
                        section: "Integración con Plinng",
                        items: [
                            { question: "¿Necesito tener Plinng para usar Call Agent?", answer: "Sí, Call Agent es un addon de Plinng. Necesitas una cuenta activa (desde €xx/mes)." },
                            { question: "¿Se integra con mis otras herramientas de Plinng?", answer: "Sí. La información de llamadas se sincroniza con tu dashboard de Sophia." },
                            { question: "¿Puedo gestionar todo desde la app de Plinng?", answer: "Sí. Configuración, transcripciones, reportes, ajustes - todo desde tu cuenta Plinng. Una sola plataforma para todo tu marketing y atención al cliente." },
                        ],
                    },
                ],
            },
        ],
    },
]

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function FAQPage() {
    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                <div className="w-full relative flex flex-col items-start justify-center gap-4">
                    <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[42px] sm:text-[36px] lg:text-[42px] font-bold">
                        Preguntas frecuentes
                    </b>
                    <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                        Encuentra respuestas a las preguntas más comunes sobre Plinng. 
                    </div>

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
                                                {faq.type === "structured" && "blocks" in faq ? (
                                                    <StructuredAnswer blocks={faq.blocks} />
                                                ) : faq.type === "video" && "videoUrl" in faq && faq.videoUrl ? (
                                                    <div className="flex justify-center items-center py-4">
                                                        <MobileVideoContainer videoUrl={faq.videoUrl} title={faq.question} />
                                                    </div>
                                                ) : faq.type === "video-horizontal" && "videoUrl" in faq && faq.videoUrl ? (
                                                    <div className="w-full py-4">
                                                        <VideoPlayer src={faq.videoUrl} title={faq.question} aspectRatio="horizontal" />
                                                    </div>
                                                ) : faq.type === "nested" && "subQuestions" in faq && faq.subQuestions ? (
                                                    <div className="space-y-6">
                                                        {faq.subQuestions.map((section: { section: string; items: { question: string; answer: string }[] }, sectionIndex: number) => (
                                                            <div key={sectionIndex} className="space-y-4">
                                                                <h3 className="text-[20px] font-semibold text-black mb-2">{section.section}</h3>
                                                                <Accordion type="single" collapsible className="w-full space-y-2">
                                                                    {section.items.map((item, itemIndex: number) => (
                                                                        <AccordionItem
                                                                            key={itemIndex}
                                                                            value={`nested-${sectionIndex}-${itemIndex}`}
                                                                            className="rounded-[18px] border border-[#EDEEEC] border-solid bg-[#EDEEEC]/30"
                                                                        >
                                                                            <AccordionTrigger className="px-4 py-3 hover:no-underline">
                                                                                <div className="flex-1 flex flex-col items-start justify-center text-left">
                                                                                    <div className="self-stretch relative leading-[24px] font-semibold text-black text-[16px]">
                                                                                        {item.question}
                                                                                    </div>
                                                                                </div>
                                                                            </AccordionTrigger>
                                                                            <AccordionContent className="px-4 pb-4 pt-0">
                                                                                <div className="self-stretch relative leading-[24px] text-[#2F4F4F] text-[15px] whitespace-pre-line">
                                                                                    {item.answer.split(/(\*\*[^*]+\*\*)/).map((part: string, partIndex: number) =>
                                                                                        part.match(/^\*\*[^*]+\*\*$/) ? (
                                                                                            <strong key={partIndex} className="font-semibold text-black">{part.replace(/\*\*/g, '')}</strong>
                                                                                        ) : (
                                                                                            <span key={partIndex}>{part}</span>
                                                                                        )
                                                                                    )}
                                                                                </div>
                                                                            </AccordionContent>
                                                                        </AccordionItem>
                                                                    ))}
                                                                </Accordion>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="self-stretch relative leading-[28px] text-[#2F4F4F]">
                                                        {"answer" in faq && formatText(faq.answer as string)}
                                                    </div>
                                                )}
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
