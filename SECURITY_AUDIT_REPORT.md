# Security Audit Report

**Date:** 2026-09-22
**Scope:** Full repository (`alijoharofficial/QR-Code-with-Dinosaur`)

## 1. Stack summary

This is a **100% client-side, static React application** — there is no backend,
no API, no database, no authentication, no sessions, no cookies, no payments,
and no server-side code of any kind. It runs entirely in the browser and is
deployed as static files.

| Layer | Detail |
|---|---|
| Framework | React 19 + TypeScript, built with Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Key dependency | `qr-code-styling` (client-side QR rendering) |
| Package manager | npm (`package-lock.json` committed) |
| Linter | oxlint |
| Deployment | Vercel (production, zero-config) **and** GitHub Pages (`.github/workflows/deploy-pages.yml`) |
| Secrets/env | None. No `.env` files, no `NEXT_PUBLIC_`/`VITE_`/`REACT_APP_` secrets, nothing to rotate |
| Data flow | User input → QR payload string → rendered as an image, entirely in-memory in the browser. Nothing is ever sent to a server. |

Because there is no backend, large parts of a typical security-audit checklist
(auth/sessions/JWT, SQL/NoSQL injection, CSRF, rate limiting, IDOR, mass
assignment, webhooks, server logging, admin routes, password resets, custom
404/500 pages, SSRF, command injection, path traversal) **do not apply** and
are marked N/A in the table below rather than papered over with fabricated
fixes.

The audit instead focused on what's actually exploitable in a static
client-side app: XSS/injection into the app's own outputs, the file-upload
path, dependency vulnerabilities, missing security headers, and — because the
app's *entire purpose* is generating scannable QR codes — a genuine
**reliability regression** that the audit process itself surfaced.

## 2. Findings

| ID | Severity | Location | Description | Fix applied | Status |
|---|---|---|---|---|---|
| SEC-01 | Medium | `src/lib/qrTypes.ts` (vCard, Event builders) | Free-text fields (Company, Message, Description, etc.) were interpolated raw into vCard (RFC 6350) / iCalendar (RFC 5545) TEXT properties. A value containing a backslash, comma, semicolon, or a raw newline (easy via a `<textarea>`, or a paste) could terminate the current property early and inject additional, attacker-chosen vCard/iCalendar properties into whatever contacts/calendar app scans the resulting QR code. | Added `escapeStructuredText()` implementing the RFC-mandated TEXT escaping (backslash/comma/semicolon escaped, literal line breaks become `\n`) and applied it to every vCard and Event field. | **Fixed** |
| SEC-02 | Low | `src/lib/qrTypes.ts` (WiFi builder) | `escapeWifi()` escaped WIFI: reserved characters but not raw newlines, so a pasted multi-line SSID/password could break the single-line `WIFI:` payload format. | `escapeWifi()` now strips/normalizes embedded line breaks before escaping. | **Fixed** |
| SEC-03 | Low | `src/components/IconPicker.tsx` (custom logo upload) | The file picker's `accept="image/*"` is a UI hint only and is trivially bypassed (drag-and-drop, renamed file). No size limit existed either, so a very large or non-image file would be read into memory and handed to the QR renderer with no guard. | Added real validation before `FileReader` runs: reject non-`image/*` MIME types and files over 5 MB, with a translated inline error message (all 7 languages). File never leaves the browser either way. | **Fixed** |
| SEC-04 | Medium | Deployment config | Neither deployment target served *any* security headers (no CSP, no HSTS, no X-Frame-Options, etc.) — a `vercel.json` didn't exist at all. | Added `vercel.json` with CSP, HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, and `Cross-Origin-Resource-Policy`. Verified with a real browser against the production build: **zero CSP violations**, all functionality (icon switching, QR types, language switch, download) still works. | **Fixed** (Vercel only — see "Manual actions") |
| SEC-05 | Info | `src/icons/IconGlyph.tsx` | Uses `dangerouslySetInnerHTML` to render inline SVG icon markup. | Reviewed: the `svg` prop only ever receives static, first-party, developer-authored strings from `src/icons/data.ts` — never user input (uploaded logos take a separate `<img src>` path). Not exploitable today. Already carried an inline comment documenting this invariant; left as-is rather than rewriting a working, non-exploitable pattern. | **Reviewed — no action needed** |
| SEC-06 | Info | `index.html` (Google Fonts `<link>`) | Requested: Subresource Integrity on CDN resources. | Not applied to the Google Fonts stylesheet: Google serves different CSS per requesting User-Agent, so the response body isn't stable and a fixed SRI hash would break font loading for some/all browsers. This is a well-known, documented limitation of Google Fonts, not an oversight. | **Accepted limitation** (see recommendations for a self-hosting alternative) |
| SEC-07 | **High (reliability)** | `src/lib/useQrCode.ts` (`imageOptions.imageSize`) | Discovered *while writing the CSP regression test* for this audit: at the existing `imageSize: 0.42`, roughly **half of realistic longer QR payloads failed to scan** with a real decoder (jsQR) — visually fine, but undecodable. Reproduced with the Event type's `DESCRIPTION` field, a long vCard, and a long WiFi password, across **all three preset icons** (not icon-specific). `qr-code-styling`'s own "safe" formula (`imageSize × error-correction budget`) doesn't guarantee a decodable result for every data+icon combination in practice — this was a latent bug, and the new, longer QR-type payloads added in this app made it much more likely to occur. | Reduced default `imageSize` from `0.42` to `0.30`. Stress-tested 3 icons × 4 challenging payloads (12 combinations) at `0.42` → 6 failed; at `0.30` → **0 failed**, all decode to the exact expected content. Visually confirmed the center icon is still clearly rendered at the new size. Full existing regression suite (icon switching, all themes/styles/shapes, social/action icons) re-verified passing. | **Fixed** |
| — | Info | Dependencies | `npm audit` run against the full dependency tree. | **0 vulnerabilities** (info/low/moderate/high/critical) at time of audit. Two devDependencies (`typescript`, `@types/node`) have newer *major* versions available; not a security issue, left alone to avoid an unreviewed breaking upgrade — see recommendations. | **Verified clean** |
| — | Info | Build output | Requested: disable production source maps, minify, no leftover `console.*`/`debugger`. | Verified: Vite production build already emits no `.map` files, output is minified, and a full-source grep found zero `console.*`/`debugger` statements anywhere in `src/`. No change needed. | **Verified clean** |
| — | Info | Secrets scan | Requested: scan for hardcoded secrets. | Grepped the full source tree, `index.html`, `vite.config.ts`, `package.json` for API keys/tokens/passwords/private keys. **None found.** No `.env` files exist in the repo (nor is there anything for one to hold — there's no backend). | **Verified clean — nothing to rotate** |
| — | N/A | Auth, sessions, JWT, cookies, CSRF, rate limiting, CAPTCHA, IDOR, mass assignment, admin routes, password reset, webhooks, server logging, SSRF, SQL/NoSQL/command injection, custom 404/500 | Requested by the audit template. | This app has no backend, no server, no database, and no user accounts of any kind — none of these attack surfaces exist. Documented here explicitly rather than silently skipped. | **N/A — no backend exists** |
| — | Reviewed | `src/lib/url.ts` (`normalizeUrl`) | Requested: check for open redirects / unsafe schemes. | The app never navigates to or executes a user-supplied URL/value itself — it only encodes it as QR *data* (an image) or displays it as inert text. A `javascript:`-scheme "URL" typed by a user becomes inert QR content, exactly as it would in any QR generator; there is no code path where the app itself would execute it. No open redirect exists since the app never redirects anywhere. | **Reviewed — not applicable** |

## 3. Client-side content protection (Phase 4)

Added `src/lib/contentProtection.ts`, wired up in `src/main.tsx`, **active only
in production builds** (`import.meta.env.PROD`), with an opt-out via
`VITE_DISABLE_CONTENT_PROTECTION=true` for doing your own QA against a
production build. Verified inactive in `npm run dev`.

Implements, all scoped to skip form fields (`input`, `textarea`, `select`,
`[contenteditable]`) so the app's own forms keep working normally:

- Right-click context menu disabled on page content
- F12 / Ctrl·Cmd+Shift+I/J/C / Ctrl·Cmd+U/S/P blocked
- Text selection disabled via CSS (`user-select: none`) except in form fields
- Copy/cut/drag blocked outside form fields
- Images set to non-draggable (`user-drag: none`)
- `@media print` hides the page content and shows a "Printing is disabled" message
- Devtools heuristic (window outer/inner size gap, generous 220px threshold,
  1s poll, non-blocking blur overlay — **no redirect, no infinite loop, no
  tab freeze**) to avoid false positives on mobile/zoom/docked panels
- Iframe embedding prevented via the CSP `frame-ancestors 'none'` + `X-Frame-Options: DENY`
  headers (Phase 2G) rather than JS frame-busting, which is more reliable and
  can't be defeated by disabling JS before the busting script runs
- Watermarking (optional, for "premium content") was **not implemented** —
  this app has no user accounts or logged-in state to embed a watermark for

Verified with a real browser against the production build: form typing still
works, Tab/keyboard navigation still works, `contextmenu`/copy are blocked on
page content but explicitly *not* on the URL input, and QR generation +
download still function end-to-end. This module is clearly commented as a
**deterrent only** — real protection is that the app has nothing sensitive to
protect in the first place (see §1).

## 4. Files changed

- `src/lib/qrTypes.ts` — structured-text escaping (SEC-01, SEC-02)
- `src/components/IconPicker.tsx` — upload validation (SEC-03)
- `src/i18n/translations.ts` — 2 new translation keys (upload error messages) × 7 languages
- `vercel.json` — **new** — security headers (SEC-04)
- `src/lib/useQrCode.ts` — `imageSize` 0.42 → 0.30 (SEC-07)
- `src/lib/contentProtection.ts` — **new** — Phase 4 deterrent layer
- `src/main.tsx` — wires up content protection, production-only
- `SECURITY_AUDIT_REPORT.md` — **new** — this file

## 5. Security headers now in place (Vercel deployment only)

```
Content-Security-Policy: default-src 'self'; script-src 'self';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com; img-src 'self' data: blob:;
  connect-src 'self' data: blob:; object-src 'none'; base-uri 'self';
  form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
```

`style-src` needs `'unsafe-inline'` because React sets dynamic inline
`style` attributes (the color-theme swatches); a static SPA on Vercel has no
per-request nonce mechanism to avoid this without adding Edge Middleware,
which felt like disproportionate complexity for this app. Documented rather
than silently included.

## 6. Dependencies

- `npm audit`: **0 vulnerabilities** (all severities)
- Nothing removed (no unused dependencies found)
- `package-lock.json` is committed
- Not upgraded (informational only, no security implication): `typescript`
  6.x → 7.x and `@types/node` 24.x → 26.x both have newer majors available

## 7. Manual actions required

- **None are urgent** — no secrets were found to rotate, and no host
  environment variables need to be set for this fix set to work.
- The `vercel.json` headers apply **only to the Vercel deployment**
  (`qr-code-with-dinosaur.vercel.app`). GitHub Pages has no mechanism for
  custom response headers on static sites, so the GitHub Pages mirror of
  this app will **not** get these headers — this is a platform limitation,
  not something fixable in-repo. If the GitHub Pages deployment is meant to
  be a real, promoted destination (not just a mirror), consider dropping it
  in favor of Vercel-only, or fronting it with Cloudflare (which can inject
  headers).
- If you want the optional `VITE_DISABLE_CONTENT_PROTECTION=true` escape
  hatch available for your own QA against production builds, set it in your
  local `.env.local` (still not committed) or your CI job — not required for
  normal operation.

## 8. Recommendations for ongoing security

1. **Re-run `npm audit`** on a regular cadence (e.g. monthly, or via
   Dependabot/Renovate) since this app has few dependencies and low
   maintenance overhead — there's no reason to fall behind.
2. Consider self-hosting the Inter font (e.g. via `@fontsource/inter`)
   instead of Google Fonts — this would let `style-src`/`font-src` drop the
   `fonts.googleapis.com`/`fonts.gstatic.com` allowances entirely and make
   SRI feasible for that asset (closing SEC-06 for real rather than
   documenting it as accepted).
3. If new QR content types or fields are ever added, re-run the same kind
   of jsQR-based decode regression this audit added (`.scratch/` test
   pattern) — SEC-07 shows visual QA alone isn't enough to catch scan
   failures.
4. If this app ever grows a backend (e.g. link shortening, saved codes,
   accounts), revisit this report — the large "N/A, no backend" section
   would suddenly need everything the original audit template asked for
   (auth, CSRF, rate limiting, IDOR, etc.).
5. No 2FA/WAF/backup recommendations apply today — there's no account
   system and no user data at rest anywhere.
