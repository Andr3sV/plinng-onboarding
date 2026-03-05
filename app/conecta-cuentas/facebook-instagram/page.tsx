import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { VideoPlayer } from "@/components/video-player"
import { ArrowLeft } from "lucide-react"

type SubStep = { id: string; title: string; description: string; videoUrl: string }
type Step = {
  id: string
  title: string
  description: string
  videoUrl: string
  subSteps?: SubStep[]
}

export default function FacebookInstagramPage() {
  const steps: Step[] = [
    {
      id: "step-1",
      title: "Paso 1: Crear la página de Facebook de la empresa",
      description: "Si aún no tienes una página de Facebook para tu empresa, sigue estos pasos para crearla.",
      videoUrl: "https://drive.google.com/file/d/14wUKH-jaEBwFai0fJSQnpG_F0ZH6ynvG/view?usp=sharing",
    },
  ]

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20 lg:pb-0">
      {/* Page header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/conecta-cuentas">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-[42px] font-bold tracking-[-1.5px]">Facebook / Instagram</h1>
        </div>
        <p className="text-[18px] leading-[28px] text-muted-foreground">
          Sigue estos pasos para conectar tus cuentas de Facebook e Instagram con Plinng.
        </p>
      </div>

      {/* Steps accordion */}
      <Accordion type="multiple" className="w-full space-y-4">
        {steps.map((step) => (
          <AccordionItem key={step.id} value={step.id} className="border rounded-lg px-4">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="text-lg font-semibold">{step.title}</span>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              <p className="text-[18px] leading-[28px] text-muted-foreground">{step.description}</p>

              {step.subSteps ? (
                <div className="space-y-4">
                  <Accordion type="multiple" className="w-full">
                    {step.subSteps.map((subStep) => (
                      <AccordionItem key={subStep.id} value={subStep.id} className="border rounded-lg px-4 bg-muted/30">
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium">{subStep.title}</span>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 pb-4">
                          <p className="text-[18px] leading-[28px] text-muted-foreground">{subStep.description}</p>
                          <div className="flex justify-center">
                            <VideoPlayer src={subStep.videoUrl} title={subStep.title} aspectRatio="vertical" />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ) : (
                <div className="flex justify-center">
                  <VideoPlayer src={step.videoUrl} title={step.title} aspectRatio="vertical" />
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* ── Help Center Article ── */}
      <article className="flex flex-col gap-10 text-[#1A1A1A]">

        {/* Header */}
        <header className="flex flex-col gap-2 pb-6 border-b border-[#E5E5E5]">
          <h2 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.5px] leading-tight">
            Conecta tu Instagram en la app de Plinng
          </h2>
          <p className="text-[16px] sm:text-[17px] leading-[26px] text-muted-foreground">
            Para poder automatizar la publicación de contenido desde Plinng, es necesario vincular tu cuenta de
            Instagram. Este proceso se realiza una sola vez y solo toma unos minutos.
          </p>
        </header>

        {/* Antes de empezar */}
        <section className="flex flex-col gap-3">
          <h3 className="text-[20px] sm:text-[22px] font-semibold">Antes de empezar</h3>
          <div className="flex items-start gap-3 p-4 rounded-[14px] bg-amber-50 border border-amber-200 text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
            <span className="text-xl shrink-0">⚠️</span>
            <p>
              Asegúrate de tener a la mano tus <strong>credenciales de Instagram</strong> (usuario y contraseña),
              así como acceso al <strong>número de teléfono o correo electrónico</strong> asociado a tu cuenta,
              ya que Instagram puede solicitar un código de verificación durante el proceso.
            </p>
          </div>
        </section>

        {/* Pasos para vincular Instagram */}
        <section className="flex flex-col gap-4">
          <h3 className="text-[20px] sm:text-[22px] font-semibold">Pasos para vincular Instagram</h3>
          <div className="flex flex-col gap-3">
            {[
              {
                n: 1,
                text: <>Abre la sección <strong>Automatiza tu contenido</strong> dentro de Plinng.</>,
              },
              {
                n: 2,
                text: <>Haz clic en el botón <strong>Vincular Instagram</strong>. Se abrirá una nueva pestaña en tu navegador con la pantalla de inicio de sesión de Instagram.</>,
              },
              {
                n: 3,
                text: <>Ingresa tu usuario y contraseña de Instagram, luego haz clic en <strong>Iniciar sesión</strong>.</>,
              },
              {
                n: 4,
                text: <>Si tienes activada la verificación en dos pasos, Instagram enviará un código a tu número de teléfono o correo electrónico. Revisa tus mensajes (puede llegar por WhatsApp o SMS), ingresa el código en el campo <strong>Código de seguridad</strong> y haz clic en <strong>Confirmar</strong>. Espera unos segundos mientras se valida la información.</>,
              },
              {
                n: 5,
                text: <>Si Instagram te pregunta si deseas guardar tu información de inicio de sesión en el navegador, puedes elegir <strong>Guardar información</strong> o <strong>Ahora no</strong> según tu preferencia.</>,
              },
              {
                n: 6,
                text: <>Instagram mostrará una pantalla solicitando tu autorización para que Plinng acceda a tu cuenta. Otorga los permisos necesarios haciendo clic en <strong>Permitir</strong>.</>,
              },
              {
                n: 7,
                text: <>En pocos instantes serás redirigido de vuelta a Plinng. Verás una notificación que confirma: <strong>"¡Instagram conectado! Ya puedes automatizar tu contenido"</strong>. Tu cuenta queda conectada correctamente.</>,
              },
            ].map(({ n, text }) => (
              <div key={n} className="flex items-start gap-4 p-4 rounded-[14px] border border-[#E5E5E5] bg-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm font-bold shrink-0">
                  {n}
                </span>
                <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F] pt-[2px]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Consideraciones importantes */}
        <section className="flex flex-col gap-4 p-6 rounded-[20px] bg-[#F7F7F7]">
          <h3 className="text-[20px] sm:text-[22px] font-semibold">Consideraciones importantes</h3>
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Verificación en dos pasos",
                body: "Si tienes habilitada la autenticación de dos factores en Instagram, el código de seguridad puede tardar unos segundos en llegar. Si no lo recibes por WhatsApp, utiliza la opción Enviar código por SMS o consulta tus códigos de respaldo.",
              },
              {
                title: "Permisos de acceso",
                body: "Es necesario otorgar todos los permisos solicitados por Instagram para que Plinng pueda publicar contenido en tu nombre. Si cancelas este paso, el proceso de vinculación no se completará.",
              },
              {
                title: "Cuenta de Instagram existente",
                body: "Solo es posible vincular una cuenta de Instagram que ya exista. Si aún no tienes una, deberás crearla directamente en Instagram antes de continuar con este proceso.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-1 pb-4 last:pb-0 border-b last:border-b-0 border-[#E5E5E5]">
                <p className="text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A]">{title}</p>
                <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solución de problemas frecuentes */}
        <section className="flex flex-col gap-4">
          <h3 className="text-[20px] sm:text-[22px] font-semibold">Solución de problemas frecuentes</h3>
          <div className="flex flex-col gap-3">
            {[
              {
                q: "No recibo el código de verificación",
                a: "Verifica que el número de teléfono o correo electrónico asociado a tu cuenta de Instagram esté actualizado. También puedes solicitar que el código se envíe por SMS en lugar de WhatsApp, o utilizar un código de respaldo si los tienes configurados.",
              },
              {
                q: "El proceso no se completa",
                a: 'Asegúrate de hacer clic en Permitir cuando Instagram solicita autorización. Si cierras esa ventana sin aceptar, el vínculo no se establecerá y deberás iniciar el proceso nuevamente.',
              },
              {
                q: "El navegador bloquea la ventana emergente",
                a: "Si tu navegador bloquea la apertura de la nueva pestaña de Instagram, permite las ventanas emergentes para el dominio de Plinng e intenta nuevamente.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="flex flex-col gap-2 p-4 rounded-[14px] border border-[#E5E5E5] bg-white">
                <p className="text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A] flex items-center gap-2">
                  <span className="text-base">🔧</span> {q}
                </p>
                <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">{a}</p>
              </div>
            ))}
          </div>
        </section>

      </article>

      {/* Back button */}
      <div className="flex justify-end pt-4">
        <Button asChild size="lg" className="w-full sm:w-auto lg:w-auto min-h-[44px]">
          <Link href="/conecta-cuentas">
            Volver
            <ArrowLeft className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
