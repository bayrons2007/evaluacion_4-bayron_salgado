import { proyectos } from "../data/proyectos";
import ProjectCard from "../components/ProjectCard";
import RepositoriosGitHub from "../components/RepositoriosGitHub";

function Proyectos() {
  return (
    <main>
      <section id="proyectos" className="projects">
        <div className="section-header">
          <p className="section-tag">01 / PROYECTOS</p>

          <h2>
            Cosas que he {""}
            <span>construido.</span>
          </h2>

          <p>
            Algunos de los proyectos y trabajos que he realizado
            durante mi aprendizaje.
          </p>
        </div>

        <div className="project-grid">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.numero} {...proyecto} />
          ))}
        </div>
      </section>
      <RepositoriosGitHub />
    </main>
  );
}

export default Proyectos;
