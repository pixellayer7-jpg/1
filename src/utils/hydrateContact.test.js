import { describe, it, expect, vi, afterEach } from 'vitest'
import { CONTACT_HANDOFF_KEY } from './contactHandoff.js'
import { hydrateContactForm } from './hydrateContact.js'

const ID = 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee'

function setSearch(search) {
  vi.stubGlobal('location', { ...window.location, search })
}

function setHandoff(data) {
  sessionStorage.setItem(CONTACT_HANDOFF_KEY, JSON.stringify(data))
}

describe('hydrateContactForm', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    sessionStorage.clear()
  })

  it('returns null with no quote param and no handoff', async () => {
    setSearch('')
    await expect(hydrateContactForm('https://api.test', 'en')).resolves.toBe(
      null
    )
  })

  it('loads the saved quote from the API when ?quote= is present', async () => {
    setSearch(`?quote=${ID}`)
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            id: ID,
            summary: 'From API',
            projectType: 'website',
            min: 1500,
            max: 2500,
          })
        )
      )
    )
    await expect(
      hydrateContactForm('https://api.test', 'en')
    ).resolves.toMatchObject({
      summary: 'From API',
      quoteRef: ID,
      projectType: 'website',
      range: '$1,500 – $2,500 USD',
    })
  })

  it('falls back to the session handoff when the API fails', async () => {
    setSearch(`?quote=${ID}`)
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))
    setHandoff({
      summary: 'From calculator',
      quoteRef: 'ref-1',
      projectType: 'landing',
      min: 800,
      max: 1200,
    })
    await expect(hydrateContactForm('https://api.test', 'en')).resolves.toEqual(
      {
        summary: 'From calculator',
        quoteRef: 'ref-1',
        projectType: 'landing',
        min: 800,
        max: 1200,
        range: '$800 – $1,200 USD',
      }
    )
    expect(sessionStorage.getItem(CONTACT_HANDOFF_KEY)).toBeNull()
  })

  it('skips the API without a base URL and normalizes partial handoffs', async () => {
    setSearch(`?quote=${ID}`)
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    setHandoff({ summary: 'Partial', projectType: 'mobile-app' })
    await expect(hydrateContactForm('', 'zh')).resolves.toEqual({
      summary: 'Partial',
      quoteRef: true,
      projectType: '',
      min: undefined,
      max: undefined,
      range: '',
    })
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
