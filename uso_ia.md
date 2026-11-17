# Registro de uso de inteligencia artificial

## 1. Herramientas utilizadas

Utilicé ChatGPT como apoyo durante el desarrollo del proyecto.

## 2. Para qué se utilizaron

Hasta este momento, utilicé la herramienta para:
- Identificar el repositorio correspondiente a la Evaluación 2.
- Preparar el proyecto con React, TypeScript y Vite.
- Recibir instrucciones para copiar los recursos del portafolio original.
- Comenzar la adaptación de la sección Inicio a React.
- Sigamos trabajando en la rama antes de pasarnos a la siguiente

## 3. Prompts utilizados

Algunas de las consultas realizadas fueron:
- “Revisa y ayúdame a realizarlo”, adjuntando la rúbrica.
- “¿Cómo puedo trae lo de la eva 2?”
- “sigamos para hacer lo del react router”

También compartí enlaces de los repositorios y resultados de la
terminal para recibir indicaciones según el estado del proyecto.

## 4. Qué se recibió de la IA

### Preparación del proyecto

Recibí los siguientes comandos para crear una rama e iniciar
el proyecto con React y TypeScript:

```powershell
git switch -c feat/base-react
npm create vite@latest . -- --template react-ts
```

### Recuperación de archivos de la Evaluación 2

Recibí estos comandos para descargar el repositorio original
y copiar sus proyectos, imágenes, capturas y estilos:

```powershell
git clone git@github.com:bayrons2007/Frontend-.git ..\referencia-eva2

New-Item -ItemType Directory -Force public\imagenes
New-Item -ItemType Directory -Force docs\capturas-e2

Copy-Item ..\referencia-eva2\proyectos public\proyectos -Recurse
Copy-Item ..\referencia-eva2\assets\img\polar.jpeg public\imagenes\polar.jpeg
Copy-Item ..\referencia-eva2\assets\img\*.png docs\capturas-e2
Copy-Item ..\referencia-eva2\assets\css\style.css src\index.css
```

### Primera adaptación de Inicio a React

Recibí este código para reemplazar el contenido de src/App.tsx
y mostrar la presentación del portafolio original:

```tsx
function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="hero-tag">
            DESARROLLADOR EN FORMACIÓN
          </p>

          <h1>
            CREANDO IDEAS
            <span>A TRAVÉS DEL CÓDIGO.</span>
          </h1>

          <p className="hero-description">
            Soy estudiante de Ingeniería Civil Informática,
            interesado en el desarrollo de soluciones digitales
            y en seguir aprendiendo nuevas tecnologías.
          </p>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <img
              src="/imagenes/polar.jpeg"
              alt="Foto de Bayron Salgado"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
```
### Separación de la página Inicio

La IA indicó mover el contenido de App.tsx a src/pages/Inicio.tsx,
cambiando el nombre de la función y su exportación de App a Inicio.
El contenido de la presentación se mantuvo igual al código anterior.

Para src/App.tsx recibí este código:

```tsx
import Inicio from "./pages/Inicio";

function App() {
  return <Inicio />;
}

export default App;
```

El objetivo fue separar la presentación en un componente propio.

### Configuración inicial de React Router

Recibí el comando para instalar React Router:

```powershell
npm install react-router-dom
```

También recibí este código para configurar la ruta de Inicio
en src/App.tsx:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 5. Qué se ajustó y cómo se verificó

Ejecuté el proyecto y comprobé que se mostraba la pantalla inicial
de Vite y React.

Copié los proyectos, la fotografía, las capturas y el CSS de la E2.
Después de copiar los estilos, observé que la pantalla de ejemplo
se veía distinta.

Está pendiente registrar la comprobación visual de la sección
Inicio y las pruebas de las siguientes funcionalidades.

Moví la presentación a src/pages/Inicio.tsx y actualicé App.tsx
para importar y mostrar ese componente.

Comprobé que la presentación y la fotografía se siguen mostrando
igual después de separar el componente.

Instalé React Router y configuré la ruta / para mostrar Inicio.
Comprobé en el navegador que la presentación sigue apareciendo.

Ejecuté npm run build: TypeScript y Vite completaron la compilación
sin errores. También ejecuté npm run lint y ESLint no reportó problemas.
Estas comprobaciones no reemplazan la revisión visual en el navegador.

## 6. Reflexión final
