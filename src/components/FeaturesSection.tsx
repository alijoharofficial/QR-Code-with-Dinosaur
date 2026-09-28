const features = [
  {
    title: 'Free, unlimited QR codes',
    body: 'No signup, no watermark, and no cap on how many you can create.',
  },
  {
    title: 'Cute animal icons or your own logo',
    body: 'A dinosaur, monkey, tiger, or upload any logo image you like.',
  },
  {
    title: 'Fully customizable',
    body: 'Colors, dot style, and square or circle shape: make it match your brand.',
  },
  {
    title: 'Built to scan reliably',
    body: 'High error correction keeps every code readable, even with a logo on it.',
  },
  {
    title: 'Private by default',
    body: 'Everything runs in your browser. Nothing you enter is sent to a server.',
  },
  {
    title: 'PNG or SVG downloads',
    body: 'Grab a PNG for quick sharing, or an SVG that stays crisp at any print size.',
  },
]

export function FeaturesSection() {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="text-center text-2xl font-bold text-text">
        Features
      </h2>
      <ul className="mx-auto mt-8 grid max-w-3xl gap-x-8 gap-y-5 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature.title} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="m5 12 5 5 9-9" />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-text">{feature.title}</h3>
              <p className="mt-0.5 text-sm text-muted">{feature.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
