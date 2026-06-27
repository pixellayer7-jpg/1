import { ESTIMATOR_URL } from '../config/site'

export const caseStudiesEn = [
  {
    id: 'launch-landing',
    title: 'Product launch landing + quote funnel',
    client: 'Representative SaaS / indie product',
    outcome:
      'Bilingual landing, pricing cards deep-linking to calculator, contact handoff with quote ref.',
    metrics: ['1–2 week tier', 'EN + 中文', 'GitHub Pages deploy'],
    link: ESTIMATOR_URL,
    linkLabel: 'Try the calculator',
  },
  {
    id: 'agency-site',
    title: 'Agency marketing site with transparent pricing',
    client: 'Small studio / freelancer positioning',
    outcome:
      'Services, client types, FAQ on payment terms, and SOW-ready commercial flow documentation.',
    metrics: [
      '3 pricing tiers',
      'Written scope template',
      'Form + mailto fallback',
    ],
    link: '#pricing',
    linkLabel: 'See pricing',
  },
  {
    id: 'dashboard-ui',
    title: 'Dashboard UI + optional API snapshots',
    client: 'Data-heavy web product',
    outcome:
      'React dashboard tier in calculator, shareable `?load=` links when API is deployed, Vitest coverage.',
    metrics: ['$2.2k–$4.5k tier', 'REST snapshot API', 'Schema validation'],
    link: 'https://github.com/pixellayer7-jpg/estimator-api',
    linkLabel: 'View API repo',
  },
]

export const caseStudiesZh = [
  {
    id: 'launch-landing',
    title: '产品发布落地页 + 报价漏斗',
    client: '典型 SaaS / 独立产品',
    outcome: '双语落地页、定价卡片深链计算器、带报价编号的主站联系预填。',
    metrics: ['1–2 周档位', '中英双语', 'GitHub Pages 部署'],
    link: ESTIMATOR_URL,
    linkLabel: '体验计算器',
  },
  {
    id: 'agency-site',
    title: '工作室官网 + 透明定价',
    client: '小型团队 / 自由职业者定位',
    outcome: '服务、客户类型、付款 FAQ，以及可写 SOW 的商单流程文档。',
    metrics: ['三档定价', 'SOW 模板', '表单 + 邮件兜底'],
    link: '#pricing',
    linkLabel: '查看价格',
  },
  {
    id: 'dashboard-ui',
    title: '看板 UI + 可选 API 快照',
    client: '数据型 Web 产品',
    outcome: '计算器看板档位、部署 API 后可分享 `?load=` 链接、Vitest 覆盖。',
    metrics: ['$2.2k–$4.5k 档位', 'REST 快照', 'Schema 校验'],
    link: 'https://github.com/pixellayer7-jpg/estimator-api',
    linkLabel: '查看 API 仓库',
  },
]
