import { describe, it, expect, beforeEach } from 'vitest'
import { readContactHandoff, CONTACT_HANDOFF_KEY } from './contactHandoff.js'

describe('readContactHandoff', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })

  it('returns null when empty', () => {
    expect(readContactHandoff()).toBeNull()
  })

  it('reads and clears handoff payload', () => {
    sessionStorage.setItem(
      CONTACT_HANDOFF_KEY,
      JSON.stringify({ summary: 'Estimate line 1', lang: 'en' })
    )
    const data = readContactHandoff()
    expect(data?.summary).toContain('Estimate')
    expect(sessionStorage.getItem(CONTACT_HANDOFF_KEY)).toBeNull()
  })

  it('returns null for invalid JSON', () => {
    sessionStorage.setItem(CONTACT_HANDOFF_KEY, '{bad')
    expect(readContactHandoff()).toBeNull()
  })
})

describe('mapHandoffProjectType', () => {
  it('maps valid calculator ids', async () => {
    const { mapHandoffProjectType } = await import('./contactHandoff.js')
    expect(mapHandoffProjectType('landing')).toBe('landing')
    expect(mapHandoffProjectType('unknown')).toBe('')
  })
})
