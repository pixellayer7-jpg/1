import { useEffect, useState } from 'react'
import {
  EMAIL,
  ESTIMATOR_URL,
  FORMSPREE_ID,
  LEAD_API_URL,
} from '../config/site'
import { buildMailtoHref } from '../utils/mailto'
import { copyTextToClipboard } from '../utils/copyEmail'
import { normalizeLeadApiBase, postLeadSnapshot } from '../utils/leadApi'
import { hydrateContactForm } from '../utils/hydrateContact'

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

const COPY_RESET_MS = 2000

export default function Contact({ lang }) {
  const isEn = lang === 'en'
  const formsEnabled = Boolean(FORMSPREE_ID)
  const leadApiBase = normalizeLeadApiBase(LEAD_API_URL)
  const leadApiEnabled = Boolean(leadApiBase)
  const canSubmitOnline = formsEnabled || leadApiEnabled
  const types = isEn ? PROJECT_TYPES_EN : PROJECT_TYPES_ZH
  const timelines = isEn ? TIMELINE_EN : TIMELINE_ZH

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [projectType, setProjectType] = useState('')
  const [timeline, setTimeline] = useState('')
  const [message, setMessage] = useState('')
  const [handoffRef, setHandoffRef] = useState(null)
  const [handoffRange, setHandoffRange] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [hydrating, setHydrating] = useState(true)
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const data = await hydrateContactForm(leadApiBase, lang)
      if (cancelled || !data) {
        if (!cancelled) setHydrating(false)
        return
      }
      setMessage(data.summary)
      setHandoffRef(data.quoteRef ?? true)
      if (data.projectType) setProjectType(data.projectType)
      if (data.range) setHandoffRange(data.range)
      if (!cancelled) setHydrating(false)
    })()
    return () => {
      cancelled = true
    }
  }, [lang, leadApiBase])

  useEffect(() => {
    if (!emailCopied) return undefined
    const timer = window.setTimeout(() => setEmailCopied(false), COPY_RESET_MS)
    return () => window.clearTimeout(timer)
  }, [emailCopied])

  const handoffNote =
    handoffRef === null
      ? ''
      : [
          typeof handoffRef === 'string'
            ? isEn
              ? `Estimate loaded from quote calculator (ref: ${handoffRef}).`
              : `已从报价计算器带入估算（编号：${handoffRef}）。`
            : isEn
              ? 'Estimate loaded from quote calculator.'
              : '已从报价计算器带入估算内容。',
          handoffRange
            ? isEn
              ? `Indicative range: ${handoffRange}.`
              : `参考区间：${handoffRange}。`
            : '',
        ]
          .filter(Boolean)
          .join(' ')

  const mailSubject = isEn
    ? 'Project inquiry — PixelLayer L.L.C'
    : '项目咨询 — PixelLayer L.L.C'
  const mailBodyParts = [
    name ? (isEn ? `Name: ${name}` : `姓名：${name}`) : '',
    email ? (isEn ? `Reply-to: ${email}` : `回复邮箱：${email}`) : '',
    message,
    subject
      ? isEn
        ? `Company/product: ${subject}`
        : `公司/产品：${subject}`
      : '',
    projectType
      ? isEn
        ? `Project type: ${projectType}`
        : `项目类型：${projectType}`
      : '',
    timeline ? (isEn ? `Timeline: ${timeline}` : `期望时间：${timeline}`) : '',
    typeof handoffRef === 'string'
      ? isEn
        ? `Quote ref: ${handoffRef}`
        : `估算编号：${handoffRef}`
      : '',
  ].filter(Boolean)
  const mailtoHref = buildMailtoHref(
    EMAIL,
    mailSubject,
    mailBodyParts.join('\n\n')
  )

  async function handleCopyEmail() {
    const ok = await copyTextToClipboard(EMAIL)
    if (ok) setEmailCopied(true)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmitOnline) return
    setError(false)
    setLoading(true)
    const quoteRefId = typeof handoffRef === 'string' ? handoffRef : null
    const leadPayload = {
      name,
      email,
      message: [
        message,
        projectType ? `Project type: ${projectType}` : '',
        timeline ? `Timeline: ${timeline}` : '',
        subject ? `Company/product: ${subject}` : '',
      ]
        .filter(Boolean)
        .join('\n\n'),
      subject: subject || null,
      projectType: projectType || null,
      timeline: timeline || null,
      quoteRef: quoteRefId,
      source: 'landing',
      lang,
    }
    try {
      let ok = false
      if (formsEnabled) {
        const body = new FormData()
        body.set('name', name)
        body.set('email', email)
        if (subject) body.set('subject', subject)
        body.set('message', leadPayload.message)
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          body,
          headers: { Accept: 'application/json' },
        })
        ok = res.ok
      }
      if (leadApiEnabled) {
        try {
          await postLeadSnapshot(leadApiBase, leadPayload)
          ok = true
        } catch {
          if (!formsEnabled) ok = false
        }
      }
      if (ok) setSubmitted(true)
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
            ? 'Email is the fastest way to reach us — we reply within 24–48 hours.'
            : '发邮件联系我们最快 — 我们会在 24–48 小时内回复。'}
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
        ) : hydrating ? (
          <p className="contact-handoff-note" role="status">
            {isEn ? 'Loading saved estimate…' : '正在载入已保存估算…'}
          </p>
        ) : null}
        <div
          className="contact-email-primary"
          role="region"
          aria-label={isEn ? 'Email contact' : '邮件联系'}
        >
          <p className="contact-email-label">
            {isEn ? 'Direct email' : '联系邮箱'}
          </p>
          <div className="contact-email-row">
            <a href={`mailto:${EMAIL}`} className="contact-email-address">
              {EMAIL}
            </a>
            <button
              type="button"
              className="btn btn-ghost contact-copy-btn"
              onClick={handleCopyEmail}
              aria-live="polite"
            >
              {emailCopied
                ? isEn
                  ? 'Copied!'
                  : '已复制'
                : isEn
                  ? 'Copy email'
                  : '复制邮箱'}
            </button>
          </div>
          <p className="contact-email-hint">
            {isEn
              ? 'No signup required — use your email app or copy the address above.'
              : '无需注册 — 使用邮件应用或复制上方地址即可。'}
          </p>
        </div>
        <div className="contact-box">
          {submitted ? (
            <div className="contact-success-box">
              <p className="contact-success">
                {isEn
                  ? "Thanks! We'll get back to you soon."
                  : '已收到，我们会尽快回复。'}
              </p>
              <p className="contact-success-next">
                {isEn ? 'Want a rough range first? ' : '还没估算？'}
                <a
                  href={ESTIMATOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isEn ? 'Try the quote calculator' : '使用报价计算器'}
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <p className="contact-form-intro">
                {isEn
                  ? 'Optional: add project details below — your email app will be pre-filled when you tap “Email inquiry”.'
                  : '可选：填写项目信息 — 点击「邮件咨询」时我们会预填到邮件正文。'}
              </p>
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
                    maxLength={120}
                    autoComplete="name"
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
                    maxLength={320}
                    autoComplete="email"
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
                <a href={mailtoHref} className="btn btn-primary">
                  {isEn ? 'Email inquiry' : '邮件咨询'}
                </a>
                {canSubmitOnline ? (
                  <button
                    type="submit"
                    className="btn btn-outline"
                    disabled={loading}
                  >
                    {loading
                      ? isEn
                        ? 'Sending…'
                        : '发送中…'
                      : isEn
                        ? 'Send online'
                        : '在线发送'}
                  </button>
                ) : null}
              </div>
              {canSubmitOnline ? (
                <p className="contact-legal-note">
                  {isEn
                    ? 'Online submit is optional. By sending you agree to our '
                    : '在线发送为可选。提交即表示你已阅读'}
                  <a href="#privacy">{isEn ? 'privacy summary' : '隐私说明'}</a>
                  {isEn ? '.' : '。'}
                </p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
