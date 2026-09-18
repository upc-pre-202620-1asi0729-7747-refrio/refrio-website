<div align="center">

# Refrio — Landing Page Oficial

**Monitoreo inteligente de la cadena de frío, trazabilidad IoT y gestión FEFO**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<p align="center">
  Plataforma tecnológica diseñada para optimizar y auditar la cadena de frío en almacenes y transporte de perecibles, integrando telemetría IoT en tiempo real, control de inventario First-Expire-First-Out (FEFO), resolución de incidentes térmicos y analítica operativa.
</p>

</div>

---

### Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Características Principales](#-características-principales)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación y Uso Local](#-instalación-y-uso-local)
- [Internacionalización (i18n)](#-internacionalización-i18n)
- [Diseño y Buenas Prácticas](#-diseño-y-buenas-prácticas)
- [Equipo Fundador](#-equipo-fundador)
- [Licencia](#-licencia)

---

### Acerca del Proyecto

La ruptura no detectada de la cadena de frío y la falta de rotación oportuna de productos perecibles ocasionan pérdidas económicas severas y riesgos de inocuidad en industrias como alimentos, farmacéutica y agroexportación.

**Refrio** resuelve esta problemática mediante:

- **Telemetría IoT Continua:** Registro en tiempo real de temperatura y humedad a través de sensores enlazados a cámaras frigoríficas.
- **Lógica de Inventario FEFO:** Priorización automatizada de despacho por fecha de expiración para minimizar mermas y productos vencidos.
- **Alertas Tempranas e Incidentes:** Notificaciones instantáneas ante fluctuaciones fuera del rango óptimo, habilitando tickets de acción correctiva inmediata.
- **Trazabilidad de Cadena de Custodia:** Certificación y auditoría cronológica del estado térmico de los lotes a lo largo de cada punto de control.

---

### Estructura del Proyecto

El proyecto sigue una arquitectura limpia (*clean code*), modular y desacoplada, organizada en carpetas de fácil mantenimiento:

```
REFRIO/
├── .idea/                      # Configuración del entorno de desarrollo
│   ├── .gitignore
│   ├── modules.xml
│   ├── REFRIO.iml
│   └── workspace.xml
├── assets/
│   ├── css/                    # Hojas de estilo y diseño de componentes
│   ├── images/                 # Identidad visual, iconos y recursos gráficos
│   └── js/                     # Lógica de interactividad, validaciones y animaciones
├── i18n/
│   ├── en.json                 # Diccionario de traducción en Inglés
│   └── es.json                 # Diccionario de traducción en Español
├── index.html                  # Landing page principal semántica y accesible
├── README.md                   # Documentación técnica completa del proyecto
└── Terms-and-Condition.html    # Términos y condiciones del servicio legal
```

### Características Principales

### 1. Sistema Multilingüe (i18n ES / EN)
- Cambio dinámico e instantáneo de idioma entre Español e Inglés sin recargar la página.
- Carga modular de cadenas de texto desde los archivos `i18n/es.json` y `i18n/en.json`.
- Persistencia automática de la preferencia del usuario en `localStorage` (`refrio_lang`).
- Cobertura completa de interfaz: navegación, fichas técnicas de servicios, modales y formularios.

### 2. Presentación Interactiva de Soluciones
- Despliegue interactivo de los módulos de la plataforma: Monitoreo IoT, Inventario FEFO y Gestión de Incidentes.
- Micro-interacciones visuales adaptadas a dispositivos táctiles y navegadores de escritorio.
- Componentes responsivos diseñados para una navegación fluida en dispositivos móviles y de escritorio.

### 3. Modales Interactivos
- **Modal de Contacto y Onboarding:** Formularios dinámicos para solicitud de demostraciones y registro de clientes con validaciones en tiempo real.
- **Modal de Video Demostrativo:** Reproductor optimizado para exhibir la plataforma y los paneles de telemetría IoT en acción.
- **Modal Legal:** Visualización accesible de las condiciones de servicio y políticas de uso de datos térmicos.

### 4. Animaciones y Experiencia Visual
- Tarjetas con efectos de desenfoque y profundidad visual (*Glassmorphism*).
- Contadores dinámicos animados para indicadores de rendimiento (eficiencia de rotación FEFO, uptime de sensores).
- Optimización de renderizado mediante transiciones nativas y eventos de scroll controlados.

---

### Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura limpia y accesible orientada a SEO técnico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 Puro (Vanilla CSS):**
  - Variables CSS (Custom Properties) para paleta de colores corporativa, espaciados y tipografía.
  - Maquetación responsiva mediante Flexbox y CSS Grid bajo enfoque *Mobile First*.
  - Transiciones y animaciones fluidas a 60fps optimizadas por GPU.
- **JavaScript Moderno (ES6+):**
  - Manipulación nativa del DOM sin dependencias externas.
  - Gestión asíncrona de recursos mediante Fetch API para la carga de diccionarios i18n.
  - `localStorage` para almacenamiento de preferencias de sesión e idioma.

---

### Instalación y Uso Local

Para ejecutar el proyecto en un entorno local no se requieren dependencias pesadas ni compiladores:

### Opción 1: Visualización directa
1. Clona o descarga este repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/refrio.git](https://github.com/tu-usuario/refrio.git)
   ```


### Opción 2: Servidor local (Recomendado para desarrollo)
Para garantizar la correcta carga asíncrona de los archivos JSON de traducción (i18n/), se recomienda ejecutar un servidor web local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node (npx)
npx serve .
```
Luego ingresa a http://localhost:8000 en tu navegador.

---

### Internacionalización (i18n)
El sistema de traducción opera mediante una arquitectura basada en atributos de datos (data-i18n):

Estructuración: Los elementos traducibles en el DOM contienen un atributo clave (ej. data-i18n="hero.title").

Carga Asíncrona: El script principal realiza una petición fetch al archivo correspondiente dentro de i18n/ según la preferencia detectada.

Mapeo: La función de renderizado reemplaza el contenido textual preservando la estructura y eventos del elemento.

### 🎨 Diseño y Buenas Prácticas

Accesibilidad (a11y): Contraste cromático conforme a pautas WCAG, navegación estructurada por teclado y soporte de etiquetas descriptivas.

Clean Architecture: Separación rigurosa de responsabilidades entre maquetación semántica (HTML), sistema de tokens/diseño (assets/css) y controladores reactivos (assets/js).

Compatibilidad Multiplataforma: Optimización para pantallas móviles, tabletas y monitores de alta resolución.

---

### 👥 Equipo Fundador

Refrio fue conceptualizado y desarrollado por un equipo multidisciplinario:

- **César Alca**
- **Adriano Centeno**
- **Bernie Rivas**
- **Rodrigo Saavedra**
- **Jose Tello**

---

### 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.