import {
  usePageCopy,
  useCarousel,
} from "@/lib/ui"
import { HIGHLIGHTS_QUERY, imageUrl, type HomepageHighlight } from "@/sanity/highlights"
import useSanityQuery from "@/sanity/useSanityQuery"

export default function MinistryCarousel() {
  const { text, attrs, label, lang } = usePageCopy("index")

  const {
    data: highlights,
    loading,
    error,
    retry,
  } = useSanityQuery<HomepageHighlight[]>(HIGHLIGHTS_QUERY)

  const slides = (highlights ?? []).filter(
    (highlight) => imageUrl(highlight.image, 1600),
  )

  const carousel = useCarousel(Math.max(slides.length, 1))

  return (
    <div
      style={{
        aspectRatio: "2 / 1",
        height: "auto",
        width: "100%",
      }}
      {...attrs(
        "home-hero.div-1",
        "relative rounded-2xl overflow-hidden select-none home-hero-section-1-box-1",
      )}
      {...carousel.region}
      data-carousel=""
      role="region"
      aria-roledescription="carousel"
      data-i18n="home-hero.div-1"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center home-hero-section-1-text-2">
          {label("Loading recent highlights…", "載入最新消息中……")}
        </div>
      )}

      {error && (
        <div
          role="alert"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 home-hero-section-1-text-2"
        >
          <p>{label("Highlights could not be loaded.", "目前無法載入最新消息。")}</p>
          <button type="button" onClick={retry} className="underline">
            {label("Try again", "重試")}
          </button>
        </div>
      )}

      {!loading && !error && slides.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center home-hero-section-1-text-2">
          {label("No recent highlights yet.", "目前尚無最新消息。")}
        </div>
      )}

      {slides.map((slide, index) => {
        const src = imageUrl(slide.image, 1600)

        if (!src) return null

        const alt =
          lang === "zh"
            ? slide.image.altZh || slide.image.altEn || ""
            : slide.image.altEn || slide.image.altZh || ""

        const caption =
          lang === "zh"
            ? slide.captionZh || slide.captionEn || ""
            : slide.captionEn || slide.captionZh || ""

        return (
          <div
            key={slide._id}
            data-slide={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === 0
                ? "home-hero-section-1-box-2"
                : "home-hero-section-1-box-4"
            }`}
            data-active={String(carousel.current === index)}
            aria-hidden={carousel.current !== index}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              decoding="async"
            />

            <div className="absolute inset-0 home-hero-section-1-box-3" />

            {caption && (
              <span className="absolute bottom-4 left-5 text-white font-semibold text-sm tracking-wide home-hero-section-1-label-1">
                {caption}
              </span>
            )}
          </div>
        )
      })}

      {slides.length > 1 && (
        <>
          <button
            data-slide-step="-1"
            aria-label={label("Previous", "上一張")}
            className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110 home-hero-section-1-button-1"
            type="button"
            onClick={() => carousel.step(-1)}
          >
            ‹
          </button>

          <button
            data-slide-step="1"
            aria-label={label("Next", "下一張")}
            className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110 home-hero-section-1-button-2"
            type="button"
            onClick={() => carousel.step(1)}
          >
            ›
          </button>

          <div className="absolute bottom-3 right-4 flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                data-slide-to={index}
                aria-label={label(
                  `Slide ${index + 1}`,
                  `第 ${index + 1} 張`,
                )}
                className={`rounded-full transition-all duration-300 ${
                  index === carousel.current
                    ? "home-hero-section-1-button-3"
                    : "home-hero-section-1-button-4"
                }`}
                type="button"
                onClick={() => carousel.setCurrent(index)}
                aria-pressed={carousel.current === index}
              />
            ))}
          </div>

          <button
            {...attrs("home-hero.button-1", "carousel-pause")}
            data-carousel-pause=""
            aria-pressed={carousel.paused}
            data-i18n="home-hero.button-1"
            type="button"
            onClick={() => carousel.setPaused(!carousel.paused)}
          >
            {carousel.paused
              ? label("Play slideshow", "播放輪播")
              : label("Pause slideshow", "暫停輪播")}
          </button>
        </>
      )}

      {!loading && !error && slides.length === 0 && (
        <p className="sr-only">{text("home-hero.paragraph-1")}</p>
      )}
    </div>
  )
}