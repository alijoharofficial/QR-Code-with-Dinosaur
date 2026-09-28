import { Link } from 'react-router-dom'
import type { ArticleMeta } from './types'

export const meta: ArticleMeta = {
  slug: 'qr-codes-for-restaurant-menus',
  title: 'QR Codes for Restaurant Menus: A Step-by-Step Guide',
  description:
    'How to set up a QR code menu for your restaurant or café: hosting the menu, generating the code, table tent design, and static vs updating menus.',
  h1: 'QR Codes for Restaurant Menus: A Step-by-Step Guide',
  excerpt:
    'From hosting your menu online to printing a table tent that actually gets scanned — here is the full setup.',
  publishedDate: '2026-09-28',
}

export function Content() {
  return (
    <>
      <p>
        QR code menus stuck around long after they first became popular out of
        necessity, and for good reason: they are cheap to update, cut printing costs,
        and let a restaurant add photos, allergen notes, or daily specials without
        reprinting anything. If you are setting one up for the first time, here is the
        whole process from an empty menu to a working code on every table.
      </p>

      <h2>Step 1: Get your menu online somewhere</h2>
      <p>
        A QR code menu still needs a menu to point to. Most restaurants use one of
        three options: a simple page on their existing website, a free page builder
        (Google Sites, Linktree, Carrd, or similar), or a PDF of the menu hosted
        somewhere with a stable link. Any of these works — what matters is that the
        link doesn't change often, since a static QR code (the kind this tool
        generates) encodes that exact link permanently.
      </p>

      <h2>Step 2: Generate the QR code</h2>
      <ol>
        <li>
          Open the <Link to="/">QR code generator</Link> and choose the "Website"
          type.
        </li>
        <li>Paste in the link to your hosted menu.</li>
        <li>
          Pick an icon that fits your restaurant's vibe, or upload your logo — a
          menu icon or your own branding both work well here.
        </li>
        <li>
          Choose a color theme that matches your signage, then download the code as
          an SVG if you plan to print it at a large size (an SVG stays sharp at any
          size), or PNG for a quick, smaller print.
        </li>
      </ol>

      <h2>Step 3: Design something people will actually scan</h2>
      <p>
        A QR code alone on a plain card gets ignored. A few small additions make a
        big difference in how many guests actually scan it:
      </p>
      <ul>
        <li>
          <strong>Add a short instruction</strong> — "Scan for our menu" next to the
          code, not just above it as an assumption.
        </li>
        <li>
          <strong>Size it for the distance it'll be read from.</strong> A table tent
          read from arm's length can use a smaller code than a poster meant to be
          scanned from across a room; as a rough guide, keep the printed code at
          least 2 x 2 cm (about an inch) per meter of expected scanning distance.
        </li>
        <li>
          <strong>Keep the background clean.</strong> Busy patterns or low contrast
          behind the code slow down scanning, especially in the dim lighting a lot of
          restaurants use.
        </li>
        <li>
          <strong>Laminate it.</strong> Table tents get spilled on. A quick laminate
          or sleeve keeps the code scannable for months instead of days.
        </li>
      </ul>

      <h2>Static menu vs. a menu that changes often</h2>
      <p>
        Because this tool generates <em>static</em> QR codes — the link is encoded
        directly into the code, for free, forever — the code itself never needs to be
        reprinted even if the menu changes, as long as the menu stays at the same
        link. Update the page behind the link (swap out today's specials, adjust a
        price) and every table tent, sticker, and poster you've already printed points
        to the new version automatically. You only need a new QR code if the link
        itself changes — for example, if you switch to a different menu hosting
        service. For a deeper look at how static codes differ from the paid,
        trackable "dynamic" codes some services sell, see{' '}
        <Link to="/blog/static-vs-dynamic-qr-codes">
          static vs. dynamic QR codes: what's the difference
        </Link>
        .
      </p>

      <h2>A few extra ideas</h2>
      <p>
        Beyond the main menu, the same approach works for a drinks list, a seasonal or
        catering menu, a link to leave a review, or a WiFi QR code for guests (this
        generator has a dedicated WiFi type that encodes the network name and password
        so guests can connect with a scan instead of typing it in). Keep each one
        visually distinct — a different icon or color theme per code — so a quick
        glance tells a guest which one is which.
      </p>
      <p>
        Ready to build yours? Head to the <Link to="/">QR code generator</Link> and
        pick the Website type to get started, or browse more ideas in{' '}
        <Link to="/blog/best-uses-of-qr-codes-for-small-businesses">
          best uses of QR codes for small businesses
        </Link>
        .
      </p>
    </>
  )
}
