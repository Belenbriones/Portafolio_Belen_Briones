# Caso de Estudio UX/UI: PiX — Partituras de Interacción en Acción

Ecosistema editorial y plataforma web interactiva para la divulgación y práctica de una metodología de codiseño centrada en las personas.

---

## Ficha del Proyecto

* **Rol:** Diseñadora de Interacción, UX/UI, Diseño Editorial e Ilustración Generativa
* **Colaboradores:** Belén Briones & Matías Morales (Tesis de Título, e[ad] PUCV)
* **Docente Guía:** Katherine Exss Cid
* **Alcance:** Publicación impresa con Toolkit desplegable + Plataforma web interactiva responsiva
* **Herramientas:** Figma, Adobe InDesign, Adobe Illustrator, HTML5/CSS3/JavaScript, p5.js, Miro, Visual Studio Code, GitHub

---

# Diapositiva / Pantalla 1: Visión General & El Problema

### Titular
**PiX: Partituras de Interacción en Acción**  
*Sistematización, ecosistema editorial y plataforma web para una metodología de codiseño.*

### El Problema
A pesar de contar con 18 años de trayectoria desde su origen en la e[ad] PUCV, la metodología PiX (Partituras de Interacción) carecía de un cuerpo bibliográfico consolidado y de un repositorio centralizado de casos de uso reales. Su adopción se mantenía limitada a espacios académicos informales y transmisión empírica boca a boca, generando:

1. **Falta de visibilidad y acceso:** Desconocimiento de la herramienta fuera del entorno universitario.
2. **Brecha comunicativa multidisciplinaria:** Dificultad para coordinar áreas de diseño, negocio y tecnología sin un lenguaje común que modele simultáneamente la experiencia del usuario y la arquitectura del sistema.
3. **Ausencia de recursos prácticos:** Inexistencia de herramientas tangibles o digitales estandarizadas para facilitar talleres de codiseño y planificación.

### La Solución
Diseño y desarrollo de un **ecosistema híbrido** (físico y digital) compuesto por:
* **Libro impreso ergonómico (17.4 × 24.3 cm):** Sistematización del marco teórico y análisis narrativo de 7 casos de estudio reales.
* **Toolkit físico desplegable:** Lienzo horizontal con pictogramas prepicados (*pixograms*) para prototipar interacciones de forma análoga y participativa.
* **Libro web interactivo y responsivo:** Plataforma digital con navegación no lineal, arte generativo en p5.js y acceso directo a plantillas editables en Figma y Miro.

---

# Diapositiva / Pantalla 2: Research, Metodología & Casos Reales

### Titular
**De la Teoría a la Práctica: Investigación y Validación**  
*Evidenciando cómo las partituras actúan como un "objeto fronterizo" entre disciplinas.*

### Métricas de Research
* **16** personas encuestadas vía formulario digital.
* **11** entrevistas semiestructuradas en profundidad (grabadas y analizadas con transcripción asistida).
* **7** casos de estudio documentados en **3 países** (Chile, Argentina y México).

### El Modelo Mental de PiX (Las 3 Capas Fundamentales)
PiX organiza la experiencia en una partitura visual leída horizontalmente en tres planos simultáneos:
1. **Persona:** Metas cognitivas, modelo mental, motivaciones y fluctuaciones emocionales del usuario.
2. **Diálogo:** Acciones visibles, gestos, inputs, mensajes y componentes interactivos en la interfaz.
3. **Sistema:** Procesos automatizados tras bambalinas, conexiones de bases de datos, validaciones y lógica de soporte.

### Casos de Estudio Sistematizados (Hallazgos de Adaptabilidad)
La investigación comprobó la capacidad de PiX como herramienta flexible y situada:
* **Sector Público & Accesibilidad (CEPAL / MMGyD — Argentina):** Modelado de flujos inclusivos para el *Mapa Federal del Cuidado*, agregando una cuarta capa de pantallas para alinear accesibilidad con desarrollo.
* **Procesos Públicos Complejos (ChileAtiende / IPS — Chile):** Sistematización del trámite de *Saldo Insoluto*, detectando brechas técnicas y bases de datos inexistentes antes de iniciar el código.
* **Fintech & Entornos Ágiles (Cumplo — Chile, México, Perú):** Coordinación remota entre UX, Producto y Desarrollo para alinear el MVP de atención a solicitantes y estimar tiempos de sprint.
* **Salud & Realidad Aumentada (Proyecto Memento — Chile):** Mapeo de experiencias espaciales y técnicas mnemotécnicas domésticas para adultos mayores con deterioro cognitivo.
* **Educación y Ciudad:** Aplicación pedagógica en aula escolar pública (*Cuadernillos Pedagógicos*) y análisis crítico del espacio urbano y precarización laboral en plataformas de *Delivery*.

---

# Diapositiva / Pantalla 3: Arquitectura de Información, UI & Toolkit

### Titular
**Diseño de Información & Sistema Visual**  
*Estructurando un lenguaje gráfico y modular para soportes análogos y digitales.*

### Arquitectura de Información (Web)
* **Navegación híbrida y no lineal:** Estructura modular que permite la lectura continua tipo libro o la exploración directa por casos mediante menú lateral fijo (`sidebar-nav`).
* **Puntos de fuga y acción (CTA):** Acceso directo a descarga del libro en PDF, enlaces a templates de Figma/Miro y repositorios abiertos.

### Sistema de Diseño (Design System)
* **Tipografía complementaria:**
  * `Lato` (Bold / Semibold): Utilizada en rótulos, titulares y componentes técnicos para dialogar con el isologo de PiX y transmitir precisión moderna.
  * `Crimson Text / Crimson Pro`: Tipografía con serifas para lectura continua editorial y citas textuales, otorgando calidez y legibilidad prolongada.
* **Paleta Cromática con Sentido:**
  * *Naranja PiX (`#E3653B` / `#E8815E`):* Color identitario y acento principal para navegación e interacciones activas.
  * *Lilas y Violetas (`#9176B4` / `#EFE7F4` / `#9677C5`):* Soporte secundario que evoca el entorno digital y tecnológico sin saturar.
  * *Grises Neutros y Blanco:* Fondos limpios y cajas de contenido para garantizar contraste y foco.
* **Arte Generativo Modular:**
  * Sistema visual abstracto inspirado en el tangrama utilizando triángulos rectángulos.
  * Composición algorítmica y dinámica desarrollada con **p5.js** para portadillas interactivas en la versión web.

### El Toolkit Tangible (Codiseño Análogo)
* **Lienzo tríptico desplegable:** Al final del libro físico, proporciona una superficie continua que simula un pentagrama de interacción.
* **Pixograms prepicados:** Hojas troqueladas con iconos de Usuario, Diálogo y Sistema para que equipos multidisciplinarios prototipen flujos colaborativos sin depender de dispositivos digitales.

---

# Diapositiva / Pantalla 4: Desarrollo Front-End, Impacto & Aprendizajes

### Titular
**Desarrollo Técnico, Resultados y Reflexión UX**  
*Cerrando la brecha entre el diseño participativo y la ejecución técnica.*

### Stack Tecnológico & Implementación
* **Prototipado:** Maquetación inicial de alta fidelidad en Figma.
* **Desarrollo Web:** HTML5 semántico, CSS3 modular (con diseño responsivo para desktop, tablet y móvil) y JavaScript para navegación e interacción.
* **Gráfica Interactiva:** Integración embebida de scripts de **p5.js** para animaciones dinámicas de fondo y cabeceras.
* **Control de Versiones y Despliegue:** Repositorio en GitHub y alojamiento público en GitHub Pages.

### Impacto y Aprendizajes Clave
1. **Estructurar la empatía:** PiX demuestra que la experiencia de usuario no es sólo una serie de pantallas; al explicitar la capa de *Persona*, obliga a los equipos de ingeniería y negocio a conectar con las emociones y frustraciones humanas.
2. **Prevención de fricción técnica:** La partitura permite "rayar la cancha" en etapas tempranas (discovery), resolviendo desacuerdos de arquitectura antes de gastar recursos de desarrollo.
3. **Potencia del enfoque híbrido:** La versión análoga (toolkit) democratiza el diseño en contextos no técnicos o comunitarios, mientras que la web entrega inmediatez, código abierto y recursos para la industria digital.

### Conclusión Profesional
> *"El rol del diseño de interacción no termina en la interfaz: consiste en crear puentes de entendimiento entre disciplinas. PiX se consolida como un lenguaje común, sensible y transparente que transforma el diseño en una práctica genuinamente colectiva."*
