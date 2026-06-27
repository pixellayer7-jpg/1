import { useState } from 'react'
import { ESTIMATOR_URL, GITHUB_PROFILE, SITE_URL } from '../config/site'

export default function Hero({ lang, setLang }) {
  const isEn = lang === 'en'
  const [navOpen, setNavOpen] = useState(false)

  const t = isEn
    ? {
        navServices: 'Services',
        navPricing: 'Pricing',
        navProjects: 'Work',
        navStack: 'Stack',
        navProcess: 'Process',
        navAbout: 'About',
        navScope: 'Scope',
        navFaq: 'FAQ',
        navContact: 'Contact',
        navQuote: 'Quote',
        menuOpen: 'Open menu',
        menuClose: 'Close menu',
        titleMain: 'Modern Web Apps That ',
        titleHighlight: 'Convert',
        subtitle:
          'React-based frontend development for startups and small businesses. Fast, clean, and built to grow with you.',
        primaryCta: 'Contact Us',
        secondaryCta: 'Get an Estimate',
        tertiaryCta: 'See Shipped Work',
        badgeLanding: 'Live landing',
        badgeCalc: 'Live calculator',
        badgeGithub: 'Open source',
      }
    : {
        navServices: '服务内容',
        navPricing: '价格',
        navProjects: '作品',
        navStack: '技术栈',
        navProcess: '合作方式',
        navAbout: '关于',
        navScope: '交付范围',
        navFaq: '常见问题',
        navContact: '联系我',
        navQuote: '报价',
        menuOpen: '打开菜单',
        menuClose: '关闭菜单',
        titleMain: '为你打造现代化 ',
        titleHighlight: '高转化 Web 前端',
        subtitle:
          '专注为初创公司和小企业提供 React 前端开发，加载快速、结构清晰，方便后续持续迭代。',
        primaryCta: '联系我们',
        secondaryCta: '在线估算报价',
        tertiaryCta: '查看已交付作品',
        badgeLanding: '主站已上线',
        badgeCalc: '计算器已上线',
        badgeGithub: '开源仓库',
      }

  function closeNav() {
    setNavOpen(false)
  }

  return (
    <header className="hero">
      <nav className="nav container" aria-label={isEn ? 'Main' : '主导航'}>
        <a href="#" className="logo" onClick={closeNav}>
          PixelLayer L.L.C
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={navOpen}
          aria-controls="site-nav-links"
          onClick={() => setNavOpen((o) => !o)}
        >
          {navOpen ? t.menuClose : t.menuOpen}
        </button>
        <div
          id="site-nav-links"
          className={`nav-links${navOpen ? ' nav-links--open' : ''}`}
        >
          <a href="#services" onClick={closeNav}>
            {t.navServices}
          </a>
          <a href="#pricing" onClick={closeNav}>
            {t.navPricing}
          </a>
          <a href="#clients" onClick={closeNav}>
            {isEn ? 'Clients' : '客户'}
          </a>
          <a href="#projects" onClick={closeNav}>
            {t.navProjects}
          </a>
          <a href="#cases" onClick={closeNav}>
            {isEn ? 'Patterns' : '模式'}
          </a>
          <a href="#stack" onClick={closeNav}>
            {t.navStack}
          </a>
          <a href="#process" onClick={closeNav}>
            {t.navProcess}
          </a>
          <a href="#about" onClick={closeNav}>
            {t.navAbout}
          </a>
          <a href="#deliverables" onClick={closeNav}>
            {t.navScope}
          </a>
          <a href="#faq" onClick={closeNav}>
            {t.navFaq}
          </a>
          <a href="#contact" onClick={closeNav}>
            {t.navContact}
          </a>
          <a
            href={ESTIMATOR_URL}
            className="nav-quote"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNav}
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
        <div className="hero-badges">
          <a
            href={SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`}
            className="hero-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.badgeLanding}
          </a>
          <a
            href={ESTIMATOR_URL}
            className="hero-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.badgeCalc}
          </a>
          <a
            href={GITHUB_PROFILE}
            className="hero-badge hero-badge--muted"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.badgeGithub}
          </a>
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            {t.primaryCta}
          </a>
          <a
            href={ESTIMATOR_URL}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.secondaryCta}
          </a>
          <a href="#projects" className="btn btn-outline btn-outline--muted">
            {t.tertiaryCta}
          </a>
        </div>
      </div>
    </header>
  )
}
