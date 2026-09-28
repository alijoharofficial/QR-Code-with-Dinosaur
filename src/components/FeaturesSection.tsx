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
    body: 'Colors, dot style, and square or circle shape — make it match your brand.',
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
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <h3 className="font-semibold text-text">{feature.title}</h3>
            <p className="mt-1.5 text-sm text-muted">{feature.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
