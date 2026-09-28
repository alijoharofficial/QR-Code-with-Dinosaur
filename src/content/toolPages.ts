import type { FaqItem } from './faq'

export interface ToolPageMeta {
  path: string
  title: string
  description: string
  h1: string
  subtitle: string
  /** Short unique paragraphs of on-page content about this specific use case. */
  body: string[]
  preset: {
    initialQrTypeId?: string
    initialIconId?: string
    initialIconCategoryId?: string
  }
  faq: FaqItem[]
  relatedGuideSlugs: string[]
}

export const toolPages: ToolPageMeta[] = [
  {
    path: '/qr-code-with-dinosaur',
    title: 'QR Code with Dinosaur Logo: Free Generator',
    description:
      'Make a free QR code with a dinosaur logo in the center. Pick colors and dot style, then download as PNG or SVG. No signup, works offline.',
    h1: 'QR Code with Dinosaur Logo',
    subtitle:
      'A playful, instantly recognizable QR code with a pixel-art dinosaur in the middle, free, and ready in seconds.',
    body: [
      'A dinosaur icon turns an ordinary QR code into something people actually stop and look at, which matters when you want a code that gets scanned instead of ignored, on a poster, a sticker, a party invite, or anywhere you want a bit of personality.',
      'This page opens the generator with the pixel-art dinosaur icon already selected, in the site\'s signature green theme. Everything else still works exactly like the full tool: change the QR type, swap the icon for a monkey or tiger, upload your own logo instead, or adjust the colors, dot style, and shape.',
    ],
    preset: { initialIconId: 'dyno', initialIconCategoryId: 'animals' },
    faq: [
      {
        question: 'Does the dinosaur logo affect how well the code scans?',
        answer:
          'No. Every code here is generated with the highest error-correction level the QR standard supports, and the icon sits inside a protected safe zone that never touches the three corner finder squares scanners rely on.',
      },
      {
        question: 'Can I switch to a different animal or my own logo?',
        answer:
          'Yes, the icon picker includes a monkey and a tiger as well, or you can upload your own logo image at any time. The dinosaur is just the default on this page.',
      },
    ],
    relatedGuideSlugs: ['how-to-make-qr-with-logo', 'do-qr-codes-expire'],
  },
  {
    path: '/qr-code-with-logo',
    title: 'QR Code with Logo: Add Your Own Image, Free',
    description:
      'Upload your own logo and generate a QR code that still scans reliably. Free, high error-correction QR codes with your logo in the center.',
    h1: 'QR Code with Logo',
    subtitle:
      'Upload your own logo, keep it scannable, and download a QR code that actually looks like it belongs to you.',
    body: [
      'A logo in the center of a QR code is the fastest way to make it recognizably yours, on a business card, a product label, an invoice, or a storefront sticker. The trick is doing it without breaking scannability, which is exactly what this page is set up for.',
      'The icon picker opens straight to the upload tab. Drop in your logo file and the generator handles the rest: it sizes the image to fit a protected safe zone and encodes the code at the highest error-correction level, so covering part of the pattern with your logo doesn\'t stop it from scanning.',
    ],
    preset: { initialIconCategoryId: 'upload' },
    faq: [
      {
        question: 'What image formats can I upload as a logo?',
        answer:
          'Any common image format (PNG, JPG, SVG, and similar) up to 5 MB. It stays entirely in your browser; nothing is uploaded to a server.',
      },
      {
        question: 'Will my logo make the code harder to scan?',
        answer:
          'Not if it stays within the safe zone the generator gives it, which it does by default. High error correction (Level H) is used automatically so roughly 30% of the code can be covered and it still reads correctly.',
      },
    ],
    relatedGuideSlugs: ['how-to-make-qr-with-logo', 'qr-codes-for-small-business'],
  },
  {
    path: '/custom-qr-code',
    title: 'Custom QR Code Generator: Colors, Shape & Style',
    description:
      'Design a fully custom QR code: pick colors, dot style, and shape, add an icon or logo, and download free as PNG or SVG. No signup required.',
    h1: 'Custom QR Code Generator',
    subtitle:
      'Colors, dot style, corner shape, and icon: customize every part of your QR code and keep it fully scannable.',
    body: [
      'A custom QR code generator should let you actually change more than just the content it encodes. Here you can adjust the dot style (square, rounded, or a softer look), switch between a square or circular outer frame, pick from several color themes, and add an icon or your own logo, all without touching the code\'s reliability.',
      'Every combination is generated with the same high error-correction level, so a rounded, colorful, logo-decorated code scans exactly as reliably as a plain black-and-white one.',
    ],
    preset: {},
    faq: [
      {
        question: 'Can I change the color of a QR code without breaking it?',
        answer:
          'Yes, as long as there is enough contrast between the dot color and the background. Two similarly bright colors is the main way a color change hurts scannability.',
      },
      {
        question: 'What can I customize besides color?',
        answer:
          'The dot style, the corner (square vs. circle) shape, and the center icon or logo, plus, of course, what the code actually encodes: a link, WiFi network, contact card, and more.',
      },
    ],
    relatedGuideSlugs: ['static-vs-dynamic-qr-codes', 'do-qr-codes-expire'],
  },
  {
    path: '/qr-code-for-menu',
    title: 'QR Code for Restaurant Menu: Free Generator',
    description:
      'Create a QR code menu for your restaurant or café in seconds. Link your online menu, add your logo, and download free as PNG or SVG.',
    h1: 'QR Code for a Restaurant Menu',
    subtitle:
      'Link your menu, pick an icon that fits your restaurant, and download a code ready for table tents or posters.',
    body: [
      'A QR code menu just needs a link to your hosted menu: a page on your website, a PDF, or a simple page builder all work. This page starts the generator on the "Website" type with a menu icon already selected, ready for that link.',
      'Because these are static codes, the QR code itself never needs to change even if your menu does. Update the page behind the link and every table tent or sticker you\'ve already printed points to the new version automatically. Size it for the distance it\'ll be read from, and keep the background behind it clean so it scans quickly even in dim lighting.',
    ],
    preset: { initialIconId: 'menu', initialIconCategoryId: 'actions' },
    faq: [
      {
        question: 'Do I need to reprint the code if I update the menu?',
        answer:
          "No, as long as the menu stays at the same link, updating what's on that page (prices, specials, items) doesn't require a new QR code. You only need a new code if the link itself changes.",
      },
      {
        question: 'What size should I print the code at?',
        answer:
          'As a rough guide, keep the printed code at least about 2 cm per meter of expected scanning distance. A table tent read from arm\'s length can be smaller than a poster meant to be scanned from across a room.',
      },
    ],
    relatedGuideSlugs: ['qr-codes-for-small-business', 'static-vs-dynamic-qr-codes'],
  },
  {
    path: '/qr-code-for-wifi',
    title: 'QR Code for WiFi: Free Network Sharing Generator',
    description:
      'Generate a free WiFi QR code so guests can connect with a scan instead of typing a password. No signup, works entirely in your browser.',
    h1: 'QR Code for WiFi',
    subtitle:
      'Encode your WiFi network name and password into one code: guests scan it and connect, no typing required.',
    body: [
      'A WiFi QR code encodes your network name and password together, so a phone camera can read it and offer to connect directly, no typing a long password from a sticky note. This page opens the generator with the WiFi type already selected.',
      'This is especially useful for cafés, waiting rooms, short-term rentals, and offices with visitors. The network details stay encoded in the printed or displayed code itself; nothing is sent anywhere when you generate it.',
    ],
    preset: { initialQrTypeId: 'wifi' },
    faq: [
      {
        question: 'Is my WiFi password safe to put in a QR code?',
        answer:
          'The password is encoded directly into the code and only decoded locally by whoever scans it, the same information anyone could read off a sticky note or router label. Treat the printed code the same way you would treat writing the password down somewhere visible.',
      },
      {
        question: 'Does this work for hidden networks?',
        answer:
          'Yes, the WiFi type includes an option to mark the network as hidden, so scanning devices know to connect by name rather than by broadcast.',
      },
    ],
    relatedGuideSlugs: ['qr-codes-for-small-business', 'do-qr-codes-expire'],
  },
]

export function findToolPage(path: string): ToolPageMeta | undefined {
  return toolPages.find((page) => page.path === path)
}
