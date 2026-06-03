/** Public URLs — override at build via VITE_* (see .env.example). */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL || 'https://pixellayer7-jpg.github.io/1'

export const ESTIMATOR_URL =
  import.meta.env.VITE_ESTIMATOR_URL ||
  'https://pixellayer7-jpg.github.io/project-estimator/'

export const GITHUB_PROFILE = 'https://github.com/pixellayer7-jpg'
export const EMAIL = 'pixellayer7@gmail.com'

export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || ''
