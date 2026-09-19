import { useState, type FormEvent } from "react"
import {
  AppLink,
  asset,
  usePageCopy,
  navigateTabs,
  VideoFrame,
  useCarousel,
  useDemoBoard,
  DemoPostCard,
} from "@/lib/ui"

export default function Media() {
  const { text, attrs, label } = usePageCopy("media")
  const [category, setCategory] = useState("all")
  const [playing, setPlaying] = useState<string | null>(null)
  const categories: Record<string, string> = {
    "video-0": "ministry",
    "video-1": "msce",
    "video-2": "ministry",
    "video-3": "ministry",
    "video-4": "event",
    "video-5": "testimony",
  }
  function changeCategory(next: string) {
    setCategory(next)
    if (playing && next !== "all" && categories[playing] !== next)
      setPlaying(null)
  }

  return (
    <>
      <div className="transition-colors duration-300 home-hero-section-1">
        {/* media-hero */}
        <section className="media-hero about-hero-section-1">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p
              {...attrs(
                "media-hero.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-4 about-hero-section-1-text-1",
              )}
              data-i18n="media-hero.paragraph-1"
            >
              {text("media-hero.paragraph-1")}
            </p>
            <h1
              {...attrs(
                "media-hero.title-1",
                "text-5xl md:text-6xl font-bold mb-6 about-hero-section-1-title-1",
              )}
              data-i18n="media-hero.title-1"
            >
              {text("media-hero.title-1")}
            </h1>
            <p
              {...attrs(
                "media-hero.paragraph-2",
                "text-lg max-w-xl mx-auto about-hero-section-1-text-2",
              )}
              data-i18n="media-hero.paragraph-2"
            >
              {text("media-hero.paragraph-2")}
            </p>
          </div>
        </section>
        {/* media-filters */}
        <section className="media-filters media-filters-section-1">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap gap-2">
              <button
                {...attrs(
                  "media-filters.button-1",
                  "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 media-filters-section-1-button-1",
                )}
                data-filter="all"
                aria-pressed={category === "all"}
                data-i18n="media-filters.button-1"
                type="button"
                onClick={() => changeCategory("all")}
              >
                {text("media-filters.button-1")}
              </button>
              <button
                {...attrs(
                  "media-filters.button-2",
                  "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 media-filters-section-1-button-2",
                )}
                data-filter="ministry"
                aria-pressed={category === "ministry"}
                data-i18n="media-filters.button-2"
                type="button"
                onClick={() => changeCategory("ministry")}
              >
                {text("media-filters.button-2")}
              </button>
              <button
                data-filter="msce"
                aria-pressed={category === "msce"}
                className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 media-filters-section-1-button-2"
                type="button"
                onClick={() => changeCategory("msce")}
              >
                {"MSCE"}
              </button>
              <button
                {...attrs(
                  "media-filters.button-3",
                  "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 media-filters-section-1-button-2",
                )}
                data-filter="testimony"
                aria-pressed={category === "testimony"}
                data-i18n="media-filters.button-3"
                type="button"
                onClick={() => changeCategory("testimony")}
              >
                {text("media-filters.button-3")}
              </button>
              <button
                {...attrs(
                  "media-filters.button-4",
                  "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 media-filters-section-1-button-2",
                )}
                data-filter="event"
                aria-pressed={category === "event"}
                data-i18n="media-filters.button-4"
                type="button"
                onClick={() => changeCategory("event")}
              >
                {text("media-filters.button-4")}
              </button>
            </div>
          </div>
        </section>
        {/* media-grid */}
        <section className="media-grid media-grid-section-1">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                data-media-category="ministry"
                data-media-id="video-0"
                className="rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 film-section-1-box-4"
                hidden={category !== "all" && category !== "ministry"}
              >
                <div className="relative media-grid-section-1-box-1">
                  <div
                    {...attrs(
                      "media-grid.div-1",
                      "absolute inset-0 flex flex-col items-center justify-center cursor-pointer group media-grid-section-1-box-2",
                    )}
                    data-video-src="https://www.youtube.com/embed/?listType=user_uploads&list=lcmmusa"
                    role="button"
                    tabIndex={0}
                    data-i18n="media-grid.div-1"
                    hidden={playing === "video-0"}
                    onClick={() => setPlaying("video-0")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault()
                        setPlaying("video-0")
                      }
                    }}
                  >
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 media-grid-section-1-box-3">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <p
                      {...attrs(
                        "media-grid.paragraph-1",
                        "text-xs font-semibold media-grid-section-1-text-1",
                      )}
                      data-i18n="media-grid.paragraph-1"
                    >
                      {text("media-grid.paragraph-1")}
                    </p>
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded media-grid-section-1-label-1">
                    {"2024"}
                  </span>
                  {playing === "video-0" && (
                    <VideoFrame
                      src="https://www.youtube.com/embed/?listType=user_uploads&list=lcmmusa"
                      title={text("media-grid.paragraph-2")}
                    />
                  )}
                </div>
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <p
                    {...attrs(
                      "media-grid.paragraph-2",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-2"
                  >
                    {text("media-grid.paragraph-2")}
                  </p>
                  <p
                    {...attrs(
                      "media-grid.paragraph-3",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-3"
                  >
                    {text("media-grid.paragraph-3")}
                  </p>
                </div>
              </div>
              <div
                data-media-category="msce"
                data-media-id="video-1"
                className="rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 film-section-1-box-4"
                hidden={category !== "all" && category !== "msce"}
              >
                <div className="relative media-grid-section-1-box-1">
                  <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group media-grid-section-1-box-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 media-grid-section-1-box-4">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                      >
                        <rect x="2" y="7" width="20" height="15" rx="2"></rect>
                        <path d="M16 3l-4 4-4-4"></path>
                      </svg>
                    </div>
                    <p
                      {...attrs(
                        "media-grid.paragraph-4",
                        "text-xs font-semibold footer-text-3",
                      )}
                      data-i18n="media-grid.paragraph-4"
                    >
                      {text("media-grid.paragraph-4")}
                    </p>
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded media-grid-section-1-label-1">
                    {"2026"}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <p
                    {...attrs(
                      "media-grid.paragraph-5",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-5"
                  >
                    {text("media-grid.paragraph-5")}
                  </p>
                  <p
                    {...attrs(
                      "media-grid.paragraph-6",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-6"
                  >
                    {text("media-grid.paragraph-6")}
                  </p>
                </div>
              </div>
              <div
                data-media-category="ministry"
                data-media-id="video-2"
                className="rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 film-section-1-box-4"
                hidden={category !== "all" && category !== "ministry"}
              >
                <div className="relative media-grid-section-1-box-1">
                  <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group media-grid-section-1-box-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 media-grid-section-1-box-4">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                      >
                        <rect x="2" y="7" width="20" height="15" rx="2"></rect>
                        <path d="M16 3l-4 4-4-4"></path>
                      </svg>
                    </div>
                    <p
                      {...attrs(
                        "media-grid.paragraph-7",
                        "text-xs font-semibold footer-text-3",
                      )}
                      data-i18n="media-grid.paragraph-7"
                    >
                      {text("media-grid.paragraph-7")}
                    </p>
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded media-grid-section-1-label-1">
                    {"2019"}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <p
                    {...attrs(
                      "media-grid.paragraph-8",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-8"
                  >
                    {text("media-grid.paragraph-8")}
                  </p>
                  <p
                    {...attrs(
                      "media-grid.paragraph-9",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-9"
                  >
                    {text("media-grid.paragraph-9")}
                  </p>
                </div>
              </div>
              <div
                data-media-category="ministry"
                data-media-id="video-3"
                className="rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 film-section-1-box-4"
                hidden={category !== "all" && category !== "ministry"}
              >
                <div className="relative media-grid-section-1-box-1">
                  <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group media-grid-section-1-box-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 media-grid-section-1-box-4">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                      >
                        <rect x="2" y="7" width="20" height="15" rx="2"></rect>
                        <path d="M16 3l-4 4-4-4"></path>
                      </svg>
                    </div>
                    <p
                      {...attrs(
                        "media-grid.paragraph-10",
                        "text-xs font-semibold footer-text-3",
                      )}
                      data-i18n="media-grid.paragraph-10"
                    >
                      {text("media-grid.paragraph-10")}
                    </p>
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded media-grid-section-1-label-1">
                    {"2019"}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <p
                    {...attrs(
                      "media-grid.paragraph-11",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-11"
                  >
                    {text("media-grid.paragraph-11")}
                  </p>
                  <p
                    {...attrs(
                      "media-grid.paragraph-12",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-12"
                  >
                    {text("media-grid.paragraph-12")}
                  </p>
                </div>
              </div>
              <div
                data-media-category="event"
                data-media-id="video-4"
                className="rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 film-section-1-box-4"
                hidden={category !== "all" && category !== "event"}
              >
                <div className="relative media-grid-section-1-box-1">
                  <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group media-grid-section-1-box-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 media-grid-section-1-box-4">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                      >
                        <rect x="2" y="7" width="20" height="15" rx="2"></rect>
                        <path d="M16 3l-4 4-4-4"></path>
                      </svg>
                    </div>
                    <p
                      {...attrs(
                        "media-grid.paragraph-13",
                        "text-xs font-semibold footer-text-3",
                      )}
                      data-i18n="media-grid.paragraph-13"
                    >
                      {text("media-grid.paragraph-13")}
                    </p>
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded media-grid-section-1-label-1">
                    {"2023"}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <p
                    {...attrs(
                      "media-grid.paragraph-14",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-14"
                  >
                    {text("media-grid.paragraph-14")}
                  </p>
                  <p
                    {...attrs(
                      "media-grid.paragraph-15",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-15"
                  >
                    {text("media-grid.paragraph-15")}
                  </p>
                </div>
              </div>
              <div
                data-media-category="testimony"
                data-media-id="video-5"
                className="rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 film-section-1-box-4"
                hidden={category !== "all" && category !== "testimony"}
              >
                <div className="relative media-grid-section-1-box-1">
                  <div className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group media-grid-section-1-box-2">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 media-grid-section-1-box-4">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                      >
                        <rect x="2" y="7" width="20" height="15" rx="2"></rect>
                        <path d="M16 3l-4 4-4-4"></path>
                      </svg>
                    </div>
                    <p
                      {...attrs(
                        "media-grid.paragraph-16",
                        "text-xs font-semibold footer-text-3",
                      )}
                      data-i18n="media-grid.paragraph-16"
                    >
                      {text("media-grid.paragraph-16")}
                    </p>
                  </div>
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-0.5 rounded media-grid-section-1-label-1">
                    {"2025"}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <p
                    {...attrs(
                      "media-grid.paragraph-17",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-17"
                  >
                    {text("media-grid.paragraph-17")}
                  </p>
                  <p
                    {...attrs(
                      "media-grid.paragraph-18",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="media-grid.paragraph-18"
                  >
                    {text("media-grid.paragraph-18")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* share-video */}
        <section className="share-video share-story-section-1">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              {...attrs(
                "share-video.heading-1",
                "text-2xl font-bold mb-3 text-white home-hero-section-1-label-2",
              )}
              data-i18n="share-video.heading-1"
            >
              {text("share-video.heading-1")}
            </h2>
            <p
              {...attrs("share-video.paragraph-1", "text-sm mb-6 footer-box-1")}
              data-i18n="share-video.paragraph-1"
            >
              {text("share-video.paragraph-1")}
            </p>
            <AppLink
              {...attrs(
                "share-video.link-1",
                "inline-block px-6 py-3 font-semibold rounded transition-all hover:opacity-90 msce-section-1-link-1",
              )}
              href="contact.html"
              data-i18n="share-video.link-1"
            >
              {text("share-video.link-1")}
            </AppLink>
          </div>
        </section>
      </div>
    </>
  )
}
