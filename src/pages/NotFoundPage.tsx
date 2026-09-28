import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-text">Page not found</h1>
      <p className="mt-3 text-muted">
        That page doesn't exist. Head back to the QR code generator.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block font-semibold text-accent hover:text-accent-hover"
      >
        Go to the QR code generator
      </Link>
    </div>
  )
}
