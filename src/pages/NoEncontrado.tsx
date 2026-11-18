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