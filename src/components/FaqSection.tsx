const faqs = [
  {
    question: 'Is it really free?',
    answer:
      'Yes. There is no signup, no watermark, and no limit on how many codes you can generate.',
  },
  {
    question: 'Will the QR code still scan with a logo or icon on it?',
    answer:
      'Every code is generated with high error-correction (level H), and the center image sits in a rounded white safe zone, so scanners can read through the missing data.',
  },
  {
    question: 'Does my URL or uploaded logo get sent anywhere?',
    answer:
      'No. Everything, encoding, styling, and your uploaded logo, happens locally in your browser. Nothing is uploaded to a server.',
  },
  {
    question: 'What formats can I download?',
    answer:
      'PNG for quick sharing and printing, or SVG for crisp scaling at any size. You can also copy the image straight to your clipboard.',
  },
]

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-center text-2xl font-bold text-text">
        How it works
      </h2>
      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-2xl border border-border bg-surface p-5">
            <dt className="font-semibold text-text">{faq.question}</dt>
            <dd className="mt-1.5 text-sm text-muted">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
