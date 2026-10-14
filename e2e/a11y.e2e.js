import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']

async function seriousViolations(page) {
  const { violations } = await new AxeBuilder({ page })
    .withTags(WCAG_TAGS)
    .analyze()
  return violations
    .filter((v) => v.impact === 'serious' || v.impact === 'critical')
    .map((v) => ({
      rule: v.id,
      impact: v.impact,
      targets: v.nodes.slice(0, 5).map((n) => n.target.join(' ')),
    }))
}

for (const [name, path] of [
  ['home (EN)', '/'],
  ['home (中文)', '/?lang=zh'],
]) {
  test(`no serious or critical WCAG 2.1 AA violations: ${name}`, async ({
    page,
  }) => {
    await page.goto(path)
    await expect(page.locator('#contact')).toBeAttached()
    expect(await seriousViolations(page)).toEqual([])
  })
}
