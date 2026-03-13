import { useState } from 'react'

// Replace with your Formspree form ID from https://formspree.io/
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function Contact({ lang }) {
  const isEn = lang === 'en'

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
        <h2 className="section-title">
          {isEn ? "Let's Work Together" : '聊聊你的项目'}
        </h2>
        <p className="section-subtitle">
          {isEn
            ? "Tell me about your project. I'll reply within 24–48 hours."
            : '简单介绍一下你的项目和时间计划，我会在 24–48 小时内回复你。'}
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
                  <label htmlFor="contact-name">
                    {isEn ? 'Your name' : '你的名字'}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">
                    {isEn ? 'Email' : '邮箱'}
                  </label>
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
                <label htmlFor="contact-subject">
                  {isEn ? 'Project or company name' : '项目或公司名称（可选）'}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project or company name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">
                  {isEn ? 'What do you need?' : '你希望我们帮你做什么？'}
                </label>
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
                  {isEn
                    ? 'Something went wrong. Please email pixellayer7@gmail.com directly.'
                    : '提交失败，请直接发送邮件到 pixellayer7@gmail.com。'}
                </p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading
                  ? isEn
                    ? 'Sending…'
                    : '发送中…'
                  : isEn
                    ? 'Send Message'
                    : '发送消息'}
              </button>
            </form>
          )}
        </div>
        <p className="contact-email">
          {isEn ? 'Or email directly:' : '也可以直接发邮件到：'}{' '}
          <a href="mailto:pixellayer7@gmail.com">pixellayer7@gmail.com</a>
        </p>
      </div>
    </section>
  )
}
