# Commercial flow · PixelLayer L.L.C

How prospects move from discovery to a signed proposal.

## 1. Discovery

- **Marketing site:** [pixellayer7-jpg.github.io/1](https://pixellayer7-jpg.github.io/1/)
- Sections: services → client types → **transparent pricing** → portfolio → **engagement patterns** → contact

## 2. Indicative quote

- **Calculator:** [project-estimator](https://pixellayer7-jpg.github.io/project-estimator/)
- Pricing cards on the landing page deep-link with `?type=landing|website|dashboard&lang=en|zh`
- User selects add-ons, extra sections, gets USD range + quote reference UUID
- **v2.0:** Download **SOW draft** (Markdown) from the calculator
- **v2.2:** Print-ready **HTML proposal (SOW)** + **deposit invoice** draft; CRM **demo mode** for `?admin=1` without API secrets

## 3. Handoff to contact

- **Primary path:** “Continue on main site” → `sessionStorage` → landing `#contact` (same `github.io` origin)
- **Alternate:** Email prefill, Formspree on either site, mailto, or **POST `/api/v1/leads`** when API is deployed

## 4. Written proposal

- **v2.6:** Typed name to accept; SOW dates + payment method auto-fill; portal **Mark deposit sent** + kickoff checklist (this browser only)
- **v2.5:** Share the calculator **Open proposal** URL (`?proposal=sow`) — same price/scope in-app, then **Accept** into `?portal=quote`
- Optional client name on the calculator carries into SOW, deposit invoice, and portal
- Fallback: calculator **SOW draft** Markdown / print HTML, or [SOW template](./SOW-TEMPLATE.md)
- **Book a call** CTA on landing (set `VITE_BOOKING_URL` or mailto fallback)

## 5. Optional: save estimate online + CRM

- Deploy [estimator-api](https://github.com/pixellayer7-jpg/estimator-api) (Render + persistent disk)
- Set `VITE_QUOTE_API_URL` on calculator build + CORS on API
- Clients get shareable `?load=<uuid>` links
- **v1.0 API:** `PATCH` quote status; admin panel at `?admin=1` on calculator (Bearer token)

## Checklist for you

- [ ] GitHub Profile **Website** → landing URL
- [ ] Formspree secret on landing + calculator repos
- [ ] `VITE_LEAD_API_URL` on both frontends when API is live
- [ ] `LIST_QUOTES_TOKEN` on API for admin list + PATCH
- [x] Reply templates (acknowledgment → scope → SOW): [CLIENT-REPLY-TEMPLATES.md](./CLIENT-REPLY-TEMPLATES.md)
- [ ] Custom domain (optional)
- [ ] Calendly or booking link in `VITE_BOOKING_URL`
