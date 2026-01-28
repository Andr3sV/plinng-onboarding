# Documentación de la Iniciativa de Onboarding - Plinng

## Business Context

Plinng es una plataforma de marketing digital que ayuda a negocios a gestionar su presencia online mediante inteligencia artificial. La plataforma incluye funcionalidades como generación automática de contenido para redes sociales, recepcionista AI para llamadas y mensajes, gestión de reseñas, y herramientas de SEO.

Antes de esta iniciativa, el proceso de onboarding de nuevos clientes requería una intervención manual significativa del equipo de Product Success, que debía guiar a cada usuario paso a paso en la configuración inicial de su cuenta Plinng. Este proceso era:

- **Tiempo intensivo**: Cada onboarding manual tomaba entre 30-60 minutos por cliente
- **No escalable**: El equipo no podía atender a todos los clientes de forma personalizada
- **Inconsistente**: Dependía de la disponibilidad y conocimiento individual de cada miembro del equipo
- **Costoso**: Requería recursos humanos dedicados que podrían estar enfocados en otras tareas de mayor valor

## What

La iniciativa consiste en una **aplicación web de onboarding autónoma** que guía a los nuevos usuarios de Plinng a través de todo el proceso de configuración inicial de su cuenta, desde la descarga de la app hasta el dominio completo de las funcionalidades principales.

### Objetivos de Negocio

1. **Reducir la carga operativa del equipo de Product Success**: Eliminar la necesidad de sesiones de onboarding manual uno-a-uno
2. **Escalar el proceso de onboarding**: Permitir que múltiples usuarios completen su configuración simultáneamente sin requerir recursos humanos adicionales
3. **Mejorar la experiencia del usuario**: Proporcionar una experiencia guiada, consistente y disponible 24/7
4. **Acelerar el time-to-value**: Reducir el tiempo que tarda un nuevo cliente en empezar a obtener valor de la plataforma
5. **Reducir costos operativos**: Liberar tiempo del equipo de Product Success para tareas de mayor valor estratégico

### Alcance de la Solución

La aplicación cubre todo el flujo de onboarding:

- **Bienvenida e introducción**: Video de presentación de Plinng y sus beneficios
- **Descarga e instalación**: Guía paso a paso para descargar la app móvil (iOS y Android)
- **Configuración del perfil**: Proceso guiado de 9 pasos para completar el Brief inicial (información del negocio, servicios, cliente objetivo, identidad visual, etc.)
- **Conexión de cuentas**: Tutoriales detallados para conectar:
  - Facebook e Instagram
  - Google Empresa (Google My Business)
  - Dominio y hosting
- **Tour por la aplicación**: Videos explicativos de las funcionalidades principales:
  - Calendario
  - Maya (Asistente AI de marketing)
  - Propuestas y feedback
  - Sophia (Recepcionista IA)
  - Identidad Digital
  - Galería
- **Preguntas frecuentes**: Base de conocimiento completa con respuestas a dudas comunes, organizadas por categorías

## Why

### Problema del Equipo de Product Success

El equipo de Product Success estaba dedicando una cantidad significativa de tiempo y recursos a realizar onboarding manual de nuevos clientes. Este proceso incluía:

- **Sesiones de videollamada individuales**: 30-60 minutos por cliente
- **Seguimiento por email/WhatsApp**: Respuestas a preguntas y resolución de dudas
- **Soporte técnico**: Ayuda con problemas de configuración y conexión de cuentas
- **Capacitación**: Explicación de funcionalidades y mejores prácticas

Con el crecimiento de la base de clientes, este modelo no era sostenible:

- **Escalabilidad limitada**: El equipo no podía crecer proporcionalmente al número de clientes
- **Cuellos de botella**: Nuevos clientes tenían que esperar para recibir atención
- **Costo de oportunidad**: El tiempo dedicado a onboarding manual impedía al equipo enfocarse en:
  - Mejora de la retención de clientes existentes
  - Desarrollo de estrategias de crecimiento
  - Análisis de datos y optimización de productos
  - Soporte a clientes de mayor valor

### Impacto Esperado

Con la implementación de esta aplicación de onboarding:

1. **Reducción del 80-90% del tiempo dedicado a onboarding manual**: Los usuarios completan el proceso de forma autónoma
2. **Disponibilidad 24/7**: Los usuarios pueden completar su onboarding en cualquier momento, sin esperar disponibilidad del equipo
3. **Consistencia**: Todos los usuarios reciben la misma información completa y actualizada
4. **Escalabilidad**: El sistema puede manejar cualquier número de usuarios simultáneamente sin costos adicionales
5. **Mejor experiencia**: Los usuarios pueden avanzar a su propio ritmo y revisar contenido cuando lo necesiten

## How

### Arquitectura Técnica

La aplicación está construida con **Next.js 14.2.0** usando el **App Router**, lo que permite:

- **Server-side rendering** para mejor SEO y rendimiento inicial
- **Client-side interactivity** donde es necesario (videos, acordeones, navegación)
- **Optimización automática** de imágenes y assets
- **Routing basado en archivos** para estructura clara y mantenible

### Stack Tecnológico

- **Framework**: Next.js 14.2.0 (React 18.3.0)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: shadcn/ui (basado en Radix UI)
- **Analytics**: PostHog para tracking de eventos y comportamiento
- **Despliegue**: Vercel (optimizado para Next.js)

### Estructura de la Aplicación

```
app/
├── layout.tsx              # Layout principal con Sidebar y PostHogProvider
├── page.tsx                # Home - Página de inicio con cards de navegación
├── bienvenido/             # Video de bienvenida
├── descarga-app/           # Guía de descarga con QR code y enlaces
├── completa-perfil/        # Proceso de 9 pasos del Brief
├── conecta-cuentas/        # Conexión de cuentas externas
│   ├── facebook-instagram/
│   ├── google-empresa/
│   └── dominio-hosting/
├── tour/                   # Tour por funcionalidades principales
└── faq/                    # Preguntas frecuentes organizadas por categorías
```

### Componentes Principales

1. **Sidebar**: Navegación principal visible en desktop
2. **MobileMenu**: Menú de navegación para dispositivos móviles
3. **VideoPlayer**: Componente para reproducir videos en formato horizontal
4. **MobileVideoContainer**: Componente para videos en formato vertical (mobile-first)
5. **PostHogProvider**: Integración de analytics para tracking de comportamiento

### Funcionalidades Clave

#### 1. Sistema de Videos Tutoriales

- **Videos locales**: Almacenados en `/public/videos/`
- **Videos de Google Drive**: Integración para videos alojados externamente
- **Formatos adaptativos**: Vertical para móvil, horizontal para desktop
- **Reproducción optimizada**: Lazy loading y controles nativos del navegador

#### 2. Proceso de Onboarding Guiado

El flujo completo incluye:

1. **Bienvenida** → Video introductorio
2. **Descarga de App** → Enlaces a App Store/Google Play + QR code
3. **Completa tu Perfil** → 9 pasos interactivos con videos:
   - Welcome Brief
   - Información sobre tu negocio
   - Añade tus redes sociales
   - Hablemos sobre tu negocio
   - Exploremos tus productos y servicios
   - Analicemos quién es tu cliente objetivo
   - Fechas relevantes de tu negocio
   - Construyamos tu imagen
   - Final Brief
4. **Conecta tus Cuentas** → Tutoriales paso a paso con videos
5. **Tour por la App** → 7 secciones con videos explicativos
6. **Preguntas Frecuentes** → Base de conocimiento completa

#### 3. Sistema de FAQ Avanzado

- **Categorización**: Organizado por secciones (General, Configuración, Funcionalidades, Complementos)
- **Múltiples formatos de contenido**:
  - Texto formateado con markdown (negritas, listas, párrafos)
  - Videos verticales para tutoriales específicos
  - Videos horizontales para demostraciones
  - Acordeones anidados para información compleja
- **Búsqueda visual**: Cards desplegables para fácil navegación

#### 4. Analytics y Tracking

**PostHog Integration**:
- **Pageviews automáticos**: Tracking de todas las páginas visitadas
- **Autocapture de eventos**: Captura automática de clics e interacciones
- **Session recording**: Grabación de sesiones para análisis de comportamiento
- **Heatmaps**: Datos de interacción para optimización UX

**Configuración**:
```typescript
posthog.init(posthogKey, {
  api_host: posthogHost,
  defaults: '2025-11-30', // Configuraciones recomendadas
  capture_pageview: 'history_change', // Para SPAs
})
```

### Características de UX/UI

1. **Diseño Responsive**: Optimizado para desktop, tablet y móvil
2. **Navegación Intuitiva**: Sidebar en desktop, drawer en móvil
3. **Feedback Visual**: Estados hover, transiciones suaves, indicadores de progreso
4. **Accesibilidad**: Componentes accesibles basados en Radix UI
5. **Performance**: Lazy loading de videos, optimización de imágenes

### Integraciones

1. **PostHog**: Analytics y tracking de comportamiento
2. **ElevenLabs**: Widget de asistente conversacional AI
3. **Google Drive**: Videos embebidos desde Google Drive
4. **Typeform**: Formulario para configuración de dominio/hosting

### Flujo de Datos

```
Usuario → Navegación → Página específica
                    ↓
            Componente de contenido
                    ↓
            Video/Texto/Formulario
                    ↓
            PostHog captura evento
                    ↓
            Dashboard de analytics
```

### Métricas y KPIs

La aplicación permite medir:

- **Tasa de completación**: % de usuarios que completan cada paso
- **Tiempo de onboarding**: Tiempo promedio para completar el proceso
- **Puntos de abandono**: Dónde los usuarios dejan el proceso
- **Uso de contenido**: Qué videos/FAQ son más consultados
- **Conversión**: De visitante a usuario activo

### Mantenimiento y Actualización

- **Contenido actualizable**: Videos y textos pueden actualizarse sin cambios de código
- **Estructura modular**: Fácil agregar nuevas páginas o secciones
- **Versionado**: Control de versiones con Git para tracking de cambios
- **Documentación**: Documentación técnica y de negocio actualizada

### Próximos Pasos Potenciales

1. **Gamificación**: Sistema de logros o progreso visual
2. **Personalización**: Contenido adaptado según tipo de negocio
3. **Multi-idioma**: Soporte para múltiples idiomas
4. **A/B Testing**: Probar diferentes flujos de onboarding
5. **Integración con CRM**: Sincronización de datos de onboarding con sistema CRM

### Consideraciones Técnicas

- **SEO**: Optimizado para motores de búsqueda
- **Performance**: Carga rápida y optimización de assets
- **Seguridad**: Variables de entorno para credenciales sensibles
- **Escalabilidad**: Arquitectura preparada para crecimiento
- **Monitoreo**: Analytics integrado para detección de problemas

---

## Conclusión

Esta iniciativa de onboarding autónomo representa una inversión estratégica que:

1. **Reduce significativamente** la carga operativa del equipo de Product Success
2. **Mejora la experiencia** del usuario con contenido disponible 24/7
3. **Escala el negocio** sin requerir recursos humanos proporcionales
4. **Proporciona datos** valiosos sobre el comportamiento de los usuarios
5. **Acelera el time-to-value** para nuevos clientes

El resultado es un proceso de onboarding más eficiente, escalable y centrado en el usuario, que permite al equipo de Product Success enfocarse en tareas de mayor valor estratégico mientras los nuevos clientes se integran de forma autónoma a la plataforma Plinng.
