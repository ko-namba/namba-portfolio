import { useEffect, useState } from 'react'
import './Header.css'

export type PageId = 'coding' | 'other' | 'about'

const navItems: { id: PageId; label: string }[] = [
  { id: 'coding', label: 'Coding' },
  { id: 'other', label: 'Other' },
  { id: 'about', label: 'About me' },
]

interface HeaderProps {
  currentPage: PageId
  onNavigate: (page: PageId) => void
}

function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  const go = (page: PageId) => {
    onNavigate(page)
    closeMenu()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="header">
      <div className="header-inner">
        <button
          type="button"
          className="header-logo"
          onClick={() => go('coding')}
        >
          <span className="header-logo-main">NAMBA KOKI</span>
          <span className="header-logo-sub">portfolio</span>
        </button>

        <div className="header-socials" aria-label="ソーシャルリンク">
          <a
            className="header-social"
            href="https://github.com/ko-namba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.367 6.839 9.72.5.094.683-.222.683-.486 0-.24-.009-.875-.014-1.717-2.782.62-3.369-1.372-3.369-1.372-.454-1.178-1.11-1.491-1.11-1.491-.908-.638.069-.625.069-.625 1.004.072 1.532 1.057 1.532 1.057.892 1.567 2.341 1.114 2.91.852.092-.663.35-1.115.636-1.371-2.22-.259-4.555-1.14-4.555-5.073 0-1.121.39-2.038 1.029-2.756-.103-.26-.446-1.302.098-2.714 0 0 .84-.276 2.75 1.052A9.33 9.33 0 0 1 12 6.844a9.3 9.3 0 0 1 2.504.346c1.909-1.328 2.747-1.052 2.747-1.052.546 1.412.203 2.454.1 2.714.64.718 1.028 1.635 1.028 2.756 0 3.943-2.339 4.811-4.566 5.065.36.318.68.945.68 1.905 0 1.374-.012 2.482-.012 2.82 0 .267.18.586.688.486A10.02 10.02 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z"
              />
            </svg>
          </a>
        </div>

        <nav className="header-nav" aria-label="メインメニュー">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`header-link${currentPage === item.id ? ' is-active' : ''}`}
                  onClick={() => go(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="header-menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="header-nav-mobile"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <nav
        id="header-nav-mobile"
        className={`header-nav-mobile${isMenuOpen ? ' is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`header-link${currentPage === item.id ? ' is-active' : ''}`}
                onClick={() => go(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
