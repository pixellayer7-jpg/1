import { describe, it, expect, vi, afterEach } from 'vitest'
import { copyTextToClipboard } from './copyEmail'

describe('copyTextToClipboard', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    delete document.execCommand
  })

  it('returns false for empty input', async () => {
    expect(await copyTextToClipboard('')).toBe(false)
    expect(await copyTextToClipboard('   ')).toBe(false)
    expect(await copyTextToClipboard(null)).toBe(false)
  })

  it('uses navigator.clipboard when available', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { clipboard: { writeText } })
    await expect(copyTextToClipboard('  a@b.com ')).resolves.toBe(true)
    expect(writeText).toHaveBeenCalledWith('a@b.com')
  })

  it('falls back to execCommand when the Clipboard API rejects', async () => {
    const writeText = vi.fn().mockRejectedValue(new Error('denied'))
    vi.stubGlobal('navigator', { clipboard: { writeText } })
    let copied = ''
    document.execCommand = vi.fn(() => {
      copied = document.querySelector('textarea')?.value ?? ''
      return true
    })
    await expect(copyTextToClipboard('a@b.com')).resolves.toBe(true)
    expect(document.execCommand).toHaveBeenCalledWith('copy')
    expect(copied).toBe('a@b.com')
    expect(document.querySelector('textarea')).toBeNull()
  })

  it('falls back to execCommand when the Clipboard API is missing', async () => {
    vi.stubGlobal('navigator', {})
    document.execCommand = vi.fn(() => false)
    await expect(copyTextToClipboard('a@b.com')).resolves.toBe(false)
    expect(document.execCommand).toHaveBeenCalledWith('copy')
  })

  it('returns false when the fallback throws', async () => {
    vi.stubGlobal('navigator', {})
    document.execCommand = vi.fn(() => {
      throw new Error('blocked')
    })
    await expect(copyTextToClipboard('a@b.com')).resolves.toBe(false)
  })
})
