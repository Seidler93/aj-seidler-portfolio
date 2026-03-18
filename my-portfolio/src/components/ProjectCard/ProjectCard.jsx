import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
        </div>

        <div className="project-card__buttons">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
            View Project
          </a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn--secondary">
            GitHub
          </a>
        </div>
      </div>

      <div className="project-card__meta">
        <div className="project-card__section">
          <h4>Tech Stack</h4>
          <div className="project-card__tags">
            {project.tech.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="project-card__section">
          <h4>Key Features</h4>
          <ul className="project-card__features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;