import { Link } from 'react-router-dom'
import type { GuideMeta } from './types'

export const meta: GuideMeta = {
  slug: 'static-vs-dynamic-qr-codes',
  title: "Static vs Dynamic QR Codes: What's the Difference?",
  description:
    'Static QR codes encode data directly and never expire. Dynamic codes redirect through a service and can be edited or tracked, for a price. Here is the tradeoff.',
  h1: "Static vs Dynamic QR Codes: What's the Difference",
  excerpt:
    'One type is free and permanent. The other can be edited after printing, for a subscription. Here is how to pick.',
  publishedDate: '2026-09-28',
}

export function Content() {
  return (
    <>
      <p>
        "Static" and "dynamic" QR codes look identical on the surface (the same
        black-and-white, or colorful, logo-decorated, square) but they work in
        fundamentally different ways underneath. Understanding the difference matters
        before you print a few hundred of them.
      </p>

      <h2>Static QR codes</h2>
      <p>
        A static QR code has your actual data (a URL, a WiFi password, a contact
        card, plain text, whatever you chose) encoded directly into the pattern of
        black and white modules. When a phone scans it, it reads that data straight
        out of the code itself. There is no server in the middle, no account behind
        it, and nothing that can go offline or get shut down later. It works exactly
        the same on the day you print it as it does ten years later. This is the kind
        of QR code this generator creates: build it once, and it's yours for free,
        forever. See{' '}
        <Link to="/guides/do-qr-codes-expire">do QR codes expire?</Link> for more on
        exactly what that means in practice.
      </p>
      <p>
        The tradeoff is that a static code is fixed. If you encoded a link and later
        need that code to point somewhere else, you have to generate and reprint a new
        code; you cannot edit what's already baked into the pattern.
      </p>

      <h2>Dynamic QR codes</h2>
      <p>
        A dynamic QR code instead encodes a short redirect link that belongs to a
        third-party service (for example, something like <code>qr.example.com/abc123</code>).
        When scanned, that short link redirects to whatever destination URL you've set
        for it, and because the redirect target lives on the service's server rather
        than inside the code, you can change the destination at any time without
        reprinting anything. Most services offering this also provide scan analytics
        (how many scans, roughly when and where).
      </p>
      <p>
        That flexibility is real, but it comes with strings attached: dynamic codes
        typically require an account with the service that hosts the redirect, and
        many providers put a scan limit or a time limit on their free tier, after
        which the code either stops working or needs a paid subscription to keep
        redirecting. If that service ever shuts down or you stop paying, every dynamic
        code you've already printed silently breaks, even though the printed square
        looks unchanged.
      </p>

      <h2>Which one should you use?</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Better fit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A link, WiFi network, or contact card that won't change</td>
            <td>Static: free, permanent, no account needed</td>
          </tr>
          <tr>
            <td>Printed once for a one-time event or a single menu run</td>
            <td>Static: nothing to maintain afterward</td>
          </tr>
          <tr>
            <td>You need scan analytics (how many, when)</td>
            <td>Dynamic: requires a paid or account-based service</td>
          </tr>
          <tr>
            <td>The destination link may change after printing thousands of copies</td>
            <td>Dynamic: can be worth the subscription at that scale</td>
          </tr>
        </tbody>
      </table>

      <h2>The practical middle ground</h2>
      <p>
        For most individual and small-business use (menus, WiFi access, event
        invitations, business cards, product packaging, social links), a static code
        pointed at a link you control (your own website, a page you can edit anytime)
        gets you most of the benefit of a dynamic code without a subscription. You
        cannot change the QR code's destination without reprinting, but you <em>can</em>{' '}
        change what's published at that destination whenever you like, since the code
        just points to a link, not to fixed content.
      </p>
      <p>
        This tool generates static QR codes with a custom icon or logo, in your choice
        of colors and shape, downloadable as PNG or SVG. Try it in our{' '}
        <Link to="/custom-qr-code">custom QR code generator →</Link>
      </p>
    </>
  )
}
