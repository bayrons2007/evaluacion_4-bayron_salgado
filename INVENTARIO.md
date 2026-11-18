# Inventario de la Evaluación 2

Este documento explica qué recuperé del portafolio original,
qué corregí y qué agregué para la Evaluación 4.

Repositorio original:
https://github.com/bayrons2007/Frontend-

## 1. Contenido conservado

- **Inicio:** presentación y fotografía.
- **Sobre mí:** información personal y académica.
- **Proyectos:** Memoria, Menú digital y Tetris.
- **Contacto:** título, texto y campos del formulario.
- **Encabezado y pie:** logo, opciones del menú y texto del pie.
- **Diseño:** estilos originales como base.
- **Capturas:** imágenes de la E2 incluidas como referencia en el README.

## 2. Organización en React

Separé el contenido en estas páginas:

- src/pages/Inicio.tsx
- src/pages/SobreMi.tsx
- src/pages/Proyectos.tsx
- src/pages/Contacto.tsx

Creé componentes para organizar y reutilizar partes del sitio:

- Header: encabezado y navegación.
- Footer: pie de página.
- Layout: comparte el encabezado y el pie.
- ProjectCard: tarjeta reutilizable con props tipadas.
- FormularioContacto: campos, validación y confirmación.

La información de los proyectos se encuentra en
src/data/proyectos.ts.

## 3. Proyectos originales

### Memoria

Ubicación: public/proyectos/memoria.

Conservé sus archivos HTML, CSS y JavaScript.
Corregí el enlace para volver a Proyectos.

Probé voltear cartas, encontrar parejas y reiniciar.

### Menú digital

Ubicación: public/proyectos/menu.

Conservé sus archivos HTML, CSS y JavaScript.
Corregí los enlaces de regreso al portafolio.

Probé los filtros por categoría.

### Tetris

Ubicación: public/proyectos/tetris.

Conservé sus archivos HTML, CSS y JavaScript.
Corregí el enlace para volver a Inicio.

Probé mover y girar las piezas y reiniciar.

## 4. Cambios y correcciones

### Navegación

Reemplacé las anclas del portafolio por rutas con React Router,
como pide la pauta.

El menú indica la página activa.

### Formulario

Conservé Nombre, Correo electrónico y Mensaje.

Agregué:
- Estado con useState.
- Validación de campos obligatorios y correo.
- Comprobación de espacios y longitud del mensaje.
- Avisos de error y confirmación.

Es una demostración y no envía correos.

### Enlaces de regreso

Reemplacé los enlaces al antiguo index.html por las rutas
/ y /proyectos.

### Inicio en móvil

En la prueba a 375 px detecté un problema con la fotografía.
Agregué el contenedor hero-content utilizado por el CSS
para colocar la imagen debajo del texto en móvil.

### Contraste del pie

Lighthouse detectó contraste insuficiente en el texto del footer.

Cambié el color de #666666 a #a8a8a8.
La auditoría de accesibilidad de Contacto pasó de 96 a 100.

## 5. Funciones nuevas

### Página 404

Muestra un aviso cuando una dirección no existe y permite
volver al inicio.

Se agregó para cumplir el manejo de rutas inexistentes.

### API de GitHub

Muestra hasta seis repositorios públicos de mi cuenta debajo
de los proyectos originales.

Incluye:
- Tipos definidos con TypeScript.
- Consulta separada en un servicio.
- Estados de carga, datos y error.
- Botón Reintentar.
- Enlaces a los repositorios.
- Caché en memoria y reutilización de peticiones en curso.

Elegí GitHub porque se relaciona con el propósito del portafolio.

## 6. Documentación y evidencia

- README.md: instalación, funcionamiento, API y pruebas.
- INVENTARIO.md: elementos recuperados y cambios.
- uso_ia.md: ayuda recibida, códigos, ajustes y verificaciones.
- docs/capturas-e2: capturas del portafolio original.

## 7. Resultado de la revisión

Comparé la versión React con la original.
Se mantienen los colores generales y la información.

Las diferencias visuales más notorias son el encabezado
adaptado a las rutas y la sección de GitHub.

También comprobé la vista a 375 px, la navegación con teclado,
el formulario y las funciones principales de los tres proyectos.

La auditoría de Lighthouse se realizó en Contacto.
No representa una auditoría completa de todas las páginas.