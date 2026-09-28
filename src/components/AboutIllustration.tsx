/**
 * A small animated illustration for the About page: the site's pixel-art
 * dinosaur inside a scanning frame, with a shield badge standing in for
 * "runs locally, nothing leaves your browser." Pure CSS animation, reusing
 * the .nf-dino / .brand-scan-line keyframes already defined for the 404
 * page and the header logo, so no new keyframes are introduced.
 */
export function AboutIllustration() {
  return (
    <div className="relative mx-auto flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-white shadow-inner sm:h-48 sm:w-48">
      <div className="absolute inset-3 overflow-hidden rounded-full">
        <div className="brand-scan-line absolute inset-x-0 top-0 h-1.5 bg-accent/60" aria-hidden="true" />
      </div>

      <svg viewBox="0 0 120 120" className="nf-dino h-24 w-24 sm:h-28 sm:w-28" aria-hidden="true">
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

      <div className="nf-bounce absolute -right-1 bottom-2 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-contrast shadow-soft">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
          <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </div>
    </div>
  )
}
