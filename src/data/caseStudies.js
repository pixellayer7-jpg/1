import { ESTIMATOR_URL, RONGEN_PREVIEW_URL, SITE_URL } from '../config/site'

/**
 * Representative engagements illustrated by live open-source demos.
 * Structure: problem → constraint → delivery → metrics (OPT / portfolio evidence).
 */
export const caseStudiesEn = [
  {
    id: 'launch-landing',
    title: 'Product launch landing + quote funnel',
    client: 'SaaS / indie product pre-launch',
    problem:
      'Needed a bilingual marketing site that converts interest into a scoped estimate without a sales team on call.',
    constraint:
      'Ship in 1–2 weeks, GitHub Pages only, no paid form vendor required for the first release.',
    delivery:
      'Landing with pricing deep-links into the calculator, session handoff into contact, mailto-first fallback, and a public changelog for trust.',
    metrics: [
      'Live demo on Pages',
      'EN + 中文',
      'Quote ref handoff',
      'Zero Formspree required',
    ],
    link: SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`,
    linkLabel: 'Open live landing',
  },
  {
    id: 'agency-site',
    title: 'Studio site with written commercial flow',
    client: 'Small studio / freelancer positioning',
    problem:
      'Prospects asked for price ranges and payment terms before booking a call; ad-hoc email replies did not scale.',
    constraint:
      'Keep estimates indicative (not binding) while still producing SOW-ready artifacts clients can print or PDF.',
    delivery:
      'Transparent tier cards, FAQ on revisions/deposit, SOW Markdown + print-ready proposal/invoice from the calculator, plus reply templates for ops.',
    metrics: [
      '3 pricing tiers',
      'SOW + deposit invoice',
      'Reply templates',
      'Written scope docs',
    ],
    link: '#pricing',
    linkLabel: 'See pricing tiers',
  },
  {
    id: 'dashboard-ui',
    title: 'Ops dashboard + optional quote CRM',
    client: 'Data / ops web product',
    problem:
      'Needed a shareable quote snapshot and a lightweight CRM view to track lead/quote status without a full SaaS CRM.',
    constraint:
      'API optional for public demos; admin must still be walkthrough-ready when secrets are unset.',
    delivery:
      'Dashboard tier in the calculator, REST quote/lead API when deployed, and CRM demo seed mode (`?admin=1`) with export when offline.',
    metrics: [
      'CRM demo without secrets',
      '`?load=` share links',
      'JSON / CSV export',
      'Schema-validated API',
    ],
    link: ESTIMATOR_URL,
    linkLabel: 'Open calculator + CRM',
  },
  {
    id: 'rongen-church',
    title: 'Parish website — WordPress theme + offline preview',
    client: 'Lutheran church (Rongen / 榮恩堂, Tainan)',
    problem:
      'Needed a liturgical church site (sermons, bulletins, events) that non-technical staff can maintain — without a commercial “church SaaS” look.',
    constraint:
      'Deliver theme packaging for real WordPress hosting, plus a zero-PHP local preview so pastors can review layout before go-live.',
    delivery:
      'Custom WordPress theme (CPT + Customizer church fields + shortcodes), Node preview/export tools with zh/en switcher, and a shareable static zip for offline review.',
    metrics: [
      'WordPress theme zip',
      'Local preview (no PHP)',
      'Bilingual preview /en/',
      'Liturgical visual language',
    ],
    link: RONGEN_PREVIEW_URL,
    linkLabel: 'Open live preview',
  },
]

export const caseStudiesZh = [
  {
    id: 'launch-landing',
    title: '产品发布落地页 + 报价漏斗',
    client: 'SaaS / 独立产品上线前',
    problem:
      '需要双语营销站，把兴趣转化为有范围的估算，且不必随时电话销售跟进。',
    constraint: '1–2 周交付，仅 GitHub Pages，首发可不依赖付费表单服务。',
    delivery:
      '落地页定价深链计算器、会话交接联系表单、mailto 优先兜底，以及公开 Changelog 建立信任。',
    metrics: ['Pages 在线演示', '中英双语', '报价编号交接', '无需 Formspree'],
    link: SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`,
    linkLabel: '打开在线主站',
  },
  {
    id: 'agency-site',
    title: '工作室官网 + 书面商单流程',
    client: '小型工作室 / 自由职业定位',
    problem: '潜在客户在约通话前就要价与付款条款，零散邮件回复难以规模化。',
    constraint:
      '估算保持「仅供参考」，同时仍能产出客户可打印 / 另存 PDF 的 SOW 材料。',
    delivery:
      '透明档位卡、修订/定金 FAQ、计算器 SOW Markdown + 可打印提案/定金发票，以及运营回复模板。',
    metrics: ['三档定价', 'SOW + 定金发票', '回复模板', '书面范围文档'],
    link: '#pricing',
    linkLabel: '查看价格档位',
  },
  {
    id: 'dashboard-ui',
    title: '运营看板 + 可选报价 CRM',
    client: '数据 / 运营类 Web 产品',
    problem:
      '需要可分享的报价快照，以及轻量 CRM 查看线索/报价状态，不想上完整 SaaS CRM。',
    constraint: '公开演示可不部署 API；未配置 Secret 时管理端仍要能完整走查。',
    delivery:
      '计算器看板档位、可部署的报价/线索 REST API，以及离线 CRM 演示种子（`?admin=1`）与导出。',
    metrics: [
      '无 Secret 的 CRM 演示',
      '`?load=` 分享',
      'JSON / CSV 导出',
      'Schema 校验 API',
    ],
    link: ESTIMATOR_URL,
    linkLabel: '打开计算器与 CRM',
  },
  {
    id: 'rongen-church',
    title: '堂会官网 — WordPress 主题 + 离线预览',
    client: '路德会堂会（台南白河 · 荣恩堂）',
    problem:
      '需要礼仪教会风格网站（讲道、周报、活动），非技术同工可维护，且避免商业教会 SaaS 观感。',
    constraint:
      '交付可上传正式 WordPress 主机的主题包，同时提供零 PHP 本机预览，方便牧师上线前审阅版面。',
    delivery:
      '自订 WordPress 主题（自定义内容类型 + Customizer 教会资料 + 简码）、Node 预览/导出工具（中/英切换），以及可分享的静态 zip 供离线审阅。',
    metrics: [
      'WordPress 主题 zip',
      '本机预览（无需 PHP）',
      '双语预览 /en/',
      '礼仪教会视觉语言',
    ],
    link: RONGEN_PREVIEW_URL,
    linkLabel: '打开在线预览',
  },
]
