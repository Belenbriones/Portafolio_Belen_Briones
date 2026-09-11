# Prompt y Código: Carrusel Vertical Infinito (Hero Showcase)

Este documento contiene el **prompt técnico optimizado** para herramientas de IA (ChatGPT, Claude, Cursor, v0, etc.) y la **implementación técnica en HTML y CSS** para crear la columna derecha animada del portafolio.

---

## 1. Prompt Técnico para IA

Copia y pega este prompt en tu asistente de código o generador de componentes:

```text
Actúa como un desarrollador frontend experto en animaciones CSS, maquetación moderna y rendimiento web.

Ya tengo implementados el Header/Navbar y la sección de texto izquierda del Hero (nombre, título UX/UI, descripción y botón CTA). Necesito que construyas exclusivamente el contenedor derecho de exhibición de proyectos con pantallas/mockups.

Requerimientos visuales y funcionales:
1. Composición y distribución:
   - Organizar las pantallas en 2 columnas verticales con un ligero ángulo de inclinación / rotación isométrica (estilo `rotate(-12deg)` o similar) tal como se aprecia en el diseño.
   - Contenedores para diversos formatos: laptop, smartphone y tablet.
   - Sombras suaves y bordes redondeados (`border-radius: 1.5rem; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12)`).

2. Animación de desplazamiento infinito (Infinite Vertical Marquee):
   - Las pantallas deben desplazarse suavemente hacia arriba de forma automática.
   - Al llegar al borde superior, deben volver a entrar por abajo en un bucle continuo y sin cortes/parpadeos (seamless infinite loop utilizando `@keyframes translateY(-50%)` y duplicación de tarjetas).
   - Las dos columnas deben desplazarse a ritmos ligeramente desfasados (velocidades distintas) para generar dinamismo y sensación de profundidad.
   - El scroll debe pausarse cuando el usuario pasa el cursor por encima (`:hover { animation-play-state: paused; }`).

3. Acabado visual y máscaras:
   - Aplicar una máscara de desvanecimiento superior e inferior (`mask-image: linear-gradient(...)`) para que las pantallas aparezcan y desaparezcan gradualmente sin bordes cortados abruptos.

4. Adaptabilidad y rendimiento:
   - Utilizar transformaciones aceleradas por GPU (`will-change: transform`).
   - Ocultar o adaptar responsivamente en pantallas móviles (pantallas pequeñas).

Entrega el código modular en HTML semántico y CSS puro (o Tailwind CSS) con comentarios claros para ajustar velocidad, espaciados e imágenes.
```

---

## 2. Implementación en Código

### Estructura HTML (`index.html`)

```html
<div class="hero-showcase-container">
  <!-- Columna 1 -->
  <div class="scroll-column">
    <div class="scroll-track scroll-up-slow">
      <!-- Grupo original -->
      <div class="device-card"><img src="laptop.png" alt="Laptop mockup" /></div>
      <div class="device-card"><img src="phone-1.png" alt="Phone mockup" /></div>
      
      <!-- Grupo duplicado (indispensable para el loop continuo sin cortes) -->
      <div class="device-card"><img src="laptop.png" alt="Laptop mockup" /></div>
      <div class="device-card"><img src="phone-1.png" alt="Phone mockup" /></div>
    </div>
  </div>

  <!-- Columna 2 -->
  <div class="scroll-column">
    <div class="scroll-track scroll-up-fast">
      <!-- Grupo original -->
      <div class="device-card"><img src="phone-2.png" alt="Phone mockup" /></div>
      <div class="device-card"><img src="tablet.png" alt="Tablet mockup" /></div>

      <!-- Grupo duplicado (indispensable para el loop continuo sin cortes) -->
      <div class="device-card"><img src="phone-2.png" alt="Phone mockup" /></div>
      <div class="device-card"><img src="tablet.png" alt="Tablet mockup" /></div>
    </div>
  </div>
</div>
```

---

### Hoja de Estilos (`styles.css`)

```css
/* Contenedor principal de la sección derecha */
.hero-showcase-container {
  position: relative;
  width: 50%;
  height: 620px;
  overflow: hidden;
  display: flex;
  gap: 2rem;
  
  /* Inclinación isométrica similar al diseño */
  transform: rotate(-12deg) translateY(-30px);
  
  /* Desvanecimiento suave en la parte superior e inferior */
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 15%,
    black 85%,
    transparent 100%
  );
}

/* Columna base */
.scroll-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Pista deslizante */
.scroll-track {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  will-change: transform;
}

/* Animaciones con desfase de velocidad */
.scroll-up-slow {
  animation: verticalLoop 22s linear infinite;
}

.scroll-up-fast {
  animation: verticalLoop 16s linear infinite;
}

/* Pausa interactiva al pasar el puntero */
.hero-showcase-container:hover .scroll-track {
  animation-play-state: paused;
}

/* Keyframe para loop perfecto (desplaza exactamente la mitad del contenido duplicado) */
@keyframes verticalLoop {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

/* Estilo de cada mockup / tarjeta */
.device-card {
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background-color: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.device-card:hover {
  transform: scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.18);
}

.device-card img {
  width: 100%;
  height: auto;
  display: block;
}

/* Ocultar en pantallas móviles para no desbordar el viewport */
@media (max-width: 900px) {
  .hero-showcase-container {
    display: none;
  }
}
```

---

## 3. Claves de funcionamiento
- **Loop perfecto sin saltos:** Al duplicar exactamente los mismos elementos dentro de `.scroll-track` y trasladar con `translateY(-50%)`, en el instante exacto en que la animación termina y se reinicia a `0%`, la posición visible es idéntica, haciendo el corte 100% imperceptible.
- **Aceleración por hardware:** La propiedad `will-change: transform` asegura 60 FPS estables sin sobrecargar la CPU.