/// <reference types="vitest/config" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/+$/, '')

  return {
    plugins: [
      react(),
      {
        name: 'inject-site-url-meta',
        transformIndexHtml() {
          const tags = [
            {
              tag: 'link',
              attrs: {
                rel: 'sitemap',
                type: 'application/xml',
                href: './sitemap.xml',
              },
              injectTo: 'head',
            },
          ]
          if (!siteUrl) return tags
          const canonical = `${siteUrl}/`
          const ogImage = `${siteUrl}/og-image.svg`
          tags.push(
            {
              tag: 'link',
              attrs: { rel: 'canonical', href: canonical },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: { property: 'og:url', content: canonical },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: { property: 'og:image', content: ogImage },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: { property: 'og:image:width', content: '1200' },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: { property: 'og:image:height', content: '630' },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: { name: 'twitter:card', content: 'summary_large_image' },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: { name: 'twitter:url', content: canonical },
              injectTo: 'head',
            },
            {
              tag: 'meta',
              attrs: { name: 'twitter:image', content: ogImage },
              injectTo: 'head',
            },
            {
              tag: 'script',
              attrs: { type: 'application/ld+json' },
              children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'PixelLayer L.L.C',
                url: canonical,
                email: 'pixellayer7@gmail.com',
                description:
                  'React landing pages and web UI for startups and small businesses.',
              }),
              injectTo: 'head',
            }
          )
          return tags
        },
      },
    ],
    base: './',
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
      globals: false,
      css: true,
    },
  }
})
