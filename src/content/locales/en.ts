import type { PageContent } from '../pageContent'

export const content: PageContent = {
  chrome: {
    navHome: 'Home',
    navQrTools: 'QR Tools',
    navGuides: 'Guides',
    navServices: 'Services',
    navAbout: 'About',
    toolShort: {
      dinosaur: 'QR w/ Dinosaur',
      logo: 'QR w/ Logo',
      custom: 'Custom QR',
      menu: 'QR for Menu',
      wifi: 'QR for WiFi',
    },
    footerToolsHeading: 'Tools',
    footerResourcesHeading: 'Resources',
    footerServicesHeading: 'Services',
    footerCompanyHeading: 'Company',
    footerFaqLabel: 'FAQ',
    footerWhatWeOffer: 'What We Offer',
    footerContact: 'Contact',
    footerPrivacyPolicy: 'Privacy Policy',
    footerTerms: 'Terms',
    footerBuiltBy: 'Built by',
    menuAriaLabel: 'Menu',
    switchToLightMode: 'Switch to light mode',
    switchToDarkMode: 'Switch to dark mode',
    emailUsLabel: 'Email us',
    getInTouchLabel: 'Get in touch',
    questionsFeedback: 'Questions, feedback, or found a bug?',
    lastUpdatedLabel: 'Last updated',
    faqHeadingDefault: 'Frequently asked questions',
    faqHeadingToolPage: 'Questions about this page',
    relatedGuidesHeading: 'Related guides',
    backToGenerator: '← Back to the main QR code generator',
  },
  notFound: {
    pageTitle: 'Page Not Found | QR Code Generator',
    eyebrow: '404',
    heading: 'This page wandered off',
    bodyWithPathPrefix: "Even the dinosaur couldn't scan its way to",
    bodyWithPathSuffix: '. It might have moved, or the link may be out of date.',
    bodyWithoutPath:
      "Even the dinosaur couldn't scan its way to this page. It might have moved, or the link may be out of date.",
    backToGenerator: 'Back to the generator',
    browseGuides: 'Browse guides',
  },
  routes: {
    home: {
      title: 'QR Code Generator with a Dinosaur Logo | Custom & Free',
      description:
        'Make a free custom QR code with a dinosaur logo, animal icon, or your own image. Cute, scannable QR codes in seconds, no signup, works offline.',
    },
    guidesIndex: {
      title: 'QR Code Guides & Tips | QR Code Generator',
      description:
        'Practical, original guides on QR codes: adding a logo, static vs dynamic codes, whether they expire, and QR codes for small business. All free to read.',
      h1: 'QR Code Guides & Tips',
    },
    services: {
      title: 'Services | QR Code Generator',
      description:
        'Need more than a QR code? See the web, branding, and marketing services offered by TECH24, the team behind this free QR code generator.',
    },
    about: {
      title: 'About | QR Code Generator',
      description:
        'About this free QR code generator: what it does, how it protects your data, and who built and maintains it.',
    },
    contact: {
      title: 'Contact | QR Code Generator',
      description: 'Get in touch about this free QR code generator: questions, feedback, or bug reports welcome.',
    },
    privacy: {
      title: 'Privacy Policy | QR Code Generator',
      description:
        'How this QR code generator handles your data: what stays in your browser, what analytics are used, and what is never collected.',
    },
    terms: {
      title: 'Terms of Use | QR Code Generator',
      description:
        'The terms for using this free QR code generator, including what it does, what it does not guarantee, and how it may be used.',
    },
  },
  home: {
    heroTitlePrefix: 'QR Code Generator with a',
    heroTitleAccent: 'Dinosaur Logo',
    heroSubtitle:
      'Free, custom QR codes with a dinosaur, monkey, tiger, or your own logo: cute, scannable, and ready in seconds.',
    introPrefix: 'This is a free',
    introBold: 'custom QR code generator',
    introSuffix:
      "that turns any link, WiFi network, or contact card into a scannable code, styled with a cute animal icon like a dinosaur, monkey, or tiger, or your own logo. Every QR code is created entirely in your browser, downloads as PNG or SVG, and works forever with no signup and no watermark.",
    whatIsQrHeading: 'What is a QR code?',
    whatIsQrBody:
      'A QR (Quick Response) code is a small square pattern that stores data a camera can read in an instant, no app or typing needed. Point a phone camera at one and it decodes straight to the link, WiFi network, or contact card packed inside it.',
    thisGeneratorSupports: 'This generator supports',
    howItWorksSteps: [
      {
        title: 'Choose what it does',
        body: 'Pick a type: a website link, WiFi network, contact card, menu, and more, and fill in the details.',
      },
      {
        title: 'Pick an icon or logo',
        body: 'Choose a built-in icon, including a dinosaur, monkey, or tiger, or upload your own logo image.',
      },
      {
        title: 'Style it',
        body: 'Adjust the colors, dot style, and shape until it matches your brand or the occasion.',
      },
      {
        title: 'Download and scan',
        body: 'Save it as a PNG or SVG, or copy it straight to your clipboard. It works immediately.',
      },
    ],
    featuresHeading: 'Features',
    features: [
      {
        title: 'Free, unlimited QR codes',
        body: 'No signup, no watermark, and no cap on how many you can create.',
      },
      {
        title: 'Cute animal icons or your own logo',
        body: 'A dinosaur, monkey, tiger, or upload any logo image you like.',
      },
      {
        title: 'Fully customizable',
        body: 'Colors, dot style, and square or circle shape: make it match your brand.',
      },
      {
        title: 'Built to scan reliably',
        body: 'High error correction keeps every code readable, even with a logo on it.',
      },
      {
        title: 'Private by default',
        body: 'Everything runs in your browser. Nothing you enter is sent to a server.',
      },
      {
        title: 'PNG or SVG downloads',
        body: 'Grab a PNG for quick sharing, or an SVG that stays crisp at any print size.',
      },
    ],
    moreWaysToUseIt: 'More ways to use it',
    faq: [
      {
        question: 'Is this QR code generator really free?',
        answer:
          'Yes. Every QR code you make here is completely free, with no signup, no watermark, and no limit on how many you create. There is no premium tier hiding better features: the dinosaur, monkey, and tiger icons, every color and dot style, and both download formats are free for anyone.',
      },
      {
        question: 'Does it work offline?',
        answer:
          'Once the page has loaded, yes. The QR code is built entirely in your browser using JavaScript, so generating and downloading codes does not need an internet connection. You only need to be online the first time you load the page (or if you are pasting in a live URL you want to double-check).',
      },
      {
        question: 'Can I add a logo or a dinosaur icon to my QR code?',
        answer:
          'Yes, that is the whole idea. Pick one of the built-in animal icons (a pixel-art dinosaur, a monkey, or a tiger), a social or action icon, or upload your own logo image. It sits in a protected white safe zone in the center of the code, and the QR is generated with high error correction so it still scans cleanly.',
      },
      {
        question: 'Are the QR codes permanent, or do they expire?',
        answer:
          'The codes are static, which means the data (a link, WiFi password, contact card, and so on) is encoded directly into the pattern of the QR code itself. There is no third-party redirect service in the middle, no subscription, and nothing that can expire or get shut off later. Once you download it, it works for as long as the QR code image exists.',
      },
      {
        question: 'What file formats can I download my QR code in?',
        answer:
          'You can download as a PNG, which is the easiest format for sharing online or printing at a fixed size, or as an SVG, a vector format that stays perfectly crisp no matter how large you print it. Useful for banners, signage, or packaging. You can also copy the PNG straight to your clipboard.',
      },
      {
        question: 'Do I need to create an account or install an app?',
        answer:
          'No. There is no signup, no login, and nothing to install. Open the page, design your QR code, and download it. That is the entire process.',
      },
      {
        question: 'Is my data or uploaded logo sent to a server?',
        answer:
          'No. Everything, encoding your data, styling the QR code, and reading an uploaded logo file, happens locally in your browser. Nothing you type or upload is transmitted to a server or stored anywhere.',
      },
      {
        question: 'Will a QR code with a cute icon or logo still scan reliably?',
        answer:
          'Yes, if it is built the right way. Every code here uses error-correction level H, the highest level the QR standard supports, which means up to about 30% of the code can be covered or damaged and it will still scan. The center icon is sized to fit inside that safe margin, so adding a dinosaur or your own logo does not break scannability.',
      },
    ],
    guidesAndTipsHeading: 'Guides & tips',
    viewAllGuides: 'View all guides →',
  },
  toolPages: {
    dinosaur: {
      title: 'QR Code with Dinosaur Logo: Free Generator',
      description:
        'Make a free QR code with a dinosaur logo in the center. Pick colors and dot style, then download as PNG or SVG. No signup, works offline.',
      h1: 'QR Code with Dinosaur Logo',
      subtitle:
        'A playful, instantly recognizable QR code with a pixel-art dinosaur in the middle, free, and ready in seconds.',
      body: [
        'A dinosaur icon turns an ordinary QR code into something people actually stop and look at, which matters when you want a code that gets scanned instead of ignored, on a poster, a sticker, a party invite, or anywhere you want a bit of personality.',
        "This page opens the generator with the pixel-art dinosaur icon already selected, in the site's signature green theme. Everything else still works exactly like the full tool: change the QR type, swap the icon for a monkey or tiger, upload your own logo instead, or adjust the colors, dot style, and shape.",
      ],
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
    },
    logo: {
      title: 'QR Code with Logo: Add Your Own Image, Free',
      description:
        'Upload your own logo and generate a QR code that still scans reliably. Free, high error-correction QR codes with your logo in the center.',
      h1: 'QR Code with Logo',
      subtitle: 'Upload your own logo, keep it scannable, and download a QR code that actually looks like it belongs to you.',
      body: [
        'A logo in the center of a QR code is the fastest way to make it recognizably yours, on a business card, a product label, an invoice, or a storefront sticker. The trick is doing it without breaking scannability, which is exactly what this page is set up for.',
        "The icon picker opens straight to the upload tab. Drop in your logo file and the generator handles the rest: it sizes the image to fit a protected safe zone and encodes the code at the highest error-correction level, so covering part of the pattern with your logo doesn't stop it from scanning.",
      ],
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
    },
    custom: {
      title: 'Custom QR Code Generator: Colors, Shape & Style',
      description:
        'Design a fully custom QR code: pick colors, dot style, and shape, add an icon or logo, and download free as PNG or SVG. No signup required.',
      h1: 'Custom QR Code Generator',
      subtitle: 'Colors, dot style, corner shape, and icon: customize every part of your QR code and keep it fully scannable.',
      body: [
        "A custom QR code generator should let you actually change more than just the content it encodes. Here you can adjust the dot style (square, rounded, or a softer look), switch between a square or circular outer frame, pick from several color themes, and add an icon or your own logo, all without touching the code's reliability.",
        'Every combination is generated with the same high error-correction level, so a rounded, colorful, logo-decorated code scans exactly as reliably as a plain black-and-white one.',
      ],
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
    },
    menu: {
      title: 'QR Code for Restaurant Menu: Free Generator',
      description:
        'Create a QR code menu for your restaurant or café in seconds. Link your online menu, add your logo, and download free as PNG or SVG.',
      h1: 'QR Code for a Restaurant Menu',
      subtitle: 'Link your menu, pick an icon that fits your restaurant, and download a code ready for table tents or posters.',
      body: [
        'A QR code menu just needs a link to your hosted menu: a page on your website, a PDF, or a simple page builder all work. This page starts the generator on the "Website" type with a menu icon already selected, ready for that link.',
        "Because these are static codes, the QR code itself never needs to change even if your menu does. Update the page behind the link and every table tent or sticker you've already printed points to the new version automatically. Size it for the distance it'll be read from, and keep the background behind it clean so it scans quickly even in dim lighting.",
      ],
      faq: [
        {
          question: 'Do I need to reprint the code if I update the menu?',
          answer:
            "No, as long as the menu stays at the same link, updating what's on that page (prices, specials, items) doesn't require a new QR code. You only need a new code if the link itself changes.",
        },
        {
          question: 'What size should I print the code at?',
          answer:
            "As a rough guide, keep the printed code at least about 2 cm per meter of expected scanning distance. A table tent read from arm's length can be smaller than a poster meant to be scanned from across a room.",
        },
      ],
    },
    wifi: {
      title: 'QR Code for WiFi: Free Network Sharing Generator',
      description:
        'Generate a free WiFi QR code so guests can connect with a scan instead of typing a password. No signup, works entirely in your browser.',
      h1: 'QR Code for WiFi',
      subtitle: 'Encode your WiFi network name and password into one code: guests scan it and connect, no typing required.',
      body: [
        'A WiFi QR code encodes your network name and password together, so a phone camera can read it and offer to connect directly, no typing a long password from a sticky note. This page opens the generator with the WiFi type already selected.',
        'This is especially useful for cafés, waiting rooms, short-term rentals, and offices with visitors. The network details stay encoded in the printed or displayed code itself; nothing is sent anywhere when you generate it.',
      ],
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
    },
  },
  guidesIndex: {
    intro:
      'Practical, original guides on getting the most out of QR codes, from adding a logo without breaking scannability to picking the right kind of code for your use case.',
    lookingForTool: 'Looking for the tool itself?',
    goToGenerator: 'Go to the QR code generator',
  },
  services: {
    introPrefix: "This QR code generator is free and always will be. It's made and maintained by",
    introSuffix:
      ", a small AI-driven marketing and web team. If you're a small business and ever need more than a QR code, here's a plain-language overview of what they work on.",
    categories: [
      {
        title: 'Websites',
        body: 'Design and development for small-business and marketing sites, the same kind of thinking that went into keeping this tool fast and simple to use.',
      },
      {
        title: 'Branding',
        body: 'Logos, color systems, and visual identity for businesses that want to look as considered as they are.',
      },
      {
        title: 'Marketing',
        body: 'Ongoing marketing support, built around the same AI-assisted workflow used to run this free tool.',
      },
      {
        title: 'E-commerce',
        body: 'Online storefronts that are quick to browse and easy to check out from, on any device.',
      },
      {
        title: 'SEO',
        body: 'The same technical and content approach used to get this free tool found in search, applied to your site.',
      },
      {
        title: 'Ongoing support',
        body: 'A team that keeps things running after launch, not just at handoff.',
      },
    ],
    process: [
      { title: 'Talk it through', body: 'A short, plain-language conversation about what you actually need.' },
      { title: 'See a plan', body: 'A clear scope and price before anything starts, no surprises later.' },
      {
        title: 'Ship and support',
        body: 'Launch, then ongoing help, the same reliability this free tool aims for.',
      },
    ],
    closingPrefix: 'Full details, including current packages, are on',
  },
  about: {
    h1: 'About This QR Code Generator',
    subtitle:
      'A free tool for making custom QR codes with a dinosaur, monkey, or tiger icon, or your own logo, entirely in your browser.',
    highlights: [
      {
        title: 'No signup, ever',
        body: 'Open the page, build a code, download it. No account, no email, no password.',
      },
      {
        title: 'Unlimited, no watermark',
        body: 'Make as many QR codes as you want. Every one downloads clean.',
      },
      {
        title: 'Static and permanent',
        body: 'Your data is baked into the code itself, so it keeps working for as long as the image exists.',
      },
    ],
    privacyHeading: 'Everything stays on your device',
    privacyPoints: [
      'Encoding your data happens in your browser',
      'Styling the code happens in your browser',
      'Reading an uploaded logo happens in your browser',
      'Nothing you type or upload is ever sent to a server',
    ],
    privacyClosingPrefix: 'See the',
    privacyClosingSuffix: 'for the full detail, including the analytics used to understand how the site is used.',
    tech24Prefix: 'This free tool was built and maintained by',
    tech24Mid:
      ', a small AI-driven marketing and web team. If you ever need more than a QR code, a website, branding, or marketing, you can see',
    tech24OfferLabel: 'what they offer',
  },
  contact: {
    h1: 'Contact',
    intro:
      "Questions about how the generator works, feedback, or found something that's not scanning right? Send an email and we'll get back to you.",
  },
  privacy: {
    h1: 'Privacy Policy',
    sections: [
      {
        heading: 'What this tool does with your data',
        body: 'Generating a QR code, including any link, WiFi password, contact details, or other content you type in, and any logo image you upload, happens entirely in your browser. None of it is sent to, or stored on, any server. Closing or refreshing the page clears it.',
      },
      {
        heading: 'What we do store locally',
        body: "Your theme (light or dark) and language preference are saved in your browser's local storage so they persist between visits. This stays on your device and is never transmitted anywhere.",
      },
      {
        heading: 'Analytics',
        body: 'This site uses Google Tag Manager and Microsoft Clarity to understand, in aggregate, how the site is used, for example which pages are visited and roughly how people interact with them. These tools may set cookies and collect standard technical information (such as browser type and approximate location derived from IP address). They do not receive anything you type into the QR code generator itself.',
      },
      {
        heading: 'Fonts',
        body: "This site loads the Inter typeface from Google Fonts, which involves a request to Google's servers when the page loads.",
      },
      {
        heading: 'No accounts, no sale of data',
        body: 'There is no signup or account system, so there is no account data to protect or lose. We do not sell any data to third parties.',
      },
      {
        heading: 'Questions',
        bodyPrefix: 'For any privacy question, see the',
        bodySuffixOr: 'or email',
      },
    ],
  },
  terms: {
    h1: 'Terms of Use',
    sections: [
      {
        heading: 'The tool',
        body: 'This site provides a free QR code generator that runs entirely in your browser. You may use it to generate an unlimited number of QR codes for personal or commercial purposes, at no cost.',
      },
      {
        heading: 'Your responsibility',
        body: 'You are responsible for the content you encode into a QR code and for testing that a generated code scans correctly before relying on it, for example, before printing it at scale. We recommend scanning a code with more than one device before distributing it widely.',
      },
      {
        heading: 'No warranty',
        body: 'This tool is provided "as is," without any warranty of any kind. We do our best to keep it accurate and reliable, but we do not guarantee uninterrupted availability or that every generated code will scan under every condition (for example, on damaged, poorly printed, or extremely low-contrast output).',
      },
      {
        heading: 'Acceptable use',
        body: "Don't use this tool to generate QR codes for illegal content, malware distribution, phishing, or anything intended to deceive or harm people who scan the resulting code.",
      },
      {
        heading: 'Changes',
        body: 'These terms may be updated from time to time; the current version always applies.',
      },
      {
        heading: 'Questions',
        bodyPrefix: 'See the',
        bodySuffixOr: 'or email',
      },
    ],
  },
  guides: {
    logo: {
      title: 'How to Make a QR Code with a Logo (Free Guide)',
      description:
        'Learn how to make a QR code with a logo in the middle that still scans reliably, step by step, including error correction, sizing, and contrast tips.',
      h1: 'How to Make a QR Code with a Logo',
      excerpt: 'A logo in the center makes a QR code instantly recognizable as yours. Here is how to add one without breaking scannability.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A plain black-and-white QR code works, but it does not look like it belongs to anyone. Drop your logo, or a fun icon like a little dinosaur, into the center and the same code instantly feels like part of your brand or your event. The good news is that a ',
            },
            { t: 'b', v: 'qr code with logo' },
            {
              t: 'text',
              v: ' is not harder to make than a plain one, as long as you understand the one rule that actually matters: error correction.',
            },
          ],
        },
        { type: 'h2', text: 'Why you can cover part of a QR code and it still works' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'QR codes are built with an error-correction layer baked into the standard itself. Depending on the level chosen when the code is generated, a QR code can lose anywhere from about 7% to about 30% of its pattern (covered by a logo, smudged, printed on a wrinkled surface) and a scanner can still reconstruct the original data. The highest level, called Level H, tolerates roughly 30% damage or obstruction. That 30% margin is exactly what makes putting a logo in the middle of a QR code safe, provided the generator you use actually sets that level. This tool always encodes at Level H for that reason.',
            },
          ],
        },
        { type: 'h2', text: 'Step-by-step: adding a logo to your QR code' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Choose what the QR code should do.' },
              { t: 'text', v: ' On the ' },
              { t: 'link', v: 'logo QR code generator', to: '/qr-code-with-logo' },
              { t: 'text', v: ', pick a type (a website link, a WiFi network, a contact card, and so on) and fill in the details.' },
            ],
            [
              { t: 'b', v: 'Open the icon picker.' },
              {
                t: 'text',
                v: ' Select "Upload logo" and choose your own image file, or pick one of the built-in icons if you don\'t have a logo file handy.',
              },
            ],
            [
              { t: 'b', v: 'Check the preview.' },
              {
                t: 'text',
                v: ' The logo sits inside a protected white circle in the middle of the code automatically, so it never touches the finder squares (the three big corner squares a scanner uses to orient itself); those are the one part of a QR code that should never be covered.',
              },
            ],
            [
              { t: 'b', v: 'Pick colors and download.' },
              {
                t: 'text',
                v: ' Adjust the dot style and color theme if you like, then download as PNG for quick sharing or SVG if you plan to print it large.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'Tips for a logo that scans reliably every time' },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'Keep contrast high.' },
              {
                t: 'text',
                v: " A dark logo on the QR code's light background (or vice versa) scans far more reliably than a low-contrast one.",
              },
            ],
            [
              { t: 'b', v: "Don't stretch the logo too large." },
              {
                t: 'text',
                v: ' A good generator caps how much of the code your logo can cover, but if you are building your own, staying under roughly 20-25% of the total area is a safe target.',
              },
            ],
            [
              { t: 'b', v: 'Test before you print in bulk.' },
              {
                t: 'text',
                v: ' Scan the downloaded QR code with two or three different phones before ordering signage, table tents, or packaging. It takes ten seconds and saves a reprint.',
              },
            ],
            [
              { t: 'b', v: 'Leave the quiet zone alone.' },
              {
                t: 'text',
                v: " The blank margin around the outside of a QR code is not wasted space; scanners use it to detect where the code starts and ends. Don't crop it tightly when placing the code in a design.",
              },
            ],
          ],
        },
        { type: 'h2', text: 'Common mistakes' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'The most common failure is not the logo itself. It is using a QR generator that does not raise the error-correction level when a logo is added. If you have ever scanned a logo QR code that just wouldn\'t read, that is almost always why. The second most common mistake is picking near-identical colors for the dots and the background (like light gray dots on white), which hurts scannability even with no logo at all.',
            },
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Once those two things are handled, a QR code with a logo is just as reliable as a plain one, and considerably more memorable. Try it in our ' },
            { t: 'link', v: 'logo QR generator →', to: '/qr-code-with-logo' },
          ],
        },
      ],
    },
    staticVsDynamic: {
      title: "Static vs Dynamic QR Codes: What's the Difference?",
      description:
        'Static QR codes encode data directly and never expire. Dynamic codes redirect through a service and can be edited or tracked, for a price. Here is the tradeoff.',
      h1: "Static vs Dynamic QR Codes: What's the Difference",
      excerpt: 'One type is free and permanent. The other can be edited after printing, for a subscription. Here is how to pick.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: '"Static" and "dynamic" QR codes look identical on the surface (the same black-and-white, or colorful, logo-decorated, square) but they work in fundamentally different ways underneath. Understanding the difference matters before you print a few hundred of them.',
            },
          ],
        },
        { type: 'h2', text: 'Static QR codes' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A static QR code has your actual data (a URL, a WiFi password, a contact card, plain text, whatever you chose) encoded directly into the pattern of black and white modules. When a phone scans it, it reads that data straight out of the code itself. There is no server in the middle, no account behind it, and nothing that can go offline or get shut down later. It works exactly the same on the day you print it as it does ten years later. This is the kind of QR code this generator creates: build it once, and it\'s yours for free, forever. See ',
            },
            { t: 'link', v: 'do QR codes expire?', to: '/guides/do-qr-codes-expire' },
            { t: 'text', v: ' for more on exactly what that means in practice.' },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "The tradeoff is that a static code is fixed. If you encoded a link and later need that code to point somewhere else, you have to generate and reprint a new code; you cannot edit what's already baked into the pattern.",
            },
          ],
        },
        { type: 'h2', text: 'Dynamic QR codes' },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'A dynamic QR code instead encodes a short redirect link that belongs to a third-party service (for example, something like ' },
            { t: 'code', v: 'qr.example.com/abc123' },
            {
              t: 'text',
              v: '). When scanned, that short link redirects to whatever destination URL you\'ve set for it, and because the redirect target lives on the service\'s server rather than inside the code, you can change the destination at any time without reprinting anything. Most services offering this also provide scan analytics (how many scans, roughly when and where).',
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "That flexibility is real, but it comes with strings attached: dynamic codes typically require an account with the service that hosts the redirect, and many providers put a scan limit or a time limit on their free tier, after which the code either stops working or needs a paid subscription to keep redirecting. If that service ever shuts down or you stop paying, every dynamic code you've already printed silently breaks, even though the printed square looks unchanged.",
            },
          ],
        },
        { type: 'h2', text: 'Which one should you use?' },
        {
          type: 'table',
          headers: ['Situation', 'Better fit'],
          rows: [
            ["A link, WiFi network, or contact card that won't change", 'Static: free, permanent, no account needed'],
            ['Printed once for a one-time event or a single menu run', 'Static: nothing to maintain afterward'],
            ['You need scan analytics (how many, when)', 'Dynamic: requires a paid or account-based service'],
            ['The destination link may change after printing thousands of copies', 'Dynamic: can be worth the subscription at that scale'],
          ],
        },
        { type: 'h2', text: 'The practical middle ground' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'For most individual and small-business use (menus, WiFi access, event invitations, business cards, product packaging, social links), a static code pointed at a link you control (your own website, a page you can edit anytime) gets you most of the benefit of a dynamic code without a subscription. You cannot change the QR code\'s destination without reprinting, but you ',
            },
            { t: 'i', v: 'can' },
            {
              t: 'text',
              v: " change what's published at that destination whenever you like, since the code just points to a link, not to fixed content.",
            },
          ],
        },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'This tool generates static QR codes with a custom icon or logo, in your choice of colors and shape, downloadable as PNG or SVG. Try it in our ',
            },
            { t: 'link', v: 'custom QR code generator →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    doQrCodesExpire: {
      title: 'Do QR Codes Expire? The Honest Answer',
      description:
        'A QR code made with a free generator like this one does not expire on its own. Here is what can actually break one, and how to make sure yours keeps working.',
      h1: 'Do QR Codes Expire?',
      excerpt: 'The code itself never expires, but a few things can still stop it from working. Here is what actually happens.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "Short answer: no, a QR code itself does not expire. The pattern of black and white squares is just a way of encoding data. It doesn't have a clock, a server connection, or a subscription attached to it. Once it's generated, it's a static image, and static images don't go bad. But that's not quite the whole story, and the exceptions are worth understanding before you print one somewhere permanent.",
            },
          ],
        },
        { type: 'h2', text: "Why a static QR code doesn't expire" },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'A QR code made with a free tool like this one is a ' },
            { t: 'b', v: 'static' },
            {
              t: 'text',
              v: " code: whatever you typed in (a link, a WiFi password, a contact card) is encoded directly into the code's pattern. There's no third-party server involved in reading it. A scanner reads the pattern and reconstructs the original data on the spot, the same way it would have on day one. See ",
            },
            { t: 'link', v: 'static vs. dynamic QR codes', to: '/guides/static-vs-dynamic-qr-codes' },
            {
              t: 'text',
              v: ' for the full breakdown of how this differs from the "dynamic" codes some paid services sell, which route through a redirect link that ',
            },
            { t: 'i', v: 'can' },
            { t: 'text', v: ' be switched off.' },
          ],
        },
        { type: 'h2', text: 'What actually can stop a QR code from working' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'If a QR code you made months or years ago suddenly "stops working," the code itself almost never changed. One of these did instead:',
            },
          ],
        },
        {
          type: 'ul',
          items: [
            [
              { t: 'b', v: 'The destination went away.' },
              {
                t: 'text',
                v: ' If the code encodes a link, scanning it still works fine, but the phone just lands on a broken page if that website, product listing, or menu link was taken down or moved. This is by far the most common cause, and it\'s not really the QR code "expiring"; it\'s the page behind it disappearing.',
              },
            ],
            [
              { t: 'b', v: 'A domain lapsed.' },
              {
                t: 'text',
                v: " If the link points to a domain that wasn't renewed, the whole site behind it goes dark, taking every QR code pointing to it down with it.",
              },
            ],
            [
              { t: 'b', v: 'It was a dynamic code on a service that shut down or stopped being paid for.' },
              {
                t: 'text',
                v: ' As covered in the static vs. dynamic guide, this is the one real case where a QR code can go from working to broken with the printed image unchanged.',
              },
            ],
            [
              { t: 'b', v: 'The physical copy degraded.' },
              {
                t: 'text',
                v: ' A faded, torn, or heavily scratched printout can become unscannable. This isn\'t the code "expiring" either, just ordinary wear on the material it\'s printed on.',
              },
            ],
          ],
        },
        { type: 'h2', text: 'How to make a QR code that keeps working' },
        {
          type: 'ol',
          items: [
            [
              { t: 'b', v: 'Point it at a link you control.' },
              { t: 'text', v: " Your own website or a page you can keep renewing beats a third-party listing you don't control." },
            ],
            [
              { t: 'b', v: 'Keep your domain renewed' },
              { t: 'text', v: ' if the code points to your own site, set it to auto-renew if your registrar supports it.' },
            ],
            [
              { t: 'b', v: 'Prefer static over dynamic' },
              {
                t: 'text',
                v: ' for anything you want to last indefinitely without ongoing payment, unless you specifically need scan analytics or the ability to redirect the code elsewhere later.',
              },
            ],
            [
              { t: 'b', v: 'Print at a reasonable size and protect it.' },
              { t: 'text', v: ' Laminate or seal codes that will be handled often or exposed to weather.' },
            ],
            [
              { t: 'b', v: 'Use high error correction' },
              {
                t: 'text',
                v: ", so minor wear, smudging, or a logo in the center doesn't stop it from scanning. Every code from this tool uses the highest error-correction level for exactly this reason.",
              },
            ],
          ],
        },
        { type: 'h2', text: 'The short version' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A QR code generated here has no expiration date, no subscription, and no third-party service that can quietly switch it off. What breaks a QR code in practice is almost always the destination behind it, not the code. Keep the link alive, and the code stays scannable indefinitely. Build one in our ',
            },
            { t: 'link', v: 'custom QR code generator →', to: '/custom-qr-code' },
          ],
        },
      ],
    },
    smallBusiness: {
      title: 'QR Codes for Small Business: 6 Practical Uses',
      description:
        'From payment links to packaging, business cards to reviews: practical, low-cost ways a small business can put a free QR code to work.',
      h1: 'QR Codes for Small Business',
      excerpt: 'Practical, low-cost ways a small business can put a QR code to work, beyond the obvious menu.',
      body: [
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: "A QR code is one of the cheapest marketing tools a small business has: free to generate, free to print alongside whatever you're already printing, and it turns any physical surface (a receipt, a window sticker, a package) into a link to something online. Two of the most common uses, menus and WiFi access, have their own dedicated tools here: see ",
            },
            { t: 'link', v: 'QR codes for menus', to: '/qr-code-for-menu' },
            { t: 'text', v: ' and ' },
            { t: 'link', v: 'QR codes for WiFi', to: '/qr-code-for-wifi' },
            { t: 'text', v: '. This guide covers the rest.' },
          ],
        },
        { type: 'h2', text: '1. Payment and tipping links' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A code that opens a payment link or a tip page is common on receipts, at counters, or on delivery packaging. Keep this one especially high-contrast and test it thoroughly, since customers give up quickly on a code that doesn\'t scan on the first try when money is involved.',
            },
          ],
        },
        { type: 'h2', text: '2. Social profiles and review links' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A single code near the register or on a receipt that links to your Google Business or Yelp review page removes the biggest barrier to getting reviews: having to search for you. A second code, or a link-in-bio page, can bundle your social profiles together.',
            },
          ],
        },
        { type: 'h2', text: '3. Business cards' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A QR code on a business card that encodes a contact card (this tool has a dedicated type for that) lets someone save your name, number, and email to their phone with one scan instead of typing it in by hand later, which is also exactly when most hand-typed contacts never actually get saved.',
            },
          ],
        },
        { type: 'h2', text: '4. Product packaging' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A code on packaging can link to care instructions, a warranty registration, an ingredient or allergen list, or a "how to use this" video: information that would otherwise need a printed insert. It\'s also a natural way to link to a review page after a purchase.',
            },
          ],
        },
        { type: 'h2', text: '5. Event flyers and posters' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A code linking straight to a ticket page or an RSVP form on a flyer removes a step between someone seeing your poster and actually signing up, compared to making them search for your event by name later.',
            },
          ],
        },
        { type: 'h2', text: '6. A branded, on-theme code' },
        {
          type: 'p',
          content: [
            {
              t: 'text',
              v: 'A generic QR code looks like it could belong to anyone. Picking a distinct icon or uploading your logo makes your codes recognizable at a glance across receipts, packaging, and signage. Try the ',
            },
            { t: 'link', v: 'custom QR code generator', to: '/custom-qr-code' },
            { t: 'text', v: " to match your brand's colors and style, or the " },
            { t: 'link', v: 'logo generator', to: '/qr-code-with-logo' },
            { t: 'text', v: ' to use your own logo directly.' },
          ],
        },
        { type: 'h2', text: 'Before you print in bulk' },
        {
          type: 'ul',
          items: [
            [{ t: 'text', v: 'Scan every code with at least two different phones first.' }],
            [{ t: 'text', v: 'Keep contrast high and avoid covering the three corner squares.' }],
            [
              { t: 'text', v: 'Remember these are static codes. See ' },
              { t: 'link', v: 'static vs. dynamic QR codes', to: '/guides/static-vs-dynamic-qr-codes' },
              { t: 'text', v: ' if you expect a destination link to change often after printing.' },
            ],
            [{ t: 'text', v: 'Size the code for the distance it will actually be scanned from.' }],
          ],
        },
        {
          type: 'p',
          content: [
            { t: 'text', v: 'Every use case above starts the same way: open the ' },
            { t: 'link', v: 'QR code generator', to: '/' },
            { t: 'text', v: ', pick the type that matches what you need, and customize the icon and colors to match your business.' },
          ],
        },
      ],
    },
  },
}
