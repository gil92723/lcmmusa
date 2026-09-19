export type MediaVideo = {
  _id: string
  titleEn?: string
  titleZh?: string
  youtubeUrl: string
  descriptionEn?: string
  descriptionZh?: string
}

export const HOMEPAGE_VIDEO_QUERY = `*[
  _type == "mediaVideo" &&
  isActive == true &&
  featuredOnHomepage == true &&
  defined(youtubeUrl)
] | order(sortOrder asc, _createdAt desc)[0]{
  _id,
  titleEn,
  titleZh,
  youtubeUrl,
  descriptionEn,
  descriptionZh
}`

export function youtubeEmbedUrl(
  rawUrl: string,
  autoplay = false,
): string | null {
  try {
    const url = new URL(rawUrl)
    const host = url.hostname.replace(/^www\./, "")

    let videoId = ""

    if (host === "youtu.be") {
      videoId = url.pathname.slice(1)
    } else if (host === "youtube.com") {
      videoId =
        url.searchParams.get("v") ??
        url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1] ??
        ""
    }

    if (!videoId) return null

    const params = new URLSearchParams({
      rel: "0",
      ...(autoplay ? { autoplay: "1" } : {}),
    })

    return `https://www.youtube.com/embed/${encodeURIComponent(
      videoId,
    )}?${params.toString()}`
  } catch {
    return null
  }
}