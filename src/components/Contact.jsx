import { useEffect, useState } from 'react'
import { EMAIL, ESTIMATOR_URL, FORMSPREE_ID } from '../config/site'
import { readContactHandoff } from '../utils/contactHandoff'
import { buildMailtoHref } from '../utils/mailto'

const PROJECT_TYPES_EN = [
  { value: '', label: 'Select…' },
  { value: 'landing', label: 'Landing page' },
  { value: 'website', label: 'Company / agency website' },
  { value: 'dashboard', label: 'Dashboard / web app UI' },
  { value: 'other', label: 'Other / not sure' },
]

const PROJECT_TYPES_ZH = [
  { value: '', label: '请选择…' },
  { value: 'landing', label: '落地页' },
  { value: 'website', label: '企业 / 工作室官网' },
  { value: 'dashboard', label: '看板 / Web 应用界面' },
  { value: 'other', label: '其他 / 暂不确定' },
]

const TIMELINE_EN = [
  { value: '', label: 'Select…' },
  { value: 'asap', label: 'ASAP (< 2 weeks)' },
  { value: '1month', label: 'Within 1 month' },
  { value: 'flex', label: 'Flexible' },
]

const TIMELINE_ZH = [
  { value: '', label: '请选择…' },
  { value: 'asap', label: '尽快（2 周内）' },
  { value: '1month', label: '1 个月内' },
  { value: 'flex', label: '时间灵活' },
]

export default function Contact({ lang }) {
  const isEn = lang === 'en'
  const formsEnabled = Boolean(FORMSPREE_ID)
  const types = isEn ? PROJECT_TYPES_EN : PROJECT_TYPES_ZH
  const timelines = isEn ? TIMELINE_EN : TIMELINE_ZH

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [projectType, setProjectType] = useState('')
  const [timeline, setTimeline] = useState('')
  const [message, setMessage] = useState('')
  const [handoffRef, setHandoffRef] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const data = readContactHandoff()
    if (!data) return
    setMessage(data.summary)
    setHandoffRef(data.quoteRef ?? true)
  }, [])

  const handoffNote =
    handoffRef === null
      ? ''
      : typeof handoffRef === 'string'
        ? isEn
          ? `Estimate loaded from quote calculator (ref: ${handoffRef}).`
          : `已从报价计算器带入估算（编号：${handoffRef}）。`
        : isEn
          ? 'Estimate loaded from quote calculator.'
          : '已从报价计算器带入估算内容。'

  const mailSubject = isEn
    ? 'Project inquiry — PixelLayer L.L.C'
    : '项目咨询 — PixelLayer L.L.C'
  const mailBodyParts = [
    message,
    projectType ? `\nProject type: ${projectType}` : '',
    timeline ? `\nTimeline: ${timeline}` : '',
  ].filter(Boolean)
  const mailtoHref = buildMailtoHref(EMAIL, mailSubject, mailBodyParts.join(''))

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formsEnabled) return
    setError(false)
    setLoading(true)
    try {
      const body = new FormData()
      body.set('name', name)
      body.set('email', email)
      if (subject) body.set('subject', subject)
      body.set(
        'message',
        [
          message,
          projectType ? `Project type: ${projectType}` : '',
          timeline ? `Timeline: ${timeline}` : '',
        ]
          .filter(Boolean)
          .join('\n\n')
      )
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body,
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
        <p className="contact-estimator-link">
          {isEn ? 'No message yet? ' : '还没有估算？'}
          <a href={ESTIMATOR_URL} target="_blank" rel="noopener noreferrer">
            {isEn ? 'Use the quote calculator first' : '先用报价计算器'}
          </a>
        </p>
        {handoffNote ? (
          <p className="contact-handoff-note" role="status">
            {handoffNote}
          </p>
        ) : null}
        <div className="contact-box">
          {!formsEnabled && !submitted ? (
            <p className="contact-fallback">
              {isEn
                ? 'Email is the fastest way to reach us while the online form is being configured.'
                : '在线表单配置中，请优先通过邮件联系。'}
            </p>
          ) : null}
          {submitted ? (
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={320}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="contact-type">
                    {isEn ? 'Project type' : '项目类型'}
                  </label>
                  <select
                    id="contact-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    {types.map((t) => (
                      <option key={t.value || 'empty'} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-timeline">
                    {isEn ? 'Target timeline' : '期望时间'}
                  </label>
                  <select
                    id="contact-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    {timelines.map((t) => (
                      <option key={t.value || 'empty'} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="contact-subject">
                  {isEn
                    ? 'Company / product name (optional)'
                    : '公司/产品名（可选）'}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  maxLength={200}
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">
                  {isEn ? 'Project details & estimate' : '项目说明与估算摘要'}
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
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
              <div className="contact-actions">
                {formsEnabled ? (
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
                ) : null}
                <a href={mailtoHref} className="btn btn-outline">
                  {isEn ? 'Email instead' : '改用邮件发送'}
                </a>
              </div>
              <p className="contact-legal-note">
                {isEn
                  ? 'By submitting you agree to our '
                  : '提交即表示你已阅读'}
                <a href="#privacy">{isEn ? 'privacy summary' : '隐私说明'}</a>
                {isEn ? '.' : '。'}
              </p>
            </form>
          )}
        </div>
        <p className="contact-email">
          {isEn ? 'Direct email:' : '直接邮件：'}{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  )
}
