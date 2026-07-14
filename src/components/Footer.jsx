import { ESTIMATOR_URL, GITHUB_PROFILE, EMAIL } from '../config/site'

export default function Footer({ lang }) {
  const isEn = lang === 'en'
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>PixelLayer L.L.C</strong>
          <span>
            {isEn ? 'Frontend & Web Development' : '前端开发与 Web 体验'}
          </span>
        </div>
        <div className="footer-links">
          <a href="#about">{isEn ? 'About' : '关于'}</a>
          <a href="#services">{isEn ? 'Services' : '服务'}</a>
          <a href="#pricing">{isEn ? 'Pricing' : '价格'}</a>
          <a href="#clients">{isEn ? 'Clients' : '客户'}</a>
          <a href="#projects">{isEn ? 'Work' : '作品'}</a>
          <a href="#process">{isEn ? 'Process' : '流程'}</a>
          <a href="#deliverables">{isEn ? 'Scope' : '交付范围'}</a>
          <a href="#faq">{isEn ? 'FAQ' : '常见问题'}</a>
          <a href="#changelog">{isEn ? 'Changelog' : '更新日志'}</a>
          <a href="#contact">{isEn ? 'Contact' : '联系'}</a>
          <a href="#privacy">{isEn ? 'Privacy' : '隐私'}</a>
          <a href={ESTIMATOR_URL} target="_blank" rel="noopener noreferrer">
            {isEn ? 'Quote tool' : '报价工具'}
          </a>
          <a
            href={`${ESTIMATOR_URL.replace(/\/?$/, '/')}?admin=1`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isEn ? 'CRM admin' : 'CRM 管理'}
          </a>
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer-copy">
          © {year} PixelLayer L.L.C. Built with React.
        </p>
        <p className="footer-cta">
          {isEn ? 'Available for projects — ' : '目前开放新项目合作 — '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </footer>
  )
}
