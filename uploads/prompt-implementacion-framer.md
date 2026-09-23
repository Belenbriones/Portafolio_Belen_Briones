# Prompt: Implementación en Framer - Portafolio Belén Briones

## Objetivo
Migrar el portafolio desde Claude Design (ya completado con mejoras heurísticas) a Framer, manteniendo diseño y funcionalidad.

---

## 📋 Estado Actual

**Claude Design:** ✅ Completado con todos los cambios heurísticos
- Indicador active en nav (scrolling)
- Chevron ‹ para navegación de proyectos
- Tarjetas de proyectos mejoradas
- Hero simplificado
- Nav consistente desktop/mobile

**Framer:** ⏳ Vacío, listo para implementar

---

## 🎯 Estructura General en Framer

```
Portafolio Belén Briones
├── 📄 Pages
│   ├── Home (/)
│   ├── Projects (dinámica, :projectId)
│   └── About
├── 🧩 Components
│   ├── Header
│   │   ├── Logo
│   │   ├── Nav (Desktop)
│   │   ├── Burger Menu (Mobile)
│   │   └── Active State Listener
│   ├── ProjectCard
│   ├── ProjectModal
│   ├── Footer
│   └── HeroSection
└── 📊 CMS / Data
    └── Projects Collection
```

---

## 🏗️ Step-by-Step Implementation

### PASO 1: Crear Proyecto Framer

**Acciones:**
1. Ir a Framer.com y crear nuevo proyecto
2. Nombre: "Portafolio Belén Briones"
3. Seleccionar template: "Blank" (empezar desde cero)
4. Configurar viewport base: 1440px (desktop)

**Settings a revisar:**
- [ ] Hosting: custom domain (belenbriones.com, cuando esté listo)
- [ ] SEO: Título, descripción
- [ ] Preview URL activa para compartir

---

### PASO 2: Crear Componente Header (Reutilizable)

**Archivo:** `Header.tsx` o via Framer UI

**Estructura:**
```
Header (Frame)
├── Logo
│   ├── Imagen (tu foto o logo)
│   └── Texto "Belén Briones"
├── Nav Desktop (hidden en mobile)
│   ├── Home (link to /)
│   ├── Proyectos (link to #projects)
│   ├── Sobre mí (link to #about)
│   ├── CV (link to CV PDF)
│   └── Lang Toggle (ES/EN)
├── Nav Mobile - Burger Menu
│   ├── Button Burger (☰)
│   └── Menu Overlay (hidden por default)
│       ├── Nav items (vertical)
│       └── Close button (✕)
└── Scroll Listener
    └── Script que detecta scroll y actualiza active state
```

**Propiedades:**
- Position: sticky (se queda en top al scrollear)
- Height: 80px (desktop), 64px (mobile)
- Background: blanco o tu color de marca
- Shadow: sutil (opcional)

**Estados a implementar:**
```javascript
// Pseudo-código
const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "proyectos", "sobre-mi"];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    });
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

**Estilos del Nav Item:**
```
Default:
- Color: #666
- Font-weight: 400
- Opacity: 1

Hover:
- Color: #000 (o tu color primario)
- Opacity: 1
- Transition: 0.2s

Active (cuando es la sección visible):
- Color: #FFC107 (amarillo, como en tu diseño)
- Font-weight: 600
- Border-bottom: 2px solid #FFC107
- Transition: smooth
```

---

### PASO 3: Crear Página Home

**Ruta:** `/` (root)

**Secciones:**

#### 3A. Hero Section
```
HeroSection (Frame, full viewport height)
├── Background: tu color de fondo
├── Container (max-width: 1200px, centrado)
│   ├── Tu foto (circular o cuadrada)
│   │   └── Size: 200x200px (desktop), 150x150px (mobile)
│   ├── Nombre: "Belén Briones Ibeas"
│   │   └── Font: Bold, size 48px (desktop), 32px (mobile)
│   ├── Rol: "Interaction Designer"
│   │   └── Font: Regular, size 20px, color: #666
│   ├── Descripción: "Diseño de interfaces centradas en el usuario"
│   │   └── Font: Regular, size 16px, max-width: 600px
│   ├── CTAs:
│   │   ├── Button "Explorar proyectos" (link to #projects)
│   │   └── Link "LinkedIn" (external)
│   └── Carrusel de Mockups (2-3 proyectos)
│       ├── Imagen proyecto 1
│       ├── Imagen proyecto 2
│       ├── Buttons: ◀ ▶
│       └── Dots indicators (1, 2, 3)
└── Padding: 80px top, 60px bottom
```

**Interacciones:**
- Buttons: hover con cambio de color
- Carrusel: click en ◀ ▶ cambia slide
- Dots: clickeable para ir a slide específico
- Smooth scroll cuando clickea "Explorar proyectos"

---

#### 3B. Proyectos Section
```
ProjectsSection (Frame)
├── id: "projects" (para scroll navigation)
├── Container (max-width: 1200px)
│   ├── Kicker: "Mi trabajo"
│   ├── Título: "Proyectos destacados"
│   ├── Descripción: "Algunos de los trabajos en los que he participado"
│   └── Grid de ProjectCards (3 columnas en desktop, 1 en mobile)
│       ├── ProjectCard 1
│       ├── ProjectCard 2
│       ├── ProjectCard 3
│       ├── ProjectCard 4
│       └── ProjectCard 5 (o más)
└── Padding: 100px top/bottom
```

**ProjectCard Componente:**
```
ProjectCard (Frame, clickeable)
├── Imagen del proyecto
│   └── Height: 300px, object-fit: cover
├── Overlay al hover (opcional, sutil)
├── Content:
│   ├── Año: "2024"
│   ├── Tag: "UX/UI" o "Branding" o "Web"
│   ├── Título: "Savia App"
│   ├── Descripción: "Diseño UX + Prototipado Figma | App Mobile"
│   └── Icono del tipo: 📱 (mobile), 🎨 (branding), 🖥️ (web)
└── Border-radius: 12px
```

**Interacción:**
- Click en card → navega a `/projects/:projectId`
- Hover: imagen zoom sutil (1.05x) + sombra
- Transición: 0.3s ease

---

#### 3C. Sección Sobre mí
```
AboutSection (Frame)
├── id: "about" (para scroll navigation)
├── Container
│   ├── Kicker: "Sobre mí"
│   ├── Título: "¿Quién soy?"
│   ├── Contenido:
│   │   ├── Párrafo 1: Tu biografía
│   │   ├── Párrafo 2: Tu motivación
│   │   └── Tools/Skills:
│   │       ├── Figma
│   │       ├── React
│   │       ├── Framer
│   │       └── etc.
│   └── CTA: "Descargar CV"
└── Padding: 100px top/bottom
```

---

#### 3D. Footer
```
Footer (Frame)
├── Background: #1a1a1a o tu color oscuro
├── Container
│   ├── Sección 1: Contacto
│   │   ├── "¿Hablamos?"
│   │   ├── Email: belen.brionesibeas@gmail.com
│   │   ├── WhatsApp: +56 9 5719 0304
│   │   └── LinkedIn
│   ├── Sección 2: Links
│   │   ├── Home
│   │   ├── Proyectos
│   │   ├── Sobre mí
│   │   └── CV
│   └── Sección 3: Copyright
│       └── "© 2026 Belén Briones Ibeas | Hecho en Framer"
└── Padding: 60px top/bottom
```

---

### PASO 4: Crear Página de Proyecto Individual

**Ruta:** `/projects/:projectId`

**Estructura:**
```
ProjectPage (Dynamic Page)
├── Header (reutilizable)
├── Container
│   ├── Navegación:
│   │   ├── Button: "‹ Proyectos" (link back)
│   │   ├── Tags: "UX/UI", "FRONTEND"
│   │   └── Navegación anterior/siguiente proyecto:
│   │       ├── "← Proyecto anterior"
│   │       └── "Proyecto siguiente →"
│   ├── Título: (ej "Digitalizando la..."
│   ├── Resumen del proyecto
│   ├── Metadata:
│   │   ├── Rol: "Interaction Designer"
│   │   ├── Año: "2024"
│   │   └── Tools: "Figma, React, Framer"
│   ├── Contenido del proyecto:
│   │   ├── Sección 1: Problema
│   │   ├── Sección 2: Proceso
│   │   ├── Sección 3: Solución
│   │   ├── Sección 4: Resultados
│   │   └── Imágenes, videos, embeds
│   └── CTA: "¿Quieres conocer más?"
│       └── Email: belen.brionesibeas@gmail.com
└── Footer
```

**Interacciones:**
- Button "‹ Proyectos" navega de vuelta a home (#projects)
- Botones anterior/siguiente navegan entre proyectos
- Smooth scroll

---

### PASO 5: Crear CMS para Proyectos

**En Framer, crear Collection: "Proyectos"**

**Campos:**
```
- Title (Text) → ej "Savia App"
- Slug (Text) → ej "savia-app"
- Summary (Text) → ej "Diseño UX para app mobile de cuidado personal"
- Description (Rich Text) → descripción completa del proyecto
- Role (Text) → ej "UX/UI Designer"
- Year (Number) → 2024
- Tools (Text) → ej "Figma, Framer, React"
- Tags (Text, multi) → ["UX/UI", "Mobile", "Branding"]
- Icon (Select) → 📱 / 🎨 / 🖥️
- Hero Image (Image) → imagen principal del proyecto
- Gallery (Multiple Images) → imágenes del proyecto
- Content Blocks (Rich Text) → secciones del proyecto
```

**Ejemplo de un proyecto:**
```
Title: Savia App
Slug: savia-app
Summary: App mobile de productos de cuidado personal
Role: Interaction Designer
Year: 2024
Tools: Figma, Prototyping, Design System
Tags: UX/UI, Mobile, E-commerce
Icon: 📱
Hero Image: [imagen de Savia]
Content:
  - Problema: "Los usuarios no encuentran facilmente productos..."
  - Proceso: "Investigación, wireframes, prototipo en Figma..."
  - Solución: "Flujo simplificado, design system, interacciones..."
```

---

### PASO 6: Configurar Navegación y Links

**Links a configurar:**

| Elemento | Destino | Tipo |
|---|---|---|
| Logo | / | Internal Link |
| "Proyectos" (nav) | #projects | Scroll Link |
| "Sobre mí" (nav) | #about | Scroll Link |
| "CV" (nav) | [PDF URL] | External Link |
| Button "Explorar" | #projects | Scroll Link |
| LinkedIn | https://linkedin.com/in/belen-briones-uxui | External |
| ProjectCard | /projects/:projectId | Dynamic Link |
| "‹ Proyectos" | / (scroll to #projects) | Internal |
| Anterior/Siguiente | /projects/:prevId, /projects/:nextId | Dynamic |
| Email footer | mailto:belen.brionesibeas@gmail.com | External |
| WhatsApp | https://wa.me/56957190304 | External |

---

### PASO 7: Configurar Breakpoints (Responsive)

**Breakpoints en Framer:**
```
Desktop: 1200px+ (default)
  - Nav horizontal
  - Grid 3 columnas
  - Hero mockups visibles
  - Espacios amplios

Tablet: 768px - 1199px
  - Nav horizontal (reducido)
  - Grid 2 columnas
  - Hero mockups 2 filas
  - Espacios reducidos

Mobile: < 768px
  - Burger menu
  - Grid 1 columna
  - Hero mockups carrusel
  - Espacios mínimos
```

**Checklist responsive:**
- [ ] Header se adapta a mobile (burger en lugar de nav)
- [ ] Cards se ven bien en 1 columna (mobile)
- [ ] Tipografía legible en todos los tamaños
- [ ] Imágenes no se cortan
- [ ] Padding/margins coherentes

---

## 🎨 Estilos y Diseño

### Paleta de Colores
```
Primario: #FFC107 (Amarillo, para CTAs y active states)
Secundario: #000 (Negro)
Neutro claro: #F5F5F5 (Fondo)
Neutro oscuro: #1a1a1a (Footer)
Texto: #333 (default), #666 (secundario)
Bordes: #E0E0E0
```

### Tipografía
```
Títulos (H1, H2): Font-family: "Libre Caslon Text" o similar, Bold, 48px (desktop) / 32px (mobile)
Subtítulos (H3, H4): Font-family: "Inter" o similar, Semi-bold, 24px
Body: Font-family: "Inter", Regular, 16px
Small: Font-family: "Inter", Regular, 14px
```

### Espaciado (consistent)
```
xs: 8px
sm: 16px
md: 24px
lg: 40px
xl: 60px
xxl: 100px

Uso:
- Container: xl padding (100px)
- Sections: lg margin (40px)
- Components: md padding (24px)
- Elements: sm gap (16px)
```

### Bordes y Sombras
```
Border-radius: 12px (cards, buttons)
Box-shadow: 0 2px 8px rgba(0,0,0,0.1) (cards)
Box-shadow: 0 4px 16px rgba(0,0,0,0.15) (hover)
Transition: 0.3s ease-in-out (todos los interactivos)
```

---

## ✅ Checklist de Implementación

**Phase 1: Estructura Base**
- [ ] Proyecto Framer creado
- [ ] Header componente + sticky
- [ ] Home page con 5 secciones
- [ ] Footer
- [ ] Responsive funcionando (desktop/mobile)

**Phase 2: Proyectos y CMS**
- [ ] CMS Collection "Proyectos" creada
- [ ] 5 proyectos en CMS con datos completos
- [ ] Página dinámica /projects/:projectId creada
- [ ] ProjectCard componente con hover states
- [ ] Navegación entre proyectos (anterior/siguiente)

**Phase 3: Interacciones y Heurística**
- [ ] Scroll listener actualiza active nav item
- [ ] Chevron ‹ navega de vuelta a proyectos
- [ ] Smooth scroll en links internos
- [ ] Hover states en todos los botones
- [ ] Transiciones suaves entre páginas

**Phase 4: Optimización y SEO**
- [ ] Meta tags (title, description, og:image)
- [ ] Open Graph para compartir en redes
- [ ] Favicon
- [ ] Sitemap (Framer genera automático)
- [ ] Performance: imágenes optimizadas

**Phase 5: Publicación**
- [ ] Preview URL compartible y testeada
- [ ] Custom domain configurado (cuando esté listo)
- [ ] Email de contacto funcionando
- [ ] Links de redes verificados
- [ ] Última revisión heurística

---

## 📝 Recursos para Framer

- **Documentación oficial:** https://www.framer.com/docs
- **Componentes reutilizables:** Usar Frame como base para todos
- **CMS/Collections:** https://www.framer.com/docs/cms
- **Scroll interactions:** https://www.framer.com/docs/page-scroll
- **Dynamic routes:** https://www.framer.com/docs/dynamic-pages
- **Export to code:** Puedes exportar React cuando necesites

---

## 🚀 Próximos Pasos

1. **Hoy:** Crear proyecto Framer + Header + Home
2. **Mañana:** CMS + ProjectCard + Página dinámica
3. **Día 3:** Interacciones (scroll listener, chevron, etc)
4. **Día 4:** Responsive + Optimización
5. **Día 5:** Publicación + Testeo

---

## 📞 Notas Importantes

- **Mantén consistencia visual** con lo que ya tienes en Claude Design
- **Prueba en mobile y desktop** después de cada cambio
- **Performance:** Las imágenes deben estar optimizadas (<500kb cada una)
- **Accesibilidad:** Todos los links/buttons deben tener states claros
- **Testing:** Verifica que el scroll listener detecte correctamente cada sección

---

¿Listo para empezar? Comienza con el PASO 1 y PASO 2 (Header). Cuando termines, me muestras y vemos si necesita ajustes. 🚀
