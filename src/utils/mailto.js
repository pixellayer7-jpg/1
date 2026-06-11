/** @param {string} email @param {string} subject @param {string} body */
export function buildMailtoHref(email, subject, body) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const q = params.toString()
  return `mailto:${email}${q ? `?${q}` : ''}`
}
