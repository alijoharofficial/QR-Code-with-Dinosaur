import type { Block } from './blocks'

/**
 * Everything on the site that isn't already covered by the tool-widget's
 * own translations.ts (labels, form fields, QR type names, etc.): page
 * copy, guide articles, and site chrome text. One object per language,
 * all under `src/content/locales/`, each matching this exact shape so a
 * missing or mistyped field fails `tsc` instead of silently falling back
 * to English mid-page.
 */
export interface PageContent {
  chrome: {
    navHome: string
    navQrTools: string
    navGuides: string
    navServices: string
    navAbout: string
    toolShort: {
      dinosaur: string
      logo: string
      custom: string
      menu: string
      wifi: string
    }
    footerToolsHeading: string
    footerResourcesHeading: string
    footerServicesHeading: string
    footerCompanyHeading: string
    footerFaqLabel: string
    footerWhatWeOffer: string
    footerContact: string
    footerPrivacyPolicy: string
    footerTerms: string
    footerBuiltBy: string
    menuAriaLabel: string
    switchToLightMode: string
    switchToDarkMode: string
    emailUsLabel: string
    getInTouchLabel: string
    questionsFeedback: string
    lastUpdatedLabel: string
    faqHeadingDefault: string
    faqHeadingToolPage: string
    relatedGuidesHeading: string
    backToGenerator: string
  }
  notFound: {
    pageTitle: string
    eyebrow: string
    heading: string
    bodyWithPathPrefix: string
    bodyWithPathSuffix: string
    bodyWithoutPath: string
    backToGenerator: string
    browseGuides: string
  }
  routes: {
    home: { title: string; description: string }
    guidesIndex: { title: string; description: string; h1: string }
    services: { title: string; description: string }
    about: { title: string; description: string }
    contact: { title: string; description: string }
    privacy: { title: string; description: string }
    terms: { title: string; description: string }
  }
  home: {
    heroTitlePrefix: string
    heroTitleAccent: string
    heroSubtitle: string
    introPrefix: string
    introBold: string
    introSuffix: string
    whatIsQrHeading: string
    whatIsQrBody: string
    thisGeneratorSupports: string
    howItWorksSteps: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ]
    featuresHeading: string
    features: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ]
    moreWaysToUseIt: string
    faq: [
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
      { question: string; answer: string },
    ]
    guidesAndTipsHeading: string
    viewAllGuides: string
  }
  toolPages: {
    dinosaur: ToolPageCopy
    logo: ToolPageCopy
    custom: ToolPageCopy
    menu: ToolPageCopy
    wifi: ToolPageCopy
  }
  guidesIndex: {
    intro: string
    lookingForTool: string
    goToGenerator: string
  }
  services: {
    introPrefix: string
    introSuffix: string
    categories: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ]
    process: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ]
    closingPrefix: string
  }
  about: {
    h1: string
    subtitle: string
    highlights: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ]
    privacyHeading: string
    privacyPoints: [string, string, string, string]
    privacyClosingPrefix: string
    privacyClosingSuffix: string
    tech24Prefix: string
    tech24Mid: string
    tech24OfferLabel: string
  }
  contact: {
    h1: string
    intro: string
  }
  privacy: {
    h1: string
    sections: [
      { heading: string; body: string },
      { heading: string; body: string },
      { heading: string; body: string },
      { heading: string; body: string },
      { heading: string; body: string },
      { heading: string; bodyPrefix: string; bodySuffixOr: string },
    ]
  }
  terms: {
    h1: string
    sections: [
      { heading: string; body: string },
      { heading: string; body: string },
      { heading: string; body: string },
      { heading: string; body: string },
      { heading: string; body: string },
      { heading: string; bodyPrefix: string; bodySuffixOr: string },
    ]
  }
  guides: {
    logo: GuideCopy
    staticVsDynamic: GuideCopy
    doQrCodesExpire: GuideCopy
    smallBusiness: GuideCopy
  }
}

export interface ToolPageCopy {
  title: string
  description: string
  h1: string
  subtitle: string
  body: [string, string]
  faq: [{ question: string; answer: string }, { question: string; answer: string }]
}

export interface GuideCopy {
  title: string
  description: string
  h1: string
  excerpt: string
  body: Block[]
}
