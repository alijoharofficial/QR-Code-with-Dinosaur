# QR Code Generator

A free, single-page tool that turns any URL into a scannable, customizable QR
code. No signup, no backend, everything runs client-side in your browser.

## Features

- Paste a URL (or start typing) and get a live, debounced QR preview
- Center icon library: animals (Dyno, Monkey, Tiger, all pixel-art style) and
  social icons (WhatsApp, Instagram, Facebook, X), all bundled inline SVGs,
  no external images or CDNs
- Upload your own logo to use as the center image
- Dot style presets: Square, Rounded, Blur, Classy
- 6 one-click color themes (Classic Black, Dino Green, Sunset, Ocean,
  Midnight, Orange)
- High error-correction (level H) QR encoding so the code still scans
  reliably with a logo or icon covering the center
- Download as PNG or SVG, or copy the image straight to your clipboard
- Light/dark mode, respecting your system preference and remembered via
  `localStorage`
- Fully static, fully offline after the initial page load. No server, no
  database, no tracking, no ads

## Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) for QR
  generation, styling, and PNG/SVG export

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This produces a fully static `dist/` folder you can deploy to Vercel,
Netlify, GitHub Pages, or any static host.

```bash
npm run preview   # preview the production build locally
```

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`, which builds the
app and publishes `dist/` on every push to `main`. In the repository's
**Settings > Pages > Build and deployment**, set **Source** to
**GitHub Actions** once, and it deploys automatically after that.

## Linting & type-checking

```bash
npm run lint       # oxlint
npx tsc -b         # type-check
```

## Project structure

```
src/
  components/     UI components (form, previews, pickers, header, FAQ)
  icons/          Bundled icon SVG artwork (animals, social) + renderer
  hooks/          Theme and debounce hooks
  lib/            URL validation, color themes, dot styles, QR generation
```
