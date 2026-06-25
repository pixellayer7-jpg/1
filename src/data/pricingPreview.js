/** Mirror of project-estimator pricing — keep in sync when tiers change. */
export const pricingTiers = [
  {
    id: 'landing',
    titleEn: 'Landing Page',
    titleZh: '落地页',
    range: '$800 – $1,200',
    timelineEn: '1–2 weeks',
    timelineZh: '1–2 周',
    descEn:
      'High-converting one-pager for product launches, waitlists, or campaigns.',
    descZh: '产品发布、活动或 waitlist 的高转化单页。',
  },
  {
    id: 'website',
    titleEn: 'Company Website',
    titleZh: '企业 / 工作室官网',
    range: '$1,500 – $2,800',
    timelineEn: '2–4 weeks',
    timelineZh: '2–4 周',
    descEn:
      'Multi-section marketing site with services, portfolio, and contact.',
    descZh: '多区块营销站：服务、作品、联系与基础 SEO。',
  },
  {
    id: 'dashboard',
    titleEn: 'Dashboard / Web App UI',
    titleZh: '看板 / Web 应用界面',
    range: '$2,200 – $4,500',
    timelineEn: '3–6 weeks',
    timelineZh: '3–6 周',
    descEn: 'React UI for SaaS dashboards, admin panels, or data-heavy tools.',
    descZh: 'SaaS 看板、管理后台或数据密集型 React 界面。',
  },
]

export const addOnsPreview = [
  {
    labelEn: 'Design from scratch',
    labelZh: '从零设计',
    noteEn: '+25% on base',
    noteZh: '基础价 +25%',
  },
  {
    labelEn: 'Multilingual (EN + 中文)',
    labelZh: '多语言',
    noteEn: '+15%',
    noteZh: '+15%',
  },
  {
    labelEn: 'Rush delivery',
    labelZh: '加急交付',
    noteEn: '+20%',
    noteZh: '+20%',
  },
]
