# 🦖 QR Code Dinosaur

A free, single-page tool that turns any URL into a scannable QR code with a
dinosaur in the middle. No signup, no backend — everything runs client-side
in your browser.

## Features

- Paste a URL (or start typing) and get a live, debounced QR preview
- 4 built-in dinosaurs (Cute T-Rex, T-Rex, Stegosaurus, Brontosaurus) as
  inline, bundled SVGs — no external images or CDNs
- 5 one-click color themes (Classic Black, Dino Green, Sunset, Ocean,
  Midnight)
- High error-correction (level H) QR encoding so the code still scans
  reliably with the dinosaur covering the center
- Download as PNG or SVG, or copy the image straight to your clipboard
- Light/dark mode, respecting your system preference and remembered via
  `localStorage`
- Fully static, fully offline after the initial page load — no server, no
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

## Linting & type-checking

```bash
npm run lint       # oxlint
npx tsc -b         # type-check
```

## Project structure

```
src/
  components/     UI components (form, previews, pickers, header, FAQ)
  dinosaurs/      Bundled dinosaur SVG artwork + icon renderer
  hooks/          Theme and debounce hooks
  lib/            URL validation, color themes, and the QR generation hook
```
