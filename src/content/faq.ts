export interface FaqItem {
  question: string
  answer: string
}

/**
 * Single source of truth for the homepage FAQ — rendered on-page by
 * FaqSection AND used to build the matching FAQPage JSON-LD, so the two
 * never drift out of sync.
 */
export const homeFaq: FaqItem[] = [
  {
    question: 'Is this QR code generator really free?',
    answer:
      'Yes. Every QR code you make here is completely free, with no signup, no watermark, and no limit on how many you create. There is no premium tier hiding better features — the dinosaur, monkey, and tiger icons, every color and dot style, and both download formats are free for anyone.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Once the page has loaded, yes. The QR code is built entirely in your browser using JavaScript, so generating and downloading codes does not need an internet connection. You only need to be online the first time you load the page (or if you are pasting in a live URL you want to double-check).',
  },
  {
    question: 'Can I add a logo or a dinosaur icon to my QR code?',
    answer:
      'Yes — that is the whole idea. Pick one of the built-in animal icons (a pixel-art dinosaur, a monkey, or a tiger), a social or action icon, or upload your own logo image. It sits in a protected white safe zone in the center of the code, and the QR is generated with high error correction so it still scans cleanly.',
  },
  {
    question: 'Are the QR codes permanent, or do they expire?',
    answer:
      'The codes are static, which means the data (a link, WiFi password, contact card, and so on) is encoded directly into the pattern of the QR code itself. There is no third-party redirect service in the middle, no subscription, and nothing that can expire or get shut off later. Once you download it, it works for as long as the QR code image exists.',
  },
  {
    question: 'What file formats can I download my QR code in?',
    answer:
      'You can download as a PNG, which is the easiest format for sharing online or printing at a fixed size, or as an SVG, a vector format that stays perfectly crisp no matter how large you print it — useful for banners, signage, or packaging. You can also copy the PNG straight to your clipboard.',
  },
  {
    question: 'Do I need to create an account or install an app?',
    answer:
      'No. There is no signup, no login, and nothing to install. Open the page, design your QR code, and download it. That is the entire process.',
  },
  {
    question: 'Is my data or uploaded logo sent to a server?',
    answer:
      'No. Everything — encoding your data, styling the QR code, and reading an uploaded logo file — happens locally in your browser. Nothing you type or upload is transmitted to a server or stored anywhere.',
  },
  {
    question: 'Will a QR code with a cute icon or logo still scan reliably?',
    answer:
      'Yes, if it is built the right way. Every code here uses error-correction level H, the highest level the QR standard supports, which means up to about 30% of the code can be covered or damaged and it will still scan. The center icon is sized to fit inside that safe margin, so adding a dinosaur or your own logo does not break scannability.',
  },
]
