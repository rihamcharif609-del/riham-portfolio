function ProjectCard({ project, number }) {
  return (
    <article className="project-card">

      <div className="project-image">
        <div className="project-image-placeholder">
          <span>{project.title}</span>
        </div>
      </div>

      <div className="project-info">

        <div className="project-top">
          <span className="project-number">
            {number}
          </span>

          <span className="project-type">
            {project.type}
          </span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;