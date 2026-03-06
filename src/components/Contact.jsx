import { useState } from 'react'

// Replace with your Formspree form ID from https://formspree.io/
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    setLoading(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setSubmitted(true)
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
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
                <div className="form-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="contact-subject">Project or company name</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project or company name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">What do you need?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="e.g. landing page, React app, timeline"
                  rows={4}
                  required
                />
              </div>
              {error && (
                <p className="contact-error">
                  Something went wrong. Please email pixellayer7@gmail.com directly.
                </p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
        <p className="contact-email">
          Or email directly:{' '}
          <a href="mailto:pixellayer7@gmail.com">pixellayer7@gmail.com</a>
        </p>
      </div>
    </section>
  )
}
