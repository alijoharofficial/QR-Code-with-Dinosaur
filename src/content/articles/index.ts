import type { ComponentType } from 'react'
import type { ArticleMeta } from './types'
import { meta as qrCodeWithLogoMeta, Content as QrCodeWithLogoContent } from './qr-code-with-logo'
import {
  meta as restaurantMenuMeta,
  Content as RestaurantMenuContent,
} from './restaurant-menu-qr-codes'
import {
  meta as weddingInvitationMeta,
  Content as WeddingInvitationContent,
} from './wedding-invitation-qr-codes'
import {
  meta as staticVsDynamicMeta,
  Content as StaticVsDynamicContent,
} from './static-vs-dynamic-qr-codes'
import {
  meta as cuteQrCodeMeta,
  Content as CuteQrCodeContent,
} from './cute-qr-code-that-scans'
import {
  meta as smallBusinessMeta,
  Content as SmallBusinessContent,
} from './small-business-qr-codes'

export interface Article {
  meta: ArticleMeta
  Content: ComponentType
}

export const articles: Article[] = [
  { meta: qrCodeWithLogoMeta, Content: QrCodeWithLogoContent },
  { meta: restaurantMenuMeta, Content: RestaurantMenuContent },
  { meta: weddingInvitationMeta, Content: WeddingInvitationContent },
  { meta: staticVsDynamicMeta, Content: StaticVsDynamicContent },
  { meta: cuteQrCodeMeta, Content: CuteQrCodeContent },
  { meta: smallBusinessMeta, Content: SmallBusinessContent },
]

export function findArticle(slug: string): Article | undefined {
  return articles.find((article) => article.meta.slug === slug)
}

export type { ArticleMeta }
