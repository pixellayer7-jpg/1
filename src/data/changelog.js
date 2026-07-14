/**
 * Curated product changelog for the marketing site.
 * Keep entries milestone-focused (not every commit).
 */
export const changelogEntries = [
  {
    version: '2.1.3',
    date: '2026-07-10',
    product: 'landing',
    titleEn: 'Public changelog on the marketing site',
    titleZh: '主站公开版本演进页',
    highlightsEn: [
      'New Changelog section with bilingual release timeline',
      'Footer and ecosystem links to #changelog',
    ],
    highlightsZh: [
      '新增中英双语 Changelog 时间线区块',
      '页脚与产品链入口链到 #changelog',
    ],
  },
  {
    version: '2.1.2',
    date: '2026-07-08',
    product: 'landing',
    titleEn: 'Mailto-first contact',
    titleZh: '联系区以邮件为主',
    highlightsEn: [
      'Primary CTA opens a prefilled email draft',
      'One-click copy email; removed “form configuring” copy',
    ],
    highlightsZh: [
      '主 CTA 打开预填邮件草稿',
      '一键复制邮箱；移除「表单配置中」文案',
    ],
  },
  {
    version: '2.1.1',
    date: '2026-05-28',
    product: 'stack',
    titleEn: 'Quote handoff across landing ↔ calculator',
    titleZh: '主站 ↔ 计算器报价交接',
    highlightsEn: [
      'Calculator can save a quote and continue on the landing contact form',
      'Landing contact hydrates from quote URL / session handoff',
    ],
    highlightsZh: [
      '计算器可保存报价并跳转主站联系表单',
      '主站联系区支持报价 URL / session 预填',
    ],
  },
  {
    version: '2.1.0',
    date: '2026-05-27',
    product: 'stack',
    titleEn: 'Ecosystem strip & CRM admin links',
    titleZh: '产品链条带与 CRM 管理入口',
    highlightsEn: [
      'Visible links: landing · calculator · CRM · API',
      'Unified quote/lead admin on the calculator (?admin=1)',
    ],
    highlightsZh: [
      '展示产品链：主站 · 计算器 · CRM · API',
      '计算器统一报价/线索管理（?admin=1）',
    ],
  },
  {
    version: '2.0.0',
    date: '2026-05-26',
    product: 'stack',
    titleEn: 'Commercial funnel v2',
    titleZh: '商业漏斗 v2',
    highlightsEn: [
      'Case studies, testimonials, booking CTA on the landing site',
      'SOW draft export + optional lead API on the calculator',
      'API leads pipeline and quote status CRM',
    ],
    highlightsZh: [
      '主站：案例模式、客户评价、预约 CTA',
      '计算器：SOW 草案导出 + 可选线索 API',
      'API：线索管道与报价状态 CRM',
    ],
  },
  {
    version: '1.7',
    date: '2026-05-20',
    product: 'landing',
    titleEn: 'Pricing preview & commercial flow',
    titleZh: '价格预览与商业流程',
    highlightsEn: [
      'On-site pricing tiers with deep links into the calculator',
      'Client types, CTA band, commercial-flow documentation',
    ],
    highlightsZh: [
      '站内价格档位，深链到计算器',
      '客户类型、转化条带与商业流程文档',
    ],
  },
  {
    version: '1.5',
    date: '2026-05-15',
    product: 'landing',
    titleEn: 'Scope, legal & calculator handoff',
    titleZh: '交付范围、法律说明与计算器交接',
    highlightsEn: [
      'Deliverables / in-scope vs out-of-scope section',
      'Privacy & terms summaries; contact handoff from calculator',
    ],
    highlightsZh: [
      '交付范围（含/不含）区块',
      '隐私与条款摘要；支持从计算器交接联系信息',
    ],
  },
  {
    version: '1.0',
    date: '2026-05-01',
    product: 'api',
    titleEn: 'Quote API & leads CRM foundation',
    titleZh: '报价 API 与线索 CRM 基础',
    highlightsEn: [
      'POST/GET quotes, optional list auth, Docker / Render deploy path',
      'Leads endpoint and stats for optional online CRM',
    ],
    highlightsZh: [
      '报价读写、可选列表鉴权、Docker / Render 部署路径',
      '线索接口与统计，支撑可选在线 CRM',
    ],
  },
  {
    version: '1.0',
    date: '2026-04-01',
    product: 'landing',
    titleEn: 'Bilingual marketing landing launch',
    titleZh: '双语营销主站上线',
    highlightsEn: [
      'React + Vite landing with EN/中文 switch',
      'Services, projects, process, contact — GitHub Pages live demo',
    ],
    highlightsZh: [
      'React + Vite 主站，支持 EN/中文切换',
      '服务、作品、流程、联系 — GitHub Pages 在线演示',
    ],
  },
]

export const productLabels = {
  landing: { en: 'Landing', zh: '主站' },
  calculator: { en: 'Calculator', zh: '计算器' },
  api: { en: 'API', zh: 'API' },
  stack: { en: 'Stack', zh: '产品链' },
}
