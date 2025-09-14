import React from 'react'

function Skills() {
  const skills = [
    { name: 'Flutter / Dart', percentage: 85, category: 'Mobile Development' },
    { name: 'Firebase', percentage: 80, category: 'Mobile Development' },
    { name: 'HTML / CSS / JavaScript', percentage: 75, category: 'Web Development' },
    { name: 'C# / .NET', percentage: 70, category: 'Programming' },
    { name: 'Java', percentage: 65, category: 'Programming' },
    { name: 'Python', percentage: 60, category: 'Programming' },
    { name: 'SQL / MySQL', percentage: 75, category: 'Database' },
    { name: 'Git / GitHub', percentage: 80, category: 'Tools' },
    { name: 'UI/UX Design', percentage: 70, category: 'Design' },
    { name: 'REST APIs', percentage: 75, category: 'Web Development' }
  ]

  const categories = ['All', 'Mobile Development', 'Web Development', 'Programming', 'Database', 'Tools', 'Design']
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section>
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technical expertise in cross-platform mobile app development and web technologies, delivering scalable and user-friendly solutions.</p>
      </div>

      {/* Skills Filter */}
      <div className="skills-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-progress">
              <div 
                className="skill-progress-bar" 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <p className="skill-category">{skill.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills


