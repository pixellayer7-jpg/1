/** Optional POST to estimator-api when VITE_LEAD_API_URL is set at build time. */
export function normalizeLeadApiBase(raw) {
  if (raw == null) return ''
  return String(raw).trim().replace(/\/+$/, '')
}

export const QUOTE_UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export function parseQuoteIdFromUrl() {
  try {
    const id = new URLSearchParams(window.location.search).get('quote')
    if (!id || !QUOTE_UUID_RE.test(id)) return ''
    return id
  } catch {
    return ''
  }
}

export async function getQuoteById(baseUrl, id, options = {}) {
  const { signal } = options
  if (!QUOTE_UUID_RE.test(id)) throw new Error('Invalid id')
  const url = `${baseUrl}/api/v1/quotes/${encodeURIComponent(id)}`
  const res = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    signal,
  })
  const text = await res.text()
  let json = {}
  try {
    json = text ? JSON.parse(text) : {}
  } catch {
    /* ignore */
  }
  if (!res.ok) {
    const msg =
      typeof json.error === 'string' && json.error
        ? json.error
        : `HTTP ${res.status}`
    throw new Error(msg)
  }
  return json
}

export function mapQuoteRowToContact(row, lang) {
  const en = lang === 'en'
  const summary =
    typeof row.summary === 'string' && row.summary.trim()
      ? row.summary
      : en
        ? `Saved estimate (${row.projectType}): $${Number(row.min).toLocaleString()} – $${Number(row.max).toLocaleString()} USD`
        : `已保存估算（${row.projectType}）：$${Number(row.min).toLocaleString()} – $${Number(row.max).toLocaleString()} USD`
  return {
    summary,
    quoteRef: row.id,
    projectType: row.projectType,
    min: row.min,
    max: row.max,
    range: `$${Number(row.min).toLocaleString()} – $${Number(row.max).toLocaleString()} USD`,
  }
}

export async function fetchStats(baseUrl, options = {}) {
  const { signal } = options
  const res = await fetch(`${baseUrl}/api/v1/stats`, {
    headers: { Accept: 'application/json' },
    signal,
  })
  const text = await res.text()
  let json = {}
  try {
    json = text ? JSON.parse(text) : {}
  } catch {
    /* ignore */
  }
  if (!res.ok) throw new Error('Stats unavailable')
  return json
}

export async function postLeadSnapshot(baseUrl, payload, options = {}) {
  const { signal } = options
  const url = `${baseUrl}/api/v1/leads`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    signal,
  })
  const text = await res.text()
  let json = {}
  try {
    json = text ? JSON.parse(text) : {}
  } catch {
    /* ignore */
  }
  if (!res.ok) {
    const msg =
      typeof json.error === 'string' && json.error
        ? json.error
        : `HTTP ${res.status}`
    throw new Error(msg)
  }
  return json
}
