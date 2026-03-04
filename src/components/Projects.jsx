const projects = [
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

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">What I Can Build for You</h2>
        <p className="section-subtitle">
          Examples of project types PixelLayer L.L.C can deliver. Each tailored to your goals and timeline.
        </p>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project-card">
              <span className="project-type">{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <a href="#contact" className="project-cta">
                Get a quote →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
