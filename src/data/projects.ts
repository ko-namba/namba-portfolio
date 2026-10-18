/** 1作品のデータの形 */
export interface Project {
  id: number
  title: string
  label: string
  /** 外部サイトのURL（ケーススタディのときは省略可） */
  url?: string
  /** 内部ケーススタディのID（あるとカードからページへ移動） */
  caseStudyId?: 'gomi-biyori'
  /** サムネイル画像（public 配下） */
  image?: string
  /** リポジトリURL（任意） */
  githubUrl?: string
  category: 'web' | 'other'
  color: string
  textColor: string
}

/** 作品一覧 */
export const projects: Project[] = [
  {
    id: 7,
    title: 'ごみ日和',
    label: 'UX Case Study',
    caseStudyId: 'gomi-biyori',
    image: '/works/gomi-biyori/home-morning.png',
    category: 'other',
    color: '#3d5a47',
    textColor: '#f5f2eb',
  },
  {
    id: 1,
    title: 'MoneyMind',
    label: 'AI App',
    url: 'https://moneymind-ai-zeta.vercel.app',
    image: '/works/moneymind.jpg',
    githubUrl: 'https://github.com/ko-namba/moneymind-ai',
    category: 'other',
    color: '#2f3d36',
    textColor: '#eef3f0',
  },
  {
    id: 2,
    title: '平和を未来へつなぐメッセージ',
    label: 'LP',
    url: 'https://kumikatsu.kobe.coop/heiwavoice/',
    image: '/works/heiwavoice.jpg',
    category: 'web',
    color: '#ebe7e0',
    textColor: '#1f1f1f',
  },
  {
    id: 3,
    title: 'こどもの100か月',
    label: 'LP',
    url: 'https://www.kobe.coop.or.jp/special/100months/',
    image: '/works/100months.jpg',
    category: 'web',
    color: '#e2ddd4',
    textColor: '#1f1f1f',
  },
  {
    id: 4,
    title: 'ミールキット',
    label: 'LP',
    url: 'https://maikuru.coop-kobe.net/mealkit/',
    image: '/works/mealkit.jpg',
    category: 'web',
    color: '#2a2a2a',
    textColor: '#f7f6f3',
  },
  {
    id: 5,
    title: 'クレリライフ（納骨）',
    label: 'LP',
    url: 'https://www.cleri-net.or.jp/cleri-life/noukotsu/',
    image: '/works/noukotsu.jpg',
    category: 'web',
    color: '#f0ece5',
    textColor: '#1f1f1f',
  },
  {
    id: 6,
    title: 'クレリライフ（家族葬）',
    label: 'LP',
    url: 'https://www.cleri-net.or.jp/cleri-life/family-funeral/',
    image: '/works/family-funeral.jpg',
    category: 'web',
    color: '#3d3a35',
    textColor: '#f7f6f3',
  },
]
