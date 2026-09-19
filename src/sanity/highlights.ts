import type { SanityImageSource } from "@sanity/image-url"
import { client } from "./client"
import { imageUrl } from "./posts"

export type HomepageHighlight = {
  _id: string
  image: SanityImageSource & {
    altEn?: string
    altZh?: string
  }
  captionEn?: string
  captionZh?: string
  sortOrder?: number
  isActive?: boolean
}

export const HIGHLIGHTS_QUERY = `
  *[
    _type == "homepageHighlight"
    && isActive == true
    && defined(image)
  ]
  | order(sortOrder asc, _createdAt desc) {
    _id,
    image {
      ...,
      altEn,
      altZh
    },
    captionEn,
    captionZh,
    sortOrder,
    isActive
  }
`

export { imageUrl }