import { describe, it, expect } from 'vitest'
import { buildWalkthroughPathText } from './walkthrough'

describe('buildWalkthroughPathText', () => {
  it('includes all live demo URLs in English', () => {
    const text = buildWalkthroughPathText('en')
    expect(text).toMatch(/PixelLayer interview walkthrough/)
    expect(text).toContain(
      'https://pixellayer7-jpg.github.io/1/?section=walkthrough'
    )
    expect(text).toContain(
      'https://pixellayer7-jpg.github.io/project-estimator/'
    )
    expect(text).toContain('?proposal=sow')
    expect(text).toContain('?admin=1')
    expect(text).toContain(
      'https://pixellayer7-jpg.github.io/rongen-church/'
    )
  })

  it('uses Chinese labels when lang is zh', () => {
    const text = buildWalkthroughPathText('zh')
    expect(text).toMatch(/面试走查/)
    expect(text).toContain('营销主站')
    expect(text).toContain('报价计算器')
  })
})
