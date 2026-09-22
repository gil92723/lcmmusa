import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"
import { client } from "./client"

export type MinistryCardPhoto = {
  _id: string
  ministry: string
  image: SanityImageSource & { altEn?: string; altZh?: string }
}

export const MINISTRY_CARDS_QUERY = `*[
  _type == "ministryCard" && defined(image.asset._ref)
] | order(_updatedAt desc, _id asc){_id, ministry, image}`

const builder = createImageUrlBuilder(client)

export function ministryCardImageUrl(image?: SanityImageSource) {
  if (!image) return undefined
  try {
    // Both dimensions let Sanity honor the editor's crop and focal point.
    return builder.image(image).width(960).height(600).fit("crop").auto("format").url()
  } catch {
    return undefined
  }
}
