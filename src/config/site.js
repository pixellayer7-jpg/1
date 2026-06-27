/** Public URLs — override at build via VITE_* (see .env.example). */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL || 'https://pixellayer7-jpg.github.io/1'

export const ESTIMATOR_URL =
  import.meta.env.VITE_ESTIMATOR_URL ||
  'https://pixellayer7-jpg.github.io/project-estimator/'

export const GITHUB_PROFILE = 'https://github.com/pixellayer7-jpg'
export const EMAIL = 'pixellayer7@gmail.com'

export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || ''

/** Optional estimator-api base for POST /api/v1/leads */
export const LEAD_API_URL = import.meta.env.VITE_LEAD_API_URL || ''

/** Optional Calendly / booking URL */
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || ''

/** GitHub raw URL for SOW template in repo */
export const SOW_DOC_URL =
  'https://github.com/pixellayer7-jpg/1/blob/main/docs/SOW-TEMPLATE.md'
