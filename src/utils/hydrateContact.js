import { readContactHandoff, mapHandoffProjectType } from './contactHandoff.js'
import {
  getQuoteById,
  mapQuoteRowToContact,
  parseQuoteIdFromUrl,
} from './leadApi.js'

/** Hydrate contact form from ?quote= API param or sessionStorage handoff. */
export async function hydrateContactForm(leadApiBase, lang) {
  const quoteId = parseQuoteIdFromUrl()
  if (quoteId && leadApiBase) {
    try {
      const row = await getQuoteById(leadApiBase, quoteId)
      return mapQuoteRowToContact(row, lang)
    } catch {
      /* fall through to handoff */
    }
  }
  const data = readContactHandoff()
  if (!data) return null
  return {
    summary: data.summary,
    quoteRef: data.quoteRef ?? true,
    projectType: mapHandoffProjectType(data.projectType),
    min: data.min,
    max: data.max,
    range:
      typeof data.min === 'number' &&
      typeof data.max === 'number' &&
      Number.isFinite(data.min) &&
      Number.isFinite(data.max)
        ? `$${data.min.toLocaleString()} – $${data.max.toLocaleString()} USD`
        : '',
  }
}
