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
import MinistryCarousel from "@/components/MinistryCarousel"
import CommunityBoard from "@/components/CommunityBoard"
import useSanityQuery from "@/sanity/useSanityQuery"
import {
  HOMEPAGE_VIDEO_QUERY,
  youtubeEmbedUrl,
  type MediaVideo,
} from "@/sanity/videos"
import { MinistryCards } from "@/components/MinistryExplorer"

export default function Home() {
  const { text, attrs, label , lang} = usePageCopy("index")
  const [featurePlaying, setFeaturePlaying] = useState(false)

  const {
    data: featuredVideo,
    loading: videoLoading,
    error: videoError,
    retry: retryVideo,
  } = useSanityQuery<MediaVideo | null>(HOMEPAGE_VIDEO_QUERY)

  const videoEmbedUrl = featuredVideo
    ? youtubeEmbedUrl(featuredVideo.youtubeUrl)
    : null

  const videoId = videoEmbedUrl
  ? new URL(videoEmbedUrl).pathname.split("/").pop()
  : null

  const videoThumbnail = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : null

  const videoSrc =
    featuredVideo && featurePlaying
      ? youtubeEmbedUrl(featuredVideo.youtubeUrl, true)
      : null

  const videoTitle =
    lang === "zh"
      ? featuredVideo?.titleZh || featuredVideo?.titleEn || "影片"
      : featuredVideo?.titleEn || featuredVideo?.titleZh || "Video"
  return (
    <>
      {/* home-hero */}

      <section
        id="about"
        className="transition-colors duration-300 home-hero home-hero-section-1"
      >
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p
              {...attrs(
                "home-hero.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-5 home-hero-section-1-text-1",
              )}
              data-i18n="home-hero.paragraph-1"
            >
              {text("home-hero.paragraph-1")}
            </p>
            <h1
              {...attrs(
                "home-hero.title-1",
                "text-5xl md:text-6xl font-bold leading-tight mb-5 whitespace-pre-line home-hero-section-1-title-1",
              )}
              data-i18n="home-hero.title-1"
            >
              {text("home-hero.title-1")}
            </h1>
            <p
              {...attrs(
                "home-hero.paragraph-2",
                "text-lg leading-relaxed home-hero-section-1-text-2",
              )}
              data-i18n="home-hero.paragraph-2"
            >
              {text("home-hero.paragraph-2")}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <AppLink
              {...attrs(
                "home-hero.link-1",
                "inline-flex items-center gap-2 px-6 py-3 font-semibold rounded transition-all duration-200 hover:opacity-90 home-hero-section-1-link-1",
              )}
              href="ministries.html"
              data-i18n="home-hero.link-1"
            >
              {text("home-hero.link-1")}
            </AppLink>
            <AppLink
              {...attrs(
                "home-hero.link-2",
                "inline-flex items-center gap-2 px-6 py-3 font-semibold rounded border-2 transition-all duration-200 home-hero-section-1-link-2",
              )}
              href="contact.html"
              data-i18n="home-hero.link-2"
            >
              {text("home-hero.link-2")}
            </AppLink>
          </div>
        </div>
        <div className="w-full px-6 pb-16 max-w-6xl mx-auto">
          <MinistryCarousel />
        </div>
      </section>

      {/* film */}

      <section className="transition-colors duration-300 film film-section-1">
        <div className="max-w-6xl mx-auto px-6">
          <p
            {...attrs(
              "film.paragraph-1",
              "text-xs font-semibold tracking-widest uppercase mb-3 home-hero-section-1-text-1",
            )}
            data-i18n="film.paragraph-1"
          >
            {text("film.paragraph-1")}
          </p>
          <h2
            {...attrs(
              "film.heading-1",
              "text-4xl font-bold mb-3 home-hero-section-1-title-1",
            )}
            data-i18n="film.heading-1"
          >
            {text("film.heading-1")}
          </h2>
          <p
            {...attrs(
              "film.paragraph-2",
              "text-lg mb-10 max-w-2xl home-hero-section-1-text-2",
            )}
            data-i18n="film.paragraph-2"
          >
            {text("film.paragraph-2")}
          </p>
          <div className="relative w-full rounded-2xl overflow-hidden film-section-1-box-1">
            {videoLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              Loading video…
            </div>
          )}

          {videoError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <p>Unable to load the video.</p>
              <button type="button" onClick={retryVideo}>
                Try again
              </button>
            </div>
          )}

          {!videoLoading && !videoError && !featuredVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              No featured video has been published yet.
            </div>
          )}

          {featuredVideo && videoEmbedUrl && !featurePlaying && (
            <button
              type="button"
              className="absolute inset-0 w-full h-full overflow-hidden"
              onClick={() => setFeaturePlaying(true)}
              aria-label={label(
                `Play ${videoTitle}`,
                `播放 ${videoTitle}`,
              )}
            >
              {videoThumbnail && (
                <img
                  src={videoThumbnail}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Darken the thumbnail slightly so the text is readable. */}
              <div className="absolute inset-0 bg-black/35" />

              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/60">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="white"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>

                <p className="max-w-2xl text-center text-lg font-semibold text-white md:text-2xl">
                  {videoTitle}
                </p>
              </div>
            </button>
          )}
          </div>
        </div>
      </section>

      {/* programs */}

      <MinistryCards />

      {/* testimonies-preview */}

      <section
        id="testimonies"
        className="transition-colors duration-300 testimonies-preview film-section-1"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p
                {...attrs(
                  "testimonies-preview.paragraph-1",
                  "text-xs font-semibold tracking-widest uppercase mb-2 home-hero-section-1-text-1",
                )}
                data-i18n="testimonies-preview.paragraph-1"
              >
                {text("testimonies-preview.paragraph-1")}
              </p>
              <h2
                {...attrs(
                  "testimonies-preview.heading-1",
                  "text-4xl font-bold home-hero-section-1-title-1",
                )}
                data-i18n="testimonies-preview.heading-1"
              >
                {text("testimonies-preview.heading-1")}
              </h2>
            </div>
            <AppLink
              {...attrs(
                "testimonies-preview.link-1",
                "text-sm font-semibold transition-opacity hover:opacity-70 film-section-1-link-1",
              )}
              href="testimonies.html"
              data-i18n="testimonies-preview.link-1"
            >
              {text("testimonies-preview.link-1")}
            </AppLink>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
              <p
                {...attrs(
                  "testimonies-preview.paragraph-2",
                  "flex-1 text-base italic leading-relaxed film-section-1-text-1",
                )}
                data-i18n="testimonies-preview.paragraph-2"
              >
                {text("testimonies-preview.paragraph-2")}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t film-section-1-box-5">
                <img
                  {...attrs(
                    "testimonies-preview.image-1",
                    "w-10 h-10 rounded-full object-cover shrink-0",
                  )}
                  src={asset("assets/images/photo-07.jpg")}
                  decoding="async"
                  loading="lazy"
                  data-i18n="testimonies-preview.image-1"
                />
                <div>
                  <p
                    {...attrs(
                      "testimonies-preview.paragraph-3",
                      "text-sm font-semibold film-section-1-text-2",
                    )}
                    data-i18n="testimonies-preview.paragraph-3"
                  >
                    {text("testimonies-preview.paragraph-3")}
                  </p>
                  <p
                    {...attrs(
                      "testimonies-preview.paragraph-4",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="testimonies-preview.paragraph-4"
                  >
                    {text("testimonies-preview.paragraph-4")}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
              <p
                {...attrs(
                  "testimonies-preview.paragraph-5",
                  "flex-1 text-base italic leading-relaxed film-section-1-text-1",
                )}
                data-i18n="testimonies-preview.paragraph-5"
              >
                {text("testimonies-preview.paragraph-5")}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t film-section-1-box-5">
                <img
                  {...attrs(
                    "testimonies-preview.image-2",
                    "w-10 h-10 rounded-full object-cover shrink-0",
                  )}
                  src={asset("assets/images/photo-08.jpg")}
                  decoding="async"
                  loading="lazy"
                  data-i18n="testimonies-preview.image-2"
                />
                <div>
                  <p
                    {...attrs(
                      "testimonies-preview.paragraph-6",
                      "text-sm font-semibold film-section-1-text-2",
                    )}
                    data-i18n="testimonies-preview.paragraph-6"
                  >
                    {text("testimonies-preview.paragraph-6")}
                  </p>
                  <p
                    {...attrs(
                      "testimonies-preview.paragraph-7",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="testimonies-preview.paragraph-7"
                  >
                    {text("testimonies-preview.paragraph-7")}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-6 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
              <p
                {...attrs(
                  "testimonies-preview.paragraph-8",
                  "flex-1 text-base italic leading-relaxed film-section-1-text-1",
                )}
                data-i18n="testimonies-preview.paragraph-8"
              >
                {text("testimonies-preview.paragraph-8")}
              </p>
              <div className="flex items-center gap-3 pt-2 border-t film-section-1-box-5">
                <img
                  {...attrs(
                    "testimonies-preview.image-3",
                    "w-10 h-10 rounded-full object-cover shrink-0",
                  )}
                  src={asset("assets/images/photo-09.jpg")}
                  decoding="async"
                  loading="lazy"
                  data-i18n="testimonies-preview.image-3"
                />
                <div>
                  <p
                    {...attrs(
                      "testimonies-preview.paragraph-9",
                      "text-sm font-semibold film-section-1-text-2",
                    )}
                    data-i18n="testimonies-preview.paragraph-9"
                  >
                    {text("testimonies-preview.paragraph-9")}
                  </p>
                  <p
                    {...attrs(
                      "testimonies-preview.paragraph-10",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="testimonies-preview.paragraph-10"
                  >
                    {text("testimonies-preview.paragraph-10")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <CommunityBoard />

      {/* missions */}

      <section className="transition-colors duration-300 missions missions-section-1">
        <div className="max-w-6xl mx-auto px-6">
          <p
            {...attrs(
              "missions.paragraph-1",
              "text-xs font-semibold tracking-widest uppercase mb-2 home-hero-section-1-text-1",
            )}
            data-i18n="missions.paragraph-1"
          >
            {text("missions.paragraph-1")}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2
                {...attrs(
                  "missions.heading-1",
                  "text-4xl font-bold home-hero-section-1-title-1",
                )}
                data-i18n="missions.heading-1"
              >
                {text("missions.heading-1")}
              </h2>
              <p
                {...attrs(
                  "missions.paragraph-2",
                  "mt-2 text-base home-hero-section-1-text-2",
                )}
                data-i18n="missions.paragraph-2"
              >
                {text("missions.paragraph-2")}
              </p>
            </div>
            <AppLink
              {...attrs(
                "missions.link-1",
                "shrink-0 px-5 py-2.5 rounded text-sm font-semibold transition-opacity hover:opacity-80 programs-section-1-button-1",
              )}
              href="contact.html"
              data-i18n="missions.link-1"
            >
              {text("missions.link-1")}
            </AppLink>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
              <div className="text-4xl">{"🇧🇩"}</div>
              <div>
                <p
                  {...attrs(
                    "missions.paragraph-3",
                    "font-bold text-base film-section-1-text-2",
                  )}
                  data-i18n="missions.paragraph-3"
                >
                  {text("missions.paragraph-3")}
                </p>
                <p
                  {...attrs(
                    "missions.paragraph-4",
                    "text-sm mt-0.5 home-hero-section-1-text-2",
                  )}
                  data-i18n="missions.paragraph-4"
                >
                  {text("missions.paragraph-4")}
                </p>
              </div>
              <span
                {...attrs(
                  "missions.label-1",
                  "self-start text-xs font-semibold px-2.5 py-0.5 rounded-full missions-section-1-label-1",
                )}
                data-i18n="missions.label-1"
              >
                {text("missions.label-1")}
              </span>
            </div>
            <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
              <div className="text-4xl">{"🇳🇦"}</div>
              <div>
                <p
                  {...attrs(
                    "missions.paragraph-5",
                    "font-bold text-base film-section-1-text-2",
                  )}
                  data-i18n="missions.paragraph-5"
                >
                  {text("missions.paragraph-5")}
                </p>
                <p
                  {...attrs(
                    "missions.paragraph-6",
                    "text-sm mt-0.5 home-hero-section-1-text-2",
                  )}
                  data-i18n="missions.paragraph-6"
                >
                  {text("missions.paragraph-6")}
                </p>
              </div>
              <span
                {...attrs(
                  "missions.label-2",
                  "self-start text-xs font-semibold px-2.5 py-0.5 rounded-full missions-section-1-label-1",
                )}
                data-i18n="missions.label-2"
              >
                {text("missions.label-2")}
              </span>
            </div>
            <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
              <div className="text-4xl">{"🇹🇼"}</div>
              <div>
                <p
                  {...attrs(
                    "missions.paragraph-7",
                    "font-bold text-base film-section-1-text-2",
                  )}
                  data-i18n="missions.paragraph-7"
                >
                  {text("missions.paragraph-7")}
                </p>
                <p
                  {...attrs(
                    "missions.paragraph-8",
                    "text-sm mt-0.5 home-hero-section-1-text-2",
                  )}
                  data-i18n="missions.paragraph-8"
                >
                  {text("missions.paragraph-8")}
                </p>
              </div>
              <span
                {...attrs(
                  "missions.label-3",
                  "self-start text-xs font-semibold px-2.5 py-0.5 rounded-full missions-section-1-label-1",
                )}
                data-i18n="missions.label-3"
              >
                {text("missions.label-3")}
              </span>
            </div>
            <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
              <div className="text-4xl">{"🌏"}</div>
              <div>
                <p
                  {...attrs(
                    "missions.paragraph-9",
                    "font-bold text-base film-section-1-text-2",
                  )}
                  data-i18n="missions.paragraph-9"
                >
                  {text("missions.paragraph-9")}
                </p>
                <p
                  {...attrs(
                    "missions.paragraph-10",
                    "text-sm mt-0.5 home-hero-section-1-text-2",
                  )}
                  data-i18n="missions.paragraph-10"
                >
                  {text("missions.paragraph-10")}
                </p>
              </div>
              <span
                {...attrs(
                  "missions.label-4",
                  "self-start text-xs font-semibold px-2.5 py-0.5 rounded-full missions-section-1-label-1",
                )}
                data-i18n="missions.label-4"
              >
                {text("missions.label-4")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* get-involved */}

      <section
        id="donate"
        className="relative overflow-hidden get-involved get-involved-section-1"
      >
        <div className="absolute inset-0 opacity-5 get-involved-section-1-box-1"></div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2
            {...attrs(
              "get-involved.heading-1",
              "text-4xl font-bold mb-4 get-involved-section-1-heading-1",
            )}
            data-i18n="get-involved.heading-1"
          >
            {text("get-involved.heading-1")}
          </h2>
          <p
            {...attrs(
              "get-involved.paragraph-1",
              "text-lg mb-10 opacity-80 get-involved-section-1-text-1",
            )}
            data-i18n="get-involved.paragraph-1"
          >
            {text("get-involved.paragraph-1")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AppLink
              {...attrs(
                "get-involved.link-1",
                "px-8 py-3 font-semibold rounded transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 get-involved-section-1-link-1",
              )}
              href="contact.html"
              data-i18n="get-involved.link-1"
            >
              {text("get-involved.link-1")}
            </AppLink>
            <AppLink
              {...attrs(
                "get-involved.link-2",
                "px-8 py-3 font-semibold rounded border-2 transition-all duration-200 hover:bg-white/10 get-involved-section-1-link-2",
              )}
              href="contact.html"
              data-i18n="get-involved.link-2"
            >
              {text("get-involved.link-2")}
            </AppLink>
          </div>
        </div>
      </section>
    </>
  )
}
