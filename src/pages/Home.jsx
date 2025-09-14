function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Anees Ahmed</h1>
        <p className="hero-subtitle"><span style={{padding:'4px 10px', border:'1px solid var(--border)', borderRadius: '999px', background: 'var(--card)'}}>Flutter Developer</span> • CS Graduate</p>
        <p className="hero-summary">
          Motivated Computer Science graduate with internship experience in Flutter and cross-platform mobile app development. Skilled in OOP, algorithms, data structures, Firebase, REST APIs, and SQL.
        </p>

        <div className="hero-cta">
          <button className="btn primary" onClick={() => scrollToSection('projects')}>View Projects</button>
          <button className="btn" onClick={() => scrollToSection('contact')}>Contact Me</button>
          <a className="btn outline" href="https://www.linkedin.com/in/aneesahmed911" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Home


