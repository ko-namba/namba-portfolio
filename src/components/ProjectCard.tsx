import type { Project } from '../data/projects'
import '../sections/Coding.css'

interface Props {
  project: Project
  onOpenCaseStudy?: (id: NonNullable<Project['caseStudyId']>) => void
}

function ProjectCard({ project, onOpenCaseStudy }: Props) {
  const isCaseStudy = Boolean(project.caseStudyId && onOpenCaseStudy)
  const media = (
    <>
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
        {isCaseStudy && (
          <span className="coding-card-label">{project.label}</span>
        )}
      </span>
    </>
  )

  return (
    <li>
      <article className="coding-card">
        {isCaseStudy ? (
          <button
            type="button"
            className="coding-card-link coding-card-link--button"
            onClick={() => onOpenCaseStudy?.(project.caseStudyId!)}
          >
            {media}
          </button>
        ) : (
          <a
            className="coding-card-link"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {media}
          </a>
        )}
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
