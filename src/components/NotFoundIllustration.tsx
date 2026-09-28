/**
 * A framed, animated illustration for the 404 page: the site's pixel-art
 * dinosaur, looking around inside a QR-style scan frame that sweeps but
 * never finds a match. Pure CSS animation (see .nf-* classes in index.css),
 * so it's inert in the prerendered HTML and only moves once hydrated.
 */
export function NotFoundIllustration() {
  return (
    <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-3xl bg-white p-6 shadow-inner sm:h-56 sm:w-56">
      {/* QR-style finder corners */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <g fill="none" stroke="#16a34a" strokeWidth="3.5">
          <path d="M4 20 V8a4 4 0 0 1 4-4h12" />
          <path d="M96 20V8a4 4 0 0 0-4-4H80" />
          <path d="M4 80v12a4 4 0 0 0 4 4h12" />
        </g>
      </svg>

      {/* Sweeping scan line */}
      <div className="nf-scan absolute inset-x-6 top-6 h-1 rounded-full bg-accent/70" aria-hidden="true" />

      {/* The dinosaur, wobbling as if looking around for the page */}
      <svg viewBox="0 0 120 120" className="nf-dino h-28 w-28 sm:h-32 sm:w-32" aria-hidden="true">
        <g fill="#1f2937" shapeRendering="crispEdges">
          <rect x="64" y="18" width="32" height="4" />
          <rect x="60" y="22" width="40" height="4" />
          <rect x="60" y="26" width="8" height="4" />
          <rect x="72" y="26" width="28" height="4" />
          <rect x="60" y="30" width="40" height="4" />
          <rect x="60" y="34" width="40" height="4" />
          <rect x="60" y="38" width="40" height="4" />
          <rect x="60" y="42" width="32" height="4" />
          <rect x="20" y="46" width="4" height="4" />
          <rect x="56" y="46" width="20" height="4" />
          <rect x="20" y="50" width="4" height="4" />
          <rect x="48" y="50" width="28" height="4" />
          <rect x="20" y="54" width="8" height="4" />
          <rect x="44" y="54" width="40" height="4" />
          <rect x="20" y="58" width="12" height="4" />
          <rect x="40" y="58" width="36" height="4" />
          <rect x="80" y="58" width="4" height="4" />
          <rect x="20" y="62" width="56" height="4" />
          <rect x="20" y="66" width="56" height="4" />
          <rect x="24" y="70" width="48" height="4" />
          <rect x="28" y="74" width="44" height="4" />
          <rect x="32" y="78" width="36" height="4" />
          <rect x="36" y="82" width="28" height="4" />
          <rect x="40" y="86" width="12" height="4" />
          <rect x="56" y="86" width="8" height="4" />
          <rect x="40" y="90" width="8" height="4" />
          <rect x="60" y="90" width="4" height="4" />
          <rect x="40" y="94" width="4" height="4" />
          <rect x="60" y="94" width="4" height="4" />
          <rect x="40" y="98" width="8" height="4" />
          <rect x="60" y="98" width="8" height="4" />
        </g>
      </svg>

      {/* Bouncing "?" — the dino is just as lost as you are */}
      <div className="nf-bounce absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-base font-extrabold text-accent-contrast shadow-soft">
        ?
      </div>
    </div>
  )
}
