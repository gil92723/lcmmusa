import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"
import type { PortableTextBlock } from "@portabletext/react"
import { client } from "./client"

export type Post = {
  _id: string
  title?: string
  slug: { current: string }
  publishedAt?: string
  image?: SanityImageSource & { alt?: string }
  body?: PortableTextBlock[]
}

export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]
  | order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`
export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id, title, slug, publishedAt, image, body
}`

const imageBuilder = createImageUrlBuilder(client)
export function imageUrl(source?: SanityImageSource, width = 1000) {
  if (!source) return undefined
  try {
    return imageBuilder.image(source).width(width).auto("format").url()
  } catch {
    return undefined
  }
}

export function formattedDate(value: string | undefined, lang: "en" | "zh") {
  if (!value) return ""
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString(
    lang === "zh" ? "zh-TW" : "en-US", { dateStyle: "medium", timeZone: "UTC" },
  )
}
