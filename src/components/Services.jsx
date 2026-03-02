const services = [
  {
    title: 'Landing Pages',
    desc: 'High-converting one-pagers for products, services, or waitlists. Mobile-first and SEO-ready.',
    icon: '📄',
  },
  {
    title: 'React Web Apps',
    desc: 'Dashboards, SaaS UIs, and interactive tools. Clean code and maintainable structure.',
    icon: '⚛️',
  },
  {
    title: 'UI & Integration',
    desc: 'Connect your design to APIs, forms, and payment. Fast delivery and clear communication.',
    icon: '🔌',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">What I Offer</h2>
        <p className="section-subtitle">
          Frontend focus. No bloat. Delivered on time.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
