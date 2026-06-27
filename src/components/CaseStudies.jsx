import { caseStudiesEn, caseStudiesZh } from '../data/caseStudies'

export default function CaseStudies({ lang }) {
  const isEn = lang === 'en'
  const items = isEn ? caseStudiesEn : caseStudiesZh
  const title = isEn ? 'Engagement patterns' : '典型合作模式'
  const subtitle = isEn
    ? 'How we scope and deliver — illustrated with open-source demos you can inspect today.'
    : '我们如何定范围与交付 — 以下均可通过开源演示亲自验证。'
  const clientLabel = isEn ? 'Profile' : '客户画像'
  const outcomeLabel = isEn ? 'Delivery' : '交付要点'

  return (
    <section id="cases" className="section case-studies">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="case-studies-grid">
          {items.map((c) => (
            <article key={c.id} className="case-study-card">
              <h3>{c.title}</h3>
              <p className="case-study-client">
                <span className="case-study-label">{clientLabel}:</span>{' '}
                {c.client}
              </p>
              <p className="case-study-outcome">
                <span className="case-study-label">{outcomeLabel}:</span>{' '}
                {c.outcome}
              </p>
              <ul className="case-study-metrics">
                {c.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <a
                href={c.link}
                className="case-study-link"
                target={c.link.startsWith('http') ? '_blank' : undefined}
                rel={
                  c.link.startsWith('http') ? 'noopener noreferrer' : undefined
                }
              >
                {c.linkLabel} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
