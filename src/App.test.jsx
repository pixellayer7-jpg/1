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

  it('renders Changelog section with latest release', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /^Changelog$/ })
    ).toBeInTheDocument()
    expect(screen.getByText(/^v2\.2\.0$/)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /CRM demo mode \+ printable proposal/,
      })
    ).toBeInTheDocument()
  })

  it('renders About section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /^About PixelLayer$/ })
    ).toBeInTheDocument()
  })

  it('renders pricing and client sections', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /^Transparent starting ranges$/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^Who we build for$/ })
    ).toBeInTheDocument()
  })

  it('renders trust bar highlights', () => {
    render(<App />)
    expect(screen.getByLabelText(/^Why PixelLayer$/)).toBeInTheDocument()
    expect(screen.getByText(/^Written scope$/)).toBeInTheDocument()
  })

  it('renders mobile sticky contact actions', () => {
    render(<App />)
    expect(
      screen.getByRole('region', { name: /^Quick actions$/ })
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('link', { name: /^Contact$/ }).length
    ).toBeGreaterThan(0)
  })

  it('renders case studies and testimonials', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /^Engagement patterns$/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^What clients say$/ })
    ).toBeInTheDocument()
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
