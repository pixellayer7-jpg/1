const projectsEn = [
  {
    title: 'SaaS / Product Landing Page',
    desc: 'One-page marketing site for a product or startup: hero, features, pricing, waitlist or sign-up. Mobile-first, fast load.',
    tags: ['React', 'Vite', 'Responsive'],
    type: 'Landing Page',
  },
  {
    title: 'Dashboard & Web App UI',
    desc: 'Internal dashboard, client portal, or SaaS app UI: tables, charts, forms, and flows. Clean React components, API-ready.',
    tags: ['React', 'UI', 'Data'],
    type: 'Web App',
  },
  {
    title: 'Company / Agency Website',
    desc: 'Multi-page site for a business: About, Services, Portfolio, Contact. SEO-friendly, easy for you to update later.',
    tags: ['React', 'Multi-page', 'SEO'],
    type: 'Website',
  },
]

const projectsZh = [
  {
    title: 'SaaS / 产品落地页',
    desc: '为 SaaS 或互联网产品制作登录页：首屏卖点、功能介绍、价格与注册/等待列表入口，突出转化。',
    tags: ['React', 'Vite', '响应式'],
    type: '落地页',
  },
  {
    title: '数据看板 / Web App 界面',
    desc: '内部数据看板、客户门户或在线后台：表格、筛选、图表与表单流程，便于与你的 API 对接。',
    tags: ['React', 'UI', '数据'],
    type: 'Web 应用',
  },
  {
    title: '企业 / 工作室官网',
    desc: '多页面公司官网：关于我们、服务介绍、案例与联系表单，兼顾品牌形象与基础 SEO 表现。',
    tags: ['React', '多页面', 'SEO'],
    type: '官网',
  },
]

export default function Projects({ lang }) {
  const isEn = lang === 'en'
  const projects = isEn ? projectsEn : projectsZh
  const title = isEn ? 'What I Can Build for You' : '可以为你打造的项目类型'
  const subtitle = isEn
    ? 'Examples of project types PixelLayer L.L.C can deliver. Each tailored to your goals and timeline.'
    : '下面是 PixelLayer L.L.C 常见的项目类型示例，会根据你的目标和时间节点做具体定制。'
  const cta = isEn ? 'Get a quote →' : '咨询报价 →'

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <span className="project-type">{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#contact" className="project-cta">
                {cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
