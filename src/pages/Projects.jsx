function Projects() {
  return (
    <section>
      <h2>Key Projects</h2>
      <div className="grid">
        <article className="card">
          <h3>Downloader App</h3>
          <p>Implemented robust file handling and download APIs with a clean, responsive UI.</p>
          <ul>
            <li>Download management and progress handling</li>
            <li>Responsive layouts across devices</li>
            <li>API integration and error handling</li>
          </ul>
        </article>

        <article className="card">
          <h3>Chatee App</h3>
          <p>Built a real-time chat application with cross-platform messaging and user-friendly layouts.</p>
          <ul>
            <li>Real-time messaging</li>
            <li>Authentication and user presence</li>
            <li>Responsive, accessible UI</li>
          </ul>
        </article>

        <article className="card">
          <h3>Smart Society App (Final Year Project)</h3>
          <p>Full-stack Flutter app with Firebase, Stripe API, Google Maps API, and IoT (Arduino).</p>
          <ul>
            <li>Society management features and notifications</li>
            <li>Rental payments with Stripe</li>
            <li>Map-based location and services</li>
          </ul>
        </article>

        <article className="card">
          <h3>COMSATS GPA Calculator</h3>
          <p>Flutter-based GPA calculator with state management for accurate, real-time results.</p>
        </article>

        <article className="card">
          <h3>Mobile Accessories Management</h3>
          <p>Desktop inventory and sales management app using C#, WPF, and SQL Server.</p>
        </article>
      </div>
    </section>
  )
}

export default Projects


