import type { FaqItem } from '../content/faq'

interface FaqSectionProps {
  items: FaqItem[]
  heading: string
}

export function FaqSection({ items, heading }: FaqSectionProps) {
  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="text-center text-2xl font-bold text-text">
        {heading}
      </h2>
      <div className="mt-8 flex flex-col gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-border bg-surface px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-text marker:content-none">
              {item.question}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180 group-open:text-accent"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
