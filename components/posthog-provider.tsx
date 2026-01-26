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
