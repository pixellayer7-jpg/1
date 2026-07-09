import { describe, it, expect, vi, afterEach } from 'vitest'
import { copyTextToClipboard } from './copyEmail'

describe('copyTextToClipboard', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('returns false for empty input', async () => {
    expect(await copyTextToClipboard('')).toBe(false)
    expect(await copyTextToClipboard('   ')).toBe(false)
  })

  it('uses navigator.clipboard when available', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { clipboard: { writeText } })
    await expect(copyTextToClipboard('a@b.com')).resolves.toBe(true)
    expect(writeText).toHaveBeenCalledWith('a@b.com')
  })
})
