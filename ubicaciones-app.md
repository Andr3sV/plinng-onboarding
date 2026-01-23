# Guía de Ubicaciones en la App - Plinng

Este documento mapea cada pregunta o funcionalidad con su ubicación exacta en la aplicación web de onboarding de Plinng.

---

## PÁGINA PRINCIPAL (Home)

**URL:** `/` o `/page`

**Contenido:**
- Título: "Pon en marcha Plinng"
- Descripción: "Invierte unos minutos en poner en marcha tu app de Plinng y ahorra horas de trabajo cada semana."
- Cards de navegación a las diferentes secciones:
  - Bienvenido a Plinng → `/bienvenido`
  - Descarga la app → `/descarga-app`
  - Completa tu perfil → `/completa-perfil`
  - Conecta tus cuentas → `/conecta-cuentas`
  - Primeros pasos → `/tour`
  - Preguntas frecuentes → `/faq`

---

## BIENVENIDO A PLINNG

**URL:** `/bienvenido`

**Ubicación del contenido:**
- **Título:** "Bienvenido a Plinng" - aparece en la parte superior izquierda
- **Descripción:** "En este vídeo te doy la bienvenida y te contamos cómo Plinng va a ayudarte a comunicar mejor tu negocio, ganar visibilidad y sentir que tu marketing está bajo control, desde el primer día." - aparece debajo del título
- **Video de bienvenida:** Video vertical en el lado derecho (desktop) o abajo (móvil) con el video "hola-soy-maya.mp4"
- **Botón Siguiente:** 
  - Desktop: Esquina superior derecha
  - Móvil: Parte inferior de la página
  - Lleva a: `/descarga-app`

**Preguntas relacionadas:**
- "¿Dónde está el video de bienvenida?" → Página "Bienvenido a Plinng", lado derecho (desktop) o abajo (móvil)
- "¿Cómo continúo después de ver el video de bienvenida?" → Botón "Siguiente" en esquina superior derecha (desktop) o abajo (móvil)

---

## DESCARGA LA APP

**URL:** `/descarga-app`

**Ubicación del contenido:**
- **Título:** "Descarga la app" - aparece en la parte superior izquierda
- **Descripción:** "Aquí te enseñamos cómo descargar la app de Plinng y entrar en segundos. Así podrás gestionar tu marketing desde el móvil, aprobar contenidos y seguir todo en un solo lugar." - aparece debajo del título
- **Botones de descarga (App Store y Google Play):** Lado izquierdo, debajo de la descripción
- **Código QR:** 
  - **Ubicación:** Lado izquierdo, debajo de los botones de descarga
  - **Solo visible en desktop** (se oculta en móvil)
  - Aparece dentro de un recuadro amarillo/verde (`bg-[#BEFF50]`) con el texto "Descarga Plinng."
  - Texto arriba del QR: "o puedes escanear el código QR con tu dispositivo móvil:"
- **Video tutorial:** Video vertical en el lado derecho (desktop) o abajo (móvil) con el video "Cómo descargar Plinng.mp4"
- **Botón "Completa tu perfil":**
  - Desktop: Esquina superior derecha
  - Móvil: Parte inferior de la página
  - Lleva a: `/completa-perfil`

**Preguntas relacionadas:**
- "¿Dónde puedo encontrar el QR para descargar la app?" → Página "Descarga la app", lado izquierdo, debajo de los botones de App Store y Google Play (solo visible en desktop)
- "¿Dónde están los enlaces de descarga?" → Página "Descarga la app", lado izquierdo, botones de App Store y Google Play
- "¿Dónde está el video de cómo descargar la app?" → Página "Descarga la app", lado derecho (desktop) o abajo (móvil)

---

## COMPLETA TU PERFIL

**URL:** `/completa-perfil`

**Ubicación del contenido:**
- **Título:** "Completa tu perfil" - aparece en la parte superior izquierda
- **Descripción:** "Aquí nos cuentas lo esencial sobre tu negocio: qué haces, a quién te diriges, cómo quieres comunicar y cuáles son tus objetivos. Cuanto más claro seas, mejor entenderá Plinng tu negocio y mejores serán los resultados desde el primer día." - aparece debajo del título
- **Lista de pasos del Brief (9 pasos):** Lado izquierdo, en formato de cards clicables:
  1. Paso 1: Welcome Brief
  2. Paso 2: Información sobre tu negocio
  3. Paso 3: Añade tus redes sociales
  4. Paso 4: Hablemos sobre tu negocio
  5. Paso 5: Exploremos tus productos y servicios
  6. Paso 6: Analicemos quién es tu cliente objetivo
  7. Paso 7: Fechas relevantes de tu negocio
  8. Paso 8: Construyamos tu imagen
  9. Paso 9: Final Brief
- **Video del paso seleccionado:** Lado derecho (desktop) o abajo (móvil), dentro de un marco de teléfono móvil
- **Botón "Conecta tus cuentas":**
  - Desktop: Esquina superior derecha
  - Móvil: Parte inferior de la página
  - Lleva a: `/conecta-cuentas`

**Preguntas relacionadas:**
- "¿Dónde completo mi perfil?" → Página "Completa tu perfil", lista de 9 pasos en el lado izquierdo
- "¿Dónde está el video del paso X del Brief?" → Página "Completa tu perfil", selecciona el paso en la lista izquierda y el video aparece a la derecha (desktop) o abajo (móvil)
- "¿Cuántos pasos tiene el Brief?" → Página "Completa tu perfil", hay 9 pasos listados en el lado izquierdo

---

## CONECTA TUS CUENTAS

**URL:** `/conecta-cuentas`

**Ubicación del contenido:**
- **Título:** "Conecta tus cuentas" - aparece en la parte superior izquierda
- **Descripción:** "Para que Plinng pueda trabajar por ti, necesitamos conectar tus herramientas. Así podremos crear, programar y analizar tu contenido de forma automática, siempre con tu aprobación." - aparece debajo del título
- **Cards de selección de tipo de cuenta:** Tres cards horizontales en la parte superior:
  1. Facebook/Instagram
  2. Google Empresa
  3. Dominio/Hosting
- **Pasos de configuración (acordeón):** Aparecen cuando seleccionas un tipo de cuenta, debajo de las cards de selección
- **Botón "Siguiente":**
  - Desktop: Esquina superior derecha
  - Móvil: Parte inferior de la página
  - Lleva a: `/tour`

### Facebook/Instagram

**URL:** `/conecta-cuentas/facebook-instagram`

**Ubicación del contenido:**
- **Título:** "Facebook / Instagram" - aparece en la parte superior
- **Descripción:** "Sigue estos pasos para conectar tus cuentas de Facebook e Instagram con Plinng." - aparece debajo del título
- **Pasos en acordeón:**
  - Paso 1: Crear la página de Facebook de la empresa
  - Paso 2: Otorgar acceso a Plinng a la página de Facebook de la empresa
  - Paso 3: Verificar que la cuenta de Instagram esté vinculada a la página de Facebook o realizar la vinculación si aún no está hecha
    - Subpaso 3a: Si ya tienes cuenta de Instagram
    - Subpaso 3b: Si aún no tienes cuenta de Instagram
- **Videos tutoriales:** Cada paso tiene su video vertical dentro del acordeón

**Preguntas relacionadas:**
- "¿Dónde conecto Facebook e Instagram?" → Página "Conecta tus cuentas", selecciona la card "Facebook/Instagram" o ve directamente a `/conecta-cuentas/facebook-instagram`
- "¿Cómo doy acceso a Plinng en Facebook?" → Página "Conecta tus cuentas/facebook-instagram", Paso 2 del acordeón

### Google Empresa

**URL:** `/conecta-cuentas/google-empresa`

**Ubicación del contenido:**
- **Título:** "Google Empresa" - aparece en la parte superior
- **Descripción:** "Sigue estos pasos para conectar tu cuenta de Google Empresa con Plinng." - aparece debajo del título
- **Pasos en acordeón:**
  - Paso 1: Añadir Plinng cómo gestor de la cuenta
- **Video tutorial:** Video vertical dentro del acordeón del paso 1
- **Enlace mencionado:** https://business.google.com/es-all/business-profile/ (para crear perfil de Google Empresa)

**Preguntas relacionadas:**
- "¿Dónde conecto Google Empresa?" → Página "Conecta tus cuentas", selecciona la card "Google Empresa" o ve directamente a `/conecta-cuentas/google-empresa`
- "¿Dónde creo mi perfil de Google Empresa?" → En la página "Conecta tus cuentas", en la sección de Google Empresa se menciona el enlace https://business.google.com/es-all/business-profile/

### Dominio/Hosting

**URL:** `/conecta-cuentas/dominio-hosting`

**Ubicación del contenido:**
- **Título:** "Dominio / Hosting" - aparece en la parte superior
- **Descripción:** "Sigue estos pasos para configurar tu dominio y hosting con Plinng." - aparece debajo del título
- **Pasos en acordeón:**
  - Paso 1: Rellena el siguiente formulario
    - Descripción: "Para poder completar el brief de la web —tanto si se trata de una web nueva como de realizar modificaciones sobre una existente— es necesario que rellenes el siguiente formulario:"
    - **Enlace al formulario:** https://form.typeform.com/to/yeapDpG0
    - Instrucciones sobre qué completar según el caso
- **Video tutorial:** Video vertical dentro del acordeón del paso 1

**Preguntas relacionadas:**
- "¿Dónde está el formulario de dominio/hosting?" → Página "Conecta tus cuentas/dominio-hosting", Paso 1 del acordeón, enlace: https://form.typeform.com/to/yeapDpG0
- "¿Dónde configuro mi dominio?" → Página "Conecta tus cuentas", selecciona la card "Dominio/Hosting" o ve directamente a `/conecta-cuentas/dominio-hosting`

---

## TOUR POR LA APP

**URL:** `/tour`

**Ubicación del contenido:**
- **Título:** "Tour por la app" - aparece en la parte superior izquierda
- **Descripción:** "Aprende a usar todas las funciones de Plinng con este tour guiado. Explora cada sección para dominar tu asistente AI de marketing." - aparece debajo del título
- **Lista de secciones del tour (7 secciones):** Lado izquierdo, en formato de cards clicables:
  1. Calendario - "Gestiona tus publicaciones programadas"
  2. Maya - "Asistente AI de marketing"
  3. Propuestas: feedback - "Aprobar contenido generado"
  4. Propuestas: solicitar cambios - "Personalizar propuestas"
  5. Sophia - "Recepcionista IA 24/7 y gestora de reseñas"
  6. Identidad Digital - "Configura tu marca"
  7. Galería - "Organiza tus recursos visuales"
- **Video de la sección seleccionada:** Lado derecho (desktop) o abajo (móvil), dentro de un marco de teléfono móvil
- **Botón "Siguiente":**
  - Desktop: Esquina superior derecha
  - Móvil: Parte inferior de la página
  - Lleva a: `/faq`

**Preguntas relacionadas:**
- "¿Dónde aprendo a usar el Calendario?" → Página "Tour por la app", selecciona "Calendario" en la lista izquierda
- "¿Dónde está el video de Maya?" → Página "Tour por la app", selecciona "Maya" en la lista izquierda, el video aparece a la derecha (desktop) o abajo (móvil)
- "¿Qué secciones tiene el tour?" → Página "Tour por la app", hay 7 secciones listadas en el lado izquierdo

---

## PREGUNTAS FRECUENTES (FAQ)

**URL:** `/faq`

**Ubicación del contenido:**
- **Título:** "Preguntas frecuentes" - aparece en la parte superior izquierda
- **Descripción:** "Encuentra respuestas a las preguntas más comunes sobre Plinng." - aparece debajo del título
- **Categorías de preguntas:** Organizadas en secciones con acordeones:
  1. **General**
     - ¿Es seguro conectar mis cuentas?
  2. **Configuración**
     - ¿Cuánto tiempo toma configurar la app?
     - ¿Puedo cambiar la configuración después?
     - Olvidé mi contraseña de Facebook (video horizontal)
     - Olvidé mi contraseña de Plinng (video vertical)
  3. **Funcionalidades**
     - ¿Qué es el Formulario?
     - ¿Qué es el Calendario?
     - ¿Qué es Propuestas?
     - ¿Qué es el Historial de Cambios?
     - ¿Qué es Actividad reciente?
     - ¿Qué es Seguimiento?
     - ¿Qué es Identidad digital?
     - ¿Qué es Comentarios y reseñas?
     - ¿Qué es Tus servicios?
     - ¿Qué es el flujo de baja?
     - ¿Qué es Galería?
     - ¿Qué es Cambios web?
     - ¿Qué es Ajustes?
     - ¿Qué es Notificaciones?
     - ¿Qué es Cerrar sesión?
     - ¿Qué es Subir logo?
  4. **Complementos**
     - Recepcionista AI de llamadas 24/7 (acordeón anidado con múltiples secciones y preguntas)

**Preguntas relacionadas:**
- "¿Dónde están las preguntas frecuentes?" → Página "Preguntas frecuentes" (`/faq`)
- "¿Dónde está el video de recuperar contraseña de Plinng?" → Página "Preguntas frecuentes", sección "Configuración", pregunta "Olvidé mi contraseña de Plinng"
- "¿Dónde está el video de recuperar contraseña de Facebook?" → Página "Preguntas frecuentes", sección "Configuración", pregunta "Olvidé mi contraseña de Facebook"
- "¿Dónde encuentro información sobre el Recepcionista AI?" → Página "Preguntas frecuentes", sección "Complementos", pregunta "Recepcionista AI de llamadas 24/7"

---

## MAPEO DE FUNCIONALIDADES ESPECÍFICAS

### Videos Tutoriales

| Video | Ubicación |
|-------|-----------|
| Video de bienvenida (hola-soy-maya.mp4) | `/bienvenido` - Lado derecho (desktop) o abajo (móvil) |
| Video de descarga de app | `/descarga-app` - Lado derecho (desktop) o abajo (móvil) |
| Videos de los 9 pasos del Brief | `/completa-perfil` - Lado derecho (desktop) o abajo (móvil), cambian según el paso seleccionado |
| Videos de conexión de cuentas | `/conecta-cuentas` - Dentro de los acordeones de cada tipo de cuenta |
| Videos del tour (7 secciones) | `/tour` - Lado derecho (desktop) o abajo (móvil), cambian según la sección seleccionada |
| Video recuperar contraseña Plinng | `/faq` - Sección "Configuración", pregunta "Olvidé mi contraseña de Plinng" |
| Video recuperar contraseña Facebook | `/faq` - Sección "Configuración", pregunta "Olvidé mi contraseña de Facebook" |

### Formularios y Enlaces Externos

| Recurso | Ubicación |
|---------|-----------|
| Formulario de dominio/hosting | `/conecta-cuentas/dominio-hosting` - Paso 1, enlace: https://form.typeform.com/to/yeapDpG0 |
| Crear perfil Google Empresa | `/conecta-cuentas/google-empresa` - Se menciona el enlace: https://business.google.com/es-all/business-profile/ |

### Información sobre Funcionalidades

| Funcionalidad | Ubicación en FAQ |
|---------------|------------------|
| Formulario (Brief) | `/faq` - Sección "Funcionalidades" |
| Calendario | `/faq` - Sección "Funcionalidades" |
| Propuestas | `/faq` - Sección "Funcionalidades" |
| Historial de Cambios | `/faq` - Sección "Funcionalidades" |
| Actividad reciente | `/faq` - Sección "Funcionalidades" |
| Seguimiento | `/faq` - Sección "Funcionalidades" |
| Identidad digital | `/faq` - Sección "Funcionalidades" |
| Comentarios y reseñas | `/faq` - Sección "Funcionalidades" |
| Tus servicios | `/faq` - Sección "Funcionalidades" |
| Flujo de baja | `/faq` - Sección "Funcionalidades" |
| Galería | `/faq` - Sección "Funcionalidades" |
| Cambios web | `/faq` - Sección "Funcionalidades" |
| Ajustes | `/faq` - Sección "Funcionalidades" |
| Notificaciones | `/faq` - Sección "Funcionalidades" |
| Cerrar sesión | `/faq` - Sección "Funcionalidades" |
| Subir logo | `/faq` - Sección "Funcionalidades" |
| Recepcionista AI (Call Agent) | `/faq` - Sección "Complementos" |

### Información sobre Configuración

| Tema | Ubicación |
|------|-----------|
| Tiempo de configuración | `/faq` - Sección "Configuración", pregunta "¿Cuánto tiempo toma configurar la app?" |
| Modificar configuración | `/faq` - Sección "Configuración", pregunta "¿Puedo cambiar la configuración después?" |
| Seguridad de conexiones | `/faq` - Sección "General", pregunta "¿Es seguro conectar mis cuentas?" |

---

## FLUJO DE NAVEGACIÓN

### Flujo Principal de Onboarding

1. **Home** (`/`) → Card "Bienvenido a Plinng"
2. **Bienvenido** (`/bienvenido`) → Botón "Siguiente"
3. **Descarga la app** (`/descarga-app`) → Botón "Completa tu perfil"
4. **Completa tu perfil** (`/completa-perfil`) → Botón "Conecta tus cuentas"
5. **Conecta tus cuentas** (`/conecta-cuentas`) → Botón "Siguiente"
6. **Tour por la app** (`/tour`) → Botón "Siguiente"
7. **Preguntas frecuentes** (`/faq`)

### Accesos Directos desde Home

Desde la página principal (`/`), puedes acceder directamente a:
- Bienvenido a Plinng → `/bienvenido`
- Descarga la app → `/descarga-app`
- Completa tu perfil → `/completa-perfil`
- Conecta tus cuentas → `/conecta-cuentas`
- Primeros pasos → `/tour`
- Preguntas frecuentes → `/faq`

---

## NOTAS IMPORTANTES

1. **Videos verticales:** Los videos en formato vertical aparecen dentro de un marco de teléfono móvil en el lado derecho (desktop) o abajo (móvil).

2. **Videos horizontales:** Los videos en formato horizontal aparecen en ancho completo dentro de los acordeones.

3. **Botones de navegación:**
   - En desktop: Aparecen en la esquina superior derecha
   - En móvil: Aparecen en la parte inferior de la página

4. **Acordeones:** Muchas secciones usan acordeones (elementos desplegables) para organizar la información. El usuario debe hacer clic en el título para expandir y ver el contenido.

5. **QR Code:** Solo es visible en desktop, no aparece en la versión móvil de la página "Descarga la app".

---

## PREGUNTAS FRECUENTES SOBRE UBICACIONES

**P: ¿Dónde encuentro el código QR para descargar la app?**
R: En la página "Descarga la app" (`/descarga-app`), en el lado izquierdo, debajo de los botones de App Store y Google Play. Solo visible en desktop.

**P: ¿Dónde están los pasos para completar mi perfil?**
R: En la página "Completa tu perfil" (`/completa-perfil`), en el lado izquierdo hay una lista de 9 pasos del Brief.

**P: ¿Dónde conecto mis redes sociales?**
R: En la página "Conecta tus cuentas" (`/conecta-cuentas`), selecciona el tipo de cuenta (Facebook/Instagram, Google Empresa, o Dominio/Hosting) y sigue los pasos en el acordeón.

**P: ¿Dónde aprendo sobre las funcionalidades de la app?**
R: Hay dos lugares:
1. En el "Tour por la app" (`/tour`) puedes ver videos de las principales funcionalidades
2. En "Preguntas frecuentes" (`/faq`), sección "Funcionalidades", encuentras información detallada sobre cada funcionalidad

**P: ¿Dónde está el video de recuperar mi contraseña?**
R: En "Preguntas frecuentes" (`/faq`), sección "Configuración":
- "Olvidé mi contraseña de Plinng" → video vertical
- "Olvidé mi contraseña de Facebook" → video horizontal

**P: ¿Dónde encuentro información sobre el Recepcionista AI?**
R: En "Preguntas frecuentes" (`/faq`), sección "Complementos", pregunta "Recepcionista AI de llamadas 24/7". Esta pregunta tiene un acordeón anidado con múltiples secciones y preguntas.
