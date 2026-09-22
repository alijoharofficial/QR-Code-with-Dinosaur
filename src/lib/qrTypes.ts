import type { TranslationKey } from '../i18n/translations'
import { normalizeUrl } from './url'

export interface QrField {
  id: string
  labelKey: TranslationKey
  placeholderKey?: TranslationKey
  type: 'text' | 'tel' | 'email' | 'url' | 'textarea' | 'select' | 'date' | 'time' | 'checkbox'
  options?: { value: string; labelKey: TranslationKey }[]
  required?: boolean
  half?: boolean
}

export interface QrTypeConfig {
  id: string
  labelKey: TranslationKey
  fields: QrField[]
  build: (values: Record<string, string>) => string | null
}

const digitsOnly = (s: string) => s.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '')

// WIFI: is a single-line format; strip any embedded newlines before escaping
// the characters the spec reserves as field separators.
const escapeWifi = (s: string) =>
  s.replace(/[\r\n]+/g, ' ').replace(/([\\;,:"])/g, '\\$1')

// vCard (RFC 6350) and iCalendar (RFC 5545) TEXT values share the same
// escaping rules: backslash, comma and semicolon are backslash-escaped, and
// a literal line break becomes the two-character sequence "\n". Without
// this, a value containing a raw newline (e.g. pasted into a textarea)
// would terminate the current property early and let the rest of the
// input be parsed as one or more *new* vCard/iCalendar properties by
// whatever app scans the resulting QR code — a structured-data / field
// injection into someone else's contacts or calendar app.
const escapeStructuredText = (s: string) =>
  s.replace(/\\/g, '\\\\').replace(/[,;]/g, '\\$&').replace(/\r\n|\r|\n/g, '\\n')

function icalDateTime(date: string, time: string): string {
  if (!date) return ''
  const compactDate = date.replace(/-/g, '')
  const compactTime = time ? `${time.replace(':', '')}00` : '000000'
  return `${compactDate}T${compactTime}`
}

export const qrTypes: QrTypeConfig[] = [
  {
    id: 'url',
    labelKey: 'qrTypeWebsite',
    fields: [{ id: 'url', labelKey: 'fieldWebsiteUrl', type: 'url', required: true }],
    build: (v) => {
      const r = normalizeUrl(v.url || '')
      return r.ok ? r.url : null
    },
  },
  {
    id: 'whatsapp',
    labelKey: 'qrTypeWhatsapp',
    fields: [
      { id: 'number', labelKey: 'fieldWhatsappNumber', placeholderKey: 'placeholderWhatsappNumber', type: 'tel', required: true },
      { id: 'message', labelKey: 'fieldMessage', placeholderKey: 'placeholderWhatsappMessage', type: 'textarea' },
    ],
    build: (v) => {
      const digits = digitsOnly(v.number || '').replace(/^\+/, '')
      if (!digits) return null
      const text = v.message ? `?text=${encodeURIComponent(v.message)}` : ''
      return `https://wa.me/${digits}${text}`
    },
  },
  {
    id: 'vcard',
    labelKey: 'qrTypeVcard',
    fields: [
      { id: 'firstName', labelKey: 'fieldFirstName', type: 'text', required: true, half: true },
      { id: 'lastName', labelKey: 'fieldLastName', type: 'text', half: true },
      { id: 'phone', labelKey: 'fieldPhone', type: 'tel', half: true },
      { id: 'email', labelKey: 'fieldEmail', type: 'email', half: true },
      { id: 'org', labelKey: 'fieldCompany', type: 'text', half: true },
      { id: 'website', labelKey: 'fieldWebsite', type: 'url', half: true },
    ],
    build: (v) => {
      if (!v.firstName?.trim() && !v.lastName?.trim()) return null
      const esc = escapeStructuredText
      const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${esc(v.lastName || '')};${esc(v.firstName || '')};;;`,
        `FN:${esc([v.firstName, v.lastName].filter(Boolean).join(' '))}`,
        v.org && `ORG:${esc(v.org)}`,
        v.phone && `TEL:${esc(v.phone)}`,
        v.email && `EMAIL:${esc(v.email)}`,
        v.website && `URL:${esc(v.website)}`,
        'END:VCARD',
      ].filter(Boolean)
      return lines.join('\n')
    },
  },
  {
    id: 'wifi',
    labelKey: 'qrTypeWifi',
    fields: [
      { id: 'ssid', labelKey: 'fieldSsid', type: 'text', required: true, half: true },
      { id: 'password', labelKey: 'fieldPassword', type: 'text', half: true },
      {
        id: 'encryption',
        labelKey: 'fieldEncryptionType',
        type: 'select',
        half: true,
        options: [
          { value: 'WPA', labelKey: 'encWpa' },
          { value: 'WEP', labelKey: 'encWep' },
          { value: 'nopass', labelKey: 'encNone' },
        ],
      },
      { id: 'hidden', labelKey: 'fieldHiddenNetwork', type: 'checkbox', half: true },
    ],
    build: (v) => {
      if (!v.ssid?.trim()) return null
      const enc = v.encryption || 'WPA'
      const hidden = v.hidden === 'true' ? 'H:true;' : ''
      const pass = enc === 'nopass' ? '' : `P:${escapeWifi(v.password || '')};`
      return `WIFI:T:${enc};S:${escapeWifi(v.ssid)};${pass}${hidden};`
    },
  },
  {
    id: 'email',
    labelKey: 'qrTypeEmail',
    fields: [
      { id: 'email', labelKey: 'fieldEmail', type: 'email', required: true },
      { id: 'subject', labelKey: 'fieldSubject', type: 'text' },
      { id: 'message', labelKey: 'fieldMessage', type: 'textarea' },
    ],
    build: (v) => {
      if (!v.email?.trim()) return null
      const params: string[] = []
      if (v.subject) params.push(`subject=${encodeURIComponent(v.subject)}`)
      if (v.message) params.push(`body=${encodeURIComponent(v.message)}`)
      return `mailto:${v.email}${params.length ? `?${params.join('&')}` : ''}`
    },
  },
  {
    id: 'location',
    labelKey: 'qrTypeLocation',
    fields: [
      { id: 'query', labelKey: 'fieldAddressOrPlace', placeholderKey: 'placeholderAddress', type: 'text', required: true },
    ],
    build: (v) => {
      if (!v.query?.trim()) return null
      return `https://maps.google.com/?q=${encodeURIComponent(v.query)}`
    },
  },
  {
    id: 'product',
    labelKey: 'qrTypeProduct',
    fields: [
      { id: 'name', labelKey: 'fieldProductName', type: 'text', half: true },
      { id: 'url', labelKey: 'fieldProductUrl', type: 'url', required: true, half: true },
    ],
    build: (v) => {
      const r = normalizeUrl(v.url || '')
      return r.ok ? r.url : null
    },
  },
  {
    id: 'appInstall',
    labelKey: 'qrTypeAppInstall',
    fields: [{ id: 'url', labelKey: 'fieldAppLink', type: 'url', required: true }],
    build: (v) => {
      const r = normalizeUrl(v.url || '')
      return r.ok ? r.url : null
    },
  },
  {
    id: 'event',
    labelKey: 'qrTypeEvent',
    fields: [
      { id: 'title', labelKey: 'fieldEventTitle', type: 'text', required: true },
      { id: 'start', labelKey: 'fieldStartDate', type: 'date', half: true },
      { id: 'startTime', labelKey: 'fieldStartTime', type: 'time', half: true },
      { id: 'end', labelKey: 'fieldEndDate', type: 'date', half: true },
      { id: 'endTime', labelKey: 'fieldEndTime', type: 'time', half: true },
      { id: 'location', labelKey: 'fieldEventLocation', type: 'text' },
      { id: 'description', labelKey: 'fieldDescription', type: 'textarea' },
    ],
    build: (v) => {
      if (!v.title?.trim() || !v.start) return null
      const esc = escapeStructuredText
      const dtStart = icalDateTime(v.start, v.startTime)
      const dtEnd = v.end ? icalDateTime(v.end, v.endTime) : dtStart
      const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `SUMMARY:${esc(v.title)}`,
        dtStart && `DTSTART:${dtStart}`,
        dtEnd && `DTEND:${dtEnd}`,
        v.location && `LOCATION:${esc(v.location)}`,
        v.description && `DESCRIPTION:${esc(v.description)}`,
        'END:VEVENT',
        'END:VCALENDAR',
      ].filter(Boolean)
      return lines.join('\n')
    },
  },
  {
    id: 'pdf',
    labelKey: 'qrTypePdf',
    fields: [{ id: 'url', labelKey: 'fieldPdfLink', type: 'url', required: true }],
    build: (v) => {
      const r = normalizeUrl(v.url || '')
      return r.ok ? r.url : null
    },
  },
]

export const defaultQrTypeId = qrTypes[0].id

export function findQrType(id: string): QrTypeConfig {
  return qrTypes.find((t) => t.id === id) ?? qrTypes[0]
}
