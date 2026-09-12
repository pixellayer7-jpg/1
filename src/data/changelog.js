/**
 * Curated product changelog for the marketing site.
 * Keep entries milestone-focused (not every commit).
 */
export const changelogEntries = [
  {
    version: '2.1.16',
    date: '2026-09-12',
    product: 'landing',
    titleEn: 'Copy walkthrough path + changelog tip',
    titleZh: '复制走查路径 + Changelog 引导',
    highlightsEn: [
      'Walkthrough section: one-click copy of the full demo URL path for interview emails',
      'Changelog tip points newcomers to #walkthrough before reading releases',
    ],
    highlightsZh: [
      '走查区一键复制完整演示路径，方便发面试邮件',
      'Changelog 顶部引导先看 #walkthrough 再浏览版本',
    ],
  },
  {
    version: '2.7.2',
    date: '2026-09-11',
    product: 'calculator',
    titleEn: 'Social og:image for the quote calculator',
    titleZh: '报价计算器社交分享预览图',
    highlightsEn: [
      '1200×630 og-image.svg for LinkedIn / X link previews',
      'Build injects og:image, twitter:summary_large_image, and canonical URL',
      'Default site URL fallback matches GitHub Pages demo',
    ],
    highlightsZh: [
      '1200×630 og-image.svg，方便 LinkedIn / X 链接预览',
      '构建注入 og:image、twitter:summary_large_image 与 canonical',
      '默认站点 URL 回退对齐 GitHub Pages 演示',
    ],
  },
  {
    version: '2.7.1',
    date: '2026-09-04',
    product: 'calculator',
    titleEn: 'Ecosystem links to Rongen + walkthrough',
    titleZh: '产品链链到荣恩堂与走查',
    highlightsEn: [
      'Calculator ecosystem strip links Rongen (zh/EN) and landing #walkthrough',
      'Footer cross-link to the live client church preview',
      'Still zero-config — no API secrets required for the interview path',
    ],
    highlightsZh: [
      '计算器产品链条带链到荣恩堂（中/EN）与主站 #walkthrough',
      '页脚增加客户堂会预览交叉链接',
      '仍为零配置 — 面试走查不需要 API 密钥',
    ],
  },
  {
    version: '1.2.3',
    date: '2026-09-04',
    product: 'stack',
    titleEn: 'Rongen print stylesheet for pastor review',
    titleZh: '荣恩堂打印样式供牧师审阅',
    highlightsEn: [
      'Print CSS hides menus, maps, and video; keeps brand and contact details',
      'On-screen print hint (Ctrl/⌘+P) on the bilingual Pages preview',
      'Theme CSS shared by WordPress and the zero-PHP preview export',
    ],
    highlightsZh: [
      '打印样式隐藏选单、地图与影片，保留品牌与联系信息',
      '双语 Pages 预览页提示 Ctrl/⌘+P 可打印审阅',
      '主题 CSS 同时用于 WordPress 与零 PHP 预览导出',
    ],
  },
  {
    version: '1.1.1',
    date: '2026-09-08',
    product: 'api',
    titleEn: 'API docs: leads, PATCH, stats, OpenAPI',
    titleZh: 'API 文档：线索、PATCH、统计、OpenAPI',
    highlightsEn: [
      'README endpoint table matches live routes (quotes, leads, stats, openapi.json)',
      'Documents Bearer auth for list/PATCH and public quote share by UUID',
      'Curl examples for leads lifecycle and status updates',
    ],
    highlightsZh: [
      'README 端点表与现网路由一致（报价、线索、统计、openapi.json）',
      '说明列表/PATCH 的 Bearer 鉴权，以及按 UUID 公开分享报价',
      '补充线索生命周期与状态更新的 curl 示例',
    ],
  },
  {
    version: '2.1.15',
    date: '2026-09-03',
    product: 'landing',
    titleEn: 'Public 5-minute walkthrough section',
    titleZh: '公开 5 分钟走查引导区',
    highlightsEn: [
      'New #walkthrough section: landing → calculator → proposal → CRM → Rongen',
      'Nav, footer, and ecosystem strip link to the guided demo path',
      'Zero-config path — no Formspree or API secrets required',
    ],
    highlightsZh: [
      '新增 #walkthrough：主站 → 计算器 → 提案 → CRM → 荣恩堂',
      '导航、页脚与产品链入口链到引导走查',
      '零配置路径 — 无需 Formspree 或 API 密钥',
    ],
  },
  {
    version: '2.1.14',
    date: '2026-09-01',
    product: 'landing',
    titleEn: 'Client site spotlight + interview-ready polish',
    titleZh: '客户站露出 + 面试走查打磨',
    highlightsEn: [
      'Hero badges call out the live Rongen church preview alongside landing and calculator demos',
      'Ecosystem strip, footer, and case studies deep-link to Rongen (zh/en), proposal (?proposal=sow), and CRM (?admin=1)',
      'Print stylesheet and Open Graph meta (site URL fallback) for walkthroughs and link previews',
      'Language toggle uses aria-pressed for clearer screen-reader state',
    ],
    highlightsZh: [
      '首屏徽章展示荣恩堂客户站在线预览，与主站、计算器并列',
      '产品链、页脚与案例研究深链荣恩堂（中/EN）、提案（?proposal=sow）与 CRM（?admin=1）',
      '打印样式与 Open Graph 元数据（站点 URL 回退），方便面试走查与链接预览',
      '语言切换增加 aria-pressed，读屏状态更清晰',
    ],
  },
  {
    version: '2.7.0',
    date: '2026-08-18',
    product: 'stack',
    titleEn: 'Engagement record + CRM this-browser status',
    titleZh: '合作记录 + CRM 本机状态',
    highlightsEn: [
      'Download JSON/Markdown engagement evidence after signing (quote, signer, deposit, kickoff)',
      'CRM admin shows the current browser quote, stage, and download — demo data stays separate',
      'Completing the kickoff checklist hands next action to PixelLayer — still zero-config',
    ],
    highlightsZh: [
      '签署后可下载 JSON/Markdown 合作证据（报价、签署人、定金、开工）',
      'CRM 管理显示本浏览器当前报价、阶段与下载 — 与演示数据分开',
      '开工清单完成后，下一步交给 PixelLayer — 仍为零配置',
    ],
  },
  {
    version: '2.6.0',
    date: '2026-08-17',
    product: 'stack',
    titleEn: 'Typed proposal acceptance + kickoff checklist',
    titleZh: '键入接受提案 + 开工清单',
    highlightsEn: [
      'Proposal requires a typed name; SOW dates and payment method fill from the same quote',
      'Client portal can mark the deposit as sent and track kickoff assets / copy / access',
      'Signature and checklist stay in this browser — still zero-config, no payment processor',
    ],
    highlightsZh: [
      '提案需键入姓名；SOW 日期与支付方式由同一报价自动填入',
      '客户门户可标记定金已汇出，并勾选开工素材 / 文案 / 权限',
      '签署与清单仅保存在本浏览器 — 仍为零配置，无需支付网关',
    ],
  },
  {
    version: '2.5.0',
    date: '2026-08-17',
    product: 'stack',
    titleEn: 'Shareable in-app proposal + named client',
    titleZh: '可分享站内提案 + 客户名称贯通',
    highlightsEn: [
      'Calculator “Open proposal” opens ?proposal=sow with the same price, scope, and quote ID',
      'Clients review SOW / deposit invoice in-app, then Accept into the matching portal',
      'Optional client name flows through proposal, invoice, portal, and share links — still zero-config',
    ],
    highlightsZh: [
      '计算器「打开提案」打开 ?proposal=sow，价格、范围与报价编号一致',
      '客户可在站内审阅 SOW / 定金发票，接受后进入对应门户',
      '可选客户名称贯通提案、发票、门户与分享链接 — 仍为零配置',
    ],
  },
  {
    version: '2.4.0',
    date: '2026-08-17',
    product: 'stack',
    titleEn: 'Quote-hydrated client portal + accept scope',
    titleZh: '报价灌水的客户门户 + 接受范围',
    highlightsEn: [
      'Calculator “Preview client portal” opens ?portal=quote with the same price, scope, and quote ID',
      'Clients can accept the indicative scope in-browser; CRM rows link to matching portals',
      'Portal artifacts print the SOW and deposit invoice for that quote — still zero-config',
    ],
    highlightsZh: [
      '计算器「预览客户状态页」打开 ?portal=quote，价格、范围与报价编号一致',
      '客户可在浏览器内接受参考范围；CRM 行链到对应门户',
      '门户交付物可打印该报价的 SOW 与定金发票 — 仍为零配置',
    ],
  },
  {
    version: '2.3.0',
    date: '2026-07-16',
    product: 'stack',
    titleEn: 'Client project status portal demo',
    titleZh: '客户项目状态页演示',
    highlightsEn: [
      'Zero-config ?portal=demo with progress, milestones, deliverables, updates, and next action',
      'Linked from CRM admin and both product ecosystem strips',
      'Representative data only — no real client information',
    ],
    highlightsZh: [
      '零配置 ?portal=demo：进度、里程碑、交付物、动态与下一步',
      '从 CRM 管理和两站产品链入口均可访问',
      '仅使用典型演示数据，不包含真实客户信息',
    ],
  },
  {
    version: '2.1.5',
    date: '2026-07-15',
    product: 'landing',
    titleEn: 'Deeper case studies (problem → metrics)',
    titleZh: '案例研究加深（问题 → 指标）',
    highlightsEn: [
      'Each case now documents problem, constraint, delivery, and metrics',
      'Links map to live demos (landing, pricing, calculator/CRM)',
    ],
    highlightsZh: [
      '每个案例写明问题、约束、交付与结果指标',
      '链接对应在线演示（主站、定价、计算器/CRM）',
    ],
  },
  {
    version: '2.2.0',
    date: '2026-07-13',
    product: 'stack',
    titleEn: 'CRM demo mode + printable proposal & deposit invoice',
    titleZh: 'CRM 演示模式 + 可打印提案与定金发票',
    highlightsEn: [
      'Calculator CRM (?admin=1) works offline with seed data — no API secrets for walkthroughs',
      'Print-ready SOW HTML and deposit invoice drafts from the same quote state',
      'Client reply templates for estimate → SOW → deposit ops',
    ],
    highlightsZh: [
      '计算器 CRM（?admin=1）零 API 演示数据，面试走查可用',
      '同一报价可打印 HTML 提案与定金发票草案',
      '估算 → SOW → 定金的客户回复邮件模板',
    ],
  },
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
