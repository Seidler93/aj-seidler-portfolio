import SectionHeader from "../SectionHeader/SectionHeader";
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Built from real problems, not just tutorials."
          description="These are the kinds of products I enjoy building. Tools that make workflows easier, reduce friction and actually improve the day-to-day experience for the people using them."
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;