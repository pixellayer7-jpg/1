export default function TrustBar({ lang }) {
  const isEn = lang === 'en'
  const items = isEn
    ? ['Written scope', 'Fixed quote', 'Preview links', 'U.S. LLC studio']
    : ['书面范围', '固定报价', '分阶段预览', '美国 LLC 工作室']

  return (
    <section
      className="trust-bar"
      aria-label={isEn ? 'Why PixelLayer' : 'PixelLayer 特点'}
    >
      <div className="container trust-bar-inner">
        {items.map((item) => (
          <span key={item} className="trust-bar-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
