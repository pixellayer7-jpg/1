import { ESTIMATOR_URL, EMAIL, BOOKING_URL } from '../config/site'

export default function CtaBand({ lang }) {
  const isEn = lang === 'en'
  const bookingHref =
    BOOKING_URL ||
    `mailto:${EMAIL}?subject=${encodeURIComponent(isEn ? 'Schedule a call — PixelLayer' : '预约沟通 — PixelLayer')}`

  return (
    <section
      className="cta-band"
      aria-label={isEn ? 'Get started' : '开始合作'}
    >
      <div className="container cta-band-inner">
        <div className="cta-band-copy">
          <h2>{isEn ? 'Ready for a fixed quote?' : '准备好拿固定报价？'}</h2>
          <p>
            {isEn
              ? 'Use the calculator, then send us your estimate — we reply with scope and timeline within 24–48 hours.'
              : '先用计算器估算，再把结果发给我们 — 我们会在 24–48 小时内回复范围与周期。'}
          </p>
        </div>
        <div className="cta-band-actions">
          <a
            href={ESTIMATOR_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isEn ? 'Get estimate' : '在线估算'}
          </a>
          <a href="#contact" className="btn btn-outline">
            {isEn ? 'Contact us' : '联系我们'}
          </a>
          <a href={`mailto:${EMAIL}`} className="cta-band-email">
            {EMAIL}
          </a>
          <a
            href={bookingHref}
            className="btn btn-outline cta-band-book"
            target={BOOKING_URL ? '_blank' : undefined}
            rel={BOOKING_URL ? 'noopener noreferrer' : undefined}
          >
            {isEn ? 'Book a call' : '预约沟通'}
          </a>
        </div>
      </div>
    </section>
  )
}
