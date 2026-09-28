import { Link } from 'react-router-dom'
import type { GuideMeta } from './types'

export const meta: GuideMeta = {
  slug: 'do-qr-codes-expire',
  title: 'Do QR Codes Expire? The Honest Answer',
  description:
    'A QR code made with a free generator like this one does not expire on its own. Here is what can actually break one, and how to make sure yours keeps working.',
  h1: 'Do QR Codes Expire?',
  excerpt:
    'The code itself never expires — but a few things can still stop it from working. Here is what actually happens.',
  publishedDate: '2026-09-28',
}

export function Content() {
  return (
    <>
      <p>
        Short answer: no, a QR code itself does not expire. The pattern of black and
        white squares is just a way of encoding data — it doesn't have a clock, a
        server connection, or a subscription attached to it. Once it's generated, it's
        a static image, and static images don't go bad. But that's not quite the whole
        story, and the exceptions are worth understanding before you print one
        somewhere permanent.
      </p>

      <h2>Why a static QR code doesn't expire</h2>
      <p>
        A QR code made with a free tool like this one is a <strong>static</strong>{' '}
        code: whatever you typed in — a link, a WiFi password, a contact card — is
        encoded directly into the code's pattern. There's no third-party server
        involved in reading it. A scanner reads the pattern and reconstructs the
        original data on the spot, the same way it would have on day one. See{' '}
        <Link to="/guides/static-vs-dynamic-qr-codes">
          static vs. dynamic QR codes
        </Link>{' '}
        for the full breakdown of how this differs from the "dynamic" codes some paid
        services sell, which route through a redirect link that <em>can</em> be
        switched off.
      </p>

      <h2>What actually can stop a QR code from working</h2>
      <p>
        If a QR code you made months or years ago suddenly "stops working," the code
        itself almost never changed — one of these did instead:
      </p>
      <ul>
        <li>
          <strong>The destination went away.</strong> If the code encodes a link,
          scanning it still works fine — the phone just lands on a broken page if that
          website, product listing, or menu link was taken down or moved. This is by
          far the most common cause, and it's not really the QR code "expiring"; it's
          the page behind it disappearing.
        </li>
        <li>
          <strong>A domain lapsed.</strong> If the link points to a domain that wasn't
          renewed, the whole site behind it goes dark, taking every QR code pointing to
          it down with it.
        </li>
        <li>
          <strong>It was a dynamic code on a service that shut down or stopped being
          paid for.</strong> As covered in the static vs. dynamic guide, this is the
          one real case where a QR code can go from working to broken with the printed
          image unchanged.
        </li>
        <li>
          <strong>The physical copy degraded.</strong> A faded, torn, or heavily
          scratched printout can become unscannable — this isn't the code "expiring"
          either, just ordinary wear on the material it's printed on.
        </li>
      </ul>

      <h2>How to make a QR code that keeps working</h2>
      <ol>
        <li>
          <strong>Point it at a link you control.</strong> Your own website or a page
          you can keep renewing beats a third-party listing you don't control.
        </li>
        <li>
          <strong>Keep your domain renewed</strong> if the code points to your own
          site — set it to auto-renew if your registrar supports it.
        </li>
        <li>
          <strong>Prefer static over dynamic</strong> for anything you want to last
          indefinitely without ongoing payment, unless you specifically need scan
          analytics or the ability to redirect the code elsewhere later.
        </li>
        <li>
          <strong>Print at a reasonable size and protect it</strong> — laminate or
          seal codes that will be handled often or exposed to weather.
        </li>
        <li>
          <strong>Use high error correction</strong>, so minor wear, smudging, or a
          logo in the center doesn't stop it from scanning. Every code from this tool
          uses the highest error-correction level for exactly this reason.
        </li>
      </ol>

      <h2>The short version</h2>
      <p>
        A QR code generated here has no expiration date, no subscription, and no
        third-party service that can quietly switch it off. What breaks a QR code in
        practice is almost always the destination behind it, not the code. Keep the
        link alive, and the code stays scannable indefinitely. Build one in our{' '}
        <Link to="/custom-qr-code">custom QR code generator →</Link>
      </p>
    </>
  )
}
