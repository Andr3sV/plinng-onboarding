"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// ─── Types ───────────────────────────────────────────────────────────────────

type Tip = { text: string }

type ArticleSection =
  | { type: "intro"; text: string }
  | { type: "tips"; title: string; items: string[] }
  | { type: "steps"; title: string; items: string[] }
  | { type: "note"; text: string }

type Step = {
  id: string
  title: string
  description: string
  videoUrl: string
  tips?: Tip[]
  article?: ArticleSection[]
}

// ─── Step data ────────────────────────────────────────────────────────────────
// Add `tips` and `article` content per step as needed.

const steps: Step[] = [
  {
    id: "step-1",
    title: "Paso 1: Comienza tu camino con Plinng",
    description: "Bienvenido a Plinng. Comienza tu recorrido aquí.",
    videoUrl: "/videos/Welcome Brief.mp4",
    tips: [
      { text: "Tómate unos minutos para ver el video completo antes de continuar." },
      { text: "Ten a mano la dirección de facturación y teléfono profesional de tu negocio antes de empezar." },
      { text: "Usa el nombre completo de tu negocio tal como quieres que aparezca en tus comunicaciones y contenido." },
    ],
    article: [
      {
        type: "intro",
        text: "La sección de Información General es el primer paso para configurar tu cuenta en Plinng. Aquí proporcionas los datos básicos de tu negocio que nos ayudarán a personalizar tu experiencia y crear contenido relevante para tu empresa.",
      },
      {
        type: "steps",
        title: "Campos a completar",
        items: [
          "Nombre del negocio: el nombre oficial de tu empresa tal como quieres que aparezca en tus comunicaciones.",
          "País: dónde opera tu negocio. Nos ayuda a adaptar las recomendaciones de contenido a tu mercado local.",
          "Dirección de facturación: código postal, ciudad y país (ej. \"08020 Barcelona, España\").",
          "Teléfono profesional: incluye el código de país (ej. \"+34685566784\").",
          "Correo electrónico profesional: será el canal principal de comunicación, usa uno que revises regularmente.",
          "Categoría de la empresa: elige la que mejor describe tu negocio (ej. \"Ocio y entretenimiento\" para eventos).",
          "Subcategoría: afina la categoría con la opción más específica (ej. \"Eventos/celebraciones\").",
        ],
      },
      {
        type: "note",
        text: "La categoría y subcategoría son especialmente importantes: nos permiten analizar correctamente tu competencia y crear contenido específico para tu sector.",
      },
      {
        type: "tips",
        title: "Categorías disponibles",
        items: [
          "Comercio minorista",
          "Servicios profesionales",
          "Alimentación",
          "Salud",
          "Construcción y reformas",
          "Educación",
          "Transporte y logística",
          "Estética y belleza",
          "Ocio y entretenimiento",
        ],
      },
      {
        type: "steps",
        title: "Segunda pantalla: Ubicación del negocio",
        items: [
          "Misma dirección de facturación: activa el interruptor si la ubicación de tu negocio coincide con la dirección de facturación.",
          "Dirección diferente: desactiva el interruptor e ingresa el país y dirección completa de tu negocio.",
          "¿Es un local físico?: activa este interruptor si tienes una ubicación donde los clientes pueden visitarte. Esto personaliza tu estrategia de marketing.",
        ],
      },
      {
        type: "note",
        text: "La barra de progreso verde en la parte superior te mostrará cuánto has avanzado en el proceso de configuración.",
      },
    ],
  },
  {
    id: "step-2",
    title: "Paso 2: Información sobre tu negocio",
    description: "Comparte los detalles esenciales de tu negocio.",
    videoUrl: "/videos/Información General - Brief.mp4",
    tips: [
      { text: "Escribe el nombre de usuario de tus redes (sin @), no el correo ni el teléfono asociado." },
      { text: "Si aún no tienes redes sociales para tu negocio, puedes saltarte este paso y configurarlas más adelante." },
      { text: "Puedes añadir, modificar o eliminar tus redes sociales en cualquier momento desde tu panel de control." },
    ],
    article: [
      {
        type: "intro",
        text: "Añadir tus redes sociales a Plinng es un paso fundamental para centralizar la gestión de tu presencia digital. El sistema detectará automáticamente las plataformas que utilices y te permitirá administrar todo tu contenido desde un solo lugar.",
      },
      {
        type: "tips",
        title: "Redes sociales disponibles",
        items: [
          "Instagram — para compartir fotos y videos de tu negocio.",
          "Facebook — para conectar con tu comunidad local.",
          "TikTok — para contenido de video corto y viral.",
          "LinkedIn — para networking profesional y contenido corporativo.",
        ],
      },
      {
        type: "steps",
        title: "Cómo configurar tus redes sociales",
        items: [
          "Activa el toggle \"Tengo redes sociales\" en la sección correspondiente.",
          "Escribe el nombre de usuario de cada red (sin @). El sistema las detectará automáticamente.",
          "Revisa la lista de cuentas configuradas y usa la X para eliminar cualquiera que sea incorrecta.",
        ],
      },
      {
        type: "tips",
        title: "Formato correcto por red social",
        items: [
          "Instagram: nombre de usuario sin @ (ej. \"tuempresa\").",
          "Facebook: nombre de la página o URL (ej. \"Tu Página de Negocio\").",
          "TikTok: nombre de usuario tal como aparece en la app.",
          "LinkedIn: nombre de la empresa o URL del perfil.",
        ],
      },
      {
        type: "note",
        text: "Importante: no uses correos electrónicos, números de teléfono ni URLs completas con https://. Solo el nombre de usuario o nombre de la página.",
      },
      {
        type: "steps",
        title: "Preguntas frecuentes",
        items: [
          "¿Puedo añadir más de una cuenta de la misma red? Actualmente una cuenta por plataforma. Contacta a soporte si necesitas más.",
          "¿Me equivoqué con un nombre? Elimina la cuenta con la X y vuelve a añadirla con el nombre correcto.",
          "¿Plinng publicará automáticamente en mis redes? No, siempre tendrás control sobre qué y cuándo se publica.",
        ],
      },
    ],
  },
  {
    id: "step-3",
    title: "Paso 3: Añade tus redes sociales",
    description: "Conecta tus redes sociales para que Plinng pueda trabajar con ellas.",
    videoUrl: "/videos/Añade tus redes sociales.mp4",
    tips: [
      { text: "Escribe el nombre de usuario de tus redes (sin @), no el correo ni el teléfono asociado." },
      { text: "Si aún no tienes redes sociales para tu negocio, puedes saltarte este paso y configurarlas más adelante." },
      { text: "Puedes añadir, modificar o eliminar tus redes sociales en cualquier momento desde tu panel de control." },
    ],
    article: [
      {
        type: "intro",
        text: "Añadir tus redes sociales a Plinng es un paso fundamental para centralizar la gestión de tu presencia digital. El sistema detectará automáticamente las plataformas que utilices y te permitirá administrar todo tu contenido desde un solo lugar.",
      },
      {
        type: "tips",
        title: "Redes sociales disponibles",
        items: [
          "Instagram — para compartir fotos y videos de tu negocio.",
          "Facebook — para conectar con tu comunidad local.",
          "TikTok — para contenido de video corto y viral.",
          "LinkedIn — para networking profesional y contenido corporativo.",
        ],
      },
      {
        type: "steps",
        title: "Cómo configurar tus redes sociales",
        items: [
          "Activa el toggle \"Tengo redes sociales\" en la sección correspondiente.",
          "Escribe el nombre de usuario de cada red (sin @). El sistema las detectará automáticamente.",
          "Revisa la lista de cuentas configuradas y usa la X para eliminar cualquiera que sea incorrecta.",
        ],
      },
      {
        type: "tips",
        title: "Formato correcto por red social",
        items: [
          "Instagram: nombre de usuario sin @ (ej. \"tuempresa\").",
          "Facebook: nombre de la página o URL (ej. \"Tu Página de Negocio\").",
          "TikTok: nombre de usuario tal como aparece en la app.",
          "LinkedIn: nombre de la empresa o URL del perfil.",
        ],
      },
      {
        type: "note",
        text: "Importante: no uses correos electrónicos, números de teléfono ni URLs completas con https://. Solo el nombre de usuario o nombre de la página.",
      },
      {
        type: "steps",
        title: "Preguntas frecuentes",
        items: [
          "¿Puedo añadir más de una cuenta de la misma red? Actualmente una cuenta por plataforma. Contacta a soporte si necesitas más.",
          "¿Me equivoqué con un nombre? Elimina la cuenta con la X y vuelve a añadirla con el nombre correcto.",
          "¿Plinng publicará automáticamente en mis redes? No, siempre tendrás control sobre qué y cuándo se publica.",
        ],
      },
    ],
  },
  {
    id: "step-4",
    title: "Paso 4: Hablemos sobre tu negocio",
    description: "Cuéntanos sobre tu negocio y cómo funciona.",
    videoUrl: "/videos/Hablemos de tu negocio final.mp4",
    tips: [
      { text: "Sé genuino en tus respuestas. El contenido más efectivo es aquel que refleja la verdadera esencia de tu negocio." },
      { text: "Cuanta más información proporciones, mejor podremos personalizar el contenido. No te limites a respuestas cortas." },
      { text: "Puedes usar texto escrito o mensaje de voz para responder. Ambos formatos son igualmente válidos." },
    ],
    article: [
      {
        type: "intro",
        text: "Esta sección te ayudará a proporcionar información clave sobre tu negocio para que Plinng pueda entender mejor tu proyecto y crear contenido personalizado que refleje fielmente tu identidad y propuesta de valor. Sabemos que estos pasos pueden parecer tediosos, pero cada respuesta nos ayuda a entender mejor tu negocio y reflejarlo a través de tu contenido.",
      },
      {
        type: "steps",
        title: "Pregunta 1: Historia del Negocio — ¿Cómo comenzó tu proyecto y qué te motivó?",
        items: [
          "Origen: ¿Cuándo y cómo comenzó tu negocio? ¿Qué situación o necesidad identificaste?",
          "Motivación: ¿Qué te impulsó a emprender? ¿Cuáles son tus valores fundamentales?",
          "Evolución: ¿Cómo ha crecido tu negocio? ¿Qué hitos importantes has alcanzado?",
        ],
      },
      {
        type: "note",
        text: "Ejemplo: \"Todo comenzó con mi pasión por ayudar a familias y negocios a organizar eventos inolvidables en Barcelona. Me define la atención al detalle y el compromiso con cada cliente.\"",
      },
      {
        type: "steps",
        title: "Pregunta 2: Definición Personal y Profesional — ¿Quién eres y qué te hace único?",
        items: [
          "Tu rol: ¿Cuál es tu formación o especialización? ¿Qué experiencia tienes en tu sector?",
          "Diferenciación: ¿Qué te diferencia de tu competencia? ¿Cuáles son tus fortalezas?",
          "Enfoque: ¿Cómo abordas tus proyectos? ¿Cómo te relacionas con tus clientes?",
          "Estructura: ¿Trabajas solo o en equipo? ¿Eres autónomo o tienes una pequeña empresa?",
        ],
      },
      {
        type: "steps",
        title: "Pregunta 3: Productos y Servicios — ¿Qué ofreces y cómo beneficia a tus clientes?",
        items: [
          "Catálogo: ¿Qué productos o servicios ofreces? ¿Tienes servicios complementarios?",
          "Propuesta de valor: ¿Qué hace únicos a tus productos? ¿Qué problemas resuelven?",
          "Beneficios: ¿Cómo mejoran la vida de tus clientes? ¿Qué resultados pueden esperar?",
          "Proceso: ¿Cómo entregas tus servicios? ¿Tienes algún método específico?",
        ],
      },
      {
        type: "note",
        text: "Consejo: En lugar de decir \"ofrezco servicios de marketing\", sé específico: \"gestión de redes sociales, creación de contenido y estrategia de marca\".",
      },
      {
        type: "tips",
        title: "Formatos de respuesta disponibles",
        items: [
          "Texto escrito — ideal si prefieres organizar tus ideas escribiendo o ya tienes la información preparada.",
          "Mensaje de voz — recomendado si te expresas mejor hablando o quieres transmitir emoción de forma más natural.",
        ],
      },
      {
        type: "tips",
        title: "Cómo se usará tu información",
        items: [
          "Generación de contenido: publicaciones y materiales que reflejen tu marca.",
          "Tono y estilo: adaptar el lenguaje a tu personalidad de marca.",
          "Mensajes clave: identificar los aspectos más relevantes para destacar.",
          "Diferenciación: posicionar tu negocio de manera única frente a la competencia.",
        ],
      },
      {
        type: "steps",
        title: "Preguntas frecuentes",
        items: [
          "¿Puedo modificar mis respuestas después? Sí, puedes actualizarlas desde tu panel de control cuando lo necesites.",
          "¿Qué pasa si no sé qué responder? Puedes guardar el progreso y volver más tarde.",
          "¿Es obligatorio responder las tres preguntas? Sí, son fundamentales para crear contenido relevante.",
          "¿Puedo usar mensaje de voz para todas las preguntas? Sí, puedes combinar ambos formatos libremente.",
        ],
      },
    ],
  },
  {
    id: "step-5",
    title: "Paso 5: Exploremos tus productos y servicios",
    description: "Describe tus productos y servicios para que Plinng los conozca mejor.",
    videoUrl: "/videos/Exploremos tus productos y servicios final.mp4",
    tips: [
      { text: "Sé específico: en lugar de \"ofrezco servicios de calidad\", explica exactamente qué hace que tu servicio sea especial." },
      { text: "Enfócate en resultados, no solo en procesos. Los clientes quieren saber qué lograrán contigo." },
      { text: "Lo ideal es entre 100-200 palabras: suficiente para dar una imagen completa sin abrumar con detalles." },
    ],
    article: [
      {
        type: "intro",
        text: "Explícanos qué ofreces, qué los hace únicos y cómo benefician a tus clientes. Esta información es fundamental para crear contenido que realmente muestre el valor de tu oferta y conecte con las necesidades de tus clientes potenciales.",
      },
      {
        type: "steps",
        title: "Qué debes incluir en tu descripción",
        items: [
          "Descripción general: ¿Qué productos o servicios ofreces? ¿Cuál es tu especialización principal?",
          "Lo que te hace único: ¿Qué haces diferente a tu competencia? ¿Tienes alguna metodología o enfoque particular?",
          "Beneficios para tus clientes: ¿Qué problemas resuelves? ¿Qué resultados pueden esperar?",
          "Alcance del servicio: ¿Qué incluye exactamente tu oferta? ¿Cuáles son los pasos o fases del proceso?",
          "Tipos específicos: Si aplica, enumera las diferentes categorías, líneas de productos o tipos de proyectos.",
        ],
      },
      {
        type: "note",
        text: "Ejemplo: \"Organizamos eventos en Barcelona diseñados para ser únicos y memorables. Nos encargamos de todo, desde la planificación hasta la ejecución, cuidando cada detalle para que tu evento refleje tu estilo y objetivos. Organizamos bodas, fiestas infantiles, comuniones, despedidas y eventos empresariales.\"",
      },
      {
        type: "tips",
        title: "Estructura recomendada para tu respuesta",
        items: [
          "Apertura: ¿Qué haces? (1-2 frases)",
          "Cómo lo haces: alcance y proceso (2-3 frases)",
          "Tu diferenciador: ¿por qué eres único? (1-2 frases)",
          "Beneficios: ¿cómo ayudas a tus clientes? (1-2 frases)",
          "Catálogo: tipos específicos de productos o servicios (lista o frase)",
        ],
      },
      {
        type: "steps",
        title: "Errores comunes a evitar",
        items: [
          "Ser demasiado vago: evita \"ofrezco soluciones integrales\". Detalla exactamente qué haces.",
          "Listar solo características sin beneficios: explica qué gana el cliente, no solo lo que tú tienes.",
          "No mencionar tu público objetivo: si tienes un nicho, menciónalo (ej. \"especializado en startups tecnológicas\").",
          "Ser demasiado extenso: mantén la descripción concisa. Apunta a 100-200 palabras.",
        ],
      },
      {
        type: "tips",
        title: "Información adicional que puedes incluir",
        items: [
          "Metodología o proceso: cómo llevas a cabo tu trabajo o entregas tu producto.",
          "Zona geográfica: si es relevante para tu negocio (ej. \"en Barcelona\").",
          "Tipo de clientes: si te especializas en un segmento particular.",
          "Garantías o compromisos: cualquier promesa específica que ofrezcas.",
        ],
      },
      {
        type: "steps",
        title: "Preguntas frecuentes",
        items: [
          "¿Puedo modificar esta información después? Sí, desde tu panel de control cuando lo necesites.",
          "¿Qué pasa si ofrezco muchos productos o servicios? Enfócate en los principales o agrúpalos por categorías.",
          "¿Debo incluir precios? No es necesario en esta sección. Enfócate en describir qué ofreces y cómo beneficia.",
          "¿Puedo mencionar marcas o productos específicos? Sí, especialmente si son parte de tu diferenciación.",
        ],
      },
    ],
  },
  {
    id: "step-6",
    title: "Paso 6: Analicemos quién es tu cliente objetivo",
    description: "Define tu cliente ideal para crear contenido dirigido.",
    videoUrl: "/videos/Analicemos quien es tu cliente objetivo (1).mp4",
    tips: [
      { text: "Piensa en 3-5 de tus mejores clientes actuales. ¿Qué tienen en común? Esta es la mejor base para tu perfil de cliente ideal." },
      { text: "No definas un perfil demasiado amplio (\"cualquier persona\") ni demasiado estrecho. Busca el equilibrio." },
      { text: "Incluye aspectos psicográficos: qué les preocupa, qué valoran, qué les motiva y cómo toman decisiones." },
    ],
    article: [
      {
        type: "intro",
        text: "Cuéntanos a quién te diriges: su género, edad, situación económica, nivel de estudios, necesidades y contexto. Conocer profundamente a tu cliente objetivo nos permite crear mensajes que resuenen con sus necesidades, valores y aspiraciones.",
      },
      {
        type: "steps",
        title: "Aspectos a definir sobre tu cliente objetivo",
        items: [
          "Demografía: género, rango de edad y tipo de cliente (personas individuales B2C o empresas B2B).",
          "Ubicación geográfica: ¿en qué ciudad o región se encuentran? ¿Trabajas local, nacional o internacionalmente?",
          "Situación económica: nivel de ingresos o capacidad de inversión (bajo, medio, medio-alto, alto).",
          "Nivel de estudios: formación educativa, si influye en el lenguaje y complejidad de los mensajes.",
          "Necesidades y motivaciones: ¿qué problema resuelven contigo? ¿Buscan un servicio completo o asesoramiento?",
          "Valores y prioridades: confianza, personalización, precio, calidad, rapidez, sostenibilidad, etc.",
          "Contexto y situación: ¿están planificando algo importante, tienen una urgencia o vienen por recomendación?",
        ],
      },
      {
        type: "note",
        text: "Ejemplo: \"Nuestro cliente objetivo son mujeres y hombres de 28 a 55 años y empresas en Barcelona, con nivel económico medio-alto, que buscan un servicio profesional que se encargue de todo. Valoran la confianza, la personalización y la tranquilidad.\"",
      },
      {
        type: "tips",
        title: "Estructura recomendada para tu respuesta",
        items: [
          "Datos demográficos: género, edad, tipo de cliente (personas o empresas).",
          "Ubicación: dónde se encuentran geográficamente.",
          "Nivel económico: capacidad adquisitiva o de inversión.",
          "Necesidades principales: qué problema o deseo tienen.",
          "Valores y prioridades: qué es más importante para ellos.",
          "Contexto adicional: cualquier información relevante sobre su situación o estilo de vida.",
        ],
      },
      {
        type: "steps",
        title: "Errores comunes a evitar",
        items: [
          "\"Mi producto es para todos\": el contenido más efectivo habla a alguien específico, no a todo el mundo.",
          "Descripción demasiado vaga: evita \"personas con buen gusto\". Sé concreto con edad, nivel económico y necesidades.",
          "Ignorar el contexto: no solo digas quiénes son, explica también su situación y qué les motiva a buscarte.",
          "Perfil demasiado estrecho: no excluyas a potenciales buenos clientes con un rango excesivamente específico.",
        ],
      },
      {
        type: "tips",
        title: "Cómo se usará esta información",
        items: [
          "Tono de voz: el lenguaje se adaptará para ser apropiado para tu audiencia específica.",
          "Temas relevantes: el contenido abordará los intereses y necesidades de tus clientes.",
          "Mensajes persuasivos: los argumentos resonarán con lo que tu audiencia realmente valora.",
          "Visuales apropiados: las imágenes y estilo visual conectarán con tu público.",
          "Timing óptimo: publicaremos cuando tu audiencia esté más activa y receptiva.",
        ],
      },
      {
        type: "steps",
        title: "Preguntas frecuentes",
        items: [
          "¿Puedo tener más de un tipo de cliente objetivo? Sí, menciona diferentes segmentos si son claramente distintos.",
          "¿Qué pasa si no tengo clientes todavía? Describe el perfil que quieres atraer basándote en tu investigación de mercado.",
          "¿Tengo que incluir todos los aspectos? Los más importantes son demografía, ubicación, nivel económico, necesidades y valores.",
          "¿Puedo cambiar esto más adelante? Sí, desde tu panel de control cuando lo necesites.",
        ],
      },
    ],
  },
  {
    id: "step-7",
    title: "Paso 7: Fechas relevantes de tu negocio",
    description: "Marca las fechas importantes para tu negocio.",
    videoUrl: "/videos/Fechas relevantes para tu negocio final .mp4",
    tips: [
      { text: "Revisa mentalmente cada mes del año y anota cuándo tienes más ventas, consultas o actividad." },
      { text: "Menciona si hay flexibilidad: \"principalmente en verano, pero también atendemos solicitudes todo el año\"." },
      { text: "Piensa también en el ciclo de decisión de tus clientes: algunos servicios se planifican con meses de antelación." },
    ],
    article: [
      {
        type: "intro",
        text: "Indícanos fechas importantes para tu marca: lanzamientos, aniversarios, eventos o promociones especiales. Conocer tu calendario nos permite planificar y crear contenido anticipado que maximice el impacto en los momentos clave de tu negocio.",
      },
      {
        type: "steps",
        title: "Tipos de fechas a considerar",
        items: [
          "Temporadas con mayor demanda: períodos del año con más clientes, solicitudes o ventas.",
          "Fechas específicas de tu sector: eventos regulares de tu industria o fechas propias de tu tipo de negocio.",
          "Hitos de tu empresa: aniversarios, inauguraciones, lanzamientos de nuevos productos o servicios.",
          "Promociones y campañas: ofertas estacionales, descuentos por temporada baja o paquetes especiales.",
          "Festividades relevantes: solo las que apliquen a tu negocio (San Valentín, Black Friday, Navidad, etc.).",
        ],
      },
      {
        type: "note",
        text: "Ejemplo: \"Solemos trabajar todo el año con picos en bodas (primavera y verano), comuniones (abril y junio), fiestas infantiles (fines de semana todo el año) y eventos corporativos (post-verano y Navidad).\"",
      },
      {
        type: "tips",
        title: "Formas de estructurar tu respuesta",
        items: [
          "Por temporadas: \"Temporada alta: marzo a julio. Temporada media: septiembre a noviembre.\"",
          "Por tipo de servicio: \"Servicio A: pico en verano. Servicio B: demanda constante todo el año.\"",
          "Por meses específicos: \"Enero: lanzamiento. Abril-mayo: temporada alta. Diciembre: eventos corporativos.\"",
          "Mixta: combina temporadas generales con fechas específicas importantes.",
        ],
      },
      {
        type: "steps",
        title: "Casos especiales",
        items: [
          "Sin temporadas marcadas: menciona que trabajas todo el año e indica las fechas puntuales que quieres aprovechar.",
          "Múltiples servicios: describe la estacionalidad de cada uno por separado.",
          "Negocio nuevo: estima basándote en el comportamiento habitual de tu sector.",
        ],
      },
      {
        type: "tips",
        title: "Cómo se usará esta información",
        items: [
          "Crear contenido anticipado: publicaciones y campañas preparadas antes de tus temporadas altas.",
          "Optimizar el timing: publicar en el momento exacto cuando tus clientes están buscando.",
          "Planificar campañas: coordinar múltiples piezas para eventos importantes.",
          "Reducir tu carga de trabajo: el contenido estará listo automáticamente en los momentos clave.",
        ],
      },
      {
        type: "steps",
        title: "Preguntas frecuentes",
        items: [
          "¿Mi negocio no tiene temporadas? Menciona que trabajas todo el año e indica fechas específicas que quieres aprovechar.",
          "¿Puedo añadir fechas con el día exacto? Sí, puedes ser tan específico como necesites.",
          "¿Debo incluir todas las festividades generales? Solo las relevantes para tu negocio.",
          "¿Puedo cambiar estas fechas después? Sí, desde tu panel de control cuando lo necesites.",
        ],
      },
    ],
  },
  {
    id: "step-8",
    title: "Paso 8: Construyamos tu imagen",
    description: "Define la identidad visual de tu marca.",
    videoUrl: "/videos/Construyamos tu imagen.mp4",
    tips: [
      { text: "Elige entre 3-4 colores principales para mantener consistencia visual en todo tu contenido." },
      { text: "La tipografía debe ser legible y coherente con el estilo general de tu marca." },
      { text: "Si tienes logo o manual de marca, súbelo en el paso 8: nos ayuda a crear contenido más alineado con tu identidad." },
    ],
    article: [
      {
        type: "intro",
        text: "Este proceso te ayudará a definir la imagen única y consistente de tu negocio para que tus clientes te encuentren y reconozcan fácilmente. Cada elección que hagas aquí se reflejará en todas tus publicaciones y materiales de marketing.",
      },
      {
        type: "steps",
        title: "Pasos a completar",
        items: [
          "Idioma de comunicación: español o inglés, según tu público objetivo y ubicación.",
          "Estilo de comunicación: elige 2 estilos que mejor representen tu marca (profesional, amigable, educativo, inspirador, testimonial, creativo, informal o elegante).",
          "Estilo de diseño visual: minimalista, natural, aesthetic o pop.",
          "Colores de marca: acepta la paleta recomendada o personaliza cada color con su código hexadecimal.",
          "Formato de posts: imagen + texto, solo imagen, o alternar ambas.",
          "Tipografía: sans, serif, cursiva, handwritten, decorativa o sketch.",
          "Palabras clave: añade hasta 4 términos con los que tus clientes te buscarán (incluye variaciones locales si aplica).",
          "Material de identidad de marca (opcional): sube tu logo, manual de marca o guías de estilo si los tienes.",
        ],
      },
      {
        type: "note",
        text: "La app te sugerirá los estilos de comunicación y paleta de colores más habituales en tu sector. Puedes aceptar la recomendación o personalizarla a tu gusto.",
      },
      {
        type: "tips",
        title: "Ejemplos de palabras clave",
        items: [
          "Incluye el servicio y la ubicación: \"Depilación láser Huelva\".",
          "Añade variantes locales: \"Clínica estética San Juan del Puerto\".",
          "Combina servicio y zona: \"Servicios de depilación láser en Huelva\".",
          "Usa también el código postal si es relevante: \"Estética y belleza en 21610\".",
        ],
      },
      {
        type: "note",
        text: "Recuerda: puedes editar todas estas configuraciones en cualquier momento desde tu panel de control para adaptar tu imagen digital a las necesidades cambiantes de tu negocio.",
      },
    ],
  },
  {
    id: "step-9",
    title: "Paso 9: Final Brief",
    description: "Finaliza la configuración de tu perfil.",
    videoUrl: "/videos/Final Brief.mp4",
    tips: [
      { text: "Revisa las primeras propuestas de contenido en las primeras 24 horas — estarán disponibles inmediatamente." },
      { text: "El contenido no se publica automáticamente: siempre tendrás el control final de qué y cuándo se publica." },
      { text: "Cuanta más calidad tenga la información que proporcionaste en el brief, mejor será el contenido generado." },
    ],
    article: [
      {
        type: "intro",
        text: "¡Enhorabuena! Al completar todos los pasos del brief, verás el mensaje de confirmación: \"Gracias por tu tiempo e información. Estamos emocionados de trabajar contigo y ayudar a que tu negocio crezca.\" Toda la información que has proporcionado ha sido guardada y está lista para ser utilizada.",
      },
      {
        type: "steps",
        title: "Qué sucede después de finalizar",
        items: [
          "Análisis de tu información: el sistema procesa todos los datos de tu negocio, identidad visual, cliente objetivo y fechas relevantes.",
          "Configuración de tu perfil: se establecen los parámetros para generar contenido personalizado.",
          "Preparación de tu calendario: se organizan las fechas importantes y temporadas altas.",
          "Activación de funcionalidades: se habilitan todas las herramientas de la plataforma para tu cuenta.",
        ],
      },
      {
        type: "tips",
        title: "Primeros pasos en tu dashboard",
        items: [
          "Revisa las propuestas de contenido: el sistema habrá generado contenido inicial basado en tu brief. Aprueba lo que te guste.",
          "Explora el calendario: visualiza publicaciones programadas y planifica con anticipación.",
          "Configura tus notificaciones: decide cuándo y cómo quieres recibir alertas.",
          "Familiarízate con el panel de reputación: gestiona reseñas y comentarios de clientes.",
        ],
      },
      {
        type: "steps",
        title: "Acciones disponibles sobre las propuestas",
        items: [
          "Aprobar contenido para publicación.",
          "Solicitar modificaciones sobre una propuesta.",
          "Rechazar propuestas que no te convenzan.",
          "Crear y programar tu propio contenido además de las propuestas generadas.",
        ],
      },
      {
        type: "note",
        text: "El contenido ya aprobado no se ve afectado si actualizas la información de tu brief. Solo las nuevas propuestas reflejarán los cambios.",
      },
      {
        type: "tips",
        title: "Consejos para aprovechar Plinng al máximo",
        items: [
          "Mantén tu información actualizada: si cambias servicios, fechas o cliente objetivo, actualiza tu perfil.",
          "Establece una rutina: dedica tiempo regular a revisar y aprobar propuestas.",
          "Da feedback: indica qué propuestas te gustan más para que el sistema aprenda tus preferencias.",
          "Planifica con anticipación: revisa el contenido para temporadas altas con semanas de antelación.",
        ],
      },
      {
        type: "steps",
        title: "Preguntas frecuentes",
        items: [
          "¿Cuándo estarán listas las primeras propuestas? Inmediatamente después de completar el brief.",
          "¿Puedo cambiar la información del brief después? Sí, desde la sección de configuración de tu perfil.",
          "¿Con qué frecuencia recibiré nuevas propuestas? De manera continua según tu plan y configuración.",
          "¿Puedo pausar el servicio temporalmente? Contacta con soporte para conocer las opciones disponibles.",
          "¿Qué hago si no me gustan las propuestas iniciales? Recházalas y solicita nuevas, o da feedback para ajustar el contenido.",
        ],
      },
    ],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getEmbedUrl(url: string) {
  if (url.startsWith("/videos/")) return url
  const canva = url.match(/canva\.com\/design\/([a-zA-Z0-9_-]+)/)
  if (canva) return `https://www.canva.com/design/${canva[1]}/view?embed`
  const shorts = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/)
  if (shorts) return `https://www.youtube.com/embed/${shorts[1]}`
  const yt = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`
  const ytBe = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/)
  if (ytBe) return `https://www.youtube.com/embed/${ytBe[1]}`
  const drive = url.match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`
  return url
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ArticleSection({ section }: { section: ArticleSection }) {
  if (section.type === "intro") {
    return <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">{section.text}</p>
  }
  if (section.type === "note") {
    return (
      <div className="flex items-start gap-2 p-3 rounded-[10px] bg-amber-50 border border-amber-200 text-[14px] sm:text-[15px] leading-[22px] text-[#2F4F4F]">
        <span className="text-base shrink-0">💡</span>
        <p>{section.text}</p>
      </div>
    )
  }
  if (section.type === "tips" || section.type === "steps") {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A]">{section.title}</p>
        <ul className="flex flex-col gap-1">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
              <span className={`mt-[9px] w-[5px] h-[5px] rounded-full shrink-0 ${section.type === "tips" ? "bg-[#BEFF50] border border-black" : "bg-[#2F4F4F]"}`} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return null
}

function StepPanel({ step }: { step: Step }) {
  const videoUrl = getEmbedUrl(step.videoUrl)
  const isLocal = videoUrl.startsWith("/videos/")

  return (
    <div className="flex flex-col gap-8">
      {/* Phone-frame video */}
      <div className="mx-auto">
        <div
          className="relative rounded-[32px] bg-[#EDEEEC] border-[9px] border-black overflow-hidden"
          style={{ width: "220px", height: "476px" }}
        >
          {isLocal ? (
            <video src={videoUrl} controls className="w-full h-full object-cover" />
          ) : (
            <iframe
              src={videoUrl}
              title={step.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* Quick tips */}
      {step.tips && step.tips.length > 0 && (
        <div className="flex flex-col gap-2 p-4 rounded-[16px] bg-[#BEFF50]">
          <p className="text-[14px] font-semibold text-[#1A1A1A] uppercase tracking-wide">Consejos rápidos</p>
          <ul className="flex flex-col gap-2">
            {step.tips.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-[15px] leading-[24px] text-[#1A1A1A]">
                <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-black shrink-0" />
                {t.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Help Center article */}
      {step.article && step.article.length > 0 && (
        <article className="flex flex-col gap-4">
          {step.article.map((s, i) => (
            <ArticleSection key={i} section={s} />
          ))}
        </article>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CompletaPerfilPage() {
  const [selectedStep, setSelectedStep] = useState(0)
  const panelRef = useRef<HTMLDivElement>(null)

  // Scroll to panel on mobile when step changes
  useEffect(() => {
    if (window.innerWidth < 1024 && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [selectedStep])

  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
      <div className="w-full max-w-6xl relative">

        {/* Top CTA — Desktop */}
        <div className="hidden lg:flex justify-end mb-[56px]">
          <Link href="/conecta-cuentas">
            <div className="rounded-[18px] bg-black flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90">
              <span className="relative leading-7 font-semibold text-white">Conecta tus cuentas</span>
              <Image src="/assets/icons/arrow2.svg" className="h-5 w-7 ml-2 brightness-0 invert" width={28} height={20} alt="" />
            </div>
          </Link>
        </div>

        {/* Page title */}
        <div className="flex flex-col gap-3 mb-8">
          <b className="tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[42px] sm:text-[36px] lg:text-[42px] font-bold">
            Completa tu perfil
          </b>
          <p className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
            Aquí nos <strong>cuentas lo esencial sobre tu negocio: qué haces, a quién te diriges, cómo quieres comunicar y cuáles son tus objetivos.</strong>
            <br /><br />
            Cuanto más claro seas, mejor entenderá Plinng tu negocio y mejores serán los resultados desde el primer día.
          </p>
        </div>

        {/* Main layout: sidebar + panel */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

          {/* Sidebar step list */}
          <nav className="w-full lg:w-[300px] shrink-0 flex flex-col gap-2">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setSelectedStep(index)}
                className={`w-full text-left rounded-[16px] flex items-center gap-3 py-3 px-4 transition-all ${
                  selectedStep === index
                    ? "bg-[#EDEEEC] shadow-sm"
                    : "border border-[#EDEEEC] bg-white hover:bg-[#EDEEEC]/50"
                }`}
              >
                {/* Step number badge */}
                <span className={`flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold shrink-0 transition-colors ${
                  selectedStep === index ? "bg-black text-white" : "bg-[#EDEEEC] text-[#1A1A1A]"
                }`}>
                  {index + 1}
                </span>
                <span className="text-[15px] font-medium leading-[22px] text-[#1A1A1A]">
                  {/* Strip "Paso N: " prefix for cleaner sidebar labels */}
                  {step.title.replace(/^Paso \d+:\s*/, "")}
                </span>
              </button>
            ))}
          </nav>

          {/* Step panel */}
          <div ref={panelRef} className="flex-1 min-w-0 rounded-[24px] border border-[#E5E5E5] bg-white p-6 sm:p-8 flex flex-col gap-6">
            {/* Panel header */}
            <div className="flex flex-col gap-1 pb-5 border-b border-[#E5E5E5]">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm font-bold shrink-0">
                  {selectedStep + 1}
                </span>
                <h2 className="text-[22px] sm:text-[24px] font-bold tracking-[-0.5px] leading-tight">
                  {steps[selectedStep].title.replace(/^Paso \d+:\s*/, "")}
                </h2>
              </div>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F] pl-11">
                {steps[selectedStep].description}
              </p>
            </div>

            {/* Panel content */}
            <StepPanel step={steps[selectedStep]} />
          </div>
        </div>

        {/* Bottom CTA — Mobile */}
        <div className="flex lg:hidden mt-8 mb-[80px]">
          <Link href="/conecta-cuentas" className="w-full">
            <div className="rounded-[18px] bg-black flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90 w-full">
              <span className="relative leading-7 font-semibold text-white">Conecta tus cuentas</span>
              <Image src="/assets/icons/arrow2.svg" className="h-5 w-7 ml-2 brightness-0 invert" width={28} height={20} alt="" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
