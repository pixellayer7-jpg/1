export const CONTACT_HANDOFF_KEY = 'pixellayer-contact-handoff'

/** @returns {{ summary: string, lang?: string, quoteRef?: string | null, min?: number, max?: number } | null} */
export function readContactHandoff() {
  try {
    const raw = sessionStorage.getItem(CONTACT_HANDOFF_KEY)
    if (!raw) return null
    sessionStorage.removeItem(CONTACT_HANDOFF_KEY)
    const data = JSON.parse(raw)
    if (typeof data?.summary !== 'string' || !data.summary.trim()) return null
    return data
  } catch {
    return null
  }
}
