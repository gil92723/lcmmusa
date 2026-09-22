import {
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react"
import { Link } from "react-router"
import { useLang } from "@/app/context"
import translations from "@/data/translations.json"

export type PageKey = keyof typeof translations
type Entry = {
  text?: { en: string; zh: string }
  attributes?: Record<string, { en: string; zh: string }>
  classes?: { en: string[]; zh: string[] }
}
export function pageKey(path: string): PageKey {
  const name = path
    .replace(/\/$/, "")
    .split("/")
    .pop()
    ?.replace(/\.html$/, "")
  return name && name in translations ? name as PageKey : "index"
}

// React renders translated text and attributes; it never rewrites the DOM's textContent.
// This keeps form input, expanded stories and video players intact during a language switch.
export function usePageCopy(page: PageKey) {
  const { lang } = useLang()
  const entries = translations[page].entries as Record<string, Entry>
  const text = (key: string) => entries[key]?.text?.[lang] ?? ""
  const attrs = (key: string, classes = "") => {
    const entry = entries[key]
    const result: Record<string, string> = {}
    for (const [name, values] of Object.entries(entry?.attributes ?? {})) {
      result[name === "tabindex" ? "tabIndex" : name] = values[lang]
    }
    if (entry?.classes) {
      const translated = new Set([...entry.classes.en, ...entry.classes.zh])
      classes = [
        ...classes.split(/\s+/).filter((c) => c && !translated.has(c)),
        ...entry.classes[lang],
      ].join(" ")
    }
    if (classes) result.className = classes
    return result
  }
  const label = (en: string, zh: string) => (lang === "zh" ? zh : en)
  return { text, attrs, label, lang, title: translations[page].title[lang] }
}

export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}

export function AppLink({
  href = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const match = href.match(
    /^(index|about|ministries|testimonies|media|contact)\.html(.*)$/,
  )
  if (match)
    return (
      <Link
        to={`${match[1] === "index" ? "/" : `/${match[1]}`}${match[2]}`}
        {...props}
      >
        {children}
      </Link>
    )
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export function useCarousel(count: number) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const change = () => {
      if (preference.matches) setPaused(true)
    }
    preference.addEventListener("change", change)
    return () => preference.removeEventListener("change", change)
  }, [])
  useEffect(() => {
    if (paused || hovered || focused) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setCurrent((c) => (c + 1) % count)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [count, paused, hovered, focused])
  return {
    current,
    paused,
    setCurrent,
    setPaused,
    step: (delta: number) => setCurrent((c) => (c + delta + count) % count),
    region: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setFocused(true),
      onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false)
      },
    },
  }
}

export function navigateTabs(
  event: KeyboardEvent<HTMLButtonElement>,
  select: (key: string) => void,
) {
  const buttons = Array.from(
    event.currentTarget.parentElement!.querySelectorAll<HTMLButtonElement>(
      "[data-tab]",
    ),
  )
  const index = buttons.indexOf(event.currentTarget)
  const next =
    event.key === "ArrowRight"
      ? (index + 1) % buttons.length
      : event.key === "ArrowLeft"
        ? (index - 1 + buttons.length) % buttons.length
        : event.key === "Home"
          ? 0
          : event.key === "End"
            ? buttons.length - 1
            : -1
  if (next >= 0) {
    event.preventDefault()
    select(buttons[next].dataset.tab!)
    buttons[next].focus()
  }
}

export function VideoFrame({ src, title }: { src: string; title: string }) {
  const url = new URL(src)
  url.searchParams.set("autoplay", "1")
  return (
    <iframe
      className="video-frame"
      src={url.href}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  )
}

// The board is intentionally a local demo. These posts are never sent to a service.
export type DemoPost = { id: string; title: string; body: string; date: string }
export function useDemoBoard() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [invalid, setInvalid] = useState(false)
  const [posts, setPosts] = useState<DemoPost[]>([])
  const [likes, setLikes] = useState<Record<string, boolean>>({})
  const titleRef = useRef<HTMLInputElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)
  useEffect(() => {
    if (open) titleRef.current?.focus()
    else if (wasOpen.current) toggleRef.current?.focus()
    wasOpen.current = open
  }, [open])
  const submit = () => {
    if (!title.trim() || !body.trim()) {
      setInvalid(true)
      return
    }
    setPosts((p) => [
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        body: body.trim(),
        date: new Date().toISOString(),
      },
      ...p,
    ])
    setTitle("")
    setBody("")
    setInvalid(false)
    setOpen(false)
  }
  const toggleLike = (id: string) => setLikes((l) => ({ ...l, [id]: !l[id] }))
  return {
    open,
    setOpen,
    title,
    setTitle,
    body,
    setBody,
    invalid,
    posts,
    likes,
    titleRef,
    toggleRef,
    submit,
    toggleLike,
  }
}

export function DemoPostCard({
  post,
  liked,
  onLike,
}: {
  post: DemoPost
  liked: boolean
  onLike: () => void
}) {
  const { label, lang } = usePageCopy("index")
  return (
    <div data-post={post.id} className="rounded-xl p-6 film-section-1-box-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white programs-section-1-box-2">
          {label("C", "社")}
        </div>
        <div>
          <p className="text-sm font-semibold film-section-1-text-1">
            {label("Community Member", "社群成員")}
          </p>
          <p className="text-xs home-hero-section-1-text-2">
            {label("Local preview", "本機預覽")} ·{" "}
            {new Date(post.date).toLocaleDateString(
              lang === "zh" ? "zh-TW" : "en-US",
            )}
          </p>
        </div>
      </div>
      <h3 className="font-bold text-base mb-1.5 film-section-1-text-2">
        {post.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4 home-hero-section-1-text-2 user-post-body">
        {post.body}
      </p>
      <button
        type="button"
        data-like={post.id}
        aria-pressed={liked}
        aria-label={label("Like this update", "喜歡這則訊息")}
        onClick={onLike}
        className="flex items-center gap-1.5 text-sm home-hero-section-1-text-2"
      >
        <span>{liked ? "♥" : "♡"}</span>
        <span>{liked ? 1 : 0}</span>
      </button>
    </div>
  )
}
