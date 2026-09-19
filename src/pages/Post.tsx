import { Link, useParams } from "react-router"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
import { useLang } from "@/context"
import { POST_QUERY, imageUrl, formattedDate, type Post as PostDocument } from "@/sanity/posts"
import useSanityQuery from "@/sanity/useSanityQuery"

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const src = imageUrl(value)
      return src ? <img src={src} alt={value.alt || ""} loading="lazy" /> : null
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = typeof value?.href === "string" ? value.href.trim() : ""
      // Rich text may include arbitrary URLs; only allow ordinary web/email links.
      return /^(https?:\/\/|mailto:)/i.test(href)
        ? <a href={href}>{children}</a> : <>{children}</>
    },
  },
}

export default function Post() {
  const { slug } = useParams<{ slug: string }>()
  const { lang } = useLang()
  const zh = lang === "zh"
  const { data: post, loading, error, retry } = useSanityQuery<PostDocument | null>(POST_QUERY, slug || "")
  const cover = imageUrl(post?.image)
  const date = formattedDate(post?.publishedAt, lang)
  return (
    <article className="cms-post max-w-3xl mx-auto px-6 pt-32 pb-16 min-h-screen">
      <Link to="/#latest-posts" className="underline inline-block mb-8">
        {zh ? "← 返回文章列表" : "← Back to posts"}
      </Link>
      {loading && <p role="status">{zh ? "載入中……" : "Loading post…"}</p>}
      {error && <div role="alert">
        <h1 className="text-3xl font-bold mb-4">{zh ? "無法載入文章" : "Unable to load post"}</h1>
        <p>{zh ? "請稍後再試。" : "Please try again."}</p>
        <button type="button" className="cms-retry" onClick={retry}>{zh ? "重試" : "Try again"}</button>
      </div>}
      {!loading && !error && !post && <>
        <h1 className="text-3xl font-bold mb-4">{zh ? "找不到文章" : "Post not found"}</h1>
        <p>{zh ? "這篇文章可能已移除或尚未發佈。" : "This post may have been removed or has not been published."}</p>
      </>}
      {!loading && !error && post && <>
        {cover && <img src={cover} alt={post.image?.alt || ""} className="w-full rounded-xl mb-8" />}
        <h1 className="text-4xl font-bold mb-4">{post.title || (zh ? "未命名文章" : "Untitled post")}</h1>
        {date && <p className="mb-8">{zh ? "發佈日期：" : "Published: "}{date}</p>}
        <div className="prose cms-prose max-w-none">
          {Array.isArray(post.body) && <PortableText value={post.body} components={components} />}
        </div>
      </>}
    </article>
  )
}
