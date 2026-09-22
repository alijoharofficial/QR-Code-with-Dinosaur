/**
 * Client-side content protection — DETERRENT ONLY.
 *
 * None of this is real security. Anyone can disable JavaScript, use a
 * browser extension, use `curl`/devtools' Network tab, or simply view the
 * page source over HTTP before any of these listeners attach. It exists
 * purely to raise the bar for casual right-click "view source" / copy /
 * devtools use, matching what the app's own security audit asked for as an
 * additional deterrent layer. The real security boundary for this app is
 * that it has no backend, no secrets, and no user data to protect — see
 * SECURITY_AUDIT_REPORT.md.
 *
 * Only active in production builds; set VITE_DISABLE_CONTENT_PROTECTION=true
 * to opt out (e.g. for your own QA on a production build).
 */

const FORM_FIELD_SELECTOR = 'input, textarea, select, [contenteditable="true"], [contenteditable=""]'

function isFormField(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(FORM_FIELD_SELECTOR) !== null
}

function isBlockedShortcut(e: KeyboardEvent): boolean {
  const key = e.key.toLowerCase()
  // F12
  if (key === 'f12') return true
  const mod = e.ctrlKey || e.metaKey
  if (!mod) return false
  // Ctrl/Cmd+Shift+I/J/C (devtools panels), Cmd+Option+I/J/C on macOS
  if ((e.shiftKey || e.altKey) && ['i', 'j', 'c'].includes(key)) return true
  // Ctrl/Cmd+U (view source), +S (save page), +P (print)
  if (['u', 's', 'p'].includes(key)) return true
  return false
}

let devtoolsOverlay: HTMLDivElement | null = null

function ensureDevtoolsOverlay(): HTMLDivElement {
  if (devtoolsOverlay) return devtoolsOverlay
  const el = document.createElement('div')
  el.setAttribute('aria-hidden', 'true')
  el.style.cssText =
    'position:fixed;inset:0;z-index:2147483647;backdrop-filter:blur(6px);' +
    'background:rgba(255,255,255,0.55);pointer-events:none;opacity:0;' +
    'transition:opacity 150ms ease;'
  document.body.appendChild(el)
  devtoolsOverlay = el
  return el
}

function setBlurred(active: boolean) {
  const el = ensureDevtoolsOverlay()
  el.style.opacity = active ? '1' : '0'
}

/**
 * Heuristic-only devtools presence check. Docked devtools shrink the
 * window's inner (viewport) size relative to its outer size; this is also
 * true of mobile browser chrome, zoomed pages, and split/tiled windows, so
 * the threshold is generous and re-checked on a slow interval rather than
 * acted on instantly, to avoid false positives.
 */
function looksLikeDevtoolsOpen(): boolean {
  const threshold = 220
  const widthGap = window.outerWidth - window.innerWidth
  const heightGap = window.outerHeight - window.innerHeight
  return widthGap > threshold || heightGap > threshold
}

export function initContentProtection(): () => void {
  const cleanups: Array<() => void> = []

  const on = <K extends keyof DocumentEventMap>(
    type: K,
    handler: (e: DocumentEventMap[K]) => void,
    opts?: AddEventListenerOptions,
  ) => {
    document.addEventListener(type, handler as EventListener, opts)
    cleanups.push(() => document.removeEventListener(type, handler as EventListener, opts))
  }

  on('contextmenu', (e) => {
    if (isFormField(e.target)) return
    e.preventDefault()
  })

  on('keydown', (e) => {
    if (isFormField(e.target) && !['u', 's'].includes(e.key.toLowerCase())) return
    if (isBlockedShortcut(e)) e.preventDefault()
  })

  on('copy', (e) => {
    if (isFormField(e.target)) return
    e.preventDefault()
  })
  on('cut', (e) => {
    if (isFormField(e.target)) return
    e.preventDefault()
  })
  on('dragstart', (e) => {
    if (isFormField(e.target)) return
    e.preventDefault()
  })

  const styleTag = document.createElement('style')
  styleTag.setAttribute('data-content-protection', '')
  styleTag.textContent = `
    body, body * { -webkit-user-select: none; user-select: none; }
    input, textarea, select, [contenteditable], [contenteditable] * {
      -webkit-user-select: text; user-select: text;
    }
    img { -webkit-user-drag: none; user-drag: none; }
    @media print {
      body::before {
        content: "Printing is disabled for this page.";
        display: block; padding: 2rem; font: 16px sans-serif; text-align: center;
      }
      body > * { display: none !important; }
      body::before { display: block !important; }
    }
  `
  document.head.appendChild(styleTag)
  cleanups.push(() => styleTag.remove())

  // Best-effort devtools deterrent: non-blocking blur, generous threshold,
  // slow poll (no tight loop, no page reload/redirect, never breaks the
  // page or crashes the tab).
  let lastState = false
  const interval = window.setInterval(() => {
    const open = looksLikeDevtoolsOpen()
    if (open !== lastState) {
      lastState = open
      setBlurred(open)
    }
  }, 1000)
  cleanups.push(() => {
    window.clearInterval(interval)
    devtoolsOverlay?.remove()
    devtoolsOverlay = null
  })

  return () => cleanups.forEach((fn) => fn())
}
