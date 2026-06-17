import { EMAIL, ESTIMATOR_URL } from '../config/site'

export default function About({ lang }) {
  const isEn = lang === 'en'

  const title = isEn ? 'About PixelLayer' : '关于 PixelLayer'
  const subtitle = isEn
    ? 'A U.S.-registered LLC studio focused on React landing pages and web UI for startups and small teams.'
    : '美国注册的 LLC 工作室，专注为初创与小团队交付 React 落地页与 Web 界面。'

  const points = isEn
    ? [
        {
          title: 'Who we are',
          text: 'PixelLayer L.L.C is led by He Zhang — frontend engineer shipping bilingual, test-backed React products (not static mockups).',
        },
        {
          title: 'How we quote',
          text: 'Indicative ranges from the quote calculator, then a written scope and fixed price before work starts.',
        },
        {
          title: 'How we deliver',
          text: 'Preview links during build, agreed revision rounds, and handoff you can deploy (GitHub Pages, Vercel, etc.).',
        },
        {
          title: 'Response time',
          text: 'We reply to new inquiries within 24–48 hours on business days.',
        },
      ]
    : [
        {
          title: '我们是谁',
          text: 'PixelLayer L.L.C 由 He Zhang 主导 — 交付可测试、可部署的双语 React 产品，而非静态原型。',
        },
        {
          title: '如何报价',
          text: '先用计算器得到参考区间，开工前提供书面范围与固定报价。',
        },
        {
          title: '如何交付',
          text: '开发过程提供预览链接，约定修改轮次，交付可部署的代码（GitHub Pages、Vercel 等）。',
        },
        {
          title: '回复时间',
          text: '工作日对新咨询通常在 24–48 小时内回复。',
        },
      ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="about-grid">
          {points.map((p) => (
            <article key={p.title} className="about-card">
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <p className="about-cta">
          {isEn ? 'Ready to scope your project? ' : '准备好聊项目了？'}
          <a href={ESTIMATOR_URL} target="_blank" rel="noopener noreferrer">
            {isEn ? 'Try the quote calculator' : '使用报价计算器'}
          </a>
          {isEn ? ' or ' : ' 或 '}
          <a href="#contact">{isEn ? 'contact us' : '直接联系'}</a>
          {isEn ? '.' : '。'}
          {' · '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  )
}
