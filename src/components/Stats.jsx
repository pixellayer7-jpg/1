import { useEffect, useMemo, useState } from 'react'
import { GITHUB_PROFILE, LEAD_API_URL } from '../config/site'
import { normalizeLeadApiBase, fetchStats } from '../utils/leadApi'

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
  const apiBase = normalizeLeadApiBase(LEAD_API_URL)
  const [live, setLive] = useState(null)

  useEffect(() => {
    if (!apiBase) return
    let cancelled = false
    fetchStats(apiBase)
      .then((data) => {
        if (!cancelled) setLive(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [apiBase])

  const items = useMemo(() => {
    const base = isEn ? [...statsEn] : [...statsZh]
    if (live && typeof live.totalQuotes === 'number' && live.totalQuotes > 0) {
      base[0] = {
        value: String(live.totalQuotes),
        label: isEn ? 'Quotes saved online' : '已保存线上估算',
      }
    }
    return base
  }, [isEn, live])

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
