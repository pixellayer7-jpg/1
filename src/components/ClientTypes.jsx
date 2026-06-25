const audiencesEn = [
  {
    icon: '🚀',
    title: 'Startups & founders',
    desc: 'Launch pages and MVP UI that look credible on day one — without a full design team.',
  },
  {
    icon: '🏢',
    title: 'Small businesses',
    desc: 'Company sites that explain what you do, capture leads, and work on mobile.',
  },
  {
    icon: '🎨',
    title: 'Agencies & studios',
    desc: 'White-label or overflow frontend — React builds with clean handoff for your team.',
  },
  {
    icon: '🌐',
    title: 'Bilingual products',
    desc: 'EN / 中文 UI and copy structure for teams serving both markets.',
  },
]

const audiencesZh = [
  {
    icon: '🚀',
    title: '初创与创始人',
    desc: '上线第一天就显专业的落地页与 MVP 界面 — 无需完整设计团队。',
  },
  {
    icon: '🏢',
    title: '中小企业',
    desc: '说清业务、收集线索、移动端友好的企业官网。',
  },
  {
    icon: '🎨',
    title: '代理与设计工作室',
    desc: '白标或外包前端 — React 交付，便于你的团队接手维护。',
  },
  {
    icon: '🌐',
    title: '双语产品团队',
    desc: '面向中英双市场的界面结构与文案框架。',
  },
]

export default function ClientTypes({ lang }) {
  const isEn = lang === 'en'
  const items = isEn ? audiencesEn : audiencesZh
  const title = isEn ? 'Who we build for' : '我们服务的客户'
  const subtitle = isEn
    ? 'Same stack as our public demos — tailored to your product and timeline.'
    : '与公开演示相同的技术栈 — 按你的产品与时间定制。'

  return (
    <section id="clients" className="section clients">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="clients-grid">
          {items.map((item) => (
            <article key={item.title} className="client-card">
              <span className="client-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
