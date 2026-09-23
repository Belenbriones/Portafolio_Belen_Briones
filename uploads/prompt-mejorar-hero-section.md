# Prompt: Mejorar Hero Section - Destaca tu Presentación

## Objetivo
Transformar el hero del portafolio para que comunique claramente quién eres, qué haces y por qué importa. El hero debe enganchar en 5 segundos.

---

## 📍 Ubicación
**Archivo:** Tu proyecto Claude Design  
**Sección:** Hero (la primera cosa que ve cuando abre el portafolio)

---

## 🎯 Estructura Actual vs Propuesta

### AHORA (Confuso):
```
[6 mockups grandes - caótico]
Belén Briones Ibeas
{{ t.heroText }} (descripción genérica)
[Botones]
```

**Problema:** No sé quién eres. Los mockups compiten por atención.

### DEBERÍA SER (Claro):
```
[Tu foto - círculo, 120x120px]

Belén Briones Ibeas
Interaction Designer

"Especialista en UX Mobile Apps"

Transformo procesos complejos en interfaces intuitivas
que la gente ama usar.

[3 mockups elegidos - no 6 caóticos]
[Savia] [PiX] [Trinidad]

[Botón CTA: Explorar trabajos →] [LinkedIn]
```

---

## 🔧 Cambios Específicos

### Cambio 1: Foto de Perfil (NUEVO)
**Dónde:** Arriba del nombre  
**Tamaño:** 120x120px circular (border-radius: 50%)  
**Qué debe transmitir:** Profesional, amigable, accesible

**Estructura:**
```html
<div class="hero-profile">
  <img src="assets/belen.png" alt="Belén Briones" />
</div>
```

**CSS:**
```css
.hero-profile img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}
```

---

### Cambio 2: Nombre + Rol (MEJORADO)
**Actual:**
```
Belén Briones Ibeas
{{ t.heroText }}
```

**Nuevo:**
```
Belén Briones Ibeas
Interaction Designer

Especialista en UX Mobile Apps
```

**Estructura:**
```html
<h1>Belén Briones Ibeas</h1>
<p class="hero-role">Interaction Designer</p>
<p class="hero-specialty">Especialista en UX Mobile Apps</p>
```

**CSS:**
```css
h1 {
  font-size: 48px;     /* Desktop */
  font-weight: 700;
  margin: 0 0 8px 0;
  font-family: "Libre Caslon Text"; /* O tu tipografía */
}

.hero-role {
  font-size: 20px;
  font-weight: 600;
  color: #FFC107;      /* Amarillo - tu color */
  margin: 0 0 16px 0;
}

.hero-specialty {
  font-size: 18px;
  font-weight: 400;
  color: #666;
  margin: 0 0 24px 0;
}

@media (max-width: 768px) {
  h1 { font-size: 32px; }
  .hero-role { font-size: 16px; }
  .hero-specialty { font-size: 16px; }
}
```

---

### Cambio 3: Propuesta/Tagline (MEJORADO)
**Actual:** {{ t.heroText }} (¿qué dice? No se ve)

**Nuevo:**
```
"Transformo procesos complejos en interfaces intuitivas
que la gente ama usar."
```

**Por qué funciona:**
- ✅ Específico (qué haces)
- ✅ Beneficio (lo que logras)
- ✅ Memorable (frase corta)
- ✅ Diferenciador (no es "diseño centrado en usuario")

**Ejemplos alternativos (elige uno):**

#### Opción A: Focus UX/Accesibilidad
```
"Diseño interfaces accesibles e intuitivas
para aplicaciones mobile complejas."
```

#### Opción B: Focus Estrategia
```
"Convierto requisitos técnicos en experiencias
que usuarios aman usar."
```

#### Opción C: Focus Producto
```
"Especialista en diseño de sistemas y UX
para aplicaciones mobile de alto impacto."
```

**Estructura:**
```html
<p class="hero-tagline">
  Transformo procesos complejos en interfaces intuitivas
  <br/>
  que la gente ama usar.
</p>
```

**CSS:**
```css
.hero-tagline {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  color: #333;
  max-width: 600px;
  margin: 0 auto 40px;
  font-style: italic;  /* Opcional, para destacar */
}

@media (max-width: 768px) {
  .hero-tagline {
    font-size: 18px;
  }
}
```

---

### Cambio 4: Mockups Reducidos (MEJORADO)
**Actual:** 6 mockups (algunos repetidos)

**Nuevo:** 3 mockups cuidadosamente elegidos

**Selección:**
1. **Savia** (App Mobile) → Muestra UX
2. **PiX** (Web Desktop) → Muestra versatilidad
3. **Trinidad Ureta** (Branding) → Muestra amplitud

**Estructura:**
```html
<div class="hero-mockups">
  <div class="mockup">
    <img src="assets/dev-savia.png" alt="Savia App" />
    <p class="mockup-label">UX Mobile</p>
  </div>
  
  <div class="mockup">
    <img src="assets/dev-pix-laptop.png" alt="PiX" />
    <p class="mockup-label">Web Design</p>
  </div>
  
  <div class="mockup">
    <img src="assets/dev-trinidad-tablet.png" alt="Trinidad Ureta" />
    <p class="mockup-label">Branding</p>
  </div>
</div>
```

**CSS:**
```css
.hero-mockups {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 60px auto;
}

.mockup {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.mockup:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.mockup img {
  width: 100%;
  height: auto;
  display: block;
}

.mockup-label {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(255, 193, 7, 0.95);  /* Amarillo semi-transparente */
  color: #000;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 1024px) {
  .hero-mockups {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-mockups {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 40px auto;
  }
}
```

---

### Cambio 5: CTAs (MEJORADOS)
**Actual:** Botones genéricos

**Nuevo:** CTAs claros y diferenciados

**Estructura:**
```html
<div class="hero-ctas">
  <a href="#proyectos" class="btn btn-primary">
    Explorar trabajos →
  </a>
  <a href="https://www.linkedin.com/in/belen-briones-uxui/" 
     class="btn btn-secondary" target="_blank">
    LinkedIn
  </a>
</div>
```

**CSS:**
```css
.hero-ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
}

.btn {
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid;
}

.btn-primary {
  background-color: #FFC107;
  color: #000;
  border-color: #FFC107;
}

.btn-primary:hover {
  background-color: #FFD54F;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
}

.btn-secondary {
  background-color: transparent;
  color: #333;
  border-color: #333;
}

.btn-secondary:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-ctas {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
    text-align: center;
  }
}
```

---

## 📐 Estructura Completa del Hero

```html
<section id="inicio" class="hero">
  <!-- Foto -->
  <div class="hero-profile">
    <img src="assets/belen.png" alt="Belén Briones" />
  </div>
  
  <!-- Nombre + Rol -->
  <h1>Belén Briones Ibeas</h1>
  <p class="hero-role">Interaction Designer</p>
  <p class="hero-specialty">Especialista en UX Mobile Apps</p>
  
  <!-- Tagline/Propuesta -->
  <p class="hero-tagline">
    Transformo procesos complejos en interfaces intuitivas
    <br/>
    que la gente ama usar.
  </p>
  
  <!-- Mockups -->
  <div class="hero-mockups">
    <div class="mockup">
      <img src="assets/dev-savia.png" alt="Savia App" />
      <p class="mockup-label">UX Mobile</p>
    </div>
    <div class="mockup">
      <img src="assets/dev-pix-laptop.png" alt="PiX" />
      <p class="mockup-label">Web Design</p>
    </div>
    <div class="mockup">
      <img src="assets/dev-trinidad-tablet.png" alt="Trinidad Ureta" />
      <p class="mockup-label">Branding</p>
    </div>
  </div>
  
  <!-- CTAs -->
  <div class="hero-ctas">
    <a href="#proyectos" class="btn btn-primary">
      Explorar trabajos →
    </a>
    <a href="https://www.linkedin.com/in/belen-briones-uxui/" 
       class="btn btn-secondary" target="_blank">
      LinkedIn
    </a>
  </div>
</section>
```

---

## 🎨 Flujo Visual del Hero Mejorado

```
┌────────────────────────────────────┐
│                                    │
│     [Foto circular - 120px]        │
│                                    │
│   Belén Briones Ibeas              │
│   Interaction Designer             │ ← Claro quién eres
│   Especialista en UX Mobile        │
│                                    │
│  "Transformo procesos complejos... │ ← Tu propuesta
│   que la gente ama usar"           │
│                                    │
│ ┌─────────┐ ┌─────────┐ ┌───────┐ │
│ │ UX      │ │ Web     │ │ Brand │ │ ← 3 mockups
│ │ Mobile  │ │ Design  │ │       │ │
│ │         │ │         │ │       │ │
│ └─────────┘ └─────────┘ └───────┘ │
│                                    │
│ [Explorar trabajos →] [LinkedIn]   │ ← CTAs claros
│                                    │
└────────────────────────────────────┘
```

---

## ✅ Checklist de Implementación

- [ ] Agrega foto circular (120x120px)
- [ ] Actualiza nombre + rol + especialidad
- [ ] Reemplaza {{ t.heroText }} con tagline nuevo
- [ ] Reduce mockups a 3 (elimina duplicados)
- [ ] Agrega labels en mockups (UX Mobile, Web Design, Branding)
- [ ] Actualiza CTAs
- [ ] Prueba en desktop (responsive)
- [ ] Prueba en mobile (responsive)
- [ ] Verifica que foto, rol y tagline sean claros

---

## 🧪 Validación

**Cuando termines, abre tu portafolio y pregúntate:**

✅ ¿En 5 segundos entiendo quién es Belén? SÍ/NO  
✅ ¿Veo qué hace? SÍ/NO  
✅ ¿Los mockups refuerzan o distraen? REFUERZAN/DISTRAEN  
✅ ¿Las CTAs son claras? SÍ/NO  
✅ ¿Se ve profesional? SÍ/NO  

**Si contestas SÍ a todas → Hero está listo.**

---

## 💡 Notas Importantes

1. **Tagline es crítico:** Es tu diferenciador. Elige uno que te represente
2. **3 mockups no 6:** Menos es más. Impacta más.
3. **Foto de perfil:** Humaniza el portafolio. Hace diferencia
4. **Colores:** Mantén #FFC107 (amarillo) consistente
5. **Mobile:** Asegura que la foto sea visible en mobile también

---

## 🚀 Próximos Pasos

1. **Hoy:** Copia este prompt y pégalo en Claude Design
2. **Claude:** Genera el código para el hero
3. **Tú:** Integra en tu portafolio
4. **Mañana:** Agrega rol en tarjetas de proyectos
5. **Próxima semana:** Testea todo en mobile y desktop

---

¿Necesitas ayuda con algo específico del hero? 🎯
