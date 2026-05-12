# Maylyn Website “System” (from `Master prompt.md`)

This project implements the multi-page site described in `Master prompt.md` as a single React app **without external routing** (navigation is handled with React state).

## Where to edit content

- Business details, services, products, reviews: `src/App.js`
  - `BUSINESS`
  - `SERVICES`
  - `PRODUCTS`
  - `REVIEWS`
- Styling / theme (maroon + gold): `src/App.css`
- Base fonts + defaults: `src/index.css`
- Page title + Anton font import: `public/index.html`

## Pages included

- Home
- Services
- Products
- Team
- Contact (booking form + embedded map)

## Run locally

Install dependencies, then start:

```bash
npm install
npm start
```

