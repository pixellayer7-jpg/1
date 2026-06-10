const stackEn = [
  { name: 'React 18', note: 'Component UI' },
  { name: 'Vite 5', note: 'Fast builds' },
  { name: 'Vitest', note: 'Unit & UI tests' },
  { name: 'Node + Fastify', note: 'Quote API MVP' },
  { name: 'GitHub Pages', note: 'Zero-config demos' },
  { name: 'Formspree', note: 'Contact forms' },
]

const stackZh = [
  { name: 'React 18', note: '组件化界面' },
  { name: 'Vite 5', note: '快速构建' },
  { name: 'Vitest', note: '单元与 UI 测试' },
  { name: 'Node + Fastify', note: '报价 API MVP' },
  { name: 'GitHub Pages', note: '演示站部署' },
  { name: 'Formspree', note: '联系表单' },
]

export default function TechStack({ lang }) {
  const isEn = lang === 'en'
  const items = isEn ? stackEn : stackZh
  const title = isEn ? 'Tech stack' : '技术栈'
  const subtitle = isEn
    ? 'Same tools we use for client work — not a slide deck, working code.'
    : '与客户项目相同的技术选型 — 均为可运行代码，而非 PPT。'

  return (
    <section id="stack" className="section stack">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <ul className="stack-grid">
          {items.map((item) => (
            <li key={item.name} className="stack-item">
              <strong>{item.name}</strong>
              <span>{item.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
