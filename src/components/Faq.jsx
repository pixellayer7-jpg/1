import { ESTIMATOR_URL } from '../config/site'

const faqEn = [
  {
    q: 'How do I get a formal quote?',
    a: 'Use the online quote calculator for an indicative range, then email us with your timeline and links. We reply with a written scope and fixed price.',
    link: ESTIMATOR_URL,
    linkLabel: 'Open quote calculator',
  },
  {
    q: 'Typical delivery time?',
    a: 'Landing pages often ship in 1–2 weeks; company sites 2–4 weeks; dashboard UI 3–6 weeks depending on scope. Rush options are available.',
  },
  {
    q: 'English and Chinese projects?',
    a: 'Yes — UI copy, bilingual sites, and EN/中文 communication are supported. Our public demos are bilingual by design.',
  },
  {
    q: 'What do you need from me to start?',
    a: 'A short brief (goals, references, deadline), brand assets or Figma if you have them, and API/docs for integrations. We agree milestones before build.',
  },
]

const faqZh = [
  {
    q: '如何获得正式报价？',
    a: '可先用在线计算器得到参考区间，再邮件说明时间与参考链接，我们会回复书面范围与固定报价。',
    link: ESTIMATOR_URL,
    linkLabel: '打开报价计算器',
  },
  {
    q: '一般交付周期多久？',
    a: '落地页常见 1–2 周；企业官网 2–4 周；看板类界面 3–6 周，视范围而定，可加急。',
  },
  {
    q: '是否支持中英双语项目？',
    a: '支持 — 界面文案、双语站点与中英沟通均可。公开演示项目默认带中英切换。',
  },
  {
    q: '开始合作需要我准备什么？',
    a: '简要需求（目标、参考、截止日期）、品牌素材或 Figma（如有）、对接 API/文档。开工前会确认里程碑。',
  },
]

export default function Faq({ lang }) {
  const isEn = lang === 'en'
  const items = isEn ? faqEn : faqZh
  const title = isEn ? 'FAQ' : '常见问题'
  const subtitle = isEn
    ? 'Quick answers before you reach out.'
    : '联系前你可能想先了解这些。'

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <dl className="faq-list">
          {items.map((item) => (
            <div key={item.q} className="faq-item">
              <dt>{item.q}</dt>
              <dd>
                {item.a}
                {item.link && (
                  <>
                    {' '}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkLabel} →
                    </a>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
