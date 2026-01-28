# Documentación de Cambios en PostHog

## Fecha: Enero 2026

## Problema Identificado

PostHog solo estaba capturando eventos en dos páginas (`/` y `/faq`) en lugar de trackear todas las páginas de la aplicación. Además, no se estaban capturando los clics de los usuarios.

## Causa del Problema

1. **Configuración incorrecta para SPAs**: Se estaba usando `capture_pageview: false` con captura manual de pageviews, lo cual no funciona correctamente en aplicaciones Next.js (Single Page Applications).

2. **Falta de configuración recomendada**: No se estaba usando `defaults: '2025-11-30'` que habilita automáticamente las configuraciones recomendadas de PostHog, incluyendo autocapture de clics.

3. **Problema de timing**: El componente `PostHogPageView` intentaba capturar pageviews antes de que PostHog estuviera completamente inicializado, causando que algunos eventos no se capturaran.

## Solución Implementada

### Cambios en `components/posthog-provider.tsx`

#### Antes:
```typescript
"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import posthog from "posthog-js"

function PostHogPageView() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (pathname && typeof window !== "undefined") {
            let url = window.origin + pathname
            if (searchParams && searchParams.toString()) {
                url = url + `?${searchParams.toString()}`
            }
            posthog.capture("$pageview", {
                $current_url: url,
            })
        }
    }, [pathname, searchParams])

    return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
            const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

            if (posthogKey && posthogHost) {
                posthog.init(posthogKey, {
                    api_host: posthogHost,
                    loaded: (posthog) => {
                        if (process.env.NODE_ENV === "development") {
                            posthog.debug()
                        }
                    },
                    capture_pageview: false, // Deshabilitamos el auto-capture para controlarlo manualmente
                })
            }
        }
    }, [])

    return (
        <>
            <Suspense fallback={null}>
                <PostHogPageView />
            </Suspense>
            {children}
        </>
    )
}
```

#### Después:
```typescript
"use client"

import { useEffect } from "react"
import posthog from "posthog-js"

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Solo inicializar en el cliente
        if (typeof window !== "undefined") {
            const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
            const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

            if (posthogKey && posthogHost) {
                posthog.init(posthogKey, {
                    api_host: posthogHost,
                    defaults: '2025-11-30', // Habilita autocapture y pageviews para SPAs
                    capture_pageview: 'history_change', // Captura automáticamente cambios de ruta
                    loaded: (posthog) => {
                        if (process.env.NODE_ENV === "development") {
                            posthog.debug()
                        }
                    },
                })
            }
        }
    }, [])

    return <>{children}</>
}
```

### Cambios Clave

1. **Agregado `defaults: '2025-11-30'`**:
   - Habilita automáticamente autocapture de clics y eventos interactivos
   - Configura PostHog con las mejores prácticas recomendadas
   - Incluye configuraciones optimizadas para aplicaciones modernas

2. **Cambiado `capture_pageview: false` a `capture_pageview: 'history_change'`**:
   - Permite que PostHog capture automáticamente los cambios de ruta en Next.js
   - Usa el History API para detectar navegación en SPAs
   - Elimina la necesidad de captura manual de pageviews

3. **Eliminado componente `PostHogPageView`**:
   - Ya no es necesario porque PostHog maneja los pageviews automáticamente
   - Elimina problemas de timing y sincronización
   - Simplifica el código

4. **Eliminados imports no utilizados**:
   - `usePathname` y `useSearchParams` ya no son necesarios
   - `Suspense` ya no es necesario

## Resultados

### Antes de los Cambios:
- ❌ Solo se capturaban pageviews en `/` y `/faq`
- ❌ No se capturaban clics de usuarios
- ❌ Código más complejo con componente adicional

### Después de los Cambios:
- ✅ Se capturan pageviews automáticamente en todas las rutas
- ✅ Se capturan clics y otras interacciones automáticamente
- ✅ Código más simple y mantenible
- ✅ Alineado con las recomendaciones oficiales de PostHog

## Eventos Capturados Automáticamente

Con esta configuración, PostHog ahora captura automáticamente:

1. **Pageviews** (`$pageview`):
   - Se capturan cuando cambia la ruta en Next.js
   - Incluyen la URL completa y parámetros de búsqueda

2. **Interacciones** (`$autocapture`):
   - Clics en botones, links y elementos interactivos
   - Envíos de formularios
   - Cambios en inputs
   - Copias al portapapeles

3. **Session Recording** (`$snapshot`):
   - Grabación de sesiones de usuario
   - Permite reproducir el comportamiento del usuario

4. **Heatmaps** (`$$heatmap`):
   - Datos de movimiento del mouse
   - Clics y scrolls para generar mapas de calor

5. **Web Vitals**:
   - Métricas de rendimiento (LCP, FID, CLS, etc.)

## Configuración de Variables de Entorno

Asegúrate de tener estas variables en tu `.env.local`:

```env
NEXT_PUBLIC_POSTHOG_KEY=phc_7RTm2RBKAa4syDMXANeMjtxmkNMGrgC3c6xRs4Lwrus
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

## Debug Mode

En desarrollo, PostHog está configurado con `posthog.debug()` habilitado. Esto muestra en la consola del navegador:
- Todos los eventos que se envían
- Estado de inicialización
- Información de sesión

En producción, estos mensajes no aparecerán automáticamente.

## Referencias

- [Documentación oficial de PostHog para Next.js](https://posthog.com/docs/libraries/next-js)
- [Autocapture de PostHog](https://posthog.com/docs/data/autocapture)
- [Configuración de pageviews para SPAs](https://posthog.com/docs/data/capture-events#pageviews)

## Notas Adicionales

- La configuración `defaults: '2025-11-30'` es la versión más reciente de configuraciones recomendadas de PostHog
- `capture_pageview: 'history_change'` es específicamente para aplicaciones que usan client-side routing (como Next.js)
- El autocapture está habilitado por defecto con `defaults: '2025-11-30'`, no es necesario configurarlo explícitamente
