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
- Ayuda con la API la cual fue la de github la elegida 
## 3. Prompts utilizados

Algunas de las consultas realizadas fueron:
- “Revisa y ayúdame a realizarlo”, adjuntando la rúbrica.
- “¿Cómo puedo trae lo de la eva 2?”
- “sigamos para hacer lo del react router”
- Trabajemos lo de la nueva rama
- Sigamos adapantando el portafolio a lo nuevo
- Revisa mis avances para verificar si esta bien en esta rama 
- Sigamos con la nueva rama
- Bien ya esta el merge de formuluario sigamos con la otra rama para ver lo de la api 
- Yo me encargo de las pruebas solo dame lo de codigo que falta y se necesita para terminar esto de la api 

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

### Tipos para la API de GitHub

Elegí la API de GitHub porque permite mostrar mis repositorios
y mantiene la temática del portafolio.

Recibí la interfaz RepositorioGitHub en src/types/github.ts
para definir los campos que utilizará la aplicación.
Los campos description y language permiten null porque
pueden no tener un valor.

export interface RepositorioGitHub {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

### Servicio de consulta a GitHub

Recibí el código de src/services/github.ts para consultar los seis
repositorios públicos actualizados más recientemente de mi cuenta.

El servicio utiliza fetch, comprueba el estado HTTP y devuelve
una respuesta tipada. También guarda el resultado en memoria
y reutiliza una petición en curso para evitar consultas duplicadas.

Está pendiente conectar el servicio a un componente y comprobar
la carga de datos y el manejo de errores.

import type { RepositorioGitHub } from "../types/github";

const URL_API =
  "https://api.github.com/users/bayrons2007/repos?sort=updated&direction=desc&per_page=6";

let cache: RepositorioGitHub[] | null = null;
let peticionPendiente: Promise<RepositorioGitHub[]> | null = null;

async function consultarGitHub(): Promise<RepositorioGitHub[]> {
  const respuesta = await fetch(URL_API, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!respuesta.ok) {
    throw new Error(
      `No se pudieron cargar los repositorios. Código: ${respuesta.status}.`
    );
  }

  const datos: RepositorioGitHub[] = await respuesta.json();

  cache = datos;
  return datos;
}

export async function obtenerRepositorios(): Promise<RepositorioGitHub[]> {
  if (cache !== null) {
    return cache;
  }

  if (peticionPendiente === null) {
    peticionPendiente = consultarGitHub();
  }

  try {
    return await peticionPendiente;
  } finally {
    peticionPendiente = null;
  }
}

### Visualización de repositorios de GitHub

Recibí el componente RepositoriosGitHub.tsx y las indicaciones
para incorporarlo debajo de los proyectos originales.

Utiliza useEffect para llamar al servicio y useState para gestionar
datos, carga, errores y reintentos. Incluye una limpieza del efecto
para ignorar respuestas cuando el componente ya no está activo.

Reutiliza las clases de las tarjetas originales.

import { useEffect, useState } from "react";
import { obtenerRepositorios } from "../services/github";
import type { RepositorioGitHub } from "../types/github";

function RepositoriosGitHub() {
  const [repositorios, setRepositorios] = useState<RepositorioGitHub[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    let activo = true;

    async function cargarRepositorios() {
      setCargando(true);
      setError("");

      try {
        const datos = await obtenerRepositorios();

        if (activo) {
          setRepositorios(datos);
        }
      } catch (errorRecibido: unknown) {
        if (activo) {
          setError(
            errorRecibido instanceof Error
              ? errorRecibido.message
              : "Ocurrió un error al consultar GitHub."
          );
        }
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    cargarRepositorios();

    return () => {
      activo = false;
    };
  }, [intento]);

  return (
    <section aria-labelledby="titulo-github">
      <div className="section-header">
        <h2 id="titulo-github">Mis repositorios en GitHub</h2>
        <p>Seis repositorios públicos actualizados más recientemente.</p>
      </div>

      {cargando && (
        <p role="status">Cargando repositorios...</p>
      )}

      {!cargando && error && (
        <div>
          <p role="alert">{error}</p>
          <button
            type="button"
            onClick={() => setIntento((anterior) => anterior + 1)}
          >
            Reintentar
          </button>
        </div>
      )}

      {!cargando && !error && repositorios.length === 0 && (
        <p>No se encontraron repositorios públicos.</p>
      )}

      {!cargando && !error && repositorios.length > 0 && (
        <div className="project-grid">
          {repositorios.map((repositorio) => (
            <a
              key={repositorio.id}
              href={repositorio.html_url}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{repositorio.name}</h3>
              <p>{repositorio.description ?? "Sin descripción."}</p>
              <p>
                Lenguaje: {repositorio.language ?? "No especificado"}
              </p>
              <p>Estrellas: {repositorio.stargazers_count}</p>
              <span>Abrir en GitHub (nueva pestaña) →</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

export default RepositoriosGitHub;

import RepositoriosGitHub from "../components/RepositoriosGitHub";

      </section>

      <RepositoriosGitHub />
    </main>
### Corrección de Inicio en móvil

Al probar el sitio a 375 px detecté desplazamiento horizontal
en Inicio por la fotografía.

La IA identificó que faltaba el contenedor hero-content,
utilizado por las reglas responsivas del CSS original,
y proporcionó el componente Inicio corregido.

function Inicio() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-tag">
              DESARROLLADOR EN FORMACIÓN
            </p>

            <h1>
              CREANDO IDEAS{" "}
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
        </div>
      </section>
    </main>
  );
}

export default Inicio;

### Corrección de contraste del pie de página

Lighthouse señaló contraste insuficiente en el texto del footer.
La IA propuso cambiar su color de #666666 a un gris más claro:

```css
color: #a8a8a8;
```

Se mantuvo el fondo y la estructura del diseño original.

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

en las pruebas identifique que los botones de vokver inciio de los proyectos fallaban asi que cambie la ubicacion de cada uno para arreglarlo correctamente 

Comprobé que la sección de GitHub muestra repositorios de mi cuenta
debajo de los proyectos originales. Las tarjetas originales siguen
abriendo los proyectos locales.

Comprobé que las tarjetas obtenidas de la API abren el repositorio
correspondiente en GitHub en una pestaña nueva.

Probé una ruta inexistente de la API y comprobé que aparece
un mensaje de error con el botón Reintentar.
Después restauré la URL correcta y comprobé que los repositorios
volvieron a cargar.

### Pruebas finales y correcciones

#### Vista móvil

Probé Inicio, Proyectos, Sobre mí y Contacto a un ancho de 375 px.

Detecté que la fotografía de Inicio provocaba desplazamiento
horizontal. Agregué el contenedor hero-content que utilizaba
el CSS original y comprobé que la imagen quedó debajo del texto.

Las tarjetas de Proyectos se acomodaron hacia abajo.
Sobre mí y Contacto se mostraron correctamente.

#### Navegación con teclado

Probé la navegación con Tab y Enter. Comprobé que se distingue
el elemento seleccionado y que puedo recorrer el menú,
los campos del formulario y el botón.

#### Accesibilidad

Ejecuté Lighthouse en /contacto y obtuve inicialmente 96 puntos
en accesibilidad. El informe señaló contraste insuficiente
en el texto del pie de página.

Cambié su color de #666666 a #a8a8a8 y repetí la auditoría.
El resultado fue 100 en accesibilidad para Contacto.
Este resultado no corresponde a una auditoría de todo el sitio.

#### Proyectos originales

Comprobé estas funciones:

- Memoria: voltear cartas, encontrar parejas y reiniciar.
- Menú digital: filtrar los productos por categoría.
- Tetris: mover y girar las piezas y reiniciar.

Las funciones probadas respondieron correctamente.

#### API de GitHub

Comprobé que se muestran mis repositorios y que sus tarjetas
abren el repositorio correspondiente en una pestaña nueva.

Para comprobar la caché, observé las solicitudes en Network.
Después de ir a Sobre mí y volver a Proyectos sin recargar,
los datos siguieron apareciendo y no se agregó otra petición
a la API.

También probé la recuperación después de un fallo:
recargué Inicio, activé Offline y entré a Proyectos desde el menú.
Apareció el error de carga. Luego restablecí la conexión
y pulsé Reintentar. Los repositorios volvieron a aparecer.

Comparé el portafolio de React con el original de la Evaluación 2.
Comprobé que se mantienen los colores y la información.
Las diferencias visuales más notorias son el encabezado adaptado
a las rutas y la nueva sección de repositorios de GitHub.

Después de las correcciones finales ejecuté npm run build
y npm run lint. Ambos terminaron sin errores.

## 6. Reflexión final

La IA me ayudó a interpretar la pauta y adaptar mi portafolio
a React y TypeScript. La utilicé para recibir explicaciones,
propuestas de código y ayuda con los errores.

Durante el trabajo comprendí mejor cómo separar páginas y
componentes, pasar datos mediante props y utilizar rutas.
También trabajé con estados para el formulario y para mostrar
la carga, los datos y los errores de la API de GitHub.

No todas las propuestas quedaron correctas al primer intento.
Por ejemplo, en Inicio faltaba un contenedor que utilizaba
el CSS original, lo que provocaba desplazamiento horizontal
en móvil. Lo detecté al probar la página y lo corregí con apoyo
de la IA. También revisé el contraste del pie con Lighthouse.

Esto me mostró que no basta con copiar código: necesito probarlo, revisar que cumpla la pauta y entender qué hace. Todavía debo seguir practicando mas para poder comprender todo de una mejor manera y poder llegar a no repetir los mismos errores y quedar atrapado en los mismos problemas, pero siento que me ayudo bastante a comprender y probar y fallar un prueba y error 