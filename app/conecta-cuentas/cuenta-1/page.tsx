import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Instagram } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Cuenta1Page() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/conecta-cuentas">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <Instagram className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Conectar Instagram
          </h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Sigue estos pasos para conectar tu cuenta de Instagram y comenzar a generar 
          posts automáticamente.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Paso 1: Accede a la configuración</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Ve a la sección de Configuración en la app y selecciona "Conectar cuentas".
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Paso 2: Selecciona Instagram</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Haz clic en el botón "Conectar Instagram" y serás redirigido a la página 
              de autorización de Instagram.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Paso 3: Autoriza la conexión</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Inicia sesión en tu cuenta de Instagram y autoriza a Plinng para acceder 
              a tu cuenta. Solo solicitamos permisos para publicar contenido.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Paso 4: Confirma la conexión</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Una vez autorizado, serás redirigido de vuelta a la app y verás que tu 
              cuenta de Instagram está conectada.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end pt-4">
        <Button asChild>
          <Link href="/conecta-cuentas">Volver a Conecta tus cuentas</Link>
        </Button>
      </div>
    </div>
  )
}

