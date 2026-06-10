import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, within, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

const LANG_KEY = 'pixelayer-landing-lang'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    cleanup()
  })

  it('defaults to English', () => {
    render(<App />)
    expect(document.documentElement.lang).toBe('en')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Convert/
    )
  })

  it('switches to Chinese and persists', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /^中文$/ }))
    expect(document.documentElement.lang).toBe('zh-CN')
    expect(localStorage.getItem(LANG_KEY)).toBe('zh')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /高转化/
    )
  })

  it('renders FAQ section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /^FAQ$/ })).toBeInTheDocument()
  })

  it('quote nav links to calculator', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(within(nav).getByRole('link', { name: /^Quote$/ })).toHaveAttribute(
      'href',
      'https://pixellayer7-jpg.github.io/project-estimator/'
    )
  })
})
