import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate form submission (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, we'll just show success
      // In production, you'd integrate with services like:
      // - EmailJS
      // - Formspree
      // - Netlify Forms
      // - Custom backend API
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section>
      <div className="section-header">
        <h2>Contact</h2>
        <p>Let's connect! Whether you have a project in mind, want to collaborate, or just say hello — I'd love to hear from you.</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Feel free to reach out for work inquiries, collaborations, or freelance opportunities.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:aneesahmedkhan911@gmail.com">aneesahmedkhan911@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+923474660911">+92 347 4660911</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">💼</div>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/aneesahmed911" target="_blank" rel="noreferrer">
                  linkedin.com/in/aneesahmed911
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <span>Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h3>Get In Touch</h3>
          <p>Send me a message and I'll get back to you as soon as possible.</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn primary submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-status success">
                ✅ Your message has been sent. Thank you!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-status error">
                ❌ Something went wrong. Please try again or contact me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact


