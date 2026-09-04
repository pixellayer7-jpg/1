import {
  ESTIMATOR_URL,
  RONGEN_PREVIEW_URL,
  SITE_URL,
} from '../config/site'

const calcBase = ESTIMATOR_URL.replace(/\/?$/, '/')
const landing = SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`
const rongenEn = `${RONGEN_PREVIEW_URL.replace(/\/?$/, '/')}en/`

/**
 * 5-minute interview demo path across the PixelLayer stack.
 * Keep steps actionable — each has one primary open link.
 */
export const walkthroughSteps = [
  {
    n: '1',
    titleEn: 'Marketing landing',
    titleZh: '营销主站',
    descEn:
      'Scan hero badges, pricing deep-links, case studies, and mailto-first contact. You are already here.',
    descZh:
      '扫一眼首屏徽章、定价深链、案例研究与 mailto 优先联系区。你现在就在这里。',
    ctaEn: 'Stay on this page',
    ctaZh: '留在本页',
    href: '#walkthrough',
    external: false,
  },
  {
    n: '2',
    titleEn: 'Quote calculator',
    titleZh: '报价计算器',
    descEn:
      'Adjust scope, save a quote ID, and optionally hand off into contact with the same reference.',
    descZh:
      '调整范围、保存报价编号，可选把同一编号交接回主站联系表单。',
    ctaEn: 'Open calculator',
    ctaZh: '打开计算器',
    href: ESTIMATOR_URL,
    external: true,
  },
  {
    n: '3',
    titleEn: 'Shareable proposal',
    titleZh: '可分享提案',
    descEn:
      'Open ?proposal=sow with the same price and scope. Type a name to accept, then continue into the client portal / kickoff.',
    descZh:
      '打开 ?proposal=sow，价格与范围一致。键入姓名接受后进入客户门户 / 开工清单。',
    ctaEn: 'Open proposal',
    ctaZh: '打开提案',
    href: `${calcBase}?proposal=sow`,
    external: true,
  },
  {
    n: '4',
    titleEn: 'CRM admin (this browser)',
    titleZh: 'CRM 管理（本机）',
    descEn:
      'Open ?admin=1 — demo seed works without API secrets. Check “This browser” status and download the engagement record.',
    descZh:
      '打开 ?admin=1 — 无 API 密钥也能演示。查看「本浏览器」状态并下载合作证据包。',
    ctaEn: 'Open CRM admin',
    ctaZh: '打开 CRM',
    href: `${calcBase}?admin=1`,
    external: true,
  },
  {
    n: '5',
    titleEn: 'Client site — Rongen Church',
    titleZh: '客户站 — 荣恩堂',
    descEn:
      'Liturgical WordPress theme portfolio preview. Switch zh / EN; no PHP required for the Pages demo.',
    descZh:
      '礼仪教会 WordPress 主题作品集预览。可切换中 / EN；Pages 演示无需 PHP。',
    ctaEn: 'Open Rongen preview',
    ctaZh: '打开荣恩堂预览',
    href: RONGEN_PREVIEW_URL,
    external: true,
    secondaryHref: rongenEn,
    secondaryCtaEn: 'EN version',
    secondaryCtaZh: '英文版',
  },
]

export const walkthroughMeta = {
  landingUrl: landing,
  noteEn: 'No Formspree or API secrets required for this path.',
  noteZh: '整条路径不需要 Formspree 或 API 密钥。',
}
