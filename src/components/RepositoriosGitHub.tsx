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