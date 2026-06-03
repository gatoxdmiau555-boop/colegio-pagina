# ERP 45 - Página web del instituto

Proyecto web estático para la IES Comercial N.° 45 "Emilio Romero Padilla". Incluye una página principal con historia, especialidades técnicas y navegación hacia secciones de Contabilidad, Computación, Administración y Día de la Madre.

## Estructura de archivos

- `vista/`
  - `index.html` - Página principal
  - `contabilidad.html` - Página de la especialidad de Contabilidad
  - `computacion.html` - Página de la especialidad de Computación
  - `administracion.html` - Página de la especialidad de Administración
  - `dia-madre.html` - Página especial para Día de la Madre
- `css/`
  - `styles.css` - Estilos principales
  - `administracion.css`, `computacion.css`, `contabilidad.css` - Estilos específicos de sección
- `controlador/`
  - `main.js` - JavaScript para menú responsivo, scroll suave y formulario de contacto
- `images/` - Recursos gráficos usados en la página

## Cómo abrir el proyecto

1. Abre `vista/index.html` en tu navegador.
2. Navega por las secciones y haz clic en los enlaces del menú para ver las páginas de cada especialidad.

## Notas

- La página usa una fuente de Google Fonts (`Inter` y `Poppins`).
- El formulario de contacto redirige a un correo (`mailto:`) con los datos ingresados.
- Es un sitio estático; no necesita servidor.
