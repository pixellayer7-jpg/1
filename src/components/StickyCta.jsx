import { ESTIMATOR_URL } from '../config/site'

export default function StickyCta({ lang }) {
  const isEn = lang === 'en'

  return (
    <div
      className="sticky-cta no-print"
      role="region"
      aria-label={isEn ? 'Quick actions' : '快捷操作'}
    >
      <a href="#contact" className="sticky-cta-btn sticky-cta-btn--primary">
        {isEn ? 'Contact' : '联系'}
      </a>
      <a
        href={ESTIMATOR_URL}
        className="sticky-cta-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        {isEn ? 'Quote' : '报价'}
      </a>
    </div>
  )
}
