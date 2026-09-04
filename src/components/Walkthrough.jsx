import { walkthroughSteps, walkthroughMeta } from '../data/walkthrough'

export default function Walkthrough({ lang }) {
  const isEn = lang === 'en'
  const title = isEn ? '5-minute interview walkthrough' : '5 分钟面试走查'
  const subtitle = isEn
    ? 'Landing → calculator → proposal → CRM → client site. Open each step in order.'
    : '主站 → 计算器 → 提案 → CRM → 客户站。按顺序点开即可。'

  return (
    <section id="walkthrough" className="section walkthrough">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <ol className="walkthrough-steps">
          {walkthroughSteps.map((s) => (
            <li key={s.n} className="walkthrough-step">
              <span className="walkthrough-num" aria-hidden="true">
                {s.n}
              </span>
              <div>
                <h3>{isEn ? s.titleEn : s.titleZh}</h3>
                <p>{isEn ? s.descEn : s.descZh}</p>
                <div className="walkthrough-actions">
                  <a
                    href={s.href}
                    className="walkthrough-cta"
                    {...(s.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {isEn ? s.ctaEn : s.ctaZh} →
                  </a>
                  {s.secondaryHref && (
                    <a
                      href={s.secondaryHref}
                      className="walkthrough-cta walkthrough-cta--secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isEn ? s.secondaryCtaEn : s.secondaryCtaZh} →
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="walkthrough-note">
          {isEn ? walkthroughMeta.noteEn : walkthroughMeta.noteZh}
        </p>
      </div>
    </section>
  )
}
