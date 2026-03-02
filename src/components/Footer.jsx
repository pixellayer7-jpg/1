export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>PixelLayer L.L.C</strong>
          <span>Frontend & Web Development</span>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/pixellayer7-jpg/1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p className="footer-copy">
          © {year} PixelLayer L.L.C. Built with React.
        </p>
      </div>
    </footer>
  )
}
