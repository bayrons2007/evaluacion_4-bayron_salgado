import type { Proyecto } from "../data/proyectos";

function ProjectCard({ numero, categoria, titulo, tecnologias, ruta }: Proyecto) {
  return (
    <a href={ruta} className="project-card">
      <div className="project-number">{numero}</div>

      <div className="project-content">
        <p>{categoria}</p>
        <h3>{titulo}</h3>
        <span>{tecnologias}</span>
      </div>

      <div className="project-arrow">→</div>
    </a>
  );
}

export default ProjectCard;