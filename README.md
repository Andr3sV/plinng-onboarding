# Plinng Onboarding

Aplicación de soporte al cliente para guiar a los usuarios paso a paso en la configuración de su app de Plinng.

## Características

- **7 páginas principales**: Home, Bienvenido, Descarga App, Completa Perfil, Conecta Cuentas, Tour, FAQ
- **Diseño responsive**: Optimizado para desktop y mobile
- **Videos embebidos**: Soporte para videos de Google Drive
- **Navegación intuitiva**: Sidebar en desktop, drawer en mobile
- **Componentes interactivos**: Carousel de slides, FAQ con búsqueda, videos responsive

## Stack Tecnológico

- **Next.js 14+** con App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Vercel** para despliegue

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## Estructura del Proyecto

```
app/
  ├── layout.tsx              # Layout principal con Sidebar
  ├── page.tsx                # Home
  ├── bienvenido/             # Bienvenido a Plinng
  ├── descarga-app/           # Descarga la app
  ├── completa-perfil/        # Completa tu perfil
  ├── conecta-cuentas/        # Conecta tus cuentas + subpáginas
  ├── tour/                   # Tour por la app + subpáginas
  └── faq/                    # Preguntas frecuentes

components/
  ├── sidebar.tsx             # Navegación principal
  ├── video-player.tsx        # Componente para videos
  ├── qr-code.tsx             # Componente QR code
  ├── profile-slides.tsx      # Carousel de slides
  └── ui/                     # Componentes shadcn/ui
```

## Despliegue en Vercel

La aplicación está configurada para desplegarse en Vercel:

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. El build se ejecutará automáticamente
4. La aplicación estará disponible en tu dominio de Vercel

## Configuración

- Los colores se pueden ajustar en `tailwind.config.ts`
- Los assets de diseño están en `public/assets/`
- Los videos se embeben desde Google Drive
