import React from 'react'

function About() {
  return (
    <section>
      <div className="section-header">
        <h2>About Me</h2>
        <p>Building Cross-Platform Apps & Websites That Inspire</p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate Flutter Developer and Computer Science graduate with a strong foundation in creating scalable, 
              user-friendly, and visually engaging applications. With expertise in Flutter, Dart, Firebase, C#, Java, Python, 
              HTML, CSS, and JavaScript, I deliver cross-platform mobile apps and responsive websites that meet modern business needs.
            </p>
            
            <p>
              From concept to deployment, I focus on combining innovative design with functional development. I thrive in 
              collaborative environments, constantly learning and applying the latest technologies to bring ideas to life.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div>
                  <h4>Specialization</h4>
                  <p>Mobile App Development (Flutter) & Web Development</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <div>
                  <h4>Experience Level</h4>
                  <p>Junior Developer with 1+ years of hands-on experience</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div>
                  <h4>Education</h4>
                  <p>BS Computer Science, COMSATS University Islamabad</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">🌍</div>
                <div>
                  <h4>Languages</h4>
                  <p>English, Urdu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <button 
              className="btn primary" 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Let's Talk
            </button>
            <a 
              className="btn outline" 
              href="/Anees_Ahmed_Resume.pdf" 
              download="Anees_Ahmed_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
