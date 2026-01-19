import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

const accountTypes = [
  {
    href: "/conecta-cuentas/cuenta-1",
    title: "Conectar Instagram",
    description: "Vincula tu cuenta de Instagram para generar posts automáticamente",
    icon: Instagram,
  },
  {
    href: "/conecta-cuentas/cuenta-2",
    title: "Conectar Facebook",
    description: "Conecta tu página de Facebook para publicar contenido",
    icon: Facebook,
  },
  {
    href: "/conecta-cuentas/cuenta-3",
    title: "Conectar Twitter",
    description: "Vincula tu cuenta de Twitter para tweets automáticos",
    icon: Twitter,
  },
  {
    href: "/conecta-cuentas/cuenta-4",
    title: "Conectar LinkedIn",
    description: "Conecta tu perfil de LinkedIn para contenido profesional",
    icon: Linkedin,
  },
]

export default function ConectaCuentasPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 lg:pb-0">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Conecta tus cuentas
        </h1>
        <p className="text-lg text-muted-foreground">
          Conecta tus redes sociales y servicios para que Plinng pueda generar y publicar 
          contenido automáticamente. Selecciona una cuenta para ver las instrucciones detalladas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accountTypes.map((account) => {
          const Icon = account.icon
          return (
            <Link key={account.href} href={account.href}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-[#38ED82] cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-[#38ED82]/10 transition-colors">
                      <Icon className="h-6 w-6 text-primary group-hover:text-[#38ED82] transition-colors" />
                    </div>
                    <CardTitle className="text-xl">{account.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {account.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="flex justify-end pt-4">
        <div className="fixed bottom-0 left-0 right-0 lg:relative lg:bottom-auto lg:left-auto lg:right-auto bg-background/95 backdrop-blur-sm border-t lg:border-t-0 p-4 lg:p-0 lg:bg-transparent z-10">
          <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
            <Link href="/tour">
              Siguiente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

