import { Link } from 'react-router-dom'
import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'qr-codes-for-wedding-invitations',
  title: 'QR Codes for Wedding Invitations: RSVP, Registry & More',
  description:
    'How to add a QR code to wedding invitations for RSVPs, your registry, or your wedding website — with design and printing tips to match your stationery.',
  h1: 'QR Codes for Wedding Invitations',
  excerpt:
    'A small scannable code on your invitation can carry your RSVP link, registry, or wedding website — without cluttering the card.',
  publishedDate: '2026-09-28',
}

export function Content() {
  return (
    <>
      <p>
        A wedding invitation only has so much room for text before it stops looking
        like an invitation and starts looking like a brochure. A QR code solves that
        cleanly: a small square in the corner or on an insert card can carry an RSVP
        form, your full wedding website, your registry, or a map to the venue, while
        the printed card stays simple and elegant.
      </p>

      <h2>What people actually use a wedding QR code for</h2>
      <ul>
        <li>
          <strong>RSVP.</strong> Link directly to an online RSVP form instead of
          asking guests to mail back a card — or use both, for guests who prefer
          paper.
        </li>
        <li>
          <strong>Wedding website.</strong> One code that leads to the schedule,
          venue directions, accommodation suggestions, and everything else that
          doesn't fit on a 5x7 card.
        </li>
        <li>
          <strong>Registry.</strong> A direct link saves guests from hunting for your
          name across multiple store registries.
        </li>
        <li>
          <strong>Photo sharing.</strong> A code on a table card at the reception that
          links to a shared album guests can upload their own photos to.
        </li>
      </ul>

      <h2>Making one that matches your stationery</h2>
      <p>
        A generic black-and-white square looks out of place on a hand-lettered
        invitation. A <strong>custom qr code generator</strong> lets you match the
        code to your color palette instead of fighting against it:
      </p>
      <ol>
        <li>
          Open the <Link to="/">QR code generator</Link> and choose the "Website"
          type, then paste in your RSVP link, wedding website, or registry link.
        </li>
        <li>
          Pick a color theme close to your invitation's palette — a soft gold, sage,
          or blush works better on stationery than pure black.
        </li>
        <li>
          Try the "Circle" shape and a rounded dot style for a softer, more formal
          look than the default sharp squares.
        </li>
        <li>
          Download as SVG so it stays crisp whether it ends up small on a save-the-date
          or larger on a welcome sign at the venue.
        </li>
      </ol>

      <h2>A few etiquette and practical tips</h2>
      <ul>
        <li>
          <strong>Add a short label.</strong> "Scan to RSVP" or "Scan for our
          registry" next to the code — don't assume every guest, especially older
          relatives, will know what it's for or that it's safe to scan.
        </li>
        <li>
          <strong>Keep a paper fallback for RSVPs</strong> if your guest list skews
          older, or at minimum print the link as plain text underneath the code.
        </li>
        <li>
          <strong>Test the destination link</strong> after your website or registry
          is finalized, not before — a code that pointed to a placeholder page during
          design and never got tested is a surprisingly common mistake.
        </li>
        <li>
          <strong>Mind the size.</strong> A code that needs to be scanned from across
          a welcome table (like a seating chart or guest book sign) should be printed
          noticeably larger than one meant to be scanned from an invitation held in
          hand.
        </li>
      </ul>

      <h2>One code, or several?</h2>
      <p>
        Many couples use one QR code on the invitation itself (usually pointing to the
        wedding website, which then links out to the RSVP form and registry from
        there), and separate codes at the reception for things like the photo album or
        song requests. Keeping the invitation to a single code keeps the card
        uncluttered while still giving guests everything they need one tap away.
      </p>
      <p>
        Because the codes this tool generates are static and free forever, there is no
        subscription to maintain and nothing that can expire between now and the wedding
        day. Build yours on the <Link to="/">QR code generator</Link>, or read{' '}
        <Link to="/blog/how-to-make-a-cute-qr-code-that-still-scans">
          how to make a custom QR code that still scans
        </Link>{' '}
        for more on styling one to match a theme without hurting readability.
      </p>
    </>
  )
}
