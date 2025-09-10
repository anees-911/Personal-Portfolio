function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Anees Ahmed</h1>
        <p className="hero-subtitle"><span style={{padding:'4px 10px', border:'1px solid var(--border)', borderRadius: '999px', background: 'var(--card)'}}>Flutter Developer</span> • CS Graduate</p>
        <p className="hero-summary">
          Motivated Computer Science graduate with internship experience in Flutter and cross-platform mobile app development. Skilled in OOP, algorithms, data structures, Firebase, REST APIs, and SQL.
        </p>

        <div className="hero-cta">
          <a className="btn primary" href="/projects">View Projects</a>
          <a className="btn" href="/contact">Contact Me</a>
          <a className="btn outline" href="https://www.linkedin.com/in/aneesahmed911" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Home


