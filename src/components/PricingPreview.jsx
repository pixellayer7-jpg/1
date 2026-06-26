import { ESTIMATOR_URL } from '../config/site'
import { pricingTiers, addOnsPreview } from '../data/pricingPreview'

export default function PricingPreview({ lang }) {
  const isEn = lang === 'en'
  const title = isEn ? 'Transparent starting ranges' : '透明起步价'
  const subtitle = isEn
    ? 'Indicative USD ranges — customize options in the quote calculator, then contact us for a fixed proposal.'
    : '以下为参考美元区间 — 可在计算器里选加购项，再联系我们获取固定书面报价。'
  const calcLabel = isEn ? 'Customize in calculator' : '在计算器里定制'
  const addOnTitle = isEn ? 'Common add-ons' : '常见加购项'

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <article key={tier.id} className="pricing-card">
              <h3>{isEn ? tier.titleEn : tier.titleZh}</h3>
              <p className="pricing-range">{tier.range}</p>
              <p className="pricing-timeline">
                {isEn ? tier.timelineEn : tier.timelineZh}
              </p>
              <p className="pricing-desc">{isEn ? tier.descEn : tier.descZh}</p>
              <a
                href={`${ESTIMATOR_URL}?type=${tier.id}&lang=${lang}&utm_source=landing&utm_medium=pricing`}
                className="pricing-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {calcLabel} →
              </a>
            </article>
          ))}
        </div>
        <div className="pricing-addons">
          <h3>{addOnTitle}</h3>
          <ul>
            {addOnsPreview.map((a) => (
              <li key={a.labelEn}>
                <strong>{isEn ? a.labelEn : a.labelZh}</strong>
                <span>{isEn ? a.noteEn : a.noteZh}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="pricing-disclaimer">
          {isEn
            ? 'Final price depends on scope, integrations, and timeline. Written SOW before work starts.'
            : '最终价格取决于范围、集成与时间。开工前有书面 SOW。'}
        </p>
      </div>
    </section>
  )
}
