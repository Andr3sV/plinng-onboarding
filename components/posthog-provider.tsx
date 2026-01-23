"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import posthog from "posthog-js"

function PostHogPageView() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        // Capturar pageviews cuando cambia la ruta
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
        // Solo inicializar en el cliente
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
