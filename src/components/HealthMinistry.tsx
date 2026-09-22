import type { SanityImageSource } from "@sanity/image-url"
import { usePageCopy } from "@/lib/ui"
import useSanityQuery from "@/sanity/useSanityQuery"
import { imageUrl } from "@/sanity/posts"
import { youtubeEmbedUrl } from "@/sanity/videos"

type Entry = {
  _id: string
  titleEn?: string
  titleZh?: string
  descriptionEn?: string
  descriptionZh?: string
  poster?: SanityImageSource
  startsAt?: string
  date?: string
  locationEn?: string
  locationZh?: string
  registrationUrl?: string
  speakerEn?: string
  speakerZh?: string
  videoUrl?: string
}

type HealthContent = {
  video: {
    _id: string
    titleEn?: string
    titleZh?: string
    youtubeUrl: string
  } | null
  events: Entry[]
  talks: Entry[]
}

const HEALTH_QUERY = `{
  "video": *[
    _type == "mediaVideo" &&
    ministryOverview == "health" &&
    isActive == true &&
    defined(youtubeUrl)
  ] | order(sortOrder asc, _createdAt desc)[0]{
    _id, titleEn, titleZh, youtubeUrl
  },

  "events": *[
    _type == "upcomingEvent" &&
    ministry == "health" &&
    dateTime(endsAt) > dateTime(now())
  ] | order(startsAt asc){
    _id,
    titleEn, titleZh,
    descriptionEn, descriptionZh,
    poster, startsAt,
    locationEn, locationZh,
    registrationUrl
  },

  "talks": *[
    _type == "pastTalk" &&
    ministry == "health"
  ] | order(date desc, _createdAt desc){
    _id,
    titleEn, titleZh,
    descriptionEn, descriptionZh,
    poster, date,
    speakerEn, speakerZh,
    videoUrl
  }
}`

export default function HealthMinistry() {
  const { text, label, lang } = usePageCopy("ministries")
  const { data, loading, error, retry } =
    useSanityQuery<HealthContent>(HEALTH_QUERY)

  function localized(en?: string, zh?: string) {
    return lang === "zh" ? zh || en || "" : en || zh || ""
  }

  function formatDate(value: string, isEvent: boolean) {
    // Events use Pacific time. Archive dates have no time of day.
    const date = new Date(
      isEvent ? value : `${value}T12:00:00Z`,
    )

    return new Intl.DateTimeFormat(
      lang === "zh" ? "zh-TW" : "en-US",
      isEvent
        ? {
            timeZone: "America/Los_Angeles",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZoneName: "short",
          }
        : {
            timeZone: "UTC",
            year: "numeric",
            month: "short",
            day: "numeric",
          },
    ).format(date)
  }

  const video = data?.video
  const embedUrl = video
    ? youtubeEmbedUrl(video.youtubeUrl)
    : null

  function renderEntries(entries: Entry[], isEvent: boolean) {
    return (
      <div className="flex flex-col gap-6">
        {entries.map((entry) => {
          const title =
            localized(entry.titleEn, entry.titleZh) ||
            label("Untitled", "未命名")

          const description = localized(
            entry.descriptionEn,
            entry.descriptionZh,
          )

          const detail = isEvent
            ? localized(entry.locationEn, entry.locationZh)
            : localized(entry.speakerEn, entry.speakerZh)

          const date = isEvent ? entry.startsAt : entry.date
          const posterUrl = imageUrl(entry.poster, 1200)
          const link = isEvent
            ? entry.registrationUrl
            : entry.videoUrl

          return (
            <article
              key={entry._id}
              className={`programs-section-1-box-1 overflow-hidden rounded-2xl ${
                isEvent ? "upcoming-event-card" : ""
              }`}
            >
              {isEvent && posterUrl && (
                <a
                  href={posterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label(
                    `Open poster: ${title}`,
                    `開啟海報：${title}`,
                  )}
                >
                  <img
                    src={posterUrl}
                    alt={label(
                      `Poster for ${title}`,
                      `${title}海報`,
                    )}
                    loading="lazy"
                    className="max-h-[45rem] w-full object-contain"
                  />
                </a>
              )}

              <div className="space-y-4 p-6">
                <h4 className="text-xl font-bold home-hero-section-1-title-1">
                  {title}
                </h4>

                {date && (
                  <p className="text-sm home-hero-section-1-text-2">
                    <time dateTime={date}>
                      {formatDate(date, isEvent)}
                    </time>
                  </p>
                )}

                {detail && (
                  <p className="text-sm home-hero-section-1-text-2">
                    {detail}
                  </p>
                )}

                {description && (
                  isEvent ? (
                    <p className="whitespace-pre-line leading-relaxed home-hero-section-1-text-2">
                      {description}
                    </p>
                  ) : (
                    <details className="text-sm">
                      <summary className="cursor-pointer font-semibold home-hero-section-1-text-1 focus-visible:outline-2 focus-visible:outline-offset-4">
                        {label("Read description", "查看活動介紹")}
                      </summary>

                      <p className="mt-3 whitespace-pre-line leading-relaxed home-hero-section-1-text-2">
                        {description}
                      </p>
                    </details>
                  )
                )}

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold home-hero-section-1-text-1">
                {!isEvent && posterUrl && (
                  <a
                    href={posterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    {label("View full poster ↗", "查看完整海報 ↗")}
                  </a>
                )}

                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    {isEvent
                      ? label("Event details / Register ↗", "活動詳情／報名 ↗")
                      : label("Watch recording ↗", "觀看錄影 ↗")}
                  </a>
                )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6">
      <div
        className={`grid items-start gap-8 ${
          video && embedUrl ? "lg:grid-cols-2" : ""
        }`}
      >
      <header>
        <h2 className="mb-5 text-3xl font-bold home-hero-section-1-title-1">
          {text("programs.subheading-1")}
        </h2>

        <div className="max-w-3xl space-y-4 text-lg leading-relaxed home-hero-section-1-text-2">
          <p>
            {label(
              "We partner with churches in the Bay Area to host health talks and disease screening activities. These events share important updates on health and disease, address individual questions about medical care and medications, and help churches build strong relationships with their communities.",
              "在灣區和教會配搭，共同舉辦醫療講座和疾病篩檢活動，介紹重要的疾病新知，解答個人的醫藥問題，幫助教會與社區建立良好的關係。",
            )}
          </p>

          <p>
            {label(
              "We also hold regular bioethics seminars, bringing together Christian professionals in healthcare, theology, the life sciences, and law to explore perspectives that remain faithful to biblical truth while addressing the challenges of our time.",
              "定期舉辦生命倫理研討會，結合基督徒醫護，神學，生科及法律等專業，探討不偏離聖經真理，又能配合時代的立場。",
            )}
          </p>
        </div>
      </header>
      {video && embedUrl && (
        <section aria-label={label("Ministry introduction", "事工介紹")}>
          <div className="aspect-video overflow-hidden rounded-2xl">
            <iframe
              key={video.youtubeUrl}
              src={embedUrl}
              title={
                localized(video.titleEn, video.titleZh) ||
                label("Ministry introduction", "事工介紹")
              }
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}
      </div>
      {loading && (
        <p role="status">
          {label("Loading…", "載入中……")}
        </p>
      )}

      {error && (
        <div role="alert">
          <p>
            {label(
              "Unable to load ministry content.",
              "目前無法載入事工內容。",
            )}
          </p>
          <button
            type="button"
            onClick={retry}
            className="mt-3 underline"
          >
            {label("Try again", "重試")}
          </button>
        </div>
      )}

      <section aria-labelledby="health-events-heading">
        <h3
          id="health-events-heading"
          className="mb-6 text-2xl font-bold home-hero-section-1-title-1"
        >
          {label("Upcoming Events", "近期活動")}
        </h3>

        {data && !loading && !error && (
          data.events.length > 0
            ? renderEntries(data.events, true)
            : <p>{label(
                "No upcoming events at the moment.",
                "目前暫無即將舉行的活動。",
              )}</p>
        )}
      </section>

      <section aria-labelledby="health-talks-heading">
        <h3
          id="health-talks-heading"
          className="mb-6 text-2xl font-bold home-hero-section-1-title-1"
        >
          {label("Past Talks", "歷年講座")}
        </h3>

        {data && !loading && !error && (
          data.talks.length > 0
            ? renderEntries(data.talks, false)
            : <p>{label(
                "Talks will be added here as they become available.",
                "講座資料將陸續新增。",
              )}</p>
        )}
      </section>
    </div>
  )
}