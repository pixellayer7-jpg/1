# Commercial flow · PixelLayer L.L.C

How prospects move from discovery to a signed proposal.

## 1. Discovery

- **Marketing site:** [pixellayer7-jpg.github.io/1](https://pixellayer7-jpg.github.io/1/)
- Sections: services → client types → **transparent pricing** → portfolio → process → contact

## 2. Indicative quote

- **Calculator:** [project-estimator](https://pixellayer7-jpg.github.io/project-estimator/)
- Pricing cards on the landing page deep-link with `?type=landing|website|dashboard&lang=en|zh`
- User selects add-ons, extra sections, gets USD range + quote reference UUID

## 3. Handoff to contact

- **Primary path:** “Continue on main site” → `sessionStorage` → landing `#contact` (same `github.io` origin)
- **Alternate:** Email prefill, Formspree on either site, or mailto

## 4. Written proposal

- Use [SOW template](./SOW-TEMPLATE.md) for fixed scope, payment schedule (e.g. 50/50), revision rounds

## 5. Optional: save estimate online

- Deploy [estimator-api](https://github.com/pixellayer7-jpg/estimator-api) (Render + persistent disk)
- Set `VITE_QUOTE_API_URL` on calculator build + CORS on API
- Clients get shareable `?load=<uuid>` links

## Checklist for you

- [ ] GitHub Profile **Website** → landing URL
- [ ] Formspree secret on landing + calculator repos
- [ ] Reply templates (acknowledgment → scope → SOW)
- [ ] Custom domain (optional)
