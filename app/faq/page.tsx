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

// Función para procesar negritas en un texto
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

// Función para formatear el texto con negritas, listas y párrafos
function formatText(text: string) {
    // Dividir por párrafos (doble salto de línea o más)
    const paragraphs = text.split(/\n\n+/)
    
    return paragraphs.map((paragraph, pIndex) => {
        const trimmedParagraph = paragraph.trim()
        if (!trimmedParagraph) return null
        
        // Dividir el párrafo en líneas
        const lines = trimmedParagraph.split(/\n/)
        const elements: JSX.Element[] = []
        let inList = false
        let listItems: string[] = []
        let textBeforeList = ''
        
        lines.forEach((line, lineIndex) => {
            const trimmedLine = line.trim()
            
            // Si la línea está vacía, ignorarla
            if (!trimmedLine) return
            
            // Si la línea empieza con ** y termina con **, es un título
            if (trimmedLine.match(/^\*\*[^*]+\*\*$/)) {
                // Si hay una lista en progreso, cerrarla
                if (inList && listItems.length > 0) {
                    elements.push(
                        <ul key={`list-${pIndex}-${lineIndex}`} className="list-none mb-3 ml-4">
                            {listItems.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start mb-2">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>{processBold(item)}</span>
                                </li>
                            ))}
                        </ul>
                    )
                    listItems = []
                    inList = false
                }
                
                // Agregar el título
                elements.push(
                    <div key={`title-${pIndex}-${lineIndex}`} className="font-semibold text-black mb-2 mt-4 first:mt-0">
                        {trimmedLine.replace(/\*\*/g, '')}
                    </div>
                )
                return
            }
            
            // Si la línea empieza con bullet point
            if (trimmedLine.startsWith('•')) {
                // Si había texto antes de la lista, agregarlo
                if (textBeforeList && !inList) {
                    elements.push(
                        <div key={`text-${pIndex}-${lineIndex}`} className="mb-2">
                            {processBold(textBeforeList)}
                        </div>
                    )
                    textBeforeList = ''
                }
                
                inList = true
                // Agregar el item sin el bullet
                const itemText = trimmedLine.substring(1).trim()
                listItems.push(itemText)
                return
            }
            
            // Si estamos en una lista y encontramos texto sin bullet, cerrar la lista
            if (inList && listItems.length > 0) {
                elements.push(
                    <ul key={`list-${pIndex}-${lineIndex}`} className="list-none mb-3 ml-4">
                        {listItems.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start mb-2">
                                <span className="mr-2 mt-1">•</span>
                                <span>{processBold(item)}</span>
                            </li>
                        ))}
                    </ul>
                )
                listItems = []
                inList = false
            }
            
            // Texto normal
            if (inList) {
                // Continuación de un item de lista
                if (listItems.length > 0) {
                    listItems[listItems.length - 1] += ' ' + trimmedLine
                }
            } else {
                // Acumular texto antes de una posible lista
                if (textBeforeList) {
                    textBeforeList += ' ' + trimmedLine
                } else {
                    textBeforeList = trimmedLine
                }
            }
        })
        
        // Si quedó una lista abierta, cerrarla
        if (inList && listItems.length > 0) {
            elements.push(
                <ul key={`list-${pIndex}-final`} className="list-none mb-3 ml-4">
                    {listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start mb-2">
                            <span className="mr-2 mt-1">•</span>
                            <span>{processBold(item)}</span>
                        </li>
                    ))}
                </ul>
            )
        }
        
        // Si quedó texto sin agregar, agregarlo
        if (textBeforeList && !inList) {
            elements.push(
                <div key={`text-${pIndex}-final`} className="mb-2">
                    {processBold(textBeforeList)}
                </div>
            )
        }
        
        return (
            <div key={pIndex} className="mb-4">
                {elements}
            </div>
        )
    }).filter(Boolean)
}

const faqCategories = [
    {
        category: "General",
        questions: [
            {
                question: "¿Qué es Plinng?",
                answer: "Plinng es una aplicación que te permite tener tu propio asistente AI de marketing que genera posts en redes sociales y posicionamiento SEO, además de un recepcionista AI que atiende llamadas y mensajes de WhatsApp.",
                type: "text",
            },
            {
                question: "¿Cómo funciona el asistente AI de marketing?",
                answer: "El asistente AI analiza tu negocio y genera contenido personalizado para tus redes sociales, optimizado para SEO y listo para publicar. Puedes revisar y editar el contenido antes de publicarlo.",
                type: "text",
            },
            {
                question: "¿Es seguro conectar mis cuentas?",
                answer: "Sí, utilizamos protocolos de seguridad estándar de la industria y solo solicitamos los permisos necesarios para publicar contenido. Tus credenciales están encriptadas y nunca las compartimos con terceros.",
                type: "text",
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
                answer: "El formulario inicial es la sección de la app donde defines la información clave de tu negocio y los objetivos de tu campaña de marketing digital. Esta información sirve como base para que Plinng pueda crear propuestas de contenido alineadas con tu marca, tus servicios y tu público objetivo.\n\n**¿Para qué sirve?**\nDesde el Brief puedes:\n• Proporcionar información general sobre tu negocio.\n• Definir a quién te diriges y qué ofreces.\n• Establecer las bases de tu comunicación e imagen digital.\n• Facilitar que Plinng genere contenidos coherentes con tu identidad y tus objetivos.\n\n**¿Cómo acceder al Formulario?**\nPara llegar al formulario desde la app:\n1. Abre el menú principal tocando el ícono de menú.\n2. Selecciona la opción Brief.\n3. Al acceder, comienza un proceso guiado de onboarding donde completarás la información de tu negocio.\n\n**¿Cómo funciona el onboarding del Formulario inicial?**\n\n**Información general del negocio**\nEn este primer paso completas datos básicos como el nombre del negocio, país, dirección de facturación, teléfono principal, correo electrónico, categoría y subcategoría de la empresa.\n\n**Ubicación del negocio**\nIndicas dónde se encuentra tu negocio, incluyendo el país y la dirección.\n\n**Página web**\nPuedes indicar si tu negocio cuenta con página web y, si es así, compartirla.\n\n**Redes sociales**\nAñades las redes sociales de tu negocio para que Plinng tenga en cuenta tus canales actuales de comunicación.\n\n**Historia del negocio**\nPuedes contar la historia de tu negocio y describir quién eres, para aportar contexto a la creación de contenidos.\n\n**Servicios que ofreces**\nDescribes los servicios de tu negocio. Esta información puede proporcionarse por escrito o mediante voz.\n\n**Cliente objetivo**\nDefines quién es tu cliente ideal, lo que ayuda a orientar el tono y el enfoque de los contenidos.\n\n**Fechas relevantes**\nIndicas fechas importantes para tu negocio, como campañas, eventos o hitos clave.\n\n**Imagen digital y estilo**\nConfiguras cómo quieres que se comunique y se vea tu negocio, incluyendo:\n• Idioma de comunicación.\n• Tipo y forma de comunicación.\n• Estilo de diseño.\n• Paleta de colores.\n• Estilo de los posts.\n• Tipografía.\n• Palabras clave del negocio.\n• Material de identidad de marca.\n\n**¿Qué información puedes ver?**\nEn el Brief puedes revisar toda la información que has completado sobre tu negocio, incluyendo datos generales, servicios, cliente objetivo, estilo de comunicación e imagen digital.\n\n**Posibles dudas habituales**\nCompletar el Formulario inicial puede llevar algo de tiempo si no tienes toda la información preparada. Algunos apartados pueden requerir reflexión previa para definir bien tu negocio y tu estilo de comunicación.\n\n**¿Por qué es útil?**\nEl Formulario inicial es clave para que Plinng entienda tu negocio en profundidad desde el inicio, lo que facilita la creación de contenidos más coherentes, personalizados y alineados con tu identidad de marca.",
                type: "text",
            },
            {
                question: "¿Qué es el Calendario?",
                answer: "El Calendario es una sección de la app que te permite ver, planificar y gestionar todas tus actividades de marketing digital en un solo lugar, como contenidos programados, campañas y eventos relevantes.\n\n**¿Para qué sirve?**\nDesde el Calendario puedes:\n• Visualizar qué contenidos y eventos están programados en cada fecha.\n• Organizar y planificar tus publicaciones y campañas.\n\n**¿Cómo funciona el Calendario?**\n\n**Vista del calendario**\nEl Calendario muestra una vista mensual donde puedes identificar fácilmente los días que tienen publicaciones o eventos programados.\n\n**Ver publicaciones**\nAl seleccionar un día concreto, puedes ver la lista de contenidos programados para esa fecha. Desde ahí puedes acceder a los detalles de cada elemento.\n\n**Editar o eliminar eventos**\nSi seleccionas un evento o publicación, puedes revisar su información y, según corresponda, editarla o eliminarla.\n\n**¿Qué información puedes ver?**\nEn el Calendario puedes consultar:\n• Fechas de publicaciones programadas.\n• Detalles básicos de cada contenido, como título y horario.\n\n**Recordatorios y notificaciones**\nEl Calendario puede enviarte recordatorios sobre próximas publicaciones, siempre que tengas activadas las notificaciones en tu dispositivo.\n\n**Posibles dudas habituales**\nSi no ves publicaciones en el Calendario, puede deberse a que todavía no haya contenidos programados\n\n**¿Por qué es útil?**\nEl Calendario te ayuda a mantener una visión clara de tu planificación de marketing, evitando olvidos y facilitando la organización y el seguimiento de tus contenidos y campañas.",
                type: "text",
            },
            {
                question: "¿Qué es Propuestas?",
                answer: "Propuestas es la sección de la app donde puedes revisar los contenidos que se publicarán en tus redes sociales y decidir si los apruebas, solicitas cambios o los dejas pendientes. Estos contenidos son preparados previamente por el equipo de Plinng a partir de la información de tu brief.\n\n**¿Para qué sirve?**\nDesde Propuestas puedes:\n• Validar o rechazar contenidos antes de que se publiquen.\n• Solicitar ajustes si algo no encaja con lo que esperas.\n• Mantener el control sobre lo que se publica en tus redes sociales de forma rápida y sencilla.\n\n**¿Cómo acceder a Propuestas?**\nPara acceder a Propuestas desde la app:\n1. Toca el ícono de Home.\n2. En la pantalla principal verás la sección de Propuestas.\n3. Selecciona la propuesta que quieras revisar.\n\n**¿Cómo funciona Propuestas?**\n\n**Vista principal de propuestas**\nEn la pantalla principal puedes ver todas las propuestas pendientes de revisión. Cada propuesta representa una pieza de contenido que está lista para que tomes una decisión.\n\n**Aprobar una propuesta**\nSi una propuesta te parece correcta, puedes aprobarla deslizando hacia la derecha. Al hacerlo, el contenido queda validado para su publicación y, si aplica, podrás ver la fecha prevista en la que se publicará.\n\n**Solicitar cambios**\nSi quieres modificar una propuesta, puedes deslizarla hacia la izquierda. Esto abre una vista donde puedes revisar el contenido completo y, de forma opcional, dejar un comentario indicando qué te gustaría cambiar antes de que se publique. Al confirmar, tu feedback se envía para que el contenido sea ajustado.\n\n**Saltar una propuesta**\nLa opción \"Saltar\" te permite no tomar una decisión en ese momento. La propuesta quedará pendiente para que puedas revisarla más adelante.\n\n**Vista previa del contenido**\nAntes de decidir, puedes acceder a una vista completa de la propuesta para revisar el contenido con más detalle.\n\n**¿Qué información puedes ver?**\nEn cada propuesta puedes consultar:\n• El contenido preparado para tus redes sociales.\n• El estado de la propuesta (pendiente, aprobada o con cambios solicitados).\n• La fecha de publicación prevista, cuando el contenido ya está aprobado.\n\n**Posibles dudas habituales**\nSi no ves propuestas disponibles, puede deberse a que todavía no se haya completado el brief o a que no haya contenidos listos para revisión. También es posible que algunas acciones se realicen por error si el gesto de deslizamiento no se ejecuta correctamente.\n\n**¿Por qué es útil?**\nPropuestas te permite tomar decisiones rápidas desde el móvil, sin procesos complejos, manteniendo siempre el control sobre el contenido que se publica en tus redes con el apoyo de Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es el Historial de Cambios?",
                answer: "El Historial de Cambios es la sección de la app donde puedes revisar todas las acciones, decisiones y modificaciones que se han realizado sobre una propuesta a lo largo del tiempo. Te permite ver cómo ha evolucionado una propuesta desde su creación hasta su estado actual.\n\n**¿Para qué sirve?**\nDesde el Historial de Cambios puedes:\n• Consultar qué cambios se han hecho en una propuesta.\n• Revisar comentarios y decisiones anteriores.\n• Entender el estado y la evolución de cada propuesta.\n\n**¿Cómo acceder al Historial de Cambios?**\nPara acceder al Historial de Cambios desde la app:\n1. Abre el menú principal tocando el ícono de menú.\n2. Selecciona la opción Historial.\n3. Al acceder, puedes ver el historial de cambios organizado por estado: Aprobadas, Con cambios, Publicadas y Expiradas.\n\n**¿Cómo funciona el Historial de Cambios?**\n\n**Vista del historial**\nEl historial muestra una lista cronológica de las acciones relacionadas con cada propuesta, lo que te permite seguir el orden en el que se realizaron los cambios.\n\n**Información que puedes ver**\nEn cada entrada del historial puedes consultar:\n• Cambios de estado de la propuesta (por ejemplo, aprobada, con cambios o publicada).\n• Comentarios añadidos durante el proceso de revisión.\n• Modificaciones realizadas sobre el contenido de la propuesta.\n\n**Revisar detalles del historial**\nPuedes seleccionar una entrada del historial para ver más detalles sobre una acción o cambio concreto, lo que te ayuda a entender el contexto de cada decisión.\n\n**Posibles dudas habituales**\nSi una propuesta tiene muchos cambios, el historial puede ser extenso y requerir que revises varias entradas para encontrar la información que buscas. Algunas descripciones pueden ser breves, por lo que puede ser necesario revisar varias acciones para tener el contexto completo.\n\n**¿Por qué es útil?**\nEl Historial de Cambios te ofrece transparencia y claridad sobre las decisiones tomadas en cada propuesta, facilitando el seguimiento del trabajo realizado y evitando confusiones durante el proceso de revisión y aprobación en Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es Actividad reciente?",
                answer: "Actividad reciente es una sección de la app que te muestra un resumen actualizado de los movimientos más importantes de tus contenidos (por ejemplo: propuestas aprobadas, con cambios solicitados o publicadas), ordenados de forma cronológica y fáciles de filtrar.\n\n**¿Para qué sirve?**\nDesde Actividad reciente puedes:\n• Ver rápidamente qué ha cambiado en tus propuestas sin entrar una por una.\n• Identificar contenidos que requieren tu atención (por ejemplo, pendientes de revisión).\n• Consultar el estado de cada propuesta (cambios / aprobada / publicada).\n• Acceder al detalle de una propuesta para revisarla o entender su contexto.\n\n**¿Cómo acceder a Actividad reciente?**\nPara acceder a Actividad reciente desde la app:\n1. Toca el ícono de Home.\n2. En la pantalla principal verás el bloque o sección de Actividad reciente.\n3. Toca en el bloque o en \"Actividad reciente\" para abrir la vista completa (si está disponible).\n\n**¿Cómo funciona Actividad reciente?**\n\n**Vista rápida en Home**\nEn la parte superior del Home se muestra un bloque con las últimas propuestas que tuvieron movimientos recientes (por ejemplo: aprobadas, publicadas o con cambios).\n\n**Vista completa con filtros**\nAl abrir la vista completa, puedes filtrar la actividad por tipo de estado:\n• Todas\n• Cambios\n• Aprobadas\n• Publicadas\n\n**Abrir una propuesta desde la actividad**\nAl tocar una tarjeta o ítem del historial, se abre la vista de detalle o vista previa de la propuesta, donde puedes revisar el contenido y ver información adicional (por ejemplo, fecha de publicación si aplica).\n\n**Acceso a contexto adicional**\nSi necesitas entender el historial completo, desde la propuesta puedes navegar al Historial de Cambios para ver el detalle cronológico de decisiones y comentarios.\n\n**¿Qué información puedes ver?**\nEn Actividad reciente puedes consultar:\n• Lista cronológica de propuestas con movimiento reciente.\n• Estado actual de cada propuesta (cambios / aprobada / publicada).\n• Fecha o referencia temporal del cambio (si está disponible).\n• Acceso directo al detalle de la propuesta.\n\n**Posibles dudas habituales**\nSi no ves actividad reciente, puede ser porque:\n• No ha habido cambios en tus propuestas en los últimos días.\n• No hay propuestas en estados relevantes (aprobadas, publicadas o con cambios).\n• Tu cuenta todavía no tiene contenidos generados o en movimiento.\n\n**¿Por qué es útil?**\nActividad reciente te permite mantener visibilidad y control sobre lo que está pasando con tus contenidos de forma rápida, sin perder tiempo navegando por cada sección, y te ayuda a tomar decisiones con mejor contexto cuando lo necesitas.",
                type: "text",
            },
            {
                question: "¿Qué es Seguimiento?",
                answer: "Seguimiento es la sección de la app donde puedes consultar el estado de tu trámite de Kit Digital y el avance de los servicios que tienes activos (como Web, Redes Sociales, SEO, entre otros). Te muestra de forma clara qué partes del proceso ya se han completado, cuáles están en progreso y cuáles están pendientes.\n\n**¿Para qué sirve?**\nDesde Seguimiento puedes:\n• Ver el estado general de tu Kit Digital y de cada servicio contratado.\n• Entender en qué fase se encuentra cada proyecto.\n• Saber qué tareas ya se han realizado y cuáles requieren acción por tu parte.\n• Acceder a enlaces o recursos necesarios para avanzar (formularios, Academy, etc.).\n\n**¿Cómo acceder a Seguimiento?**\nPara acceder a Seguimiento desde la app:\n1. Toca el ícono de Home.\n2. En la pantalla principal verás la sección o bloque de Seguimiento.\n3. Toca en Ver detalles para acceder al seguimiento completo de un servicio.\n\n**¿Cómo funciona Seguimiento?**\n\n**Vista de resumen en Home**\nEn el Home se muestra un resumen visual con:\n• Estado del trámite del Kit Digital.\n• Servicios activos asociados a tu plan.\n• Indicadores de avance (pendiente, en progreso, completado).\n\n**Vista de detalle por servicio**\nAl entrar en un servicio específico, se muestra un roadmap visual con las distintas etapas del proceso. Cada etapa indica claramente su estado, por ejemplo:\n• Completada\n• En progreso\n• Pendiente\n\n**Acceso a tareas y recursos**\nAlgunas etapas incluyen enlaces o acciones, como acceder a formularios, entrar a la Academy o revisar información clave necesaria para continuar con el proyecto.\n\n**¿Qué información puedes ver?**\nEn Seguimiento puedes consultar:\n• Estado actual de tu Kit Digital.\n• Servicios activos y su nivel de avance.\n• Lista de etapas de cada servicio con su estado.\n• Enlaces o acciones asociadas a cada etapa (si aplica).\n\n**Posibles dudas habituales**\nSi no ves información en Seguimiento, puede deberse a que:\n• Aún no se haya iniciado el trámite del Kit Digital.\n• No tengas servicios activos asociados.\n• Algún estado esté pendiente de actualización por parte del equipo.\n\n**¿Por qué es útil?**\nSeguimiento te aporta tranquilidad y claridad, ya que te permite saber en todo momento cómo avanza tu proyecto, qué se ha hecho y qué falta, sin necesidad de contactar soporte, manteniendo una visión clara del proceso con el acompañamiento de Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es Identidad digital?",
                answer: "Identidad digital es la sección de la app donde defines y gestionas la información clave de tu negocio, tu forma de comunicar y tu identidad visual. Estos datos se utilizan como base para generar contenidos coherentes y personalizados en Plinng, como publicaciones, propuestas y campañas.\n\n**¿Para qué sirve?**\nDesde Identidad digital puedes:\n• Centralizar la información principal de tu negocio.\n• Definir cómo quieres que Plinng comunique tu marca.\n• Establecer el estilo visual de tus contenidos.\n• Asegurar que las propuestas reflejen tu identidad y tu público objetivo.\n\n**¿Cómo acceder a Identidad digital?**\nPara acceder a Identidad digital desde la app:\n1. Abre el menú principal.\n2. Toca la opción Identidad digital.\n3. Accede a las distintas pestañas para completar o actualizar tu información.\n\n**¿Cómo funciona Identidad digital?**\nLa sección se organiza en tres pestañas principales, que puedes editar en cualquier momento.\n\n**Info. general**\nAquí defines la información básica de tu negocio:\n• Nombre del negocio.\n• Logotipo (puedes subir o cambiar tu logo).\n• Correo electrónico profesional.\n• Teléfono profesional.\n• Página web (si tienes).\n• Redes sociales conectadas (Instagram, Facebook, TikTok, etc.).\nEsta información identifica tu marca dentro de la app y se usa como referencia general.\n\n**Info. negocio**\nEn esta pestaña describes el contenido más estratégico de tu negocio:\n• Historia y quiénes sois.\n• Productos y servicios que ofreces.\n• Cliente objetivo.\n• Fechas relevantes (eventos, campañas especiales, concursos, etc.).\nEsta información ayuda a contextualizar los contenidos que se crean para tu marca.\n\n**Identidad visual**\nAquí defines cómo debe verse y comunicarse tu marca:\n• Idioma de comunicación.\n• Tipo de comunicación (por ejemplo, profesional, creativo; puedes elegir hasta dos).\n• Tipografía.\n• Estructura de las publicaciones.\n• Estilo de diseño.\n• Colores corporativos.\n• Palabras clave asociadas a tu negocio.\nEstos elementos guían el estilo visual y el tono de los contenidos que Plinng genera para ti.\n\n**¿Qué información puedes ver o editar?**\nEn Identidad digital puedes consultar y modificar:\n• Datos generales del negocio.\n• Información estratégica sobre tu actividad y clientes.\n• Estilo visual y de comunicación de tu marca.\nLos cambios pueden realizarse en cualquier momento para adaptarse a la evolución de tu negocio.\n\n**Posibles dudas habituales**\nSi la información está incompleta o poco definida, las propuestas generadas pueden no reflejar correctamente tu marca. También es importante guardar los cambios antes de salir de la sección para evitar perder información.\n\n**¿Por qué es útil?**\nIdentidad digital permite que Plinng trabaje con una base clara y consistente sobre tu negocio, asegurando que cada propuesta, publicación o campaña mantenga coherencia visual y de mensaje, sin que tengas que repetir la misma información una y otra vez.",
                type: "text",
            },
            {
                question: "¿Qué es Comentarios y reseñas?",
                answer: "Comentarios y reseñas es la sección de la app donde puedes ver y gestionar los comentarios y valoraciones públicas que los clientes han dejado sobre tu negocio en plataformas conectadas como Google o Facebook. Desde aquí puedes leerlos y responder directamente sin salir de Plinng.\n\n**¿Para qué sirve?**\nDesde Comentarios y reseñas puedes:\n• Consultar todas las reseñas recibidas en distintos canales desde un solo lugar.\n• Responder a comentarios de forma rápida y profesional.\n• Gestionar tu reputación online sin cambiar de plataforma.\n• Mantener una comunicación coherente con la identidad de tu marca.\n\n**¿Cómo acceder a Comentarios y reseñas?**\nPuedes acceder a Comentarios y reseñas de dos formas:\n1. Desde la pantalla principal (Home), justo debajo de la sección Propuestas.\n2. Tocando el ícono de Comentarios y reseñas en la barra de navegación inferior de la app.\n\n**¿Cómo funciona Comentarios y reseñas?**\n\n**Vista principal de comentarios y reseñas**\nEn la vista principal puedes ver el listado de comentarios y reseñas recibidas, organizadas de forma cronológica. Cada elemento muestra información clave como la plataforma de origen, el autor (si está disponible), la valoración y el comentario.\n\n**Filtrado y organización**\nCuando tienes varias plataformas conectadas, puedes filtrar las reseñas por canal (por ejemplo, Google o Facebook) para revisar cada una de forma más ordenada.\n\n**Detalle de una reseña o comentario**\nAl tocar un comentario o reseña, se abre la vista completa donde puedes:\n• Leer el mensaje completo del cliente.\n• Ver la valoración asociada (estrellas, si aplica).\n• Consultar el contexto de la reseña.\n\n**Responder un comentario o reseña**\nDesde el detalle puedes:\n• Escribir una respuesta manual.\n• Utilizar respuestas sugeridas según el tono del mensaje (si están disponibles).\nCuando la plataforma lo permite, la respuesta se publica directamente en el canal de origen.\n\n**¿Qué información puedes ver?**\nEn Comentarios y reseñas puedes consultar:\n• Comentarios y valoraciones recibidas en plataformas conectadas.\n• Plataforma de origen de cada reseña.\n• Estado del comentario (respondido o pendiente).\n• Fecha o referencia temporal de la publicación.\n\n**Posibles dudas habituales**\nSi no ves comentarios o reseñas disponibles, puede deberse a que:\n• No tienes plataformas conectadas.\n• No has recibido nuevas reseñas recientemente.\n• Algunas plataformas no permiten mostrar o responder comentarios desde la app.\n\n**¿Por qué es útil?**\nComentarios y reseñas te permite cuidar tu reputación digital de forma centralizada, responder más rápido a tus clientes y mantener una imagen profesional y coherente, sin necesidad de entrar en cada plataforma por separado, con el acompañamiento de Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es Tus servicios?",
                answer: "Tus servicios es la sección de la app donde puedes consultar el plan que tienes contratado y ver de forma clara qué servicios están activos, cuáles no lo están y qué incluye cada uno. Desde aquí también puedes acceder a información adicional, soporte y opciones relacionadas con tu suscripción.\n\n**¿Para qué sirve?**\nDesde Tus servicios puedes:\n• Ver qué plan tienes activo y su precio.\n• Consultar los servicios incluidos y su estado (activo o inactivo).\n• Acceder a información detallada de cada servicio.\n• Entrar a recursos como soporte o la Academy.\n• Iniciar el proceso de cancelación del plan si lo deseas.\n\n**¿Cómo acceder a Tus servicios?**\nPara acceder a Tus servicios desde la app:\n1. Abre el menú principal.\n2. Toca la opción Tus servicios.\n3. Se abrirá la pantalla con el detalle de tu plan y servicios asociados.\n\n**¿Cómo funciona Tus servicios?**\n\n**Vista principal del plan**\nEn la parte superior puedes ver:\n• El nombre de tu plan actual.\n• El precio mensual asociado al plan.\nEsto te da una referencia clara de tu suscripción activa.\n\n**Servicios activos**\nDebajo del plan se muestran los servicios incluidos, organizados por categoría (por ejemplo: Web, Redes Sociales, SEO, Google My Business, App). Cada servicio indica claramente si está Activo o Inactivo y, en algunos casos, incluye accesos directos como enlaces a tu web o perfiles sociales.\n\n**Servicios adicionales**\nTambién puedes ver servicios que no están incluidos en tu plan actual. Estos aparecen como Inactivos y te permiten conocer qué otras opciones existen para ampliar tu servicio en el futuro.\n\n**Soporte y recursos**\nDesde esta sección puedes acceder directamente a:\n• Soporte técnico o funcional.\n• Recursos formativos como la Academy.\n\n**Solicitud de cancelación**\nAl final de la sección encontrarás la opción Solicitar cancelación, que te permite iniciar el proceso de baja del plan de forma guiada desde la app.\n\n**¿Qué información puedes ver?**\nEn Tus servicios puedes consultar:\n• Plan contratado y precio.\n• Lista de servicios activos e inactivos.\n• Estado de cada servicio.\n• Enlaces o accesos asociados a los servicios (si aplica).\n\n**Posibles dudas habituales**\nSi un servicio aparece como activo pero no ves resultados inmediatos, puede deberse a que esté en una fase inicial o pendiente de información. También puede haber diferencias entre servicios incluidos en el plan y servicios adicionales no contratados.\n\n**¿Por qué es útil?**\nTus servicios te ofrece transparencia y control sobre tu suscripción, ayudándote a entender qué estás utilizando, qué tienes disponible y qué opciones tienes para gestionar o ampliar tu plan, todo desde un solo lugar y con el respaldo de Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es el flujo de baja?",
                answer: "El flujo de baja es la funcionalidad que te permite solicitar la cancelación de tu plan directamente desde la app, de forma sencilla y guiada. Este proceso está pensado para que puedas gestionar tu suscripción de manera transparente, sin necesidad de contactar previamente con soporte.\n\n**¿Para qué sirve?**\nDesde el flujo de baja puedes:\n• Solicitar la cancelación de tu plan de forma autónoma.\n• Conocer las implicaciones de la baja antes de confirmarla.\n• Enviar feedback o un motivo de cancelación si lo deseas.\n• Iniciar el proceso de cierre de tu suscripción de manera clara y ordenada.\n\n**¿Cómo acceder al flujo de baja?**\nPara acceder al flujo de baja desde la app:\n1. Abre el menú principal.\n2. Entra en la sección Tus servicios.\n3. Desplázate hasta el final de la pantalla.\n4. Toca la opción Solicitar cancelación.\n\n**¿Cómo funciona el flujo de baja?**\n\n**Pantalla informativa**\nAl iniciar el proceso, se muestra una pantalla que explica qué implica la cancelación del plan, como la pérdida de acceso a determinados servicios o funcionalidades.\n\n**Confirmación de la solicitud**\nDespués de leer la información, debes confirmar la cancelación mediante un botón específico. En algunos casos, se te puede pedir que indiques el motivo de la baja o que dejes un comentario.\n\n**Confirmación final**\nUna vez enviada la solicitud, la app muestra un mensaje de confirmación indicando que la petición ha sido recibida y que el equipo de Plinng se pondrá en contacto contigo para completar el proceso si es necesario.\n\n**¿Qué información puedes ver?**\nEn el flujo de baja puedes consultar:\n• Información sobre las consecuencias de la cancelación.\n• Estado de la solicitud una vez enviada (si se muestra).\n• Mensajes de confirmación del proceso.\n\n**Posibles dudas habituales**\nSi inicias el flujo de baja por error, es importante revisar cuidadosamente las pantallas de confirmación. En caso de problemas técnicos o dudas sobre el proceso, el equipo de soporte puede ayudarte.\n\n**¿Por qué es útil?**\nEl flujo de baja te da control y transparencia sobre tu suscripción, permitiéndote tomar decisiones informadas y gestionar tu plan directamente desde la app, manteniendo una experiencia clara y sin fricciones con Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es Galería?",
                answer: "Galería es la sección de la app donde puedes subir, organizar y gestionar el contenido multimedia de tu negocio, como imágenes, vídeos y archivos. Este material se utiliza como base para crear propuestas de contenido y mantener alineada la identidad visual de tu marca en Plinng.\n\n**¿Para qué sirve?**\nDesde Galería puedes:\n• Subir fotos, vídeos y archivos desde la app.\n• Centralizar todo tu material visual en un solo lugar.\n• Organizar el contenido por tipo o uso.\n• Facilitar al equipo de Plinng el acceso al material necesario para crear contenidos.\n\n**¿Cómo acceder a Galería?**\nPuedes acceder a Galería de dos formas:\n1. Abriendo el menú principal y tocando la opción Galería.\n2. Desde la navegación de la app cuando esté disponible el acceso directo.\n\n**¿Cómo funciona Galería?**\n\n**Vista principal de la Galería**\nAl entrar en Galería, se muestra una vista con todo el contenido subido. En la parte superior puedes filtrar el contenido por secciones para encontrarlo más fácilmente.\n\n**Secciones dentro de Galería**\nDentro de Galería puedes organizar y consultar tu contenido en diferentes secciones:\n• Mi identidad: material relacionado con la identidad de tu marca, como logotipos, recursos visuales o elementos corporativos.\n• Espacio: imágenes o vídeos del local, instalaciones o entorno del negocio.\n• Productos / Servicios: contenido visual de los productos o servicios que ofreces.\nTambién puedes ver todo el contenido junto usando la opción Todo.\n\n**Añadir nuevo contenido**\nDesde Galería puedes tocar el botón Añadir para:\n• Subir imágenes o vídeos desde tu dispositivo.\n• Añadir archivos como documentos o recursos gráficos.\n• Incorporar el contenido directamente a la sección correspondiente.\n\n**¿Qué información puedes ver?**\nEn Galería puedes consultar:\n• Contenido multimedia subido (imágenes, vídeos, archivos).\n• Organización del contenido por secciones.\n• Vista visual del material disponible para crear propuestas.\n\n**Posibles dudas habituales**\nSi no ves contenido en Galería, puede deberse a que aún no se haya subido material o a que estés filtrando por una sección concreta. Si tienes problemas al subir archivos, puede estar relacionado con el tamaño del archivo o la conexión a internet.\n\n**¿Por qué es útil?**\nGalería te permite mantener todo el material visual de tu negocio organizado y accesible, asegurando que los contenidos que Plinng crea para ti estén basados en imágenes y recursos reales, actualizados y alineados con tu marca.",
                type: "text",
            },
            {
                question: "¿Qué es Cambios web?",
                answer: "Cambios web es la sección de la app que te permite solicitar modificaciones en tu página web de forma sencilla y guiada, sin necesidad de contactar directamente por email o WhatsApp. Desde aquí puedes iniciar el proceso para indicar qué cambios necesitas en tu web.\n\n**¿Para qué sirve?**\nDesde Cambios web puedes:\n• Solicitar ajustes o modificaciones en tu página web.\n• Explicar de forma clara qué cambios deseas realizar.\n• Iniciar un proceso organizado y centralizado con el equipo de Plinng.\n• Evitar confusiones o pérdidas de información en la gestión de cambios.\n\n**¿Cómo acceder a Cambios web?**\nPara acceder a Cambios web desde la app:\n1. Abre el menú principal.\n2. Toca la opción Cambios web.\n3. Se abrirá el formulario para iniciar tu solicitud.\n\n**¿Cómo funciona Cambios web?**\n\n**Formulario de solicitud**\nAl entrar en Cambios web, encontrarás un formulario donde puedes describir los cambios que deseas realizar en tu página web. Puedes indicar detalles y aportar contexto para que el equipo entienda mejor tu solicitud.\n\n**Confirmación de la solicitud**\nUna vez enviada la solicitud, la app muestra un mensaje de confirmación indicando que tu petición ha sido registrada y que recibirás un correo con los siguientes pasos.\n\n**Continuación del proceso fuera de la app**\nTras enviar la solicitud:\n• El equipo de Plinng revisa tu petición.\n• Recibes un correo con instrucciones y un enlace para dejar comentarios directamente sobre tu web mediante una herramienta de anotaciones.\n• Desde ese enlace puedes señalar visualmente los cambios que necesitas.\n\n**¿Qué información puedes ver?**\nEn Cambios web puedes consultar:\n• El formulario de solicitud de cambios.\n• Mensajes de confirmación del estado inicial del proceso.\n\n**Posibles dudas habituales**\nEl correo con los siguientes pasos puede tardar en llegar. Si no lo recibes, revisa la carpeta de spam. También es importante tener en cuenta que los cambios no se realizan de forma inmediata, ya que siguen un proceso interno de revisión.\n\n**¿Por qué es útil?**\nCambios web te permite solicitar modificaciones de forma clara y estructurada, manteniendo una experiencia centralizada en la app y asegurando que el equipo de Plinng reciba toda la información necesaria para ejecutar los cambios de manera eficiente.",
                type: "text",
            },
            {
                question: "¿Qué es Ajustes?",
                answer: "Ajustes es la sección de la app donde puedes gestionar las configuraciones básicas de tu cuenta, como las conexiones con redes sociales, el idioma de la aplicación y las acciones relacionadas con tu sesión y tu cuenta.\n\n**¿Para qué sirve?**\nDesde Ajustes puedes:\n• Conectar o desconectar tus redes sociales.\n• Cambiar el idioma de la aplicación.\n• Cerrar sesión de forma segura.\n• Eliminar tu cuenta si lo deseas.\n\n**¿Cómo acceder a Ajustes?**\nPara acceder a Ajustes desde la app:\n1. Abre el menú principal.\n2. Toca la opción Ajustes.\n3. Se abrirá la pantalla de configuración de tu cuenta.\n\n**¿Cómo funciona Ajustes?**\n\n**Acceso a redes sociales**\nEn la sección Acceso a redes sociales puedes conectar tus cuentas externas para integrarlas con la app:\n• Conectar con Instagram.\n• Conectar con Google Empresa.\nEstas conexiones permiten a Plinng acceder a información y funcionalidades relacionadas con tus redes sociales y tu perfil de negocio.\n\n**Idioma**\nEn la sección Idioma puedes seleccionar el idioma en el que quieres usar la aplicación. El cambio se aplica a toda la interfaz de la app.\n\n**Cuenta**\nEn la sección Cuenta puedes realizar acciones relacionadas con tu sesión y tus datos:\n• Cerrar sesión, para salir de la app de forma segura.\n• Eliminar cuenta, para solicitar la eliminación permanente de tu cuenta.\n\n**¿Qué información puedes ver o gestionar?**\nEn Ajustes puedes consultar y gestionar:\n• Estado de conexión de Instagram y Google Empresa.\n• Idioma configurado en la app.\n• Acciones de sesión y cuenta.\n\n**Posibles dudas habituales**\nAl conectar o desconectar redes sociales, algunas funcionalidades pueden dejar de estar disponibles. Si eliminas tu cuenta, esta acción no se puede deshacer. Si cambias el idioma, la app puede necesitar recargarse para aplicar correctamente el cambio.\n\n**¿Por qué es útil?**\nAjustes te da control sobre tu cuenta y tus integraciones, permitiéndote gestionar accesos, idioma y sesión de forma sencilla y segura, manteniendo una experiencia clara y ordenada dentro de Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es Notificaciones?",
                answer: "Notificaciones es la funcionalidad de la app que te mantiene informado sobre eventos importantes relacionados con tu cuenta y tus contenidos, como nuevas propuestas, cambios de estado, comentarios o acciones pendientes. Las notificaciones te ayudan a no perderte nada relevante.\n\n**¿Para qué sirve?**\nDesde Notificaciones puedes:\n• Recibir avisos sobre nuevas propuestas disponibles.\n• Saber cuándo una propuesta ha sido aprobada, publicada o necesita cambios.\n• Ver alertas sobre nuevos comentarios o reseñas.\n• Mantenerte al día de acciones importantes sin tener que entrar en cada sección.\n\n**¿Cómo acceder a Notificaciones?**\nPuedes acceder a Notificaciones de dos formas:\n1. Tocando el ícono de campana ubicado en la parte superior de la pantalla principal.\n2. Tocando una notificación cuando aparece como aviso dentro de la app.\n\n**¿Cómo funciona Notificaciones?**\n\n**Listado de notificaciones**\nAl abrir Notificaciones, se muestra una lista cronológica con los avisos más recientes. Cada notificación indica el tipo de evento y está asociada a una sección concreta de la app.\n\n**Acceso directo desde una notificación**\nAl tocar una notificación, la app te redirige automáticamente a la sección relacionada, como Propuestas, Comentarios y reseñas o el detalle de un contenido específico.\n\n**Estado de las notificaciones**\nLas notificaciones pueden aparecer como leídas o no leídas, lo que te permite identificar fácilmente qué avisos ya has revisado.\n\n**¿Qué información puedes ver?**\nEn Notificaciones puedes consultar:\n• Lista de avisos recientes.\n• Tipo de evento asociado a cada notificación.\n• Acceso directo al contenido o sección relacionada.\n\n**Posibles dudas habituales**\nSi no recibes notificaciones, puede deberse a que los permisos estén desactivados en tu dispositivo o a que no haya eventos recientes. Algunas notificaciones pueden depender de acciones específicas, como la creación de nuevas propuestas o la recepción de comentarios.\n\n**¿Por qué es útil?**\nNotificaciones te permite estar siempre al tanto de lo que ocurre en tu cuenta, ayudándote a reaccionar a tiempo, tomar decisiones más rápido y mantener el control de tus contenidos y tu actividad dentro de Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es Cerrar sesión?",
                answer: "Cerrar sesión es la opción que te permite salir de tu cuenta de forma segura desde la app. Al hacerlo, se cierra tu sesión activa y se protege el acceso a tu información personal y a la gestión de tu negocio.\n\n**¿Para qué sirve?**\nDesde Cerrar sesión puedes:\n• Salir de tu cuenta de manera segura.\n• Evitar accesos no autorizados si compartes el dispositivo.\n• Finalizar tu sesión cuando ya no necesitas usar la app.\n\n**¿Cómo acceder a Cerrar sesión?**\nPara cerrar sesión desde la app:\n1. Abre el menú principal.\n2. Entra en la sección Ajustes.\n3. Toca la opción Cerrar sesión.\n\n**¿Cómo funciona Cerrar sesión?**\n\n**Confirmación de cierre**\nAl tocar \"Cerrar sesión\", la app puede mostrar un mensaje de confirmación para evitar cierres accidentales.\n\n**Salida de la cuenta**\nUna vez confirmada la acción, se cierra tu sesión y se te redirige a la pantalla de inicio o login de la app.\n\n**¿Qué ocurre al cerrar sesión?**\nAl cerrar sesión:\n• No se elimina tu cuenta ni tu información.\n• Se mantiene intacto todo tu contenido y configuración.\n• Necesitarás volver a iniciar sesión para acceder nuevamente.\n\n**Posibles dudas habituales**\nSi cierras sesión por error, solo tendrás que volver a iniciar sesión con tus credenciales habituales. Si olvidaste tus datos de acceso, deberás usar las opciones de recuperación disponibles.\n\n**¿Por qué es útil?**\nCerrar sesión te permite mantener la seguridad de tu cuenta y gestionar el acceso a la app de forma responsable, especialmente cuando usas dispositivos compartidos o públicos, garantizando una experiencia segura con Plinng.",
                type: "text",
            },
            {
                question: "¿Qué es Subir logo?",
                answer: "Subir logo es la funcionalidad que te permite cargar o cambiar el logotipo de tu marca dentro de la app. El logotipo se muestra en la parte superior izquierda del Home, junto a tu nombre, y forma parte de la identidad visual de tu negocio en Plinng.\n\n**¿Para qué sirve?**\nDesde Subir logo puedes:\n• Personalizar visualmente tu espacio dentro de la app.\n• Asociar tu marca visual a tu cuenta.\n• Actualizar tu logotipo de forma rápida y autónoma.\n• Ver reflejado el cambio inmediatamente en el Home.\n\n**¿Cómo acceder a Subir logo?**\nPuedes acceder a la funcionalidad de dos formas:\n1. Desde el menú principal, tocando la opción Subir logo.\n2. Desde el Home, tocando el círculo del logotipo (avatar) que aparece a la izquierda de tu nombre.\n\n**¿Cómo funciona Subir logo?**\n\n**Pantalla de carga de logo**\nAl acceder, se muestra una pantalla con un mensaje instructivo indicando los requisitos del archivo (formato JPG o PNG, tamaño máximo 5 MB y dimensiones recomendadas de 720×720 px) y un botón para cargar la imagen.\n\n**Selección del archivo**\nAl tocar \"Cargar imagen\", puedes seleccionar una imagen desde la galería o los archivos de tu dispositivo.\n\n**Recorte de la imagen**\nDespués de seleccionar el archivo, la app permite ajustar y recortar el logotipo para que encaje correctamente. Una vez conforme, debes tocar el botón Finalizar.\n\n**Confirmación y actualización**\nAl completar el proceso:\n• La app te redirige automáticamente al Home.\n• Se muestra un mensaje de confirmación indicando que el logotipo se ha actualizado correctamente.\n• El nuevo logo se visualiza de inmediato en tu perfil.\n\n**¿Qué información puedes ver o modificar?**\nEn esta funcionalidad puedes:\n• Ver el logotipo actual de tu negocio.\n• Sustituirlo por uno nuevo en cualquier momento.\n\n**Posibles dudas habituales**\nSi el archivo no cumple con el formato, tamaño o dimensiones requeridas, la app mostrará un mensaje de error. Si la imagen queda mal recortada, puedes repetir el proceso antes de finalizar. En caso de problemas de conexión, se mostrará un aviso con la opción de reintentar.\n\n**¿Por qué es útil?**\nSubir logo refuerza la identidad visual de tu marca dentro de la app, te da sensación de control y personalización, y garantiza que tu perfil y los contenidos asociados reflejen una imagen profesional y coherente en Plinng.",
                type: "text",
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
                            {
                                question: "¿Qué es Plinng Call Agent?",
                                answer: "Es tu recepcionista con inteligencia artificial que atiende llamadas 24/7, responde preguntas frecuentes, agenda citas y transfiere llamadas importantes a tu móvil. Funciona como parte de tu cuenta Plinng.",
                            },
                            {
                                question: "¿Cómo funciona?",
                                answer: "Cuando un cliente llama a tu número de negocio, nuestro agente con IA contesta inmediatamente, entiende qué necesita el cliente y le da respuestas basadas en la información de tu negocio. Si la consulta es compleja, transfiere la llamada a tu teléfono móvil.",
                            },
                            {
                                question: "¿Suena como un robot?",
                                answer: "No. Usamos las voces en español más naturales del mercado. Puedes elegir entre varias opciones de voces (masculina/femenina, diferentes acentos) y tu agente suena como una persona real y profesional.",
                            },
                            {
                                question: "¿En qué idiomas funciona?",
                                answer: "Actualmente en español (España y Latinoamérica). Próximamente: catalán, inglés y francés.",
                            },
                        ],
                    },
                    {
                        section: "Configuración y Uso",
                        items: [
                            {
                                question: "¿Es difícil de configurar?",
                                answer: "Para nada. El setup completo toma menos de 5 minutos. Solo necesitas: 1) Elegir una voz, 2) Confirmar info de tu negocio, 3) Agregar archivos adicionales si quieres, 4) Hacer una llamada de prueba. ¡Listo!",
                            },
                            {
                                question: "¿Necesito cambiar mi número de teléfono?",
                                answer: "Te asignaremos un número de teléfono que es el que tus clientes podrán llamar y conversar con el agente AI.",
                            },
                            {
                                question: "¿Qué tipo de preguntas puede responder?",
                                answer: "Todo lo que tú le enseñes: horarios, servicios, precios, ubicación, cómo llegar, política de cancelación, disponibilidad, etc. Puedes subir documentos (PDF, Word) con información adicional.",
                            },
                            {
                                question: "¿Puede agendar citas?",
                                answer: "No, pero estamos trabajando para que puedas gestionar reservas e integrarte con Google Calendar.",
                            },
                        ],
                    },
                    {
                        section: "Llamadas y Transferencias",
                        items: [
                            {
                                question: "¿Cuántas llamadas puede manejar a la vez?",
                                answer: "Hasta 2 llamadas simultáneas sin perder calidad.",
                            },
                            {
                                question: "¿Cuándo transfiere al teléfono humano?",
                                answer: "Cuando: 1) El cliente lo pide explícitamente, 2) La pregunta es muy compleja, o 3) Detecta frustración o urgencia",
                            },
                            {
                                question: "¿Pierdo el contexto cuando se transfiere?",
                                answer: "No. Recibes en Plinng podrás ver la transcripción de la llamada.",
                            },
                            {
                                question: "¿Qué pasa si no puedo contestar la transferencia?",
                                answer: "La llamada quedará registrada en Plinng. Podrás leer la transcripción y llamar a la persona si lo deseas.",
                            },
                        ],
                    },
                    {
                        section: "Precio y Facturación",
                        items: [
                            {
                                question: "¿Cuánto cuesta?",
                                answer: "€29/mes con 100 minutos incluidos. Minutos adicionales: €0.29/minuto. Sin permanencia, cancela cuando quieras.",
                            },
                            {
                                question: "¿100 minutos son suficientes?",
                                answer: "Para la mayoría, sí. 100 minutos = aproximadamente 50-150 llamadas al mes (dependiendo de duración). Si necesitas más, puedes habilitar los pagos automáticos para que te vayamos cobrando en función de los minutos consumidos.",
                            },
                            {
                                question: "¿Hay costes ocultos?",
                                answer: "Ninguno. El precio incluye: número dedicado, transcripciones ilimitadas, dashboard, reportes, y actualizaciones.",
                            },
                            {
                                question: "¿Cómo cancelo si no me convence?",
                                answer: "Desde tu cuenta Plinng, en cualquier momento. Sin preguntas, sin penalización.",
                            },
                        ],
                    },
                    {
                        section: "Privacidad y Legal",
                        items: [
                            {
                                question: "¿Es legal usar IA para atender llamadas en España?",
                                answer: "Sí. Cumplimos con la nueva regulación española: informamos al cliente que está hablando con un agente digital y siempre ofrecemos opción de hablar con humano.",
                            },
                            {
                                question: "¿Qué pasa con los datos de mis clientes?",
                                answer: "Solo tú tienes acceso. Cumplimos 100% con GDPR. No vendemos ni compartimos datos con terceros.",
                            },
                            {
                                question: "¿Graban las llamadas?",
                                answer: "Generamos transcripciones de texto de todas las llamadas para tu dashboard. Las grabaciones de audio no se guardan por defecto.",
                            },
                        ],
                    },
                    {
                        section: "Sectores y Casos de Uso",
                        items: [
                            {
                                question: "¿Funciona para mi tipo de negocio?",
                                answer: "Funciona especialmente bien para: barberías/peluquerías, spas/estética, clínicas médicas/dentales, restaurantes, gimnasios, asesorías, despachos profesionales, talleres, tiendas locales. Si tus clientes te llaman, el agente te ayuda.",
                            },
                            {
                                question: "¿Funciona para soporte técnico complejo?",
                                answer: "Las respuestas del agente va en función de la información que le adjuntes.",
                            },
                        ],
                    },
                    {
                        section: "Integración con Plinng",
                        items: [
                            {
                                question: "¿Necesito tener Plinng para usar Call Agent?",
                                answer: "Sí, Call Agent es un addon de Plinng. Necesitas una cuenta activa (desde €xx/mes).",
                            },
                            {
                                question: "¿Se integra con mis otras herramientas de Plinng?",
                                answer: "Sí. La información de llamadas se sincroniza con tu dashboard de Sophia.",
                            },
                            {
                                question: "¿Puedo gestionar todo desde la app de Plinng?",
                                answer: "Sí. Configuración, transcripciones, reportes, ajustes - todo desde tu cuenta Plinng. Una sola plataforma para todo tu marketing y atención al cliente.",
                            },
                        ],
                    },
                ],
            },
        ],
    },
]

export default function FAQPage() {
    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                {/* Botón Siguiente en esquina superior derecha - Desktop */}
                <div className="hidden lg:flex justify-end mb-[56px]">
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
                </div>

                {/* Contenido principal */}
                <div className="w-full relative flex flex-col items-start justify-center gap-4">
                    <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[42px] sm:text-[36px] lg:text-[42px] font-bold">
                        Preguntas frecuentes
                    </b>
                    <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                        Encuentra respuestas a las preguntas más comunes sobre Plinng.
                    </div>

                    {/* Secciones de FAQ */}
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
                                                {faq.type === "video" && "videoUrl" in faq && faq.videoUrl ? (
                                                    <div className="flex justify-center items-center py-4">
                                                        <MobileVideoContainer
                                                            videoUrl={faq.videoUrl}
                                                            title={faq.question}
                                                        />
                                                    </div>
                                                ) : faq.type === "video-horizontal" && "videoUrl" in faq && faq.videoUrl ? (
                                                    <div className="w-full py-4">
                                                        <VideoPlayer
                                                            src={faq.videoUrl}
                                                            title={faq.question}
                                                            aspectRatio="horizontal"
                                                        />
                                                    </div>
                                                ) : faq.type === "nested" && "subQuestions" in faq && faq.subQuestions ? (
                                                    <div className="space-y-6">
                                                        {faq.subQuestions.map((section: { section: string; items: { question: string; answer: string }[] }, sectionIndex: number) => (
                                                            <div key={sectionIndex} className="space-y-4">
                                                                <h3 className="text-[20px] font-semibold text-black mb-2">
                                                                    {section.section}
                                                                </h3>
                                                                <Accordion type="single" collapsible className="w-full space-y-2">
                                                                    {section.items.map((item: { question: string; answer: string }, itemIndex: number) => (
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
                                                                                            <strong key={partIndex} className="font-semibold text-black">
                                                                                                {part.replace(/\*\*/g, '')}
                                                                                            </strong>
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
                                                        {formatText(faq.answer)}
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

                {/* Botón Siguiente al final - Mobile */}
                <div className="flex lg:hidden mt-8 mb-[80px]">
                    <div className="rounded-[18px] bg-[#BEFF50] flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90 w-full">
                        <div className="relative leading-7 font-semibold text-[#000000]">Siguiente</div>
                        <Image
                            src="/assets/icons/arrow2.svg"
                            className="h-5 w-7 ml-2"
                            width={28}
                            height={20}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

