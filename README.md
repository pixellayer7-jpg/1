# PixelLayer L.L.C — React Landing Page

A simple, professional landing page for **PixelLayer L.L.C**, built with **React** and **Vite**. Frontend & web development for startups and small businesses.

> PixelLayer L.L.C provides frontend & React development for startups and small businesses.

- **Contact**: `pixellayer7@gmail.com`
- **Live demo**: [https://pixellayer7-jpg.github.io/1/](https://pixellayer7-jpg.github.io/1/) — available after GitHub Pages is enabled for this repo (Settings → Pages → GitHub Actions) and a deploy runs.

## For clients / 给客户看的说明

- **What you get｜你会得到什么**  
  A fast, modern React website or landing page tailored to your product or business.  
  为你的产品或公司定制一套加载快、观感现代的 React 官网/落地页。

- **Typical projects｜常见项目类型**  
  SaaS / 产品落地页、数据看板 / Web App 界面、企业/工作室官网。  
  （对应页面中的 Projects 区块，可按你的实际需求调整。）

- **How we work｜合作方式**  
  Simple requirements → short call or email → fixed quote & timeline → staged delivery with review links.  
  先通过邮件简单确认需求，再给出报价与周期，中间会提供线上预览链接方便你随时反馈。

![Tech: React, Vite](https://img.shields.io/badge/React-18-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)
[![CI](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml/badge.svg)](https://github.com/pixellayer7-jpg/1/actions/workflows/ci.yml)

## Features

- **Hero** — Clear headline and call-to-action
- **Services** — What you offer (Landing Pages, React Apps, UI & Integration)
- **Projects** — Types of work you can build (landing, dashboard, website)
- **Contact** — Form (Formspree-ready) + direct email link
- **Responsive** — Works on mobile and desktop
- **Dark theme** — Easy on the eyes, easy to customize

## Tech Stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) 5
- Plain CSS (no UI framework)

## Quick Start

```bash
# Install
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Format (Prettier)
npm run format
npm run format:check
```

## Customize

This repo is configured for **PixelLayer L.L.C** by default.  
If you fork it for your own business, you can:

- **Change branding**
  - Update title and meta in `index.html`
  - Update logo text in `src/components/Hero.jsx`
  - Update footer brand in `src/components/Footer.jsx`

- **Change contact email**
  - In `src/components/Contact.jsx`, replace `pixellayer7@gmail.com` with your email.

- **Connect the form**
  - The form is set up for [Formspree](https://formspree.io/). Sign up, create a form, then in `src/components/Contact.jsx` replace `YOUR_FORM_ID` with your Formspree form ID. Messages will be sent to your email.

## Deploy

- **Vercel**: Connect this repo → deploy. No extra config needed.
- **Netlify**: Connect repo, build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: Use `base: './'` (already set in `vite.config.js`), then deploy the `dist` folder.

## About PixelLayer L.L.C

PixelLayer L.L.C is a one-person frontend studio focused on:

- React-based web apps and dashboards
- High-converting landing pages
- Clean, maintainable UI code

Based in the U.S., open to remote clients worldwide.

## License

MIT. Use it for your own company or clients. See [LICENSE](./LICENSE).

---

**Looking for a frontend developer?**  
PixelLayer L.L.C builds fast, clean React frontends for startups and small businesses.  
For projects and collaboration, email **pixellayer7@gmail.com**.
