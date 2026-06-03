import { ESTIMATOR_URL } from '../config/site'

const stepsEn = [
  {
    n: '1',
    title: 'Brief & estimate',
    desc: 'Email or use the online quote calculator for an indicative range and timeline.',
    cta: 'Open quote calculator',
    href: ESTIMATOR_URL,
    external: true,
  },
  {
    n: '2',
    title: 'Fixed scope & milestones',
    desc: 'We agree deliverables, revision rounds, and dates. You get preview links as each stage ships.',
  },
  {
    n: '3',
    title: 'Launch & handoff',
    desc: 'Production deploy, repo access, and a short walkthrough so your team can maintain the UI.',
  },
]

const stepsZh = [
  {
    n: '1',
    title: '需求与估算',
    desc: '邮件沟通或使用在线报价计算器，获得价格区间与常见周期参考。',
    cta: '打开报价计算器',
    href: ESTIMATOR_URL,
    external: true,
  },
  {
    n: '2',
    title: '确定范围与里程碑',
    desc: '书面确认交付物、修改轮次与时间节点；每个阶段提供可访问的预览链接。',
  },
  {
    n: '3',
    title: '上线与交接',
    desc: '部署到生产环境，交付代码仓库权限，并简要说明后续如何维护与迭代。',
  },
]

export default function Process({ lang }) {
  const isEn = lang === 'en'
  const steps = isEn ? stepsEn : stepsZh
  const title = isEn ? 'How We Work' : '合作方式'
  const subtitle = isEn
    ? 'Simple process — clear quotes, staged previews, no surprise scope.'
    : '流程清晰：先报价、再分阶段交付预览，范围透明可控。'

  return (
    <section id="process" className="section process">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <ol className="process-steps">
          {steps.map((s) => (
            <li key={s.n} className="process-step">
              <span className="process-num" aria-hidden="true">
                {s.n}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.cta && s.href && (
                  <a
                    href={s.href}
                    className="process-cta"
                    {...(s.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {s.cta} →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
