const steps = [
  {
    title: 'Choose what it does',
    body: 'Pick a type — a website link, WiFi network, contact card, menu, and more — and fill in the details.',
  },
  {
    title: 'Pick an icon or logo',
    body: 'Choose a built-in icon, including a dinosaur, monkey, or tiger, or upload your own logo image.',
  },
  {
    title: 'Style it',
    body: 'Adjust the colors, dot style, and shape until it matches your brand or the occasion.',
  },
  {
    title: 'Download and scan',
    body: 'Save it as a PNG or SVG, or copy it straight to your clipboard. It works immediately.',
  },
]

export function HowItWorksSection() {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6"
      aria-labelledby="how-it-works-heading"
    >
      <h2 id="how-it-works-heading" className="text-center text-2xl font-bold text-text">
        How it works
      </h2>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-contrast">
              {index + 1}
            </span>
            <h3 className="mt-3 font-semibold text-text">{step.title}</h3>
            <p className="mt-1.5 text-sm text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
