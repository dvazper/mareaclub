# QUICK START - Marea Club

## 🚀 Iniciar en 3 pasos

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Crear Carpeta de Imágenes
```bash
mkdir -p public/marea-gemini/fotos
# Coloca tus imágenes aquí
```

### 3. Iniciar Servidor
```bash
npm run dev
# http://localhost:5173/
```

## 📝 Imágenes Necesarias

Copia estas imágenes a `public/marea-gemini/fotos/`:

### Obligatorias:
- **logo.jpg** - Logo de Marea Club (cualquier tamaño)
- **pina-colada.jpg** - Foto cóctel Piña Colada
- **margarita.jpg** - Foto cóctel Margarita
- **atardecer-marea.jpg** - Foto cóctel Atardecer Marea
- **vistas-increibles.jpg** - Foto vistas increíbles
- **ambiente-unico.jpg** - Foto ambiente único

### Galería Día (4 fotos):
- **galeria-dia-1.jpg**
- **galeria-dia-2.jpg**
- **galeria-dia-3.jpg**
- **galeria-dia-4.jpg**

### Galería Noche (4 fotos):
- **galeria-noche-1.jpg**
- **galeria-noche-2.jpg**
- **galeria-noche-3.jpg**
- **galeria-noche-4.jpg**

## 🎨 Personalización Rápida

### Cambiar Nombre del Club
Busca "Marea Club" en los componentes y reemplaza.

### Cambiar Teléfono/Email
Edita `src/components/Footer.tsx` y `src/components/Reservations.tsx`

### Cambiar Cócteles
Edita el array `cocktails` en `src/components/Cocktails.tsx`

### Cambiar Reseñas
Edita el array `reviews` en `src/components/Reviews.tsx`

## 📦 Build para Producción

```bash
npm run build
# Genera carpeta 'dist/' lista para deploy
```

## 🔍 Verificar Errores

```bash
npm run build
# Si hay errores, los verá aquí
```

## 📚 Documentación Completa

Lee `IMPLEMENTATION_GUIDE.md` para:
- Estructura completa
- Todas las características
- Guía de customización
- Solución de problemas

---

**¡Listo para comenzar! Happy coding! 🌊🍹**
