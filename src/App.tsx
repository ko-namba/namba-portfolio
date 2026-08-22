import { useState } from 'react'
import Header, { type PageId } from './components/Header'
import Footer from './components/Footer'
import Coding from './sections/Coding'
import Other from './sections/Other'
import About from './sections/About'
import './App.css'

function App() {
  const [page, setPage] = useState<PageId>('coding')

  return (
    <>
      <Header currentPage={page} onNavigate={setPage} />
      <main className="app">
        {page === 'coding' && <Coding />}
        {page === 'other' && <Other />}
        {page === 'about' && <About />}
      </main>
      <Footer />
    </>
  )
}

export default App
