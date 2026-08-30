import {
  ESTIMATOR_URL,
  GITHUB_PROFILE,
  RONGEN_PREVIEW_URL,
  SITE_URL,
} from '../config/site'

const portfolioEn = [
  {
    type: 'Live product',
    title: 'Project Quote Calculator',
    desc: 'Bilingual presales tool: config-driven pricing, email prefill, print/PDF, Vitest + CI, optional API share links.',
    tags: ['React', 'Vite', 'i18n', 'Vitest'],
    demoUrl: ESTIMATOR_URL,
    repoUrl: `${GITHUB_PROFILE}/project-estimator`,
  },
  {
    type: 'Marketing site',
    title: 'PixelLayer Landing (this site)',
    desc: 'Responsive React landing with EN/中文, services, portfolio, and contact — deployed on GitHub Pages.',
    tags: ['React', 'Vite', 'GitHub Pages'],
    demoUrl: SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`,
    repoUrl: `${GITHUB_PROFILE}/1`,
  },
  {
    type: 'Backend MVP',
    title: 'estimator-api',
    desc: 'Fastify REST service to save and restore quote snapshots by UUID — JSON Schema validation, CORS, tests.',
    tags: ['Node', 'Fastify', 'REST'],
    demoUrl: null,
    repoUrl: `${GITHUB_PROFILE}/estimator-api`,
  },
  {
    type: 'Client site',
    title: 'Rongen Lutheran Church',
    desc: 'Custom WordPress theme for a parish in Tainan — sermons/bulletins/events, Customizer fields, plus Node local preview with zh/EN switcher & static export (no PHP required to review).',
    tags: ['WordPress', 'PHP', 'Node', 'CSS'],
    demoUrl: RONGEN_PREVIEW_URL,
    repoUrl: `${GITHUB_PROFILE}/rongen-church`,
  },
]

const portfolioZh = [
  {
    type: '线上产品',
    title: '项目报价计算器',
    desc: '中英双语售前工具：配置化定价、邮件预填、打印导出、Vitest 与 CI，可选 API 在线分享。',
    tags: ['React', 'Vite', 'i18n', 'Vitest'],
    demoUrl: ESTIMATOR_URL,
    repoUrl: `${GITHUB_PROFILE}/project-estimator`,
  },
  {
    type: '营销官网',
    title: 'PixelLayer 落地页（本站）',
    desc: '响应式 React 官网：中英切换、服务介绍、作品与联系表单，GitHub Pages 部署。',
    tags: ['React', 'Vite', 'GitHub Pages'],
    demoUrl: SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`,
    repoUrl: `${GITHUB_PROFILE}/1`,
  },
  {
    type: '后端 MVP',
    title: 'estimator-api',
    desc: 'Fastify REST：按 UUID 保存/读取报价快照，JSON Schema 校验、CORS 与测试。',
    tags: ['Node', 'Fastify', 'REST'],
    demoUrl: null,
    repoUrl: `${GITHUB_PROFILE}/estimator-api`,
  },
  {
    type: '客户项目',
    title: '中华福音道路德会 荣恩堂',
    desc: '台南白河堂会自订 WordPress 主题：讲道/周报/活动、自订器教会资料，以及无需 PHP 的本机预览（中/英切换）与静态导出。',
    tags: ['WordPress', 'PHP', 'Node', 'CSS'],
    demoUrl: RONGEN_PREVIEW_URL,
    repoUrl: `${GITHUB_PROFILE}/rongen-church`,
  },
]

export default function Projects({ lang }) {
  const isEn = lang === 'en'
  const items = isEn ? portfolioEn : portfolioZh
  const title = isEn ? 'Shipped Work' : '已交付作品'
  const subtitle = isEn
    ? 'Open-source demos you can try today — same stack we use for client projects.'
    : '以下为可在线体验的开源作品，技术栈与交付客户项目时一致。'
  const demoLabel = isEn ? 'Live demo' : '在线演示'
  const codeLabel = isEn ? 'Source' : '源码'
  const quoteLabel = isEn ? 'Get your quote →' : '获取报价 →'

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="projects-grid">
          {items.map((p) => (
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
              <div className="project-links">
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    className="project-link project-link--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {demoLabel}
                  </a>
                )}
                <a
                  href={p.repoUrl}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {codeLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="projects-footer-cta">
          <a href={ESTIMATOR_URL} target="_blank" rel="noopener noreferrer">
            {quoteLabel}
          </a>
        </p>
      </div>
    </section>
  )
}
