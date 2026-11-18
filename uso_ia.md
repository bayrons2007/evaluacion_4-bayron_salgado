# Registro de uso de inteligencia artificial

## 1. Herramientas utilizadas

Utilicé ChatGPT como apoyo durante el desarrollo del proyecto.

## 2. Para qué se utilizaron

Hasta este momento, utilicé la herramienta para:
- Identificar el repositorio correspondiente a la Evaluación 2.
- Preparar el proyecto con React, TypeScript y Vite.
- Recibir instrucciones para copiar los recursos del portafolio original.
- Comenzar la adaptación de la sección Inicio a React.
- Para ayudar con las ramas de que archivo deb eir en cada rama 
- Ayudo a recuperar contactos que estaba en la eva 2
## 3. Prompts utilizados

Algunas de las consultas realizadas fueron:
- “Revisa y ayúdame a realizarlo”, adjuntando la rúbrica.
- “¿Cómo puedo trae lo de la eva 2?”
- “sigamos para hacer lo del react router”
- Trabajemos lo de la nueva rama
- Sigamos adapantando el portafolio a lo nuevo
- Revisa mis avances para verificar si esta bien en esta rama 
- Sigamos con la nueva rama

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

### Creación del encabezado

Recibí el código de Header.tsx, la actualización de App.tsx
y una regla CSS para identificar el enlace activo.

### Página Sobre mí y su ruta

Recibí el código de SobreMi.tsx, su importación y ruta en App.tsx,
y el enlace del encabezado. El contenido se recuperó de la E2.
Se utilizó h1 porque la sección ahora es una página independiente.

function SobreMi() {
  return (
    <main>
      <section className="about">
        <div className="section-header">
          <p className="section-tag">02 / SOBRE MÍ</p>

          <h1>
            Conociendo un poco
            <span>más de mí.</span>
          </h1>
        </div>

        <div className="about-content">
          <p>
            Actualmente estudio Ingeniería Civil Informática.
            Durante mi formación he trabajado en diferentes áreas
            de la programación, el desarrollo web y las redes.
          </p>

          <p>
            Me interesa seguir desarrollando mis habilidades,
            aprender nuevas tecnologías y transformar ideas
            en proyectos funcionales.
          </p>
        </div>
      </section>
    </main>
  );
}

export default SobreMi;

### Conexión de Layout y Proyectos

La IA revisó los archivos compartidos y detectó que Layout y
Proyectos estaban creados, pero no conectados en App.tsx.

Recibí el código actualizado de App.tsx y Header.tsx.

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar" aria-label="Navegación principal">
        <Link to="/" className="logo">
          BS.
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/proyectos">
              Proyectos
            </NavLink>
          </li>

          <li>
            <NavLink to="/sobre-mi">
              Sobre mí
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

### Manejo de rutas inexistentes

Recibí el componente NoEncontrado.tsx y la actualización de App.tsx
con una ruta comodín (*). Esta muestra una página 404 con un enlace
para regresar al inicio, conservando el encabezado y el pie de página.

import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <main>
      <section>
        <p>ERROR 404</p>
        <h1>Página no encontrada</h1>
        <p>La dirección que visitaste no existe en este portafolio.</p>

        <Link to="/" className="back-link">
          Volver al inicio
        </Link>
      </section>
    </main>
  );
}

export default NoEncontrado;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import NoEncontrado from "./pages/NoEncontrado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

### Componente FormularioContacto

Recibí el código de FormularioContacto.tsx basado en el formulario
de la Evaluación 2, conservando sus clases y campos.

Se adaptaron los atributos a JSX y se agregó required.
La gestión del estado y la confirmación están pendientes.
function FormularioContacto() {
  return (
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tu@email.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          placeholder="Escribe tu mensaje..."
          required
        />
      </div>

      <button type="submit">Enviar mensaje</button>
    </form>
  );
}

export default FormularioContacto;

### Página Contacto y navegación

Recibí el código de Contacto.tsx, que muestra FormularioContacto,
y las actualizaciones de App.tsx y Header.tsx para acceder mediante
la ruta /contacto. Se conservaron los textos y clases de la E2.

import FormularioContacto from "../components/FormularioContacto";

function Contacto() {
  return (
    <main>
      <section className="contact">
        <div className="section-header">
          <p className="section-tag">03 / CONTACTO</p>

          <h1>¿Hablamos?</h1>

          <p>
            Si quieres contactarme, puedes dejarme un mensaje.
          </p>
        </div>

        <FormularioContacto />
      </section>
    </main>
  );
}

export default Contacto;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio";
import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import NoEncontrado from "./pages/NoEncontrado";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="navbar" aria-label="Navegación principal">
        <Link to="/" className="logo">
          BS.
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/proyectos">
              Proyectos
            </NavLink>
          </li>

          <li>
            <NavLink to="/sobre-mi">
              Sobre mí
            </NavLink>
          </li>

          <li>
            <NavLink to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

### Estado, validación y confirmación del formulario

Recibí el componente FormularioContacto actualizado con useState,
campos controlados y manejo del evento submit.

Se agregó validación de campos vacíos, espacios y longitud del
mensaje, además de la validación nativa del correo. La confirmación
aclara que es una demostración y que no se envían mensajes.
import { useState } from "react";
import type { FormEvent } from "react";

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  function limpiarAvisos() {
    setError("");
    setConfirmacion("");
  }

  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    limpiarAvisos();

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
      setError("Completa todos los campos sin usar solo espacios.");
      return;
    }

    if (mensaje.trim().length < 10) {
      setError("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    setConfirmacion(
      `Gracias, ${nombre.trim()}. Los datos se validaron correctamente. ` +
      "Esta es una demostración: no se ha enviado ningún mensaje."
    );

    setNombre("");
    setCorreo("");
    setMensaje("");
  }

  return (
    <form className="contact-form" onSubmit={manejarEnvio}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          autoComplete="name"
          value={nombre}
          onChange={(evento) => {
            setNombre(evento.target.value);
            limpiarAvisos();
          }}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tu@email.com"
          autoComplete="email"
          value={correo}
          onChange={(evento) => {
            setCorreo(evento.target.value);
            limpiarAvisos();
          }}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          placeholder="Escribe tu mensaje..."
          value={mensaje}
          onChange={(evento) => {
            setMensaje(evento.target.value);
            limpiarAvisos();
          }}
          required
        />
      </div>

      <p>Formulario de demostración: no envía correos.</p>

      {error && <p role="alert">{error}</p>}

      <p role="status">{confirmacion}</p>

      <button type="submit">Enviar mensaje</button>
    </form>
  );
}

export default FormularioContacto;

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

Después de instalar React Router, npm informó 11 vulnerabilidades
de severidad alta relacionadas con picomatch y las herramientas
de desarrollo que dependen de él.

Ejecuté npm audit y npm audit --omit=dev. El segundo comando
reportó 0 vulnerabilidades.

Creé Header.tsx y lo incorporé en App.tsx. Comprobé que aparecen
el logo BS. y el enlace Inicio, que ambos llevan a la presentación
y que Inicio se muestra subrayado como ruta activa.

Visité /prueba y comprobé que aparece la página 404.
También comprobé que el enlace Volver al inicio lleva a la presentación.

Comprobé que el enlace Contacto muestra el título, los campos
Nombre, Correo electrónico y Mensaje, y el botón Enviar mensaje.
La lógica del formulario todavía está pendiente.

Probé el formulario con campos vacíos, correo inválido y un mensaje
de menos de 10 caracteres. En cada caso se mostró la validación
correspondiente.

Con datos válidos apareció la confirmación de demostración y se
limpiaron los campos. No se envió ningún correo.

## 6. Reflexión final
