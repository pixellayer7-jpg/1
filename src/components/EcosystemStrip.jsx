import {
  ESTIMATOR_URL,
  GITHUB_PROFILE,
  RONGEN_PREVIEW_URL,
  SITE_URL,
} from '../config/site'

export default function EcosystemStrip({ lang }) {
  const isEn = lang === 'en'
  const landing = SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`
  const adminUrl = `${ESTIMATOR_URL.replace(/\/?$/, '/')}?admin=1`
  const portalUrl = `${ESTIMATOR_URL.replace(/\/?$/, '/')}?portal=demo`
  const rongenEn = `${RONGEN_PREVIEW_URL.replace(/\/?$/, '/')}en/`

  return (
    <aside
      className="ecosystem-strip"
      aria-label={isEn ? 'Product ecosystem' : '产品生态'}
    >
      <div className="container ecosystem-inner">
        <span className="ecosystem-label">
          {isEn ? 'PixelLayer stack' : 'PixelLayer 产品链'}
        </span>
        <a href={landing}>{isEn ? 'This site' : '本站'}</a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a href={ESTIMATOR_URL} target="_blank" rel="noopener noreferrer">
          {isEn ? 'Quote calculator' : '报价计算器'}
        </a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a href={adminUrl} target="_blank" rel="noopener noreferrer">
          {isEn ? 'CRM admin' : 'CRM 管理'}
        </a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a href={portalUrl} target="_blank" rel="noopener noreferrer">
          {isEn ? 'Client portal' : '客户状态页'}
        </a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a
          href={`${ESTIMATOR_URL.replace(/\/?$/, '/')}?proposal=sow`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isEn ? 'Proposal' : '提案'}
        </a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a href={RONGEN_PREVIEW_URL} target="_blank" rel="noopener noreferrer">
          {isEn ? 'Rongen (client)' : '荣恩堂（客户）'}
        </a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a href={rongenEn} target="_blank" rel="noopener noreferrer">
          {isEn ? 'Rongen EN' : '荣恩堂 EN'}
        </a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a
          href={`${GITHUB_PROFILE}/estimator-api`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isEn ? 'Quote API' : '报价 API'}
        </a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a href="#changelog">{isEn ? 'Changelog' : '更新日志'}</a>
        <span className="ecosystem-sep" aria-hidden="true">
          ·
        </span>
        <a href="#walkthrough">{isEn ? '5-min walkthrough' : '5 分钟走查'}</a>
      </div>
    </aside>
  )
}
