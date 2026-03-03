# PixelLayer L.L.C — React Landing Page

A simple, professional landing page for **PixelLayer L.L.C**, built with **React** and **Vite**. Frontend & web development for startups and small businesses.

> PixelLayer L.L.C provides frontend & React development for startups and small businesses.

- **Contact**: `pixellayer@gmail.com`
- **Live demo**: _Add your deployed URL here (e.g. `https://pixel-layer-landing.vercel.app`)_

![Tech: React, Vite](https://img.shields.io/badge/React-18-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)

## Features

- **Hero** — Clear headline and call-to-action
- **Services** — Show what you offer (Landing Pages, React Apps, UI & Integration)
- **Contact** — Simple form + direct email link
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
```

## Customize

This repo is configured for **PixelLayer L.L.C** by default.  
If you fork it for your own business, you can:

- **Change branding**
  - Update title and meta in `index.html`
  - Update logo text in `src/components/Hero.jsx`
  - Update footer brand in `src/components/Footer.jsx`

- **Change contact email**
  - In `src/components/Contact.jsx`, replace `pixellayer@gmail.com` with your email.

- **Connect the form**
  - Use a service like [Formspree](https://formspree.io/), [Getform](https://getform.io/)  
    or your own backend in `Contact.jsx`’s `handleSubmit`.

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

MIT. Use it for your own company or clients.

---

**Looking for a frontend developer?**  
PixelLayer L.L.C builds fast, clean React frontends for startups and small businesses.  
For projects and collaboration, email **pixellayer@gmail.com**.
