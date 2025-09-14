import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Education from './pages/Education.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
    root.dataset.theme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
  }, [theme])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false) // Close mobile menu
  }

  return (
    <div className="app-container">
      <header className="site-header">
        <div className="brand">
          <button 
            className="menu-button" 
            aria-label="Toggle navigation" 
            aria-expanded={open} 
            aria-controls="primary-navigation" 
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
          <button 
            className="brand-link" 
            onClick={() => scrollToSection('home')}
            style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
          >
            Anees Ahmed
          </button>
        </div>
        <nav id="primary-navigation" className={`nav ${open ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          <div className="theme-toggle">
            <label>
              Theme:
              <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </label>
          </div>
        </nav>
      </header>

      <main className="site-main">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Anees Ahmed ·
          {' '}<a href="mailto:aneesahmedkhan911@gmail.com">aneesahmedkhan911@gmail.com</a>
          {' '}· <a href="tel:+923474660911">+92 347 4660911</a>
          {' '}· <a href="https://www.linkedin.com/in/aneesahmed911" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </footer>
    </div>
  )
}

export default App
