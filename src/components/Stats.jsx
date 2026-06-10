import { GITHUB_PROFILE } from '../config/site'

const statsEn = [
  { value: '3', label: 'Shipped open-source demos' },
  { value: '61+', label: 'Automated tests (calculator)' },
  { value: 'EN/中文', label: 'Bilingual product UX' },
  { value: 'CI', label: 'GitHub Actions on every push' },
]

const statsZh = [
  { value: '3', label: '已上线开源演示项目' },
  { value: '61+', label: '自动化测试（计算器）' },
  { value: 'EN/中文', label: '双语产品体验' },
  { value: 'CI', label: '每次推送自动构建' },
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
