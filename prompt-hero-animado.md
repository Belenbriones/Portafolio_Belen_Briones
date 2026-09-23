# Prompt: Hero animado — carrusel diagonal de mockups

## Contexto
Hero del portafolio de Belén Briones (Diseñadora de Interacción & UX/UI). Dos columnas: texto a la izquierda, composición animada de mockups de dispositivos a la derecha.

## Columna izquierda (texto)
- Línea 1: el rol — "Diseñadora de Interacción & UX/UI" — en serif (Instrument Serif), `clamp(30px, 4.2vw, 52px)`.
- Línea 2: el nombre — "Belén Briones Ibeas" — en palo seco (Hanken Grotesk), peso 300, `clamp(24px, 3.2vw, 40px)`.
- Debajo: párrafo de intro y dos botones (ver proyectos / contacto).

## Columna derecha (composición animada)

### Contenedor
- `position: relative`
- `min-height: clamp(400px, 46vw, 560px)`
- `overflow: hidden`
- Máscara de desvanecido en los bordes laterales:
  `mask-image: linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%)`
  (con prefijo `-webkit-mask-image` también)
- `cursor: pointer` — el clic pausa la animación

### Pila interior
- `position: absolute`
- `left: -14%`
- `top: 50%`
- `width: 128%`
- `transform: translateY(-50%) rotate(-16deg)`
- `display: flex; flex-direction: column`
- `gap: clamp(18px, 2.4vw, 34px)`

### Las dos filas
Cada fila es un flex horizontal con `width: max-content`, `align-items: center`, `gap: clamp(18px, 2.6vw, 34px)`, y su contenido **duplicado dos veces** para que el loop no tenga costura.

- **Fila 1** — se desplaza hacia la izquierda:
  `@keyframes rouletteL { from { transform: translateX(0); } to { transform: translateX(-50%); } }`
  `animation: rouletteL 26s linear infinite`

- **Fila 2** — se desplaza hacia la derecha:
  `@keyframes rouletteR { from { transform: translateX(-50%); } to { transform: translateX(0); } }`
  `animation: rouletteR 32s linear infinite`

### Los mockups
Se dimensionan **por altura**, nunca por ancho, para que las dos filas quepan en el alto disponible:

| Pieza | Altura |
|---|---|
| Móvil (Savia, Vedimaq, Trinidad) | 170px |
| Notebook (PiX) | 140px |
| Tablet grande (Trinidad) | 150px |
| Tablet chico (PiX) | 130px |

Estilos comunes de cada imagen:
- `height: <valor>px; width: auto`
- `flex: 0 0 auto`
- `display: block`
- `filter: drop-shadow(0 16px 28px rgba(26,23,20,0.20))`

### Contenido por fila
- Fila 1: Savia móvil · PiX notebook · Vedimaq móvil
- Fila 2: Trinidad tablet · PiX tablet · Trinidad móvil

### Interacción
Un clic sobre la composición pausa ambas filas; otro clic las reanuda. Se implementa alternando `animation-play-state` entre `running` y `paused` en las dos filas.

---

## Notas para Framer
- Un Frame padre con `overflow: hidden` y rotación de −16°.
- Dentro, dos Stacks horizontales, cada uno con su contenido duplicado.
- A cada Stack, una animación infinita de la propiedad `x`: uno en negativo (26 s), el otro en positivo (32 s), con easing lineal.
- La máscara de bordes se logra con un Gradient Mask horizontal sobre el Frame padre.
- El clic para pausar se conecta con una variable booleana que controla el estado de ambas animaciones.
