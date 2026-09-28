import type { ComponentType } from 'react'
import type { GuideMeta } from './types'
import { meta as logoGuideMeta, Content as LogoGuideContent } from './how-to-make-qr-with-logo'
import {
  meta as staticVsDynamicMeta,
  Content as StaticVsDynamicContent,
} from './static-vs-dynamic-qr-codes'
import { meta as expireMeta, Content as ExpireContent } from './do-qr-codes-expire'
import {
  meta as smallBusinessMeta,
  Content as SmallBusinessContent,
} from './qr-codes-for-small-business'

export interface Guide {
  meta: GuideMeta
  Content: ComponentType
}

export const guides: Guide[] = [
  { meta: logoGuideMeta, Content: LogoGuideContent },
  { meta: staticVsDynamicMeta, Content: StaticVsDynamicContent },
  { meta: expireMeta, Content: ExpireContent },
  { meta: smallBusinessMeta, Content: SmallBusinessContent },
]

export function findGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.meta.slug === slug)
}

export type { GuideMeta }
