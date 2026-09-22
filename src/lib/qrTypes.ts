import { normalizeUrl } from './url'

export interface QrField {
  id: string
  label: string
  placeholder?: string
  type: 'text' | 'tel' | 'email' | 'url' | 'textarea' | 'select' | 'date' | 'time' | 'checkbox'
  options?: { value: string; label: string }[]
  required?: boolean
  half?: boolean
}

export interface QrTypeConfig {
  id: string
  label: string
  fields: QrField[]
  build: (values: Record<string, string>) => string | null
}

const digitsOnly = (s: string) => s.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '')
const escapeWifi = (s: string) => s.replace(/([\\;,:"])/g, '\\$1')

function icalDateTime(date: string, time: string): string {
  if (!date) return ''
  const compactDate = date.replace(/-/g, '')
  const compactTime = time ? `${time.replace(':', '')}00` : '000000'
  return `${compactDate}T${compactTime}`
}

export const qrTypes: QrTypeConfig[] = [
  {
    id: 'url',
    label: 'Website',
    fields: [{ id: 'url', label: 'Website URL', type: 'url', required: true }],
    build: (v) => {
      const r = normalizeUrl(v.url || '')
      return r.ok ? r.url : null
    },
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    fields: [
      { id: 'number', label: 'Number', placeholder: 'e.g. +1 415 555 0100', type: 'tel', required: true },
      { id: 'message', label: 'Message', placeholder: 'Optional pre-filled message', type: 'textarea' },
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
    label: 'vCard',
    fields: [
      { id: 'firstName', label: 'First name', type: 'text', required: true, half: true },
      { id: 'lastName', label: 'Last name', type: 'text', half: true },
      { id: 'phone', label: 'Phone', type: 'tel', half: true },
      { id: 'email', label: 'Email', type: 'email', half: true },
      { id: 'org', label: 'Company', type: 'text', half: true },
      { id: 'website', label: 'Website', type: 'url', half: true },
    ],
    build: (v) => {
      if (!v.firstName?.trim() && !v.lastName?.trim()) return null
      const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${v.lastName || ''};${v.firstName || ''};;;`,
        `FN:${[v.firstName, v.lastName].filter(Boolean).join(' ')}`,
        v.org && `ORG:${v.org}`,
        v.phone && `TEL:${v.phone}`,
        v.email && `EMAIL:${v.email}`,
        v.website && `URL:${v.website}`,
        'END:VCARD',
      ].filter(Boolean)
      return lines.join('\n')
    },
  },
  {
    id: 'wifi',
    label: 'WiFi',
    fields: [
      { id: 'ssid', label: 'Network name (SSID)', type: 'text', required: true, half: true },
      { id: 'password', label: 'Network password', type: 'text', half: true },
      {
        id: 'encryption',
        label: 'Type of encryption',
        type: 'select',
        half: true,
        options: [
          { value: 'WPA', label: 'WPA/WPA2' },
          { value: 'WEP', label: 'WEP' },
          { value: 'nopass', label: 'None' },
        ],
      },
      { id: 'hidden', label: 'Hidden network', type: 'checkbox', half: true },
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
    label: 'Email',
    fields: [
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'subject', label: 'Subject', type: 'text' },
      { id: 'message', label: 'Message', type: 'textarea' },
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
    label: 'Location',
    fields: [
      { id: 'query', label: 'Business address or place name', placeholder: 'e.g. 1600 Amphitheatre Pkwy, Mountain View, CA', type: 'text', required: true },
    ],
    build: (v) => {
      if (!v.query?.trim()) return null
      return `https://maps.google.com/?q=${encodeURIComponent(v.query)}`
    },
  },
  {
    id: 'product',
    label: 'Product',
    fields: [
      { id: 'name', label: 'Product name', type: 'text', half: true },
      { id: 'url', label: 'Product page URL', type: 'url', required: true, half: true },
    ],
    build: (v) => {
      const r = normalizeUrl(v.url || '')
      return r.ok ? r.url : null
    },
  },
  {
    id: 'appInstall',
    label: 'App Install',
    fields: [
      { id: 'url', label: 'App Store / Play Store link', type: 'url', required: true },
    ],
    build: (v) => {
      const r = normalizeUrl(v.url || '')
      return r.ok ? r.url : null
    },
  },
  {
    id: 'event',
    label: 'Event',
    fields: [
      { id: 'title', label: 'Event title', type: 'text', required: true },
      { id: 'start', label: 'Start date', type: 'date', half: true },
      { id: 'startTime', label: 'Start time', type: 'time', half: true },
      { id: 'end', label: 'End date', type: 'date', half: true },
      { id: 'endTime', label: 'End time', type: 'time', half: true },
      { id: 'location', label: 'Location', type: 'text' },
      { id: 'description', label: 'Description', type: 'textarea' },
    ],
    build: (v) => {
      if (!v.title?.trim() || !v.start) return null
      const dtStart = icalDateTime(v.start, v.startTime)
      const dtEnd = v.end ? icalDateTime(v.end, v.endTime) : dtStart
      const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        `SUMMARY:${v.title}`,
        dtStart && `DTSTART:${dtStart}`,
        dtEnd && `DTEND:${dtEnd}`,
        v.location && `LOCATION:${v.location}`,
        v.description && `DESCRIPTION:${v.description}`,
        'END:VEVENT',
        'END:VCALENDAR',
      ].filter(Boolean)
      return lines.join('\n')
    },
  },
  {
    id: 'pdf',
    label: 'PDF',
    fields: [
      { id: 'url', label: 'Link to your hosted PDF', placeholder: 'https://example.com/file.pdf', type: 'url', required: true },
    ],
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
