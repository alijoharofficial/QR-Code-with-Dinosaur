import type { TranslationKey } from '../i18n/translations'

export interface IconOption {
  id: string
  /** Display name. Brand/proper names (Dyno, WhatsApp, PayPal, ...) stay untranslated. */
  name: string
  /** For generic (non-brand) icons: overrides `name` with a translated label. */
  nameKey?: TranslationKey
  /** Full inline SVG markup, viewBox 0 0 120 120, with a white safe-zone circle baked in. */
  svg: string
}

export interface IconCategory {
  id: string
  labelKey: TranslationKey
  icons: IconOption[]
}

const SAFE_ZONE = '<circle cx="60" cy="60" r="54" fill="#ffffff" />'

const dyno: IconOption = {
  id: 'dyno',
  name: 'Dyno',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  ${SAFE_ZONE}
  <g fill="#1f2937">
    <rect x="64" y="18" width="32" height="4" />
    <rect x="60" y="22" width="40" height="4" />
    <rect x="60" y="26" width="8" height="4" />
    <rect x="72" y="26" width="28" height="4" />
    <rect x="60" y="30" width="40" height="4" />
    <rect x="60" y="34" width="40" height="4" />
    <rect x="60" y="38" width="40" height="4" />
    <rect x="60" y="42" width="32" height="4" />
    <rect x="20" y="46" width="4" height="4" />
    <rect x="56" y="46" width="20" height="4" />
    <rect x="20" y="50" width="4" height="4" />
    <rect x="48" y="50" width="28" height="4" />
    <rect x="20" y="54" width="8" height="4" />
    <rect x="44" y="54" width="40" height="4" />
    <rect x="20" y="58" width="12" height="4" />
    <rect x="40" y="58" width="36" height="4" />
    <rect x="80" y="58" width="4" height="4" />
    <rect x="20" y="62" width="56" height="4" />
    <rect x="20" y="66" width="56" height="4" />
    <rect x="24" y="70" width="48" height="4" />
    <rect x="28" y="74" width="44" height="4" />
    <rect x="32" y="78" width="36" height="4" />
    <rect x="36" y="82" width="28" height="4" />
    <rect x="40" y="86" width="12" height="4" />
    <rect x="56" y="86" width="8" height="4" />
    <rect x="40" y="90" width="8" height="4" />
    <rect x="60" y="90" width="4" height="4" />
    <rect x="40" y="94" width="4" height="4" />
    <rect x="60" y="94" width="4" height="4" />
    <rect x="40" y="98" width="8" height="4" />
    <rect x="60" y="98" width="8" height="4" />
  </g>
</svg>`,
}

const monkey: IconOption = {
  id: 'monkey',
  name: 'Monkey',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZwAAAG4CAYAAABxfFEZAAAQD0lEQVR4Ae3BzY0jSa+G0TeINIRrWkD/V2FBrMMT3sbgYtBfTVV3/UhUSvmcM6pKwFl5ZKnZXnMIwM2ZAABoYAIAoIEJAIAGJgAAGpgAAGhgAgCgwagqAY/kkSU8xF5zCGhiAgCggQkAgAYmAAAamAAAaGACAKCBCcBleWQJaDKqSsC9eWQJL2+vOXRnHll6x15zCKdmAgCggQkAgAYmAAAamAAAaGACAKDBIQC4EY8sfcFec+hGPLL0gb3mEB7uEC7PI0vv2GsOfYFHlgDgAyYAABqYAABoYAIAoIEJAIAGh3AZHlm6EY8sAXfkkSW8FBMAAA1MAAA0MAEA0MAEAEADEy7BI0sA8ECH8LQ8snQDe80h4I72mkO4PBMAAA1MeEoeWQKAJ2ICAKCBCQCABiYAABocwql5ZOmBPLIEfNJec+gLPLJ0Qh5ZemOvOYQfMQEA0MAEAEADEwAADUzABzyyBAA3YgI+sNccAoAbOYRT8MhSg73m0Ds8sgT8stccuhGPLJ2YR5bQxoSH88gSALw4EwAADUwAADQwAQDQwISH22sOAcCLO4SH88gScAd7zaEb8MjSE9hrDr3hkeWRJTzcIbTyyBKAm9trDr1jrzk8soSHMwEA0MAEAEADEwAADUwAADQwAcAL8MjSOzyyhFM4hLvwyBLQYK859AUeWXpRHlnCaZkAAGhgAgCggQkAgAYmAAAamHAZe80hAHiQQ/gRjyyd0F5z6B0eWcJT2msOfYFHloATMeFS9ppDAPAAJgAAGpgAAGhgAgCggQkAgAaHAJzKXnPoCzyyhJvZaw69wyNLf7DXHMIfmQCcxl5zCHhRJgAAGpgAAGhwCH/lkSUAwI+YAABoYALwtDyyhJvyyNIbHlnCjx0C8BQ8soQWHlnCzZkAAGhgAgCggQkAgAYmAAAamAAAaGACAKDBIQDAj3lk6QN7zSHoEF6SR5YA4ERMAAA0MAEA0MAEAEADEwAADUwAADQ4BOBu9ppDN7LXHMK3eGQJD2cCAKCBCQCABiYAABqYAOCFeWQJp2ACgBe21xzCKRzCvzyy9Ju95vDIEl7KXnMIl7LXHPqAR5bQwoR/eGTpDY8sAQBuwgQAQAMTAAANTAAANDABANBgVJUgeWQJD7XXHAJOwiNLd7bXHLoQEwAADUwAADQwAQDQwAQAQAMTAAANDgHfsNccwl14ZAk3tdcc+qK95tAbHlnCt5kAAJ+y1xzCt5kAAGhgAgCggQkAgAYmAAAaHMKl7DWHAHyLR5bwbYdwGXvNIcgjS7gUjyzh4UwAADQwAQDQwAQAQAMTAAANTAAANDiEU9trDr0QjywB+IdHlk5grznUwAQAQAMTAAANTAAANDABANDABABAg0Nos9ccejIeWQLw0jyydAN7zaE/MAEA0MAEAEADEwAADUwAADQwAQDQ4BC+ba85BAD4h0fWXnPoA4fwUjyyBAAP4pGlD5gAAGhgAgCggQkAgAYmAAAamAAAaDCqSjgnjyzhNPaaQ0/GI0v4tL3m0BseWcJNHALwKR5Ze80hvIy95tBf7DWHPsEjS/gjEwAADUwAADQwAQDQwAQAQINRVcJteWQJp7bXHMKneWTp5PaaQyflkaUL2GsO/YEJAIAGJgAAGpgAAGhgAgCggQkAgAaH8FceWcJp7TWHcFd7zaEf8sjSDew1h/Ate82hBzoEPLG95hBwcnvNoXd4ZOlCTAAANDABANDABABAAxMAAA1MAAA0OPSCPLKEl7PXHMJl7DWH8FIOAUCDvebQOzyyhEs4BAB4iL3m0IWYAABoYAKehEeWADwtEwA80F5z6I295hBeziEAeLC95hBenunFeGQJAHA6h07MI0t4GnvNoSfjkSX8j73mEN7lkaUXtNccamACbmCvOQQAf2ACAKCBCQCABiYAABqYAABoMKpKXTyyhNPZaw49mEeW8PL2mkMNPLKEVnvNob8wAQDQwAQAL2avOYTTOYSXt9ccAoAHMwFAg73mEC7t0B14ZAkvyyNLwBd5ZAmXdujGPLL0QvaaQw/ikSWc3l5z6IE8soS72WsONfPI0gsyAQDQ4BBenkeW/mKvOfSLR5Z+s9ccHll7zaFfPLIEAN9wCPjFI0vv8MjSLx5ZAi7II2uvOYQfMwEAPrTXHMJNmAAAaHDoGzyy9IT2mkNPZK859AGPLKHVXnPoizyyhFPbaw59kkeW8G0mAAAamAAAaGACAKCBCQCABiYAABoc+gOPLOGU9ppDv3hk7TWHfvHI0hPYaw59gUeW3rHXHPrFI2uvOfQbjyx9015z6As8svTLXnPoNx5ZwmnsNYfe8MjSJ3lkCdprDr3hkaVPGFWl93hk6cXsNYduxCNLN7LXHLoRjyyd3F5zqIFHlr5hrzn0BR5ZwqntNYc+ySNL+NBec+ibTACAf+01h3AXJgDAvzyyhLswAQD+tdccwl2YAAD/8sgS7uIQ8A17zSHgRvaaQ5/kkaUb8sgSWhweWXoxe82hG/HI0p15ZOkde82hL9prDr3hkSUAeDATAAANTAAANDABANDgEHAHHln6or3mEICXdQh4Y685hP/wyBJ+bK859AN7zaH/55El3M1ec+iGDuEfHln6or3m0Bd4ZOkLPLL0jr3mEADtNYdHlvAUTAAANDABANDABABAAxPwhkeWvsgjSwDwB4fw8vaaQ294ZOkPPLL0RR5ZAoAPHMJf7TWHbmCvOfQOjyzh5vaaQ+/wyBIuxSNrrzmEhzr2mkPv8MgStNccwqV4ZAkvxyNLeCgTAAANTAAANDABANDABABAg0No45ElALioQx/Yaw49iEeWALyEvebQLx5Ze82hG9trDr3hkSWcjgkAGuw1h3BpJgAAGpgAAGhgAgCgwSHcnEeWAOBJ7DWHGhzCP/aaQwCAuzEBANDABABAAxMAAA1MAAA0OITT2msOXYhHlt6x1xzCU9prDgH/7xAA3MBec+gk9ppDv/HIEh7OBABAAxMAAA1MAAA0MAEA0MB0ER5ZAoAL22sOvbHXHGpy6IT2mkNveGTpkzyyBHxgrzn0AY8s4Y/2mkNPZq859AGPLF3AXnPol73m0IOYAABoYHoCHlkCADw1EwDg5Xlk6cFMAAA0MAEA0GBUlc7OI0s3sNcceiCPLN3AXnPohzyy9IT2mkMP4JGlC9lrDuE/PLJ0cnvNoZMyAfirveYQLm+vOYRvMwEA0MAEAEADEwAADUzAE/HIEoCndOhCPLL2mkMPstcceodHlvBpHln6zV5zqMFec+gLPLJ0AnvNoS/wyBI+tNccuhOPLL2wQxfjkaV37DWHgBez1xz6or3mEHAHJgAAGpgAAGhgAgCgwaEnsNccHlnCt3lk6UV5ZOmNveYQTs8ja685hEsYVaVn5ZGlG9lrDr0ojyxd0F5zCHfjkaUb2WsOPYhHlj5przl0Rx5Z+qG95tBJHcI/PLL0jr3mEADgx0wAADQwAQDQwAQAQAMTAAANDj2xvebQOzyydFEeWcI/PLL0RXvNIbTzyNI79ppDN+CRpQfzyNLFHcIfeWTpHXvNIQB4kL3m0JMxAQCeyl5z6AmZAABPxSNLT8gEAEADEwAADQ7hKXlkCQCeyKgqXYVHlm5orzn0G4+sveZQA48s4S72mkM34JG11xzCX3lk6ZP2mkNf5JGlD+w1hxp4ZOn/7TWHR5Z+YK859GQOXchec3hk6UY8svSGR9ZecwhPyyNLwI3tNYcuzgQAQAMTAAANTAAANDDh6XhkCQCezCHcnEeWAJzGXnN4ZOlE9prDI2uvOTyydAGjqgTJI0vAN+w1h3AXHll6Y6859II8snQDe82hkzIBANDABABAAxMAAA1MAAA0OAQAJ7XXHMLLOIR/7DWH3uGRJeCXveYQgG8zAQDQwAQAQAMTAAANTAAANDgEAHi4vebQGx5Z+iKPLL1jrzn0YIfwR3vNoRvxyBJOb685BODmTAAANDABANDABABAAxMAAA0OAQBOaa859BuPLD2xQwDuxiNLN7LXHAKemAkAgAYmAAAamAAAaGACAKCBCQCABoeAi9prDt2IR5ZuZK85BLwgEwAADUwAADQwAQDQwAQAQAMTAAANTAAANDgE4FQ8svSOveYQ8MRMAAA0MAEA0MAEAEADEwAADUwAADQ4hJvzyBLwy15z6Is8soTL8MjSRRwC8BQ8svQNe80h4ARMAF7WXnMIOAkTAAANTAAANDABANDABABAg0MAfmyvOXQje82hd3hk6Ys8snQHe82hi/HIEn7kEAB8kUfWXnMIp7PXHDopEwAADUwAADQwAQDQwISb8sgSAOA/DuHbPLIE4OV5ZAk/dgjAU9hrDv2AR5ZuyCNL+JK95tAneGTpBZkAAGhgAgCggQkAgAYmAAAamAAAaGACAKDBIQCXsNcc+iaPLOE/9ppD+DQTAAANTAAANDgEXJRHlt6x1xwCcHMmAAAaHMK3eGQJuIi95hDwQ4fwRx5ZAgD8mAkAgAYmAAAamAAAaGACAKCBCQCABiYAABqYAABocAgALswjS3+w1xy6E48sXcghAP/DI0vv2GsOATfikaWLOQQAeCp7zaEndAgA7sAjS7/Zaw7h0g4BwIvzyNIve83hkSU8xCEAaOCRpQfzyNIn7TWHcFMmAEC7vebQxZgAAO08snQxhwB8ikeWPrDXHMJT2msONfHI0oUdAoA72GsOvcMjS7gkEwAADUwAADQwAQDQwAQAQINRVcLXeWQJ+Iu95hAuxSNLd7bXHHpCJgAAGpgAAGhgAgCggQkAgAYmAAAajKoSbscjS8Bf7DWH8PQ8snRHe82hF2LCTe01hwAA/2ECAKCBCQCABiYAABqYAABoYALQziNLeGoeWcKXjKoSenhkCfiLveYQTsMjS3e21xy6ABMAAA1MAAA0MAEA0MAEAEADEwAADUZVCY/nkSXgB/aaQ/gWjyw12WsOXZQJAIAGJgAAGpgAAGhgAgCggQkAgAajqoRz8MgS8CB7zaEn5pGlJ7DXHLqoQziNvebQJ3hkCcBp7TWH8B8mAAAamAAAaGACAKCBCQCABocA4BePLAF3NKpKeB0eWQLQYq85hE8zAQDQwAQAQAMTAAANTAAANDABANBgVJVwXR5ZAvCPveYQ7sYEAEADEwAADUwAADQwAQDQwAQAQINDAHAhe80hPMQhXNpec+gvPLIEAD9kAv5irzkEAD90CABewF5zCKdmAoAnt9ccwumZAABoYAKAJ+eRJZyeCQCABqOqBNyKR5ZwCXvNIeALTAAANDABANDABABAAxMAAA0OATe01xz6BI8sAbgUEwAADUwAADQwAQDQwAQAQINRVQLOzCNLOIW95hDwTSYA+IS95hDwAyYAABqYAABoYAKAT/DIEvADo6oEvBqPLOHb9ppDwI2ZAABoYAIAoIEJAIAGJgAAGpgAAGhwCHhBe82hb/LIEoCbMwEA0OAQgP+x1xy6MY8sARdnAgCggQkAgAYmAAAamAAAaGACAKDB/wESnniut3BpAwAAAABJRU5ErkJggg==" x="15.06" y="12" width="89.89" height="96" />
</svg>`,
}

const tiger: IconOption = {
  id: 'tiger',
  name: 'Tiger',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <image href="data:image/png;base64,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" x="12" y="13.67" width="96" height="92.67" />
</svg>`,
}

const whatsapp: IconOption = {
  id: 'whatsapp',
  name: 'WhatsApp',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#25d366" />
  <circle cx="60" cy="57" r="26" fill="#ffffff" />
  <path d="M42 74 L37 88 L52 82 Z" fill="#ffffff" />
  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="#25d366" transform="translate(47 45) scale(1.08)" />
</svg>`,
}

const instagram: IconOption = {
  id: 'instagram',
  name: 'Instagram',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <defs>
    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fdf497" />
      <stop offset="20%" stop-color="#fdb750" />
      <stop offset="45%" stop-color="#e83b56" />
      <stop offset="70%" stop-color="#c2317e" />
      <stop offset="100%" stop-color="#7b3fe4" />
    </linearGradient>
  </defs>
  <rect x="24" y="24" width="72" height="72" rx="20" fill="url(#ig-grad)" />
  <rect x="38" y="38" width="44" height="44" rx="13" fill="none" stroke="#ffffff" stroke-width="5" />
  <circle cx="60" cy="60" r="13" fill="none" stroke="#ffffff" stroke-width="5" />
  <circle cx="79" cy="41" r="3.5" fill="#ffffff" />
</svg>`,
}

const facebook: IconOption = {
  id: 'facebook',
  name: 'Facebook',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="40" fill="#1877f2" />
  <path d="M67 90V64h9l1.4-11H67v-7c0-3.2.9-5.4 5.5-5.4H78V31.6C77 31.5 73.5 31 69.4 31 60.8 31 55 36.2 55 45.8V53H45v11h10v26z" fill="#ffffff" />
</svg>`,
}

const xTwitter: IconOption = {
  id: 'x-twitter',
  name: 'X',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <rect x="24" y="24" width="72" height="72" rx="18" fill="#0f1419" />
  <path d="M40 38h11l10.5 14.5L73 38h9L65.5 60 84 84H73L61.5 68 49 84h-9l17-21.5z" fill="#ffffff" />
</svg>`,
}

const mail: IconOption = {
  id: 'mail',
  name: 'Email',
  nameKey: 'iconEmail',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#ca8a04" />
  <rect x="35" y="42" width="50" height="36" rx="6" fill="#ffffff" />
  <path d="M37 45 L60 62 L83 45" fill="none" stroke="#ca8a04" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,
}

const scanFrame: IconOption = {
  id: 'scan-frame',
  name: 'Scan',
  nameKey: 'iconScan',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#c026d3" />
  <g fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round">
    <path d="M40 34h-6a6 6 0 0 0-6 6v6" />
    <path d="M80 34h6a6 6 0 0 1 6 6v6" />
    <path d="M40 86h-6a6 6 0 0 1-6-6v-6" />
    <path d="M80 86h6a6 6 0 0 0 6-6v-6" />
  </g>
  <rect x="46" y="46" width="28" height="28" rx="3" fill="#ffffff" />
</svg>`,
}

const storefront: IconOption = {
  id: 'storefront',
  name: 'Storefront',
  nameKey: 'iconStorefront',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#22c55e" />
  <rect x="38" y="52" width="44" height="32" rx="3" fill="#ffffff" />
  <rect x="52" y="64" width="16" height="20" fill="#22c55e" />
  <path d="M34 40 L40 52 H80 L86 40 Z" fill="#ffffff" />
  <rect x="34" y="36" width="52" height="6" rx="2" fill="#ffffff" />
</svg>`,
}

const menu: IconOption = {
  id: 'menu',
  name: 'Menu',
  nameKey: 'iconMenu',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#7c3aed" />
  <g fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M42 36v16m0 0v32m-7-32v10a7 7 0 0 0 14 0V36" />
    <path d="M78 36v48" />
    <path d="M78 36c-6 0-9 5-9 11s3 9 9 9" />
  </g>
</svg>`,
}

const scanMeRed: IconOption = {
  id: 'scan-me-red',
  name: 'Scan Me',
  nameKey: 'iconScanMe',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#ef4444" />
  <g fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round">
    <path d="M38 40v-4a4 4 0 0 1 4-4h4" />
    <path d="M82 40v-4a4 4 0 0 0-4-4h-4" />
    <path d="M38 80v4a4 4 0 0 0 4 4h4" />
    <path d="M82 80v4a4 4 0 0 1-4 4h-4" />
  </g>
  <text x="60" y="57" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff">SCAN</text>
  <text x="60" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff">ME</text>
</svg>`,
}

const scanMeTeal: IconOption = {
  id: 'scan-me-teal',
  name: 'Scan Me',
  nameKey: 'iconScanMe',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#14b8a6" />
  <g fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round">
    <path d="M38 40v-4a4 4 0 0 1 4-4h4" />
    <path d="M82 40v-4a4 4 0 0 0-4-4h-4" />
    <path d="M38 80v4a4 4 0 0 0 4 4h4" />
    <path d="M82 80v4a4 4 0 0 1-4 4h-4" />
  </g>
  <text x="60" y="57" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff">SCAN</text>
  <text x="60" y="72" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff">ME</text>
</svg>`,
}

const paypal: IconOption = {
  id: 'paypal',
  name: 'PayPal',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#1e3a8a" />
  <path d="M47 36h17c9 0 15 6 13.5 15-1.7 10.6-9 16-19 16h-6.5l-2.5 15H39z" fill="#8fc1ff" />
  <path d="M41 44h17c9 0 15 6 13.5 15-1.7 10.6-9 16-19 16h-6.5l-2.5 15H33z" fill="#ffffff" />
</svg>`,
}

const bitcoin: IconOption = {
  id: 'bitcoin',
  name: 'Bitcoin',
  svg: `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  ${SAFE_ZONE}
  <circle cx="60" cy="60" r="42" fill="#f7931a" />
  <text x="60" y="76" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="48" fill="#ffffff">&#8383;</text>
</svg>`,
}

export const iconCategories: IconCategory[] = [
  { id: 'animals', labelKey: 'catAnimals', icons: [dyno, monkey, tiger] },
  {
    id: 'social',
    labelKey: 'catSocial',
    icons: [whatsapp, instagram, facebook, xTwitter],
  },
  {
    id: 'actions',
    labelKey: 'catActions',
    icons: [
      mail,
      scanFrame,
      storefront,
      menu,
      scanMeRed,
      scanMeTeal,
      paypal,
      bitcoin,
    ],
  },
]

export const allIcons: IconOption[] = iconCategories.flatMap((c) => c.icons)
export const defaultIconId = dyno.id

export function findIcon(id: string): IconOption | undefined {
  return allIcons.find((icon) => icon.id === id)
}

export function toDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`
}
