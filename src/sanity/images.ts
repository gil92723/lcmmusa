import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"
import { client } from "./client"

const imageBuilder = createImageUrlBuilder(client)
export function imageUrl(source?: SanityImageSource, width = 1000) {
  if (!source) return undefined
  try {
    return imageBuilder.image(source).width(width).auto("format").url()
  } catch {
    return undefined
  }
}