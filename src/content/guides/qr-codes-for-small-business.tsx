import { Link } from 'react-router-dom'
import type { GuideMeta } from './types'

export const meta: GuideMeta = {
  slug: 'qr-codes-for-small-business',
  title: 'QR Codes for Small Business: 6 Practical Uses',
  description:
    'From payment links to packaging, business cards to reviews: practical, low-cost ways a small business can put a free QR code to work.',
  h1: 'QR Codes for Small Business',
  excerpt:
    'Practical, low-cost ways a small business can put a QR code to work, beyond the obvious menu.',
  publishedDate: '2026-09-28',
}

export function Content() {
  return (
    <>
      <p>
        A QR code is one of the cheapest marketing tools a small business has: free to
        generate, free to print alongside whatever you're already printing, and it
        turns any physical surface (a receipt, a window sticker, a package) into a
        link to something online. Two of the most common uses, menus and WiFi access,
        have their own dedicated tools here: see{' '}
        <Link to="/qr-code-for-menu">QR codes for menus</Link> and{' '}
        <Link to="/qr-code-for-wifi">QR codes for WiFi</Link>. This guide covers the
        rest.
      </p>

      <h2>1. Payment and tipping links</h2>
      <p>
        A code that opens a payment link or a tip page is common on receipts, at
        counters, or on delivery packaging. Keep this one especially high-contrast and
        test it thoroughly, since customers give up quickly on a code that doesn't scan on
        the first try when money is involved.
      </p>

      <h2>2. Social profiles and review links</h2>
      <p>
        A single code near the register or on a receipt that links to your Google
        Business or Yelp review page removes the biggest barrier to getting reviews:
        having to search for you. A second code, or a link-in-bio page, can bundle
        your social profiles together.
      </p>

      <h2>3. Business cards</h2>
      <p>
        A QR code on a business card that encodes a contact card (this tool has a
        dedicated type for that) lets someone save your name, number, and email to
        their phone with one scan instead of typing it in by hand later, which is
        also exactly when most hand-typed contacts never actually get saved.
      </p>

      <h2>4. Product packaging</h2>
      <p>
        A code on packaging can link to care instructions, a warranty registration,
        an ingredient or allergen list, or a "how to use this" video: information
        that would otherwise need a printed insert. It's also a natural way to link to
        a review page after a purchase.
      </p>

      <h2>5. Event flyers and posters</h2>
      <p>
        A code linking straight to a ticket page or an RSVP form on a flyer removes a
        step between someone seeing your poster and actually signing up, compared to
        making them search for your event by name later.
      </p>

      <h2>6. A branded, on-theme code</h2>
      <p>
        A generic QR code looks like it could belong to anyone. Picking a distinct
        icon or uploading your logo makes your codes recognizable at a glance across
        receipts, packaging, and signage. Try the{' '}
        <Link to="/custom-qr-code">custom QR code generator</Link> to match your
        brand's colors and style, or the{' '}
        <Link to="/qr-code-with-logo">logo generator</Link> to use your own logo
        directly.
      </p>

      <h2>Before you print in bulk</h2>
      <ul>
        <li>Scan every code with at least two different phones first.</li>
        <li>Keep contrast high and avoid covering the three corner squares.</li>
        <li>
          Remember these are static codes. See{' '}
          <Link to="/guides/static-vs-dynamic-qr-codes">
            static vs. dynamic QR codes
          </Link>{' '}
          if you expect a destination link to change often after printing.
        </li>
        <li>Size the code for the distance it will actually be scanned from.</li>
      </ul>

      <p>
        Every use case above starts the same way: open the{' '}
        <Link to="/">QR code generator</Link>, pick the type that matches what you
        need, and customize the icon and colors to match your business.
      </p>
    </>
  )
}
