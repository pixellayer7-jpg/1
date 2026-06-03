import { useState } from 'react'
import { EMAIL, FORMSPREE_ID } from '../config/site'

export default function Contact({ lang }) {
  const isEn = lang === 'en'
  const formsEnabled = Boolean(FORMSPREE_ID)

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formsEnabled) return
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
          {!formsEnabled ? (
            <p className="contact-fallback">
              {isEn
                ? 'Email is the fastest way to reach us while the online form is being configured.'
                : '在线表单配置中，请优先通过邮件联系。'}
            </p>
          ) : submitted ? (
            <p className="contact-success">
              {isEn
                ? "Thanks! I'll get back to you soon."
                : '已收到，我会尽快回复。'}
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
                    placeholder={isEn ? 'Your name' : '姓名'}
                    required
                    maxLength={120}
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
                    placeholder="you@company.com"
                    required
                    maxLength={320}
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
                  placeholder={
                    isEn ? 'Project or company name' : '项目或公司名称'
                  }
                  maxLength={200}
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">
                  {isEn ? 'What do you need?' : '你希望我们帮你做什么？'}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder={
                    isEn
                      ? 'e.g. landing page, React app, timeline'
                      : '例如：落地页、React 应用、期望上线时间'
                  }
                  rows={4}
                  required
                  maxLength={8000}
                />
              </div>
              {error && (
                <p className="contact-error">
                  {isEn
                    ? `Something went wrong. Please email ${EMAIL} directly.`
                    : `提交失败，请直接发送邮件到 ${EMAIL}。`}
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
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  )
}
