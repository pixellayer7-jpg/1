import { test, expect } from '@playwright/test'

let pageErrors

test.beforeEach(async ({ page }) => {
  pageErrors = []
  page.on('pageerror', (err) => pageErrors.push(err.message))
})

test.afterEach(() => {
  expect(pageErrors, 'uncaught errors in the page').toEqual([])
})

test('?section=walkthrough scrolls to the interview walkthrough', async ({
  page,
}) => {
  await page.goto('/?section=walkthrough')
  await expect(
    page.getByRole('heading', { name: '5-minute interview walkthrough' })
  ).toBeInViewport()
})

test('copy full path confirms with "Copied"', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/?section=walkthrough')
  await page.getByRole('button', { name: 'Copy full path' }).click()
  await expect(page.getByRole('button', { name: 'Copied' })).toBeVisible()
  const copied = await page.evaluate(() => navigator.clipboard.readText())
  expect(copied).toContain('?section=walkthrough')
})

test('language switch updates the page and persists across reloads', async ({
  page,
}) => {
  await page.goto('/')
  await page.getByRole('button', { name: '中文' }).click()
  await expect(page).toHaveTitle('PixelLayer L.L.C — 前端与 Web 开发')
  await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN')
  await page.reload()
  await expect(page.getByRole('button', { name: '中文' })).toHaveAttribute(
    'aria-pressed',
    'true'
  )
})

test('pricing cards deep-link into the calculator with type and lang', async ({
  page,
}) => {
  await page.goto('/?lang=zh&section=pricing')
  const links = page.locator('#pricing a.pricing-link')
  await expect(links).toHaveCount(3)
  const href = await links.first().getAttribute('href')
  const url = new URL(href)
  expect(url.pathname).toBe('/project-estimator/')
  expect(url.searchParams.get('type')).toBe('landing')
  expect(url.searchParams.get('lang')).toBe('zh')
})
