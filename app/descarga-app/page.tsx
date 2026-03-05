import Link from "next/link"
import Image from "next/image"
import { MobileVideoContainer } from "@/components/mobile-video-container"

export default function DescargaAppPage() {
    const videoUrl = "/videos/Cómo descargar Plinng.mp4"

    return (
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-[40px] pb-4 sm:pb-6 lg:pb-[40px]">
            <div className="w-full max-w-6xl relative">
                {/* Botón Completa tu perfil en esquina superior derecha - Desktop */}
                <div className="hidden lg:flex justify-end mb-[56px]">
                    <Link href="/completa-perfil">
                        <div className="rounded-[18px] bg-black flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90">
                            <div className="relative leading-7 font-semibold text-white">Completa tu perfil</div>
                            <Image
                                src="/assets/icons/arrow2.svg"
                                className="h-5 w-7 ml-2 brightness-0 invert"
                                width={28}
                                height={20}
                                alt=""
                            />
                        </div>
                    </Link>
                </div>

                {/* Contenido principal */}
                <div className="relative flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-[54px]">
                    <div className="flex-1 flex flex-col items-start justify-center gap-4 w-full lg:w-auto">
                        <b className="self-stretch relative tracking-[-1.5px] leading-[50px] lg:leading-[60px] text-[42px] sm:text-[36px] lg:text-[42px] font-bold">Descarga la app</b>
                        <div className="self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                            Aquí te enseñamos cómo descargar la app de Plinng y entrar en segundos.
                            Así podrás gestionar tu marketing desde el móvil, aprobar contenidos y seguir todo en un solo lugar.
                        </div>

                        {/* App Store and Google Play buttons */}
                        <div className="flex items-start gap-4 text-[9px] text-white">
                            <div className="h-11 w-[130px] relative rounded-md bg-black border border-gray-600 border-solid box-border overflow-hidden shrink-0">
                                <Image
                                    src="/assets/download-plinng/Apple.svg"
                                    className="absolute top-[8px] left-[8px] w-5 h-6"
                                    width={20}
                                    height={24}
                                    alt="Apple logo"
                                />
                                <div className="absolute top-[calc(50%_-_13.5px)] left-[36px] w-[96px] flex flex-col items-start">
                                    <div className="self-stretch relative leading-[9px] font-medium">Download on the</div>
                                    <div className="self-stretch relative text-lg tracking-[-0.47px] leading-[100%] font-medium">App Store</div>
                                </div>
                            </div>
                            <div className="h-11 w-[130px] relative rounded-md bg-black border border-gray-600 border-solid box-border overflow-hidden shrink-0 text-[10px]">
                                <Image
                                    src="/assets/download-plinng/Playstore.svg"
                                    className="absolute top-[8px] left-[8px] w-[21px] h-6"
                                    width={21}
                                    height={24}
                                    alt="Google Play logo"
                                />
                                <div className="absolute top-[5px] left-[36px] flex flex-col items-start gap-[3px]">
                                    <div className="self-stretch relative uppercase">GET IT ON</div>
                                    <Image
                                        src="/assets/download-plinng/path90.svg"
                                        className="w-[74px] h-[15px] relative"
                                        width={74}
                                        height={15}
                                        alt="Google Play"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* QR Code section */}
                        <div className="hidden lg:block self-stretch relative text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#2F4F4F]">
                            o puedes escanear el código QR con tu dispositivo móvil:
                        </div>
                        <div className="hidden lg:flex rounded-[30px] bg-[#BEFF50] flex-col items-center justify-center p-4 gap-2 text-center text-sm w-fit">
                            <Image
                                src="/assets/download-plinng/QR code.png"
                                className="w-[100px] h-[100px] relative rounded-[10px] max-h-full object-cover"
                                width={100}
                                height={100}
                                alt="QR Code para descargar Plinng"
                            />
                            <div className="relative leading-6 font-semibold text-[#000000]">Descarga Plinng.</div>
                        </div>
                    </div>
                    <MobileVideoContainer
                        videoUrl={videoUrl}
                        title="Descarga la app"
                        showBorder={true}
                    />
                </div>

                {/* Botón Completa tu perfil al final - Mobile */}
                <div className="flex lg:hidden mt-8">
                    <Link href="/completa-perfil" className="w-full">
                        <div className="rounded-[18px] bg-black flex items-center justify-center py-3 px-8 text-center text-base cursor-pointer transition-all hover:opacity-90 w-full">
                            <div className="relative leading-7 font-semibold text-white">Completa tu perfil</div>
                            <Image
                                src="/assets/icons/arrow2.svg"
                                className="h-5 w-7 ml-2 brightness-0 invert"
                                width={28}
                                height={20}
                                alt=""
                            />
                        </div>
                    </Link>
                </div>

                {/* ── Help Center Article ── */}
                <article className="mt-12 mb-[80px] flex flex-col gap-10 text-[#1A1A1A]">

                    {/* Header */}
                    <header className="flex flex-col gap-2 pb-6 border-b border-[#E5E5E5]">
                        <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.5px] leading-tight">
                            Cómo Descargar la App de Plinng
                        </h1>
                        <p className="text-[16px] sm:text-[17px] leading-[26px] text-[#2F4F4F]">
                            Aprende a descargar y configurar la app de Plinng en tu dispositivo móvil en solo unos sencillos pasos.
                        </p>
                    </header>

                    {/* Qué Necesitarás */}
                    <section className="flex flex-col gap-3">
                        <h2 className="text-[20px] sm:text-[22px] font-semibold">Qué Necesitarás</h2>
                        <ul className="flex flex-col gap-2 text-[15px] sm:text-[16px] leading-[24px] text-[#2F4F4F]">
                            {[
                                "Un Teléfono Móvil",
                                "Un número de teléfono válido para verificación",
                                "Conexión a internet",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-[#BEFF50] border border-black shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Instrucciones Paso a Paso */}
                    <section className="flex flex-col gap-6">
                        <h2 className="text-[20px] sm:text-[22px] font-semibold">Instrucciones Paso a Paso</h2>

                        {/* Paso 1 */}
                        <Step number={1} title="Abre el App Store">
                            <p>Desde la pantalla de inicio de tu dispositivo, toca el icono del <strong>App Store</strong> o el <strong>Play Store</strong>.</p>
                            <Tip>También puedes usar la barra de búsqueda en la parte superior de tu pantalla etiquetada como "Biblioteca de apps" para encontrar el App Store o el Play Store más rápidamente.</Tip>
                        </Step>

                        {/* Paso 2 */}
                        <Step number={2} title="Busca Plinng">
                            <ol className="flex flex-col gap-1 list-decimal list-inside text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
                                <li>Toca el icono de Buscar (icono de lupa).</li>
                                <li>En la barra de búsqueda, escribe <strong>"Plinng"</strong>.</li>
                                <li>Toca el botón de búsqueda en tu teclado.</li>
                            </ol>
                        </Step>

                        {/* Paso 3 */}
                        <Step number={3} title="Encuentra y Descarga la App">
                            <ol className="flex flex-col gap-1 list-decimal list-inside text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
                                <li>Busca la app de Plinng en los resultados de búsqueda.</li>
                                <li>Toca la app para ver sus detalles.</li>
                                <li>Toca el botón de descarga (icono de nube con flecha hacia abajo) o el botón <strong>OBTENER</strong>.</li>
                            </ol>
                        </Step>

                        {/* Paso 4 */}
                        <Step number={4} title="Abre la App">
                            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">Una vez completada la descarga:</p>
                            <ol className="flex flex-col gap-1 list-decimal list-inside text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
                                <li>Toca <strong>Abrir</strong> desde el App Store o el Play Store.</li>
                                <li>También puedes encontrar la app de Plinng en tu pantalla de inicio y tocarla para abrirla.</li>
                            </ol>
                        </Step>

                        {/* Paso 5 */}
                        <Step number={5} title="Activa Tu Cuenta">
                            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">Cuando abras la app por primera vez, verás la pantalla de <strong>"Activar cuenta"</strong>.</p>
                            <ol className="flex flex-col gap-3 list-decimal list-inside text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
                                <li>
                                    <strong>Ingresa tu número de teléfono:</strong>
                                    <ul className="mt-1 ml-5 flex flex-col gap-1">
                                        {[
                                            "Selecciona tu código de país (por defecto es +34 para España).",
                                            "Escribe tu número de teléfono completo en el campo de texto.",
                                            "Asegúrate de que el número sea correcto.",
                                        ].map((t) => (
                                            <li key={t} className="flex items-start gap-2">
                                                <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#2F4F4F] shrink-0" />
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <strong>Elige tu método de verificación:</strong>
                                    <ul className="mt-1 ml-5 flex flex-col gap-1">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#2F4F4F] shrink-0" />
                                            WhatsApp <span className="ml-1 text-[#2F4F4F]">(recomendado — se muestra con una marca verde)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#2F4F4F] shrink-0" />
                                            SMS (opción alternativa)
                                        </li>
                                    </ul>
                                </li>
                                <li>Toca el botón <strong>"Enviar código"</strong>.</li>
                            </ol>
                        </Step>

                        {/* Paso 6 */}
                        <Step number={6} title="Recibe Tu Código de Verificación">
                            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">Después de enviar tu número de teléfono:</p>
                            <ul className="flex flex-col gap-1 text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
                                {[
                                    "Recibirás un código de verificación a través del método seleccionado (WhatsApp o SMS).",
                                    "El código se enviará al número de teléfono que proporcionaste.",
                                ].map((t) => (
                                    <li key={t} className="flex items-start gap-2">
                                        <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#2F4F4F] shrink-0" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
                                En la parte inferior de la pantalla, puedes seleccionar si deseas recibir el código vía WhatsApp o SMS tocando la opción correspondiente.
                            </p>
                        </Step>
                    </section>

                    {/* Solución de Problemas */}
                    <section className="flex flex-col gap-4 p-6 rounded-[20px] bg-[#F7F7F7]">
                        <h2 className="text-[20px] sm:text-[22px] font-semibold">Solución de Problemas</h2>

                        <TroubleshootItem question="¿No encuentras la app?">
                            <ul className="flex flex-col gap-1">
                                {[
                                    'Asegúrate de haber escrito "Plinng" correctamente.',
                                    "Verifica que tu dispositivo esté conectado a internet.",
                                    "Comprueba que tu versión de iOS sea compatible (4+).",
                                ].map((t) => (
                                    <li key={t} className="flex items-start gap-2">
                                        <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#2F4F4F] shrink-0" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </TroubleshootItem>

                        <TroubleshootItem question="¿No recibes el código de verificación?">
                            <ul className="flex flex-col gap-1">
                                {[
                                    "Verifica que tu número de teléfono sea correcto.",
                                    "Asegúrate de tener una conexión a internet estable (para WhatsApp) o servicio celular (para SMS).",
                                    "Intenta seleccionar el método de verificación alternativo (SMS en lugar de WhatsApp, o viceversa).",
                                ].map((t) => (
                                    <li key={t} className="flex items-start gap-2">
                                        <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-[#2F4F4F] shrink-0" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </TroubleshootItem>

                        <TroubleshootItem question="¿Ya tienes una cuenta?">
                            <p>En la parte inferior de la pantalla de activación, toca <strong>"Iniciar sesión"</strong> en su lugar.</p>
                        </TroubleshootItem>
                    </section>

                    {/* Qué Sigue */}
                    <section className="flex flex-col gap-3 p-6 rounded-[20px] bg-[#BEFF50]">
                        <h2 className="text-[20px] sm:text-[22px] font-semibold text-[#1A1A1A]">¿Qué Sigue?</h2>
                        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#1A1A1A]">
                            Después de verificar exitosamente tu número de teléfono, podrás:
                        </p>
                        <ul className="flex flex-col gap-2">
                            {[
                                "Convertir horas de gestión en minutos",
                                "Aprobar contenido y propuestas",
                                "Hacer crecer tu negocio sin estrés",
                                "Acceder a tu calendario y más funciones de productividad",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-[15px] sm:text-[16px] font-medium text-[#1A1A1A]">
                                    <span className="text-lg">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* ¿Necesitas Más Ayuda? */}
                    <section className="flex flex-col gap-3 pt-6 border-t border-[#E5E5E5]">
                        <h2 className="text-[20px] sm:text-[22px] font-semibold">¿Necesitas Más Ayuda?</h2>
                        <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">
                            Si continúas experimentando problemas al descargar o activar la app de Plinng, por favor contacta a nuestro equipo de soporte para asistencia.
                        </p>
                    </section>

                </article>
            </div>
        </div>
    )
}

/* ── Helper sub-components ── */

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-3 p-5 rounded-[16px] border border-[#E5E5E5] bg-white">
            <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm font-bold shrink-0">
                    {number}
                </span>
                <h3 className="text-[17px] sm:text-[18px] font-semibold">{title}</h3>
            </div>
            <div className="flex flex-col gap-2 pl-11">{children}</div>
        </div>
    )
}

function Tip({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-2 mt-1 p-3 rounded-[10px] bg-[#F7F7F7] text-[14px] sm:text-[15px] leading-[22px] text-[#2F4F4F]">
            <span className="text-base shrink-0">💡</span>
            <span><strong>Consejo:</strong> {children}</span>
        </div>
    )
}

function TroubleshootItem({ question, children }: { question: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-2 pb-4 last:pb-0 border-b last:border-b-0 border-[#E5E5E5]">
            <p className="text-[15px] sm:text-[16px] font-semibold text-[#1A1A1A]">{question}</p>
            <div className="text-[15px] sm:text-[16px] leading-[26px] text-[#2F4F4F]">{children}</div>
        </div>
    )
}
