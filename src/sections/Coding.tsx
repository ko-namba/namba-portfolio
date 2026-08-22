import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Coding.css'

function Coding() {
  const lpProjects = projects.filter((p) => p.category === 'web')

  return (
    <section className="coding" id="coding">
      <header className="coding-intro">
        <h1 className="coding-title">Webページ（LP）制作</h1>
        <p className="coding-period">制作実績</p>
        <div className="coding-lead">
          <p>コープこうべ案件を中心に、Webサイトのコーディング・実装をしています。</p>
          <p>見た目の再現だけでなく、読みやすさや動き、スマホ表示まで意識して仕上げています。</p>
        </div>
        <p className="coding-note">※画像をクリックすると、公開中のページへ移動します。</p>
      </header>

      <ul className="coding-list">
        {lpProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}

export default Coding
