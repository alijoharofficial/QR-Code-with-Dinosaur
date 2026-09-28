import type { FaqItem } from '../content/faq'

interface FaqSectionProps {
  items: FaqItem[]
  heading?: string
}

export function FaqSection({ items, heading = 'Frequently asked questions' }: FaqSectionProps) {
  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="text-center text-2xl font-bold text-text">
        {heading}
      </h2>
      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.question} className="rounded-2xl border border-border bg-surface p-5">
            <dt className="font-semibold text-text">{item.question}</dt>
            <dd className="mt-1.5 text-sm text-muted">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
