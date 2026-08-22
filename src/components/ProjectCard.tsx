import type { Project } from '../data/projects'
import '../sections/Coding.css'

function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <article className="coding-card">
        <a
          className="coding-card-link"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="coding-card-media">
            {project.image ? (
              <img
                className="coding-card-image"
                src={project.image}
                alt={`${project.title}の画面キャプチャ`}
                loading="lazy"
              />
            ) : (
              <span
                className="coding-card-fallback"
                style={{ backgroundColor: project.color }}
              />
            )}
          </span>
          <span className="coding-card-meta">
            <span className="coding-card-title">{project.title}</span>
          </span>
        </a>
        {project.githubUrl && (
          <a
            className="coding-card-github"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </article>
    </li>
  )
}

export default ProjectCard
