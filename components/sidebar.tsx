"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Home, Sparkles, Download, User, Link2, Compass, HelpCircle } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigationItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/bienvenido", label: "Bienvenido a Plinng", icon: Sparkles },
  { href: "/descarga-app", label: "Descarga la app", icon: Download },
  { href: "/completa-perfil", label: "Completa tu perfil", icon: User },
  { href: "/conecta-cuentas", label: "Conecta tus cuentas", icon: Link2 },
  { href: "/tour", label: "Tour por la app y primeros pasos", icon: Compass },
  { href: "/faq", label: "Preguntas frecuentes", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
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
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors touch-manipulation min-h-[44px]",
                isActive
                  ? "bg-[#38ED82] text-foreground"
                  : "text-muted-foreground hover:bg-[#38ED82] hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:bg-white">
        <NavContent />
      </aside>

      {/* Mobile Drawer */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden fixed top-4 left-4 z-50 bg-background border"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <NavContent />
        </SheetContent>
      </Sheet>
    </>
  )
}

