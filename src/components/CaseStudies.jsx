import { caseStudiesEn, caseStudiesZh } from '../data/caseStudies'

export default function CaseStudies({ lang }) {
  const isEn = lang === 'en'
  const items = isEn ? caseStudiesEn : caseStudiesZh
  const title = isEn ? 'Case studies' : '案例研究'
  const subtitle = isEn
    ? 'Representative engagements — problem, constraint, delivery, and metrics. Each pattern maps to a live open-source demo you can inspect.'
    : '典型合作 — 问题、约束、交付与结果指标。每种模式都对应可检查的开源在线演示。'
  const labels = isEn
    ? {
        client: 'Profile',
        problem: 'Problem',
        constraint: 'Constraint',
        delivery: 'Delivery',
        metrics: 'Metrics',
      }
    : {
        client: '客户画像',
        problem: '问题',
        constraint: '约束',
        delivery: '交付',
        metrics: '结果指标',
      }

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
                <span className="case-study-label">{labels.client}</span>
                {c.client}
              </p>
              <dl className="case-study-dl">
                <div className="case-study-row">
                  <dt>{labels.problem}</dt>
                  <dd>{c.problem}</dd>
                </div>
                <div className="case-study-row">
                  <dt>{labels.constraint}</dt>
                  <dd>{c.constraint}</dd>
                </div>
                <div className="case-study-row">
                  <dt>{labels.delivery}</dt>
                  <dd>{c.delivery}</dd>
                </div>
              </dl>
              <p className="case-study-metrics-label">{labels.metrics}</p>
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
