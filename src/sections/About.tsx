import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <h1 className="about-name">難波 昂輝</h1>
      <p className="about-role">Webプログラマー / UX・UIデザイン学習中</p>

      <div className="about-body">
        <p>Webプログラマーとして、Webサイトの制作や既存Webサイトの運用・改修に取り組んでいます。</p>
        <p>WordPress・MTサイトの改修や、PHPを使った実装も行っています。</p>
        <p>デザインの意図をくみ取りつつ、更新しやすく安心して運用できる実装を心がけています。</p>
        <p>
          あわせてUX・UIデザインの学習として、ゴミ出し忘れ防止アプリ「ごみ日和」のケーススタディを制作しています。
        </p>
      </div>

      <div className="about-block">
        <h2 className="about-heading">できること</h2>
        <ul className="about-list">
          <li>
            <span className="about-list-label">Webページ（LP）</span>
            <span className="about-list-text">コーディング・実装</span>
          </li>
          <li>
            <span className="about-list-label">フロントエンド</span>
            <span className="about-list-text">HTML / CSS / JavaScript</span>
          </li>
          <li>
            <span className="about-list-label">CMS / サーバーサイド</span>
            <span className="about-list-text">WordPress / MT / PHP</span>
          </li>
          <li>
            <span className="about-list-label">デザインツール</span>
            <span className="about-list-text">Figma / Illustrator / Photoshop</span>
          </li>
          <li>
            <span className="about-list-label">学習中</span>
            <span className="about-list-text">React / TypeScript / UX・UIデザイン（独学）</span>
          </li>
          <li>
            <span className="about-list-label">アプリ制作</span>
            <span className="about-list-text">AI家計簿アプリ「MoneyMind」</span>
          </li>
          <li>
            <span className="about-list-label">UXケーススタディ</span>
            <span className="about-list-text about-list-text--wrap">
              ゴミ出し忘れ防止アプリ「ごみ日和」
              <a className="about-inline-link" href="#works/gomi-biyori">
                ケーススタディを見る
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="about-block">
        <h2 className="about-heading">リンク</h2>
        <p className="about-link-row">
          <a
            className="about-link"
            href="https://github.com/ko-namba"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a className="about-link" href="#works/gomi-biyori">
            ごみ日和 ケーススタディ
          </a>
        </p>
      </div>
    </section>
  )
}

export default About
