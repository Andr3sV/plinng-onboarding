"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Sparkles, Download, User, Link2, Compass, HelpCircle } from "lucide-react"

const navigationItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/bienvenido", label: "Bienvenido a Plinng", icon: Sparkles },
    { href: "/descarga-app", label: "Descarga la app", icon: Download },
    { href: "/completa-perfil", label: "Completa tu perfil", icon: User },
    { href: "/conecta-cuentas", label: "Conecta tus cuentas", icon: Link2 },
    { href: "/tour", label: "Tour por la app", icon: Compass },
    { href: "/faq", label: "Preguntas frecuentes", icon: HelpCircle },
]

export function MobileMenu() {
    const pathname = usePathname()

    const NavContent = () => (
        <div className="flex flex-col h-full">
            <div className="p-6">
                <Image
                    src="/assets/logo-plinng.png"
                    alt="Plinng"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                />
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navigationItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href ||
                        (item.href !== "/" && pathname?.startsWith(item.href))

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-3 px-4 py-3 rounded-[16px] text-[14px] font-medium transition-colors touch-manipulation min-h-[44px]",
                                isActive
                                    ? "bg-[#BEFF50] text-[#000000]"
                                    : "text-[#777777] hover:bg-[#BEFF50] hover:text-[#000000]"
                            )}
                        >
                            <Icon className={cn(
                                "h-5 w-5 transition-colors",
                                isActive ? "text-[#000000]" : "text-[#777777] group-hover:text-[#000000]"
                            )} />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )

    return (
        <Sheet>
            <div className="lg:hidden flex items-center gap-3 mb-[48px]">
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="bg-background border"
                    >
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/logo-plinng.png"
                        alt="Plinng"
                        width={120}
                        height={40}
                        className="h-8 w-auto"
                    />
                </Link>
            </div>
            <SheetContent side="left" className="w-64 p-0">
                <NavContent />
            </SheetContent>
        </Sheet>
    )
}

