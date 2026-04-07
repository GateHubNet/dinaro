# Dinaro v2

Marketing website for Dinaro — a licensed e-money institution offering payment accounts, card issuing, acquiring, and white-label fintech infrastructure.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + React Router 7 |
| Build | Vite 8 |
| Styling | Inline JS styles + Tailwind CSS 4 |
| Animations | Motion (motion/react) v12 + GSAP |
| Fonts | Inter, DM Sans, Roboto Mono (Google Fonts) |

## Project Structure

```
src/
├── pages/              # 19 route-level pages
├── components/         # Navbar, Footer, PageTransition, MobileFeaturePage, ErrorBoundary
├── hooks/              # useBreakpoint, usePreloadRoute
├── assets/             # SVG icons, partner logos, decorative graphics
├── data/               # termsData.js (Terms & Conditions HTML)
├── shared.js           # Style helpers, gradient constants, nav data
├── App.jsx             # Router, viewport scaling, page transitions
└── main.jsx            # React entry point with ErrorBoundary
```

## Pages

**Products**
- `/` — Homepage
- `/products/individuals` — Individual accounts
- `/products/business-account` — Business accounts
- `/products/debit-cards/individual` — Individual debit cards
- `/products/debit-cards/business` — Business debit cards
- `/products/emt` — Electronic Money Transfer
- `/products/acquiring/e-commerce` — E-commerce acquiring
- `/products/acquiring/payment-modules` — Payment modules

**Solutions**
- `/solutions/banking-api` — Banking API
- `/solutions/cards-api` — Cards API
- `/solutions/whitelabel/onboarding` — White-label onboarding
- `/solutions/whitelabel/ramp` — White-label ON/OFF ramp
- `/solutions/whitelabel/custom` — White-label custom

**Company**
- `/company` — About
- `/contact` — Contact form
- `/privacy-policy` — Privacy policy
- `/terms` — Terms & conditions
- `/complaints` — Complaints

## Getting Started

```bash
npm install
npm run dev            # dev server at http://localhost:5173
npm run build          # production build to /dist
npm run preview        # preview production build
npm run optimize-svgs  # run svgo on all assets
```

## Key Conventions

**Layout**
- Desktop canvas is fixed at **1728px** wide with `zoom` scaling applied to the document root
- Pages use absolute positioning with pixel coordinates (designed at 1728px)
- Responsive breakpoints via `useBreakpoint` hook: mobile ≤768px, tablet ≤1024px, desktop >1024px
- Mobile/tablet layouts are separate render paths within each page component

**Styling**
- All component styles are inline JS objects (`style={{ ... }}`)
- Style helpers in `shared.js`: `s.inter(weight, size, color, extra)`, `s.dmSans(...)`, `s.robotoMono(...)`
- Gradient backgrounds are pre-built data URI constants in `shared.js`
- Tailwind is available but used sparingly

**Animations**
- Page transitions: `AnimatePresence` + `motion.div` keyed by route in `App.jsx`
- Scroll animations: `whileInView` with `viewport={{ once: true }}` on section elements
- All animation logic lives in the component — no separate animation config files

**Performance**
- All pages are lazy-loaded via `React.lazy` + `Suspense`
- Routes are preloaded on hover via `usePreloadRoute`
- Vendor code is split into a separate chunk in `vite.config.js`

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```
VITE_API_BASE_URL=
VITE_CONTACT_FORM_URL=
VITE_ENABLE_ANALYTICS=false
```

## Branches

| Branch | Purpose |
|---|---|
| `main` | Stable production code |
| `animations` | Motion animation implementation |
| `responsive` | Mobile/tablet responsive layouts |
