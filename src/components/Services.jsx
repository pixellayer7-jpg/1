const servicesEn = [
  {
    title: 'Landing Pages',
    desc: 'High-converting one-pagers for products, services, or waitlists. Mobile-first and SEO-ready.',
    icon: '📄',
  },
  {
    title: 'React Web Apps',
    desc: 'Dashboards, SaaS UIs, and interactive tools. Clean code and maintainable structure.',
    icon: '⚛️',
  },
  {
    title: 'UI & Integration',
    desc: 'Connect your design to APIs, forms, and payment. Fast delivery and clear communication.',
    icon: '🔌',
  },
]

const servicesZh = [
  {
    title: '产品/活动落地页',
    desc: '为产品、服务或活动定制单页网站，突出卖点与转化路径，移动端优先并兼顾基础 SEO。',
    icon: '📄',
  },
  {
    title: 'React Web 应用界面',
    desc: '后台管理、仪表盘、SaaS 前端界面，组件化结构清晰，方便与你现有或未来的 API 对接。',
    icon: '⚛️',
  },
  {
    title: 'UI 集成与前端开发',
    desc: '将 Figma/设计稿快速还原为高质量前端代码，并集成表单、支付、第三方服务等功能。',
    icon: '🔌',
  },
]

export default function Services({ lang }) {
  const isEn = lang === 'en'
  const services = isEn ? servicesEn : servicesZh
  const title = isEn ? 'What I Offer' : '可以为你提供的服务'
  const subtitle = isEn
    ? 'Frontend focus. No bloat. Delivered on time.'
    : '专注前端，不做臃肿功能，在约定时间内交付可上线的版本。'

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
