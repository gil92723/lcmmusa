import { Link } from "react-router"
import { useLang } from "@/context"
import { POSTS_QUERY, formattedDate, type Post } from "@/sanity/posts"
import useSanityQuery from "@/sanity/useSanityQuery"

export default function SanityPosts() {
  const { lang } = useLang()
  const zh = lang === "zh"
  const { data: posts, loading, error, retry } = useSanityQuery<Post[]>(POSTS_QUERY)
  return (
    <section id="latest-posts" className="cms-section community programs-section-1" aria-labelledby="latest-posts-title">
      <div className="max-w-4xl mx-auto px-6">
        <h2 id="latest-posts-title" className="text-4xl font-bold mb-10">
          {zh ? "最新文章" : "Latest posts"}
        </h2>
        {loading && <p role="status">{zh ? "載入中……" : "Loading posts…"}</p>}
        {error && <div role="alert">
          <p>{zh ? "目前無法載入文章，請稍後再試。" : "Posts could not be loaded. Please try again."}</p>
          <button type="button" className="cms-retry" onClick={retry}>{zh ? "重試" : "Try again"}</button>
        </div>}
        {!loading && !error && posts?.length === 0 &&
          <p>{zh ? "目前尚無已發佈的文章。" : "No posts have been published yet."}</p>}
        {!loading && !error && !!posts?.length && <ul className="flex flex-col gap-5">
          {posts.map(post => <li key={post._id} className="cms-card transition-all duration-200 hover:-translate-y-0.5">
            <Link to={`/posts/${encodeURIComponent(post.slug.current)}`} className="block group">
              <h3 className="text-xl font-semibold group-hover:underline">{post.title || (zh ? "未命名文章" : "Untitled post")}</h3>
              {formattedDate(post.publishedAt, lang) && <p className="mt-2 text-sm">
                {formattedDate(post.publishedAt, lang)}
              </p>}
              <span className="inline-block mt-4 text-sm underline">{zh ? "閱讀全文 →" : "Read more →"}</span>
            </Link>
          </li>)}
        </ul>}
      </div>
    </section>
  )
}
