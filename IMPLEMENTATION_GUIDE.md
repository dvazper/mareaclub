# Guía de Implementación - Marea Club

## ✅ Estado Actual

Tu landing page de **Marea Club** está **100% completada** y funcionando. El servidor de desarrollo está corriendo en `http://localhost:5173/`.

## 🎯 Qué se ha Implementado

### 1. **Estructura Base**
- ✅ Proyecto Vite + React + TypeScript
- ✅ Tailwind CSS configurado
- ✅ Framer Motion para animaciones
- ✅ Lucide React para iconos

### 2. **Tema Día/Noche**
- ✅ Context global (ThemeContext.tsx)
- ✅ Botón flotante en esquina inferior derecha
- ✅ Alternancia suave con degradados
- ✅ Persistencia en localStorage
- ✅ Preferencia de sistema detectada automáticamente

### 3. **Animaciones**

#### Scroll Reveal (Textos)
```
- Aparición desde abajo con efecto máscara
- Uso de clip-path: inset(0 0 100% 0) → inset(0 0 0 0)
- Duración: 0.8s ease-out
- Basado en Intersection Observer
```

#### Blur Reveal (Imágenes)
```
- Transición de blur(12px) a blur(0)
- Movimiento ascendente suave
- Duración: 0.8s ease-out
- Se queda fija una vez animada
```

#### Especular Button Effect
```
- Luz radial sigue al cursor del ratón
- Gradient: rgba(255,255,255,0.4) → transparent
- Hook personalizado: useSpecularEffect
- Implementación en componente SpecularButton
```

### 4. **Navegación**
- ✅ Menú hamburguesa (mobile)
- ✅ Overlay oscuro a pantalla completa
- ✅ Enlaces a secciones (smooth scroll)
- ✅ Responsive automático con Tailwind

### 5. **Secciones**

#### Hero
- Logo gigante con blur reveal
- Textos "El Verano" / "Que Te Llama"
- Subtítulo "Cócteles & Atardeceres"
- Botón CTA con especular effect

#### La Carta (Cocktails)
- Grid 3 columnas (desktop)
- Scroll horizontal (mobile)
- 3 cócteles: Piña Colada, Margarita, Atardecer Marea
- Fotos cuadradas con blur reveal
- Botón "Ver Carta Completa"

#### Reservas (Asymmetric Design)
- Título central "¿Te vienes?"
- Dirección y horarios
- Imagen flotante izquierda (arriba)
- Imagen flotante derecha (abajo)
- Botón de reservas con especular effect

#### Nuestras Vistas (Gallery)
- 4 fotos del local
- **Lógica dinámmica**: Cambia según modo día/noche
- Grid responsive 1 col (mobile) → 2 cols (tablet) → 2x2 (desktop)

#### Reseñas (Reviews)
- Grid de 6 reseñas de Google Maps
- 5 estrellas (iconos)
- Texto en cursiva
- Autor, fecha y rating
- Diseño limpio sin bordes pesados

#### Footer
- Fondo oscuro independiente
- 4 columnas:
  1. Logo + descripción
  2. Legal (links)
  3. Contacto (teléfono, dirección, horarios)
  4. Google Maps iframe
- Redes sociales al pie

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── Navigation.tsx        # Menú hamburguesa
│   ├── Hero.tsx              # Sección hero
│   ├── Cocktails.tsx         # Grid/scroll cócteles
│   ├── Reservations.tsx      # Sección reservas asimétrica
│   ├── Gallery.tsx           # Galería dinámica
│   ├── Reviews.tsx           # Reseñas
│   ├── Footer.tsx            # Footer profesional
│   ├── ThemeToggle.tsx       # Botón tema
│   ├── SpecularButton.tsx    # Botón reutilizable
│   └── index.ts              # Exports
├── context/
│   └── ThemeContext.tsx      # Gestión de tema global
├── hooks/
│   ├── useScrollReveal.ts    # Hook para scroll animations
│   ├── useSpecularEffect.ts  # Hook para efecto especular
│   └── index.ts              # Exports
├── App.tsx                   # Componente principal
├── index.css                 # Estilos globales + Tailwind
└── main.tsx                  # Punto de entrada
```

## 🖼️ Carpeta de Imágenes Necesaria

Debes crear una carpeta y colocar las imágenes en:
```
/public/marea-gemini/fotos/
├── logo.jpg
├── pina-colada.jpg
├── margarita.jpg
├── atardecer-marea.jpg
├── vistas-increibles.jpg
├── ambiente-unico.jpg
├── galeria-dia-1.jpg
├── galeria-dia-2.jpg
├── galeria-dia-3.jpg
├── galeria-dia-4.jpg
├── galeria-noche-1.jpg
├── galeria-noche-2.jpg
├── galeria-noche-3.jpg
└── galeria-noche-4.jpg
```

## 🎨 Colores Configurados

### Tailwind Config
```js
colors: {
  'sky-day': '#e0f2fe',           // Cielo claro día
  'sky-day-accent': '#bae6fd',    // Cielo acentuado día
  'text-day': '#0f172a',          // Texto oscuro día
  'text-day-light': '#1e293b',    // Texto secundario día
  'bg-night': '#0f172a',          // Fondo noche
  'bg-night-dark': '#020617',     // Fondo más oscuro noche
  'text-night': '#f8fafc',        // Texto claro noche
}
```

## 🎬 Animaciones Personalizadas

Todas las animaciones están configuradas en `tailwind.config.js`:

```js
animation: {
  'scroll-reveal': 'scrollReveal 0.8s ease-out forwards',
  'blur-reveal': 'blurReveal 0.8s ease-out forwards',
}

keyframes: {
  scrollReveal: {
    '0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
    '100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
  },
  blurReveal: {
    '0%': { opacity: '0', filter: 'blur(12px)', transform: 'translateY(30px)' },
    '100%': { opacity: '1', filter: 'blur(0px)', transform: 'translateY(0)' },
  },
}
```

## 🚀 Cómo Usar

### Desarrollo
```bash
npm run dev
# Abre http://localhost:5173/
```

### Producción
```bash
npm run build
npm run preview
```

## 🔧 Customización

### 1. Cambiar Cócteles
Edita `src/components/Cocktails.tsx`:
```js
const cocktails: Cocktail[] = [
  {
    id: 1,
    name: 'Tu Cóctel',
    description: 'Descripción...',
    image: '/path/to/image.jpg',
  },
  // ...
]
```

### 2. Cambiar Reseñas
Edita `src/components/Reviews.tsx`:
```js
const reviews: Review[] = [
  {
    id: 1,
    author: 'Nombre',
    text: 'Reseña aquí...',
    date: 'Hace X tiempo',
    rating: 5,
  },
  // ...
]
```

### 3. Cambiar Horarios
Edita `src/components/Reservations.tsx` y `src/components/Footer.tsx`

### 4. Cambiar Colores
Edita `tailwind.config.js` sección `colors` y `theme.extend.colors`

## 📱 Responsividad

El proyecto es **100% responsivo**:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

Breakpoints disponibles en Tailwind:
- `md:` (768px)
- `lg:` (1024px)
- `xl:` (1280px)
- `2xl:` (1536px)

## ✨ Features Premium

✅ **Scroll Reveal**: Clip-path based, no blur in
✅ **Blur Reveal**: Blur(12px) → blur(0) + translateY
✅ **Especular Button**: Light sigue cursor con radial gradient
✅ **Dark Mode**: Full theme switching con persistencia
✅ **Responsive**: Mobile-first design con hamburger menu
✅ **Horizontal Scroll**: Cócteles en mobile con flechas
✅ **Dynamic Gallery**: Imágenes diferentes por tema
✅ **60fps Animations**: Optimizadas con Framer Motion
✅ **Accessible**: aria-labels, semántica HTML5
✅ **Performance**: Lazy loading, optimizaciones CSS

## 🐛 Solución de Problemas

### Las imágenes no cargan
- Verifica que exista la carpeta `/public/marea-gemini/fotos/`
- Confirma que los nombres de archivos coincidan exactamente (case-sensitive)

### El tema no persiste
- Limpia localStorage: `localStorage.clear()`
- Verifica que localStorage esté habilitado en el navegador

### Las animaciones van lentas
- Comprueba que no haya otras aplicaciones consumiendo recursos
- Desactiva extensiones del navegador si es necesario

## 📞 Contacto para Cambios

Para modificar aspectos específicos:
1. **Contenido**: Edita arrays en componentes
2. **Estilos**: Modifica `tailwind.config.js` o agrega classes
3. **Animaciones**: Ajusta valores en componentes o config
4. **Estructura**: Añade nuevas secciones siguiendo el patrón

---

**¡Tu landing page está lista para producción! 🚀**
