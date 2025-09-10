import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
    root.dataset.theme = isDark ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app-container">
      <header className="site-header">
        <div className="brand">
          <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((v) => !v)}>☰</button>
          <NavLink to="/" className="brand-link">Anees Ahmed</NavLink>
        </div>
        <nav id="primary-navigation" className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
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
        <Outlet />
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

export default RootLayout


