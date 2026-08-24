# 🏖️ Marea Club - Landing Page Premium

Una **Landing Page editorial, elegante y minimalista** para Marea Club, un beach club de tardeo y cócteles ubicado en la ría de Huelva.

## ✨ Características Principales

### 🎨 Diseño Editorial Minimalista
- Estilo limpio sin bordes pesados ni cajas cerradas
- Degradados suaves en modo día/noche
- Tipografía sofisticada y espacios negativos generosos
- Diseño completamente responsivo

### 🌙 Modo Día/Noche
- Botón flotante en esquina inferior derecha para alternar temas
- **Modo Día**: Degradado azul cielo (#e0f2fe a #bae6fd), textos azul oscuro (#0f172a)
- **Modo Noche**: Degradado profundo (#0f172a a #020617), textos blanco roto (#f8fafc)
- Persistencia de preferencia en localStorage

### 🎬 Animaciones Avanzadas

#### Scroll Reveal
- Textos y encabezados aparecen con efecto máscara desde abajo
- Basado en Intersection Observer para rendimiento óptimo
- Trigger automático al hacer scroll

#### Gradual Blur
- Imágenes pasan de borrosas a nítidas con movimiento ascendente
- Efecto suave y profesional al desplazarse
- Quedan fijas una vez animadas

#### Especular Button Effect
- Halo de luz suave que sigue el cursor dentro del botón
- Efecto interactivo premium con radial gradient
- Perfecto para los botones principales (CTA)

## 🚀 Getting Started

### Instalación

\`\`\`bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Acceder en http://localhost:5173/
\`\`\`

### Build para Producción

\`\`\`bash
npm run build
npm run preview
\`\`\`

## 📁 Estructura de Carpetas

\`\`\`
src/
├── components/          # Componentes reutilizables
├── context/            # Context para temas
├── hooks/              # Custom hooks
├── App.tsx             # Componente principal
├── index.css           # Estilos globales
└── main.tsx            # Punto de entrada
\`\`\`

## 🛠️ Stack Tecnológico

- React 18 + TypeScript
- Vite (build rápido)
- Tailwind CSS
- Framer Motion
- Lucide React

## 📱 Características Responsivas

✅ Menú hamburguesa en mobile
✅ Scroll horizontal en cocktails (mobile)
✅ Galería dinámica por tema
✅ Todas las secciones optimizadas para cada tamaño de pantalla

## 🌟 Premium Features

✅ Scroll reveal animations (clip-path based)
✅ Blur reveal en imágenes
✅ Especular button effects
✅ Dark/Light mode con persistencia
✅ 60fps animations (Framer Motion)
✅ Accesibilidad completa

---

**Hecho con ❤️ para Marea Club**

  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
