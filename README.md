# PixelLayer L.L.C — React Landing Page

A simple, professional landing page for **PixelLayer L.L.C**, built with **React** and **Vite**. Frontend & web development for startups and small businesses.

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

- **Contact email**: Edit `contact@pixellayer.com` in `src/components/Contact.jsx` if needed.
- **Form handling**: Use [Formspree](https://formspree.io/) or your backend in Contact.jsx.

1. **Company name**  
   Replace `Your Company LLC` in:
   - `index.html` (title + meta description)
   - `src/components/Hero.jsx` (logo text)
   - `src/components/Footer.jsx` (brand + copy)

2. **Contact email**  
   In `src/components/Contact.jsx`, set:
   - `mailto:hello@yourcompany.com` to your real email.

3. **Form handling**  
   The contact form only sets local state. To receive messages you can:
   - Use [Formspree](https://formspree.io/), [Getform](https://getform.io/), or similar
   - Or wire it to your own backend and add the endpoint in `Contact.jsx`’s `handleSubmit`

## Deploy

- **Vercel**: Connect this repo → deploy. No extra config needed.
- **Netlify**: Connect repo, build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: Use `base: './'` (already set in `vite.config.js`), then deploy the `dist` folder.

## License

MIT. Use it for your own company or clients.

---

**Need a custom site or React app?** This template was built for showcasing frontend work. If you want a tailored version or a full project, reach out — I’m open to new clients.
