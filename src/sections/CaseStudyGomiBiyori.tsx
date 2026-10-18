import { useEffect, useState } from 'react'
import './CaseStudyGomiBiyori.css'

const IMG = '/works/gomi-biyori'

const screens = [
  { src: `${IMG}/onboarding-1.png`, caption: 'はじめての設定 1/2：地区を選ぶ' },
  { src: `${IMG}/onboarding-2.png`, caption: 'はじめての設定 2/2：建物のルール' },
  { src: `${IMG}/home-morning.png`, caption: 'ホーム（当日朝）' },
  { src: `${IMG}/home-after.png`, caption: 'ホーム（収集後）' },
  { src: `${IMG}/calendar.png`, caption: '収集カレンダー' },
  { src: `${IMG}/search.png`, caption: '分別検索' },
  { src: `${IMG}/settings.png`, caption: '設定' },
  { src: `${IMG}/settings-area.png`, caption: '設定 → 地区の変更' },
  { src: `${IMG}/settings-rules.png`, caption: '設定 → 建物のルール' },
] as const

const widgets = [
  { src: `${IMG}/widget-s.png`, caption: '小：今日だけ', sizeClass: 'case-study-widget--s' },
  { src: `${IMG}/widget-m.png`, caption: '中：今日と明日', sizeClass: 'case-study-widget--m' },
] as const

type LightboxItem = { src: string; caption: string }

interface Props {
  onBack: () => void
}

function CaseStudyGomiBiyori({ onBack }: Props) {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightbox])

  return (
    <article className="case-study">
      <button type="button" className="case-study-back" onClick={onBack}>
        ← Other に戻る
      </button>

      <header className="case-study-hero">
        <span className="case-study-label">UX Case Study</span>
        <h1 className="case-study-title">ごみ日和</h1>
        <p className="case-study-lead">
          実家を出て初めてゴミ出しをする人が、覚えようと頑張らなくてもゴミをためずに暮らせるWebアプリのデザインケーススタディです。
        </p>
        <ul className="case-study-meta">
          <li>
            <span className="label">役割</span>
            <span>リサーチ、課題定義、UX設計、UIデザイン</span>
          </li>
          <li>
            <span className="label">期間</span>
            <span>2026年10月〜</span>
          </li>
          <li>
            <span className="label">ツール</span>
            <span>Figma、Cursor</span>
          </li>
          <li>
            <span className="label">対象</span>
            <span>デザインは架空の市「桜市」。実装時は実在する市の公開データを使う予定</span>
          </li>
          <li>
            <span className="label">形態</span>
            <span>Webアプリ（ウィジェットはFigmaでデザインのみ）</span>
          </li>
        </ul>
        <figure className="case-study-hero-image">
          <img
            src={`${IMG}/hero-home.png`}
            alt="ごみ日和のホーム画面（当日朝）"
            loading="eager"
          />
        </figure>
      </header>

      <section className="case-study-section">
        <h2>背景</h2>
        <p>
          半年前、私は実家を出て集合住宅で一人暮らしを始めました。実家ではゴミ出しをしたことがなく、燃えるゴミの日はなんとか覚えたものの、それ以外の収集日はまったく覚えられませんでした。出し忘れたゴミは、部屋のゴミ箱にたまっていきました。
        </p>
        <p>
          調べてみると、引っ越し経験者の58.3%が引っ越し先のローカルルールに驚いた経験があり、そのうち49.5%が「ごみの出し方」を理由に挙げていました（株式会社トナリスク調査、2023年、551名）。自分だけの問題ではないと考え、このテーマを選びました。
        </p>
      </section>

      <section className="case-study-section">
        <h2>リサーチ</h2>
        <p>人を集めてインタビューをすることが難しかったため、次の4つの方法を組み合わせました。</p>
        <div className="case-study-table-wrap">
          <table className="case-study-table">
            <thead>
              <tr>
                <th>方法</th>
                <th>内容</th>
                <th>位置づけ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>競合調査</td>
                <td>自治体アプリ、自治体のLINE、5374.jp、カレンダーアプリの4つを比較</td>
                <td>公開情報</td>
              </tr>
              <tr>
                <td>レビュー分析</td>
                <td>ゴミ分別アプリ3つのレビュー27件を分類</td>
                <td>実際の利用者の声</td>
              </tr>
              <tr>
                <td>当事者としての振り返り</td>
                <td>自分自身の経験をインタビュー形式で振り返り</td>
                <td>実体験（1名）</td>
              </tr>
              <tr>
                <td>AIによる模擬インタビュー</td>
                <td>AIが演じる架空の人物に2回インタビュー</td>
                <td>質問設計の練習と仮説出し（ユーザーの声としては扱わない）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>競合調査で分かったこと</h3>
        <p>
          既存のサービスは「住む地域が決まった人に収集日を知らせる」ことはできています。一方で、地域選択や通知設定などの初期設定を自分で行う必要があり、建物ごとのルール（前の夜から出せるかどうか）は扱っていませんでした。
        </p>

        <h3>レビュー分析で分かったこと</h3>
        <div className="case-study-table-wrap">
          <table className="case-study-table">
            <thead>
              <tr>
                <th>不満のテーマ</th>
                <th>件数</th>
                <th>実際の声（抜粋）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>肝心な時に開けない</td>
                <td>8</td>
                <td>ゴミ出しの日の朝にアプリを開こうとすると…間に合わない</td>
              </tr>
              <tr>
                <td>情報が古い・間違っている</td>
                <td>3</td>
                <td>アプリに書いてある通りに出したのに回収されなかった</td>
              </tr>
              <tr>
                <td>通知のタイミングや対象が合わない</td>
                <td>3</td>
                <td>月に1回の…準備が必要なゴミ出し通知としては遅すぎて</td>
              </tr>
              <tr>
                <td>分別が分かっても、出し方が分からない</td>
                <td>2</td>
                <td>引っ越して来たばかりで…またネットで調べなきゃならない</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>27件と小さなサンプルのため、傾向をつかむための調査として扱いました。</p>

        <h3>当事者としての振り返りで分かったこと</h3>
        <div className="case-study-table-wrap">
          <table className="case-study-table">
            <thead>
              <tr>
                <th>事実</th>
                <th>分かったこと</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>燃えるゴミを忘れるのは、朝急いでいた時</td>
                <td>前の夜に思い出させる方が効く</td>
              </tr>
              <tr>
                <td>冷蔵庫に貼った市の紙は、あまり見ない</td>
                <td>自分から見に行く仕組みでは届かない</td>
              </tr>
              <tr>
                <td>週2回以外のゴミは覚えられない</td>
                <td>月1回のゴミを1回逃すと、次が遠い</td>
              </tr>
              <tr>
                <td>出し忘れたら「また忘れた」と放置</td>
                <td>忘れた後に立て直す手段がなく、あきらめる</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>AIによる模擬インタビューで出てきた仮説</h3>
        <p>
          架空の人物へのインタビューで「ゴミの日を書いたメモを待ち受けにしている」という工夫が出てきました。ここから「開かなくても目に入る場所に置く方が効くのではないか」という仮説を立てました。架空の回答のため、仮説としてのみ扱っています。
        </p>
      </section>

      <section className="case-study-section">
        <h2>課題の定義</h2>
        <h3>ペルソナ</h3>
        <p>
          <strong>ひなた（20代・社会人・一人暮らし半年）</strong>
          <br />
          実家を出て集合住宅に住み始めた。実家ではゴミ出しをしたことがない。収集日は市の紙を冷蔵庫に貼っているが、ほとんど見ていない。ゴールは、覚えようと頑張らなくてもゴミをためずに暮らすこと。
        </p>
        <h3>課題文</h3>
        <blockquote className="case-study-quote">
          実家を出て初めてゴミ出しをする人は、朝の忙しさの中で収集日を思い出せない。特に月1〜2回のゴミは覚える手がかりがなく、出し忘れが続いてゴミが部屋にたまり、あきらめてしまう。
        </blockquote>
        <h3>デザインの問い</h3>
        <ul>
          <li>どうすれば、前の夜のいつもの行動の中で、ゴミ出しを思い出せるか？</li>
          <li>どうすれば、回数の少ないゴミを「覚えなくても」出せるようになるか？</li>
          <li>どうすれば、出し忘れた後に「次こそ出せる」と思えるか？</li>
        </ul>
      </section>

      <section className="case-study-section">
        <h2>デザインの原則</h2>
        <ol className="case-study-principles">
          <li>
            <strong>見に行かせず、目に入れる</strong>
            開かなくても、普段見る場所に必要な情報がある
          </li>
          <li>
            <strong>計算させない</strong>
            「第2水曜」ではなく「今日・明日」や具体的な日付で伝える
          </li>
          <li>
            <strong>建物のルールに合わせる</strong>
            前の夜に出せるなら、前の夜に知らせる
          </li>
          <li>
            <strong>出し方まで一度に</strong>
            何ゴミかだけでなく、どう出すかも同時に分かる
          </li>
          <li>
            <strong>忘れても責めない</strong>
            次の収集日を示して、あきらめを防ぐ
          </li>
        </ol>
      </section>

      <section className="case-study-section">
        <h2>設計</h2>
        <h3>利用シーン</h3>
        <ol>
          <li>
            <strong>はじめて使う</strong>
            ：アカウント登録なし。地区を選ぶ → 建物のルールを選ぶ、の2ステップ。通知の許可は初回では求めず、ホームで案内する
          </li>
          <li>
            <strong>いつもの前夜／当日朝</strong>
            ：ホームで「何を、いつまでに」が一目で分かる
          </li>
          <li>
            <strong>収集後</strong>
            ：責める言葉を使わず、次の収集日と保管のコツを伝える
          </li>
          <li>
            <strong>捨て方が分からない物</strong>
            ：分別検索で種類・出し方・次に出せる日を一度に確認する
          </li>
        </ol>

        <h3>作らないと決めたこと</h3>
        <ul>
          <li>
            <strong>「出した」ボタン</strong>
            ：毎回押す手間が増えるため。収集日が過ぎたら、出したかどうかに関係なく次の収集日を表示する
          </li>
          <li>
            <strong>アカウント登録</strong>
            ：初期設定でつまずくと、その日のうちにやめてしまうため
          </li>
          <li>
            <strong>ホーム画面ウィジェットの実装</strong>
            ：Webでは作れないため、Figmaでデザインのみ作成し、Web版はホーム画面への追加と通知で代用する
          </li>
        </ul>
      </section>

      <section className="case-study-section">
        <h2>デザイン</h2>
        <h3>ワイヤーフレームから変えた点</h3>
        <p>
          最初の案にはログイン画面があり、初回のあとに通知の許可を求めていました。リサーチの結論に合わせ、次のように変えました。
        </p>
        <div className="case-study-table-wrap">
          <table className="case-study-table">
            <thead>
              <tr>
                <th>変える前</th>
                <th>変えた後</th>
                <th>理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ログイン画面がある</td>
                <td>なくし、地区選択から始める</td>
                <td>アカウント登録を求めない方針と一致させる</td>
              </tr>
              <tr>
                <td>初回設定が3ステップ以上</td>
                <td>地区 → 建物のルール、の2ステップ</td>
                <td>始めるまでの手間を最小にする</td>
              </tr>
              <tr>
                <td>初回で通知の許可を求める</td>
                <td>ホームに案内カードを置く</td>
                <td>先に価値を見せてから、通知を提案する</td>
              </tr>
              <tr>
                <td>建物のルールと通知時刻が別画面</td>
                <td>ルールを選ぶと、通知時刻がその場で決まる</td>
                <td>答えると何が決まるかが、その場で分かる</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>画面</h3>
        <p className="case-study-hint">画像をクリックすると大きく表示されます。</p>
        <ul className="case-study-gallery">
          {screens.map((screen) => (
            <li key={screen.src}>
              <figure>
                <button
                  type="button"
                  className="case-study-zoom"
                  onClick={() => setLightbox(screen)}
                  aria-label={`${screen.caption}を大きく表示`}
                >
                  <img src={screen.src} alt="" loading="lazy" />
                </button>
                <figcaption>{screen.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <h3>ウィジェット（Figmaのみ）</h3>
        <p className="case-study-hint">画像をクリックすると大きく表示されます。</p>
        <div className="case-study-widgets">
          {widgets.map((widget) => (
            <figure key={widget.src} className={widget.sizeClass}>
              <button
                type="button"
                className="case-study-zoom"
                onClick={() => setLightbox(widget)}
                aria-label={`${widget.caption}を大きく表示`}
              >
                <img src={widget.src} alt="" loading="lazy" />
              </button>
              <figcaption>{widget.caption}</figcaption>
            </figure>
          ))}
        </div>

        <h3>デザインで工夫した点</h3>
        <ul>
          <li>
            <strong>色・アイコン・文字の3つで種類を伝える</strong>
            ：色が分からなくても見分けられるようにした
          </li>
          <li>
            <strong>「いつまでに」を一緒に見せる</strong>
            ：当日朝のホームに「朝8:00までに集積所へ」を入れた
          </li>
          <li>
            <strong>収集後は「次の日付」を主役にする</strong>
            ：責め言葉は使わず、次の収集日と保管のコツを伝える
          </li>
          <li>
            <strong>建物のルールが通知を変える</strong>
            ：「当日の朝だけ」なら前日通知を「なし」にする
          </li>
          <li>
            <strong>配色</strong>
            ：毎日目に入るものなので、警告のような強い色を避け、ベージュの背景と深い緑で落ち着いた印象にした
          </li>
        </ul>
      </section>

      <section className="case-study-section">
        <h2>検証と次の課題</h2>
        <p className="case-study-note">
          ユーザビリティテストはこれから実施予定です。家族や友人にプロトタイプを触ってもらい、初回設定と収集後のホームで迷う点がないかを確認します。
        </p>
        <ul>
          <li>実在のユーザーへのインタビュー</li>
          <li>Webアプリとしての実装（ホーム画面への追加と通知）</li>
          <li>Figmaプロトタイプの公開</li>
        </ul>
      </section>

      <section className="case-study-section">
        <h2>出典</h2>
        <ul className="case-study-sources">
          <li>
            株式会社トナリスク「引っ越し先で驚いたローカルルール」調査（2023年、引っ越し経験者551名）
          </li>
          <li>
            App Store / Google Play のゴミ分別アプリ公開レビュー（2026年10月閲覧）
          </li>
        </ul>
      </section>

      {lightbox && (
        <div
          className="case-study-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="case-study-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="閉じる"
          >
            ×
          </button>
          <figure
            className="case-study-lightbox-figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.caption} />
            <figcaption>{lightbox.caption}</figcaption>
          </figure>
        </div>
      )}
    </article>
  )
}

export default CaseStudyGomiBiyori
