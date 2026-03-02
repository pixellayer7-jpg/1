export default function Hero() {
  return (
    <header className="hero">
      <nav className="nav container">
        <a href="#" className="logo">PixelLayer L.L.C</a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="hero-content container">
        <h1>
          Modern Web Apps That <span className="highlight">Convert</span>
        </h1>
        <p className="hero-subtitle">
          React-based frontend development for startups and small businesses.
          Fast, clean, and built to grow with you.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Get a Free Quote
          </a>
          <a href="#services" className="btn btn-outline">
            See What I Build
          </a>
        </div>
      </div>
    </header>
  )
}
