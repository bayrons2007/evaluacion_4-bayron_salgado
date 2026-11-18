import type { RepositorioGitHub } from "../types/github";

const URL_API =
  "https://api.github.com/users/bayrons2007/repos?sort=updateddirection=desc&per_page=6";

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