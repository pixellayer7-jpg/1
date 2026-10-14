import { describe, it, expect, vi, afterEach } from 'vitest'
import {
  fetchStats,
  getQuoteById,
  mapQuoteRowToContact,
  normalizeLeadApiBase,
  parseQuoteIdFromUrl,
  postLeadSnapshot,
} from './leadApi.js'

const ID = 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee'

function stubFetch(body, status = 200) {
  const fetchMock = vi.fn().mockResolvedValue(
    new Response(typeof body === 'string' ? body : JSON.stringify(body), {
      status,
    })
  )
  vi.stubGlobal('fetch', fetchMock)
  return fetchMock
}

describe('leadApi landing helpers', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('normalizeLeadApiBase trims whitespace and trailing slashes', () => {
    expect(normalizeLeadApiBase('  https://api.test/// ')).toBe(
      'https://api.test'
    )
    expect(normalizeLeadApiBase(null)).toBe('')
    expect(normalizeLeadApiBase(undefined)).toBe('')
  })

  it('parseQuoteIdFromUrl reads valid quote param', () => {
    vi.stubGlobal('location', {
      ...window.location,
      search: `?quote=${ID}`,
    })
    expect(parseQuoteIdFromUrl()).toBe(ID)
  })

  it('parseQuoteIdFromUrl ignores missing or malformed ids', () => {
    vi.stubGlobal('location', { ...window.location, search: '' })
    expect(parseQuoteIdFromUrl()).toBe('')
    vi.stubGlobal('location', {
      ...window.location,
      search: '?quote=not-a-uuid',
    })
    expect(parseQuoteIdFromUrl()).toBe('')
  })

  it('mapQuoteRowToContact prefers stored summary', () => {
    const row = {
      id: ID,
      summary: 'Saved summary',
      projectType: 'landing',
      min: 800,
      max: 1200,
    }
    expect(mapQuoteRowToContact(row, 'en').summary).toBe('Saved summary')
    expect(mapQuoteRowToContact(row, 'en').quoteRef).toBe(row.id)
  })

  it('mapQuoteRowToContact builds a localized summary when none is stored', () => {
    const row = {
      id: ID,
      summary: '  ',
      projectType: 'website',
      min: 1500,
      max: 2500,
    }
    const en = mapQuoteRowToContact(row, 'en')
    expect(en.summary).toBe('Saved estimate (website): $1,500 – $2,500 USD')
    expect(en.range).toBe('$1,500 – $2,500 USD')
    expect(mapQuoteRowToContact(row, 'zh').summary).toBe(
      '已保存估算（website）：$1,500 – $2,500 USD'
    )
  })

  it('getQuoteById rejects invalid ids without calling fetch', async () => {
    const fetchMock = stubFetch({})
    await expect(getQuoteById('https://api.test', 'nope')).rejects.toThrow(
      'Invalid id'
    )
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('getQuoteById returns the quote row', async () => {
    const fetchMock = stubFetch({ id: ID, min: 1 })
    await expect(getQuoteById('https://api.test', ID)).resolves.toEqual({
      id: ID,
      min: 1,
    })
    expect(fetchMock).toHaveBeenCalledWith(
      `https://api.test/api/v1/quotes/${ID}`,
      expect.objectContaining({ method: 'GET' })
    )
  })

  it('getQuoteById surfaces the API error message or HTTP status', async () => {
    stubFetch({ error: 'Quote not found' }, 404)
    await expect(getQuoteById('https://api.test', ID)).rejects.toThrow(
      'Quote not found'
    )
    stubFetch('<html>bad gateway</html>', 502)
    await expect(getQuoteById('https://api.test', ID)).rejects.toThrow(
      'HTTP 502'
    )
  })

  it('fetchStats returns JSON and throws when unavailable', async () => {
    stubFetch({ quotes: 3, leads: 1 })
    await expect(fetchStats('https://api.test')).resolves.toEqual({
      quotes: 3,
      leads: 1,
    })
    stubFetch('', 503)
    await expect(fetchStats('https://api.test')).rejects.toThrow(
      'Stats unavailable'
    )
  })

  it('postLeadSnapshot sends JSON and reports API errors', async () => {
    const fetchMock = stubFetch({ id: ID }, 201)
    const payload = { email: 'a@b.com', message: 'Hi' }
    await expect(
      postLeadSnapshot('https://api.test', payload)
    ).resolves.toEqual({ id: ID })
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('https://api.test/api/v1/leads')
    expect(init.method).toBe('POST')
    expect(JSON.parse(init.body)).toEqual(payload)

    stubFetch({ error: 'Invalid email' }, 400)
    await expect(postLeadSnapshot('https://api.test', payload)).rejects.toThrow(
      'Invalid email'
    )
    stubFetch('not json', 500)
    await expect(postLeadSnapshot('https://api.test', payload)).rejects.toThrow(
      'HTTP 500'
    )
  })
})
