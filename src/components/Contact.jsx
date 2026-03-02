import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Replace with your form backend or mailto / Formspree etc.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">
          Tell me about your project. I'll reply within 24–48 hours.
        </p>
        <div className="contact-box">
          {submitted ? (
            <p className="contact-success">
              Thanks! I'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Project or company name"
              />
              <textarea
                name="message"
                placeholder="What do you need? (e.g. landing page, React app, timeline)"
                rows={4}
                required
              />
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          )}
        </div>
        <p className="contact-email">
          Or email directly: <a href="mailto:contact@pixellayer.com">contact@pixellayer.com</a>
        </p>
      </div>
    </section>
  )
}
