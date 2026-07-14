import { changelogEntries, productLabels } from '../data/changelog'
import { GITHUB_PROFILE } from '../config/site'

export default function Changelog({ lang }) {
  const isEn = lang === 'en'
  const title = isEn ? 'Changelog' : '更新日志'
  const subtitle = isEn
    ? 'How the PixelLayer stack evolved — landing, calculator, and API.'
    : 'PixelLayer 产品链如何演进 — 主站、计算器与 API。'
  const reposNote = isEn
    ? 'Full commit history lives on GitHub.'
    : '完整提交历史见 GitHub。'

  return (
    <section id="changelog" className="section changelog">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <ol className="changelog-timeline">
          {changelogEntries.map((entry) => {
            const label = productLabels[entry.product]
            const productText = isEn ? label.en : label.zh
            const highlights = isEn ? entry.highlightsEn : entry.highlightsZh
            const heading = isEn ? entry.titleEn : entry.titleZh
            const key = `${entry.product}-${entry.version}-${entry.date}`

            return (
              <li key={key} className="changelog-item">
                <div className="changelog-meta">
                  <span className="changelog-version">v{entry.version}</span>
                  <span
                    className={`changelog-product changelog-product--${entry.product}`}
                  >
                    {productText}
                  </span>
                  <time className="changelog-date" dateTime={entry.date}>
                    {entry.date}
                  </time>
                </div>
                <h3 className="changelog-heading">{heading}</h3>
                <ul className="changelog-highlights">
                  {highlights.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ol>
        <p className="changelog-repos">
          {reposNote}{' '}
          <a
            href={`${GITHUB_PROFILE}/1`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isEn ? 'Landing repo' : '主站仓库'}
          </a>
          {' · '}
          <a
            href={`${GITHUB_PROFILE}/project-estimator`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isEn ? 'Calculator' : '计算器'}
          </a>
          {' · '}
          <a
            href={`${GITHUB_PROFILE}/estimator-api`}
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
        </p>
      </div>
    </section>
  )
}
