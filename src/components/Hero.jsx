import { ESTIMATOR_URL } from '../config/site'

export default function Hero({ lang, setLang }) {
  const isEn = lang === 'en'

  const t = isEn
    ? {
        navServices: 'Services',
        navProjects: 'Work',
        navProcess: 'Process',
        navContact: 'Contact',
        navQuote: 'Quote',
        titleMain: 'Modern Web Apps That ',
        titleHighlight: 'Convert',
        subtitle:
          'React-based frontend development for startups and small businesses. Fast, clean, and built to grow with you.',
        primaryCta: 'Get an Instant Estimate',
        secondaryCta: 'See Shipped Work',
      }
    : {
        navServices: '服务内容',
        navProjects: '作品',
        navProcess: '合作方式',
        navContact: '联系我',
        navQuote: '报价',
        titleMain: '为你打造现代化 ',
        titleHighlight: '高转化 Web 前端',
        subtitle:
          '专注为初创公司和小企业提供 React 前端开发，加载快速、结构清晰，方便后续持续迭代。',
        primaryCta: '在线估算报价',
        secondaryCta: '查看已交付作品',
      }

  return (
    <header className="hero">
      <nav className="nav container">
        <a href="#" className="logo">
          PixelLayer L.L.C
        </a>
        <div className="nav-links">
          <a href="#services">{t.navServices}</a>
          <a href="#projects">{t.navProjects}</a>
          <a href="#process">{t.navProcess}</a>
          <a href="#contact">{t.navContact}</a>
          <a
            href={ESTIMATOR_URL}
            className="nav-quote"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.navQuote}
          </a>
          <div className="lang-switch">
            <button
              type="button"
              className={`lang-btn ${isEn ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${!isEn ? 'active' : ''}`}
              onClick={() => setLang('zh')}
            >
              中文
            </button>
          </div>
        </div>
      </nav>
      <div className="hero-content container">
        <h1>
          {t.titleMain}
          <span className="highlight">{t.titleHighlight}</span>
        </h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        <div className="hero-cta">
          <a
            href={ESTIMATOR_URL}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.primaryCta}
          </a>
          <a href="#projects" className="btn btn-outline">
            {t.secondaryCta}
          </a>
        </div>
      </div>
    </header>
  )
}
