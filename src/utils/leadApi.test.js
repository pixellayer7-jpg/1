import { describe, it, expect, vi, afterEach } from 'vitest'
import { parseQuoteIdFromUrl, mapQuoteRowToContact } from './leadApi.js'

describe('leadApi landing helpers', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('parseQuoteIdFromUrl reads valid quote param', () => {
    const id = 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee'
    vi.stubGlobal('location', {
      ...window.location,
      search: `?quote=${id}`,
    })
    expect(parseQuoteIdFromUrl()).toBe(id)
  })

  it('mapQuoteRowToContact prefers stored summary', () => {
    const row = {
      id: 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee',
      summary: 'Saved summary',
      projectType: 'landing',
      min: 800,
      max: 1200,
    }
    expect(mapQuoteRowToContact(row, 'en').summary).toBe('Saved summary')
    expect(mapQuoteRowToContact(row, 'en').quoteRef).toBe(row.id)
  })
})
