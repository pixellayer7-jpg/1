/** Section ids that can be opened via `?section=<id>` (sitemap-friendly deep links). */
export const LANDING_SECTIONS = [
  'services',
  'pricing',
  'clients',
  'projects',
  'cases',
  'stack',
  'process',
  'walkthrough',
  'about',
  'deliverables',
  'faq',
  'changelog',
  'contact',
  'privacy',
  'terms',
  'legal',
]

/**
 * @param {string | null | undefined} raw
 * @returns {string | null}
 */
export function normalizeLandingSection(raw) {
  if (typeof raw !== 'string') return null
  const id = raw.trim().replace(/^#/, '')
  return LANDING_SECTIONS.includes(id) ? id : null
}

/**
 * Scroll to a section from `?section=` (preferred over `#hash` for sitemap URLs).
 * Falls back to `location.hash` when present.
 */
export function scrollToLandingSectionFromLocation(
  location = typeof window !== 'undefined' ? window.location : null
) {
  if (!location) return null
  let id = null
  try {
    id = normalizeLandingSection(
      new URLSearchParams(location.search).get('section')
    )
  } catch {
    /* ignore */
  }
  if (!id && typeof location.hash === 'string' && location.hash.length > 1) {
    id = normalizeLandingSection(location.hash.slice(1))
  }
  if (!id) return null
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return id
}
