import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Coding.css'

function Other() {
  const otherProjects = projects.filter((p) => p.category === 'other')

  return (
    <section className="coding" id="other">
      <header className="coding-intro">
        <h1 className="coding-title">その他の制作</h1>
        <p className="coding-period">制作実績</p>
        <div className="coding-lead">
          <p>Webアプリの個人制作物です。</p>
          <p>AIを活用しながら、TypeScript と React で作成しています。</p>
        </div>
        <p className="coding-note">※画像をクリックすると、公開中のページへ移動します。</p>
      </header>

      <ul className="coding-list">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Other
