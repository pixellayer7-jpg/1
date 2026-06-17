import { GITHUB_PROFILE } from '../config/site'

const statsEn = [
  { value: '1–2 wk', label: 'Typical landing page delivery' },
  { value: 'Written', label: 'Fixed scope before build starts' },
  { value: 'EN/中文', label: 'Bilingual sites & communication' },
  { value: '24–48h', label: 'Inquiry response (business days)' },
]

const statsZh = [
  { value: '1–2 周', label: '落地页常见交付周期' },
  { value: '书面', label: '开工前确认固定范围' },
  { value: 'EN/中文', label: '双语站点与沟通' },
  { value: '24–48h', label: '工作日咨询回复' },
]

export default function Stats({ lang }) {
  const isEn = lang === 'en'
  const items = isEn ? statsEn : statsZh
  const title = isEn ? 'By the numbers' : '数据一览'
  const github = isEn ? 'View source on GitHub' : '在 GitHub 查看源码'

  return (
    <section className="section stats" aria-label={title}>
      <div className="container">
        <div className="stats-grid">
          {items.map((s) => (
            <div key={s.label} className="stat-card">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="stats-foot">
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
            {github} →
          </a>
        </p>
      </div>
    </section>
  )
}
