import { describe, it, expect, afterEach, vi } from 'vitest'
import {
  LANDING_SECTIONS,
  normalizeLandingSection,
  scrollToLandingSectionFromLocation,
} from './landingSection'

describe('landingSection', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
  })

  it('normalizes known section ids', () => {
    expect(normalizeLandingSection('walkthrough')).toBe('walkthrough')
    expect(normalizeLandingSection('#changelog')).toBe('changelog')
    expect(normalizeLandingSection('cases')).toBe('cases')
    expect(normalizeLandingSection('nope')).toBeNull()
    expect(LANDING_SECTIONS).toContain('contact')
  })

  it('scrolls from ?section= query', () => {
    document.body.innerHTML = '<section id="walkthrough"></section>'
    const el = document.getElementById('walkthrough')
    el.scrollIntoView = vi.fn()
    const id = scrollToLandingSectionFromLocation({
      search: '?lang=en&section=walkthrough',
      hash: '',
    })
    expect(id).toBe('walkthrough')
    expect(el.scrollIntoView).toHaveBeenCalled()
  })

  it('falls back to hash when section query missing', () => {
    document.body.innerHTML = '<section id="changelog"></section>'
    const el = document.getElementById('changelog')
    el.scrollIntoView = vi.fn()
    const id = scrollToLandingSectionFromLocation({
      search: '',
      hash: '#changelog',
    })
    expect(id).toBe('changelog')
    expect(el.scrollIntoView).toHaveBeenCalled()
  })
})
