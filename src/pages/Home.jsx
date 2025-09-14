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
        <p className="hero-subtitle">
          <span style={{padding:'4px 10px', border:'1px solid var(--border)', borderRadius: '999px', background: 'var(--card)'}}>
            Flutter Developer
          </span> • CS Graduate
        </p>
        <p className="hero-summary">
          Passionate Flutter Developer and Computer Science graduate with internship experience in cross-platform mobile app development. 
          Skilled in OOP, algorithms, data structures, Firebase, REST APIs, and SQL. Let's bring your vision to life.
        </p>

        <div className="hero-cta">
          <button className="btn primary" onClick={() => scrollToSection('projects')}>View My Work</button>
          <button className="btn" onClick={() => scrollToSection('contact')}>Get In Touch</button>
          <a className="btn outline" href="/Anees_Ahmed_Resume.pdf" download="Anees_Ahmed_Resume.pdf">Download Resume</a>
          <a className="btn outline" href="https://www.linkedin.com/in/aneesahmed911" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home


