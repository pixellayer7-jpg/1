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
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/pixellayer7-jpg/1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer-copy">
          © {year} PixelLayer L.L.C. Built with React.
        </p>
        <p className="footer-cta">
          {isEn ? 'Available for projects — ' : '目前开放新项目合作 — '}
          <a href="mailto:pixellayer7@gmail.com">pixellayer7@gmail.com</a>
        </p>
      </div>
    </footer>
  )
}
