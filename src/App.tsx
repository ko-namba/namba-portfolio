import { useEffect, useState } from 'react'
import Header, { type PageId } from './components/Header'
import Footer from './components/Footer'
import Coding from './sections/Coding'
import Other from './sections/Other'
import About from './sections/About'
import CaseStudyGomiBiyori from './sections/CaseStudyGomiBiyori'
import type { Project } from './data/projects'
import './App.css'

type CaseStudyId = NonNullable<Project['caseStudyId']>

function parseHash(): { page: PageId; caseStudy: CaseStudyId | null } {
  const raw = window.location.hash.replace(/^#\/?/, '')
  if (raw === 'works/gomi-biyori') {
    return { page: 'other', caseStudy: 'gomi-biyori' }
  }
  if (raw === 'other' || raw === 'about' || raw === 'coding') {
    return { page: raw, caseStudy: null }
  }
  return { page: 'coding', caseStudy: null }
}

function App() {
  const initial = parseHash()
  const [page, setPage] = useState<PageId>(initial.page)
  const [caseStudy, setCaseStudy] = useState<CaseStudyId | null>(initial.caseStudy)

  const goPage = (next: PageId) => {
    setCaseStudy(null)
    setPage(next)
    window.location.hash = next === 'coding' ? '' : next
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openCaseStudy = (id: CaseStudyId) => {
    setPage('other')
    setCaseStudy(id)
    window.location.hash = `works/${id}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const closeCaseStudy = () => {
    setCaseStudy(null)
    setPage('other')
    window.location.hash = 'other'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash()
      setPage(next.page)
      setCaseStudy(next.caseStudy)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Header currentPage={page} onNavigate={goPage} />
      <main className="app">
        {caseStudy === 'gomi-biyori' ? (
          <CaseStudyGomiBiyori onBack={closeCaseStudy} />
        ) : (
          <>
            {page === 'coding' && <Coding />}
            {page === 'other' && <Other onOpenCaseStudy={openCaseStudy} />}
            {page === 'about' && <About />}
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
