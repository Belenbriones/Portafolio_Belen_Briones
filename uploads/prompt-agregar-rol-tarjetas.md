# Prompt: Agregar Rol en Tarjetas de Proyectos - Claude Design

## Objetivo
Mostrar el rol de Belén en cada tarjeta de proyecto (ej: "UX/UI Designer", "Graphic Designer", "Interaction Designer") para que sea evidente rápidamente qué posición ocupó en cada trabajo.

---

## 📍 Dónde agregar el rol

**Archivo:** La sección de proyectos en tu design (Home page, Projects grid)

**Ubicación en la tarjeta:**

```
Año + Tag (metadata)
     ↓
[Imagen del proyecto]
     ↓
Título del proyecto
     ↓
🎯 Rol en el proyecto ← AQUÍ VA (NUEVO)
     ↓
📱 Tipo de trabajo (kind)
     ↓
Resumen/descripción
     ↓
[CTA: Ver caso]
```

---

## 🎯 Estructura de la Tarjeta Actualizada

### Antes:
```
2024 | UX/UI & FRONTEND
[Imagen]
Savia App
📱 App Mobile
Diseño de flujo e interfaz para app...
[Ver caso de estudio]
```

### Después:
```
2024 | UX/UI & FRONTEND
[Imagen]
Savia App
🎯 UX/UI Designer          ← ROL (NUEVO)
📱 App Mobile
Diseño de flujo e interfaz para app...
[Ver caso de estudio]
```

---

## 💾 Datos en CMS

**Agregar campo en cada proyecto:**

```
Field: role (Text)
Examples:
- "UX/UI Designer"
- "Interaction Designer"
- "Graphic Designer"
- "Brand Designer"
- "Web Designer"
- "Design System Lead"
```

**Ejemplo para Savia:**
```
Title: Savia App
Role: UX/UI Designer ← NUEVO
Kind: App Mobile
Year: 2024
Tags: UX/UI, FRONTEND
Summary: Diseño de flujo e interfaz para...
```

---

## 🎨 Cómo se ve en cada proyecto

### Proyecto 1: Savia App
```
2024 | UX/UI & FRONTEND
[Imagen Savia]
Savia App
🎯 UX/UI Designer
📱 App Mobile
Diseño de flujo e interfaz para plataforma de cuidado personal
```

### Proyecto 2: PiX
```
2024 | WEB & BRANDING
[Imagen PiX]
PiX
🎯 Interaction Designer
🖥️ Web Design
Rediseño de plataforma editorial con identidad visual completa
```

### Proyecto 3: Trinidad Ureta
```
2024 | BRANDING & WEB
[Imagen Trinidad]
Trinidad Ureta
🎯 Brand Designer
🎨 Branding
Identidad visual y web para asesoría de imagen personal
```

### Proyecto 4: Vedimaq
```
2024 | DESIGN SYSTEM
[Imagen Vedimaq]
Vedimaq
🎯 Design System Lead
💻 Design System
Sistema de diseño completo para catálogo B2B de maquinaria
```

### Proyecto 5: Happy Succulents
```
2024 | WEB & ECOMMERCE
[Imagen Happy Sucus]
Happy Succulents
🎯 Web Designer
🌿 E-commerce
Diseño y desarrollo de tienda online de plantas suculentas
```

---

## 🛠️ Implementación en Claude Design

### Opción 1: Si usas Variables en Framer

```javascript
// En tu colección de proyectos, agregar campo
role: "UX/UI Designer"

// En el template de tarjeta
<div className="project-card">
  <img src={p.image} />
  <h3>{p.title}</h3>
  
  {/* ROL (NUEVO) */}
  <div className="project-role">
    🎯 {p.role}
  </div>
  
  {/* Tipo de trabajo */}
  <div className="project-kind">
    {p.kindIcon} {p.kind}
  </div>
  
  <p>{p.summary}</p>
</div>
```

### Opción 2: Si usas componentes de texto (más visual)

En cada tarjeta:
1. Después del `{{ p.title }}`
2. Agrega un elemento de texto nuevo
3. Contenido: `🎯 {{ p.role }}`
4. Estilos: 
   - Font-weight: 600 (bold)
   - Color: #FFC107 (amarillo, highlight)
   - Size: 14px
   - Spacing: 4px arriba, 8px abajo

---

## 📝 Lista de Roles por Proyecto

**Copia y pega para tu CMS:**

| Proyecto | Rol |
|---|---|
| Savia App | UX/UI Designer |
| PiX | Interaction Designer |
| Trinidad Ureta | Brand Designer |
| Vedimaq | Design System Lead |
| Happy Succulents | Web Designer |

---

## 🎨 Estilos del Rol

**CSS o Framer:**

```css
.project-role {
  font-weight: 600;           /* Bold */
  color: #FFC107;             /* Amarillo (tu color primario) */
  font-size: 14px;
  margin: 4px 0 8px 0;        /* Espaciado */
  display: flex;              /* Para que el icono + texto estén alineados */
  align-items: center;
  gap: 4px;
}
```

**Hover state (opcional):**
```css
.project-role {
  transition: color 0.3s ease;
}

.project-card:hover .project-role {
  color: #000;                /* Cambia a negro en hover */
}
```

---

## ✅ Checklist

- [ ] Agregar campo `role` en CMS para cada proyecto
- [ ] Rellenar rol en los 5 proyectos (ver tabla arriba)
- [ ] En el template de tarjeta, insertar `{{ p.role }}` después del título
- [ ] Aplicar estilos (bold, amarillo, 14px)
- [ ] Probar en desktop y mobile que se ve bien
- [ ] Verificar que el rol es específico y claro
- [ ] Opcional: agregar icono de rol delante del texto (🎯 o 👤)

---

## 🧪 Cómo se ve el resultado

**Grid de proyectos actualizado:**

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ 2024 | UX/UI     │  │ 2024 | WEB       │  │ 2024 | BRANDING  │
│ [Imagen Savia]   │  │ [Imagen PiX]     │  │ [Imagen Trinidad]│
│ Savia App        │  │ PiX              │  │ Trinidad Ureta   │
│ 🎯 UX/UI Designer│  │ 🎯 Interaction   │  │ 🎯 Brand Designer│
│ 📱 App Mobile    │  │    Designer      │  │ 🎨 Branding     │
│ Diseño de flujo..│  │ 🖥️ Web Design    │  │ Identidad visual │
│ [Ver caso]       │  │ Rediseño plat..  │  │ [Ver caso]       │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Beneficio:** El reclutador ve en 2 segundos:
- ¿Qué proyecto?
- ¿Qué rol?
- ¿Qué tipo de trabajo?

---

## 💡 Por qué esto es importante

**Sin el rol:**
```
"Vi 5 proyectos de Belén, pero no está claro qué hizo en cada uno.
¿Fue solo diseño visual? ¿Investigación? ¿Prototipado? 
Tengo que abrir cada uno para entender."
```

**Con el rol:**
```
"Ah, veo que Belén fue:
- UX/UI Designer en Savia (móvil)
- Interaction Designer en PiX (web)
- Brand Designer en Trinidad (branding)
- Design System Lead en Vedimaq (sistemas)

Tiene experiencia en múltiples roles. Versátil. Me llama."
```

---

## 🚀 Próximos Pasos

1. **Hoy:** Agrega el campo `role` en CMS
2. **Hoy:** Rellena los roles en los 5 proyectos
3. **Mañana:** Inserta `{{ p.role }}` en el template de tarjeta
4. **Mañana:** Aplica estilos (bold + amarillo)
5. **Mañana:** Testea en mobile y desktop

---

## 📸 Antes vs Después

**ANTES:**
```
Savia App
📱 App Mobile
Diseño de flujo e interfaz...
```
→ "¿Qué rol tuvo?"

**DESPUÉS:**
```
Savia App
🎯 UX/UI Designer
📱 App Mobile
Diseño de flujo e interfaz...
```
→ "Ah, fue UX/UI Designer"

---

¿Necesitas ayuda con algo específico? 🎯

- ¿Cómo editar CMS en Framer?
- ¿Cómo cambiar estilos del rol?
- ¿Qué rol ponerle a cada proyecto?

Avísame y lo hacemos. 💪
