/** Optional POST to estimator-api when VITE_LEAD_API_URL is set at build time. */
export function normalizeLeadApiBase(raw) {
  if (raw == null) return ''
  return String(raw).trim().replace(/\/+$/, '')
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
