import React from 'react'

function Projects() {
  const projects = [
    {
      title: 'Smart Society App',
      description: 'Full-stack Flutter app with Firebase, Stripe API, Google Maps API, and IoT (Arduino).',
      category: 'Flutter',
      features: [
        'Society management features and notifications',
        'Rental payments with Stripe',
        'Map-based location and services',
        'IoT integration with Arduino'
      ],
      technologies: ['Flutter', 'Firebase', 'Stripe API', 'Google Maps', 'Arduino'],
      featured: true
    },
    {
      title: 'Chatee App',
      description: 'Real-time chat application with cross-platform messaging and user-friendly layouts.',
      category: 'Flutter',
      features: [
        'Real-time messaging',
        'Authentication and user presence',
        'Responsive, accessible UI',
        'Cross-platform compatibility'
      ],
      technologies: ['Flutter', 'Firebase', 'Real-time Database'],
      featured: true
    },
    {
      title: 'Downloader App',
      description: 'Robust file handling and download management with clean, responsive UI.',
      category: 'Flutter',
      features: [
        'Download management and progress handling',
        'Responsive layouts across devices',
        'API integration and error handling',
        'Background download support'
      ],
      technologies: ['Flutter', 'Dart', 'HTTP APIs'],
      featured: false
    },
    {
      title: 'COMSATS GPA Calculator',
      description: 'Flutter-based GPA calculator with state management for accurate, real-time results.',
      category: 'Flutter',
      features: [
        'Real-time GPA calculation',
        'State management',
        'Course management',
        'Grade tracking'
      ],
      technologies: ['Flutter', 'Dart', 'State Management'],
      featured: false
    },
    {
      title: 'Mobile Accessories Management',
      description: 'Desktop inventory and sales management app using C#, WPF, and SQL Server.',
      category: 'Desktop',
      features: [
        'Inventory management',
        'Sales tracking',
        'Database integration',
        'User authentication'
      ],
      technologies: ['C#', 'WPF', 'SQL Server', '.NET'],
      featured: false
    }
  ]

  const categories = ['All', 'Flutter', 'Desktop', 'Web']
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section>
      <div className="section-header">
        <h2>Projects</h2>
        <p>Explore my latest projects in Flutter mobile apps, desktop applications, and modern UI/UX designs crafted with creativity and precision.</p>
      </div>

      {/* Project Filter */}
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

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <article key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-category">{project.category}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <ul className="project-features">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects


