import { SOW_DOC_URL } from '../config/site'

const includedEn = [
  'Responsive React UI (mobile + desktop)',
  'Component structure you can extend',
  'Deployment-ready build (e.g. GitHub Pages / Vercel)',
  'Agreed revision rounds (defined in writing before start)',
  'Preview links during development',
]

const excludedEn = [
  'Backend / database unless quoted separately',
  'Copywriting, photography, or brand identity (unless add-on)',
  'Ongoing hosting fees, domain, or third-party SaaS bills',
  'Work outside the signed scope without change order',
]

const includedZh = [
  '响应式 React 界面（移动端 + 桌面端）',
  '可扩展的组件化代码结构',
  '可部署的生产构建（如 GitHub Pages / Vercel）',
  '书面确认范围内的约定修改轮次',
  '开发过程中的线上预览链接',
]

const excludedZh = [
  '除非单独报价，不含后端 / 数据库开发',
  '不含文案、摄影或品牌设计（除非加购）',
  '不含长期托管费、域名或第三方 SaaS 费用',
  '签字范围外的工作需变更单确认',
]

export default function Deliverables({ lang }) {
  const isEn = lang === 'en'
  const included = isEn ? includedEn : includedZh
  const excluded = isEn ? excludedEn : excludedZh
  const title = isEn ? 'Typical scope' : '典型交付范围'
  const subtitle = isEn
    ? 'Clear boundaries reduce surprises — final list is fixed in your proposal.'
    : '边界清晰、减少扯皮 — 最终以书面报价/合同中的清单为准。'
  const incTitle = isEn ? 'Usually included' : '通常包含'
  const excTitle = isEn ? 'Usually not included' : '通常不包含'

  return (
    <section id="deliverables" className="section deliverables">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="deliverables-grid">
          <div className="deliverables-card deliverables-card--yes">
            <h3>{incTitle}</h3>
            <ul>
              {included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="deliverables-card deliverables-card--no">
            <h3>{excTitle}</h3>
            <ul>
              {excluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="deliverables-sow">
          {isEn ? 'Formal proposals use our ' : '正式合作可使用'}
          <a href={SOW_DOC_URL} target="_blank" rel="noopener noreferrer">
            {isEn ? 'SOW template' : 'SOW 模板'}
          </a>
          {isEn ? ' (GitHub).' : '（GitHub）。'}
        </p>
      </div>
    </section>
  )
}
