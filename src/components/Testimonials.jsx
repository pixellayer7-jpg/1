import { testimonialsEn, testimonialsZh } from '../data/testimonials'

export default function Testimonials({ lang }) {
  const isEn = lang === 'en'
  const items = isEn ? testimonialsEn : testimonialsZh
  const title = isEn ? 'What clients say' : '客户反馈'
  const subtitle = isEn
    ? 'Representative feedback from recent engagements — roles anonymized.'
    : '近期合作中的代表性反馈（角色已匿名）。'
  const disclaimer = isEn
    ? 'Composite quotes illustrating typical outcomes; not attributed to specific companies.'
    : '以下为典型交付效果的综合表述，不代表特定公司背书。'

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="testimonials-grid">
          {items.map((t) => (
            <blockquote key={t.role} className="testimonial-card">
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <cite className="testimonial-role">{t.role}</cite>
                <span className="testimonial-highlight">{t.highlight}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="testimonials-disclaimer">{disclaimer}</p>
      </div>
    </section>
  )
}
