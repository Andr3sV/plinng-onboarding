import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { MobileMenu } from "@/components/mobile-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Plinng - Onboarding",
    description: "Guía paso a paso para configurar tu app de Plinng",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className={inter.className}>
                {/* Widget de ElevenLabs */}
                <elevenlabs-convai agent-id="agent_5901kfekqne1fj1bmy2ym73eagf3"></elevenlabs-convai>
                <Script
                    src="https://unpkg.com/@elevenlabs/convai-widget-embed"
                    strategy="afterInteractive"
                    type="text/javascript"
                />

                <div className="flex min-h-screen">
                    <Sidebar />
                    <main className="flex-1 lg:pl-64 w-full">
                        <div className="px-4 pt-11 pb-4 sm:px-6 sm:py-6 lg:px-4 lg:py-8 max-w-7xl mx-auto min-h-full">
                            <MobileMenu />
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    )
}

