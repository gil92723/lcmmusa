import type { SanityImageSource } from "@sanity/image-url"
import { usePageCopy } from "@/lib/ui"
import useSanityQuery from "@/sanity/useSanityQuery"
import { imageUrl } from "@/sanity/posts"
import { youtubeEmbedUrl } from "@/sanity/videos"

type Video = {
  _id: string
  titleEn?: string
  titleZh?: string
  youtubeUrl: string
}

type Missionary = {
  _id: string
  nameEn?: string
  nameZh?: string
  photo?: SanityImageSource
  descriptionEn?: string
  descriptionZh?: string
  testimonyLinks?: {
    _key: string
    labelEn?: string
    labelZh?: string
    url: string
  }[]
}

type Event = {
  _id: string
  titleEn?: string
  titleZh?: string
  descriptionEn?: string
  descriptionZh?: string
  poster?: SanityImageSource
  startsAt: string
  locationEn?: string
  locationZh?: string
  registrationUrl?: string
}

type MissionaryCareContent = {
  introductionVideo: Video | null
  currentVideo: Video | null
  events: Event[]
  retired: Missionary[]
  current: Missionary[]
}

// Add the actual ministry history here when ready.
// Separate paragraphs with \n\n.
const historyCopy = {
  en: "In an era when Taiwan's medical resources were extremely scarce, a group of medical missionaries from the US and Canada obeyed God's call and came to distant and unfamiliar Taiwan. They left their elderly parents, taking their young families with them, learning a new language, and adapting to a completely different culture. There, they dedicated their lives to serving the vulnerable, establishing hospitals, spreading the gospel, and saving souls. They gave up comfortable lives, living in poverty, dedicating the best years of their lives to Taiwan. In their old age, not wanting to be a burden on the Taiwanese people, they retired and returned home, but their homeland had become unfamiliar.\n\nThe North American Luke Medical Missionary Society repeatedly reflected on \"What can we do for them?\" and thus launched a ministry to care for retired medical missionaries in 2012. To date, we have contacted 19 of these missionaries retired in the US, Canada, and Norway, hoping to build a bridge of inheritance through this ministry, sharing their stories and following in their beautiful footsteps. As their health declines and medical care becomes an increasingly heavy financial burden, we hope to provide some assistance.\n\nThese faithful and devoted retired missionaries never expect any reward or financial assistance, but most of them are elderly and do need help in some ways. North American Luke contacts the missionaries via email, and staff conduct home visits to learn about their lives, share their experiences, and gain a deeper understanding of their needs. North American Luke, in conjunction with the church, provides assistance within its capabilities. Every year, we hold \"Love in the Spiritual Forest,\" \"Homeland Sentiments,\" and \"Musical Testimony Meetings,\" using music and screenings of missionary stories to inspire every fellow missionary on their journey. We also invite retired missionaries to speak at concerts and retreats, and, in accordance with Taiwanese custom, give them holiday gifts during festivals.",
  zh: "在台灣醫療資源極其匱乏的年代，一群來自美加的醫護宣教士順服神的呼召，來到遙遠陌生的台灣。他們離開年邁的父母，帶著年幼的家小，學習陌生的語言，適應截然不同的文化。在那裡他們傾其一生服事弱小，建立醫院，宣揚福音，救人靈魂。他們捨棄優裕的生活，過清貧的日子，把一生最精華的歲月都奉獻給台灣。年紀老邁時，他們不願成為台灣人的負擔，告老返鄉，但故鄉已變得陌生。\n\n北美路加醫療傳道會屢屢反思\"我們能為他們做些什麼？\"，於是在2012展開關懷退休醫護宣教士事工。迄今我們聯絡上19位在美加及挪威退休的這些宣教士，希望 透過這個事工築建一道傳承的橋樑，分享他們的故事，跟隨他們佳美的腳蹤。當他們身體逐漸衰老，醫護需要日漸成為經濟上的沈重負擔時，我們希望多少能提供一些幫補。\n\n這些忠心愛主的退休款宣教士，從來沒有期待得到任何報償或資助，但他們大多年紀老邁， 確實有些方面需要幫助。北美路加與宣教士們電郵聯絡，同工進行居家拜訪，得知他們近况 ，分享他們的生活，深入了解他們的需要，北美路加結合教會在能力範圍内提供協助。我們每年舉辨杏林爱，故鄉情，音樂見證會，經過音樂及播放宣教士故事影片，期待激勵每一位奔跑天路的同伴們。我們也邀請退休宣教士親臨現場做音樂會及退修會講員，逢年過節則隨照台灣習俗致贈年節禮金。",
}

const QUERY = `{
  "introductionVideo": *[
    _type == "mediaVideo" &&
    ministryOverview == "missionary-care" &&
    isActive == true &&
    defined(youtubeUrl)
  ] | order(sortOrder asc, _createdAt desc)[0]{
    _id, titleEn, titleZh, youtubeUrl
  },

  "currentVideo": *[
    _type == "mediaVideo" &&
    missionaryCareCurrent == true &&
    isActive == true &&
    defined(youtubeUrl)
  ] | order(sortOrder asc, _createdAt desc)[0]{
    _id, titleEn, titleZh, youtubeUrl
  },

  "events": *[
    _type == "upcomingEvent" &&
    ministry == "missionary-care" &&
    dateTime(endsAt) > dateTime(now())
  ] | order(startsAt asc){
    _id,
    titleEn, titleZh,
    descriptionEn, descriptionZh,
    poster, startsAt,
    locationEn, locationZh,
    registrationUrl
  },

  "retired": *[
    _type == "missionaryProfile" &&
    category == "retired" &&
    isActive == true
  ] | order(sortOrder asc, _createdAt desc){
    _id,
    nameEn, nameZh, photo,
    descriptionEn, descriptionZh,
    testimonyLinks[]{_key, labelEn, labelZh, url}
  },

  "current": *[
    _type == "missionaryProfile" &&
    category == "current" &&
    isActive == true
  ] | order(sortOrder asc, _createdAt desc){
    _id,
    nameEn, nameZh, photo,
    descriptionEn, descriptionZh,
    testimonyLinks[]{_key, labelEn, labelZh, url}
  }
}`

export default function MissionaryCare() {
  const { text, label, lang } = usePageCopy("ministries")
  const { data, loading, error, retry } =
    useSanityQuery<MissionaryCareContent>(QUERY)

  function localized(en?: string, zh?: string) {
    return lang === "zh" ? zh || en || "" : en || zh || ""
  }

  const history = localized(historyCopy.en, historyCopy.zh)

  function renderVideo(video: Video | null | undefined) {
    if (!video) return null

    const src = youtubeEmbedUrl(video.youtubeUrl)
    if (!src) return null

    return (
      <div className="aspect-video overflow-hidden rounded-2xl">
        <iframe
          key={video.youtubeUrl}
          src={src}
          title={
            localized(video.titleEn, video.titleZh) ||
            label("Ministry video", "事工影片")
          }
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  function renderMissionaries(profiles: Missionary[]) {
    if (profiles.length === 0) {
      return (
        <p className="home-hero-section-1-text-2">
          {label(
            "Missionary profiles will be added here.",
            "宣教士介紹將陸續新增。",
          )}
        </p>
      )
    }

    return (
      <div className="flex flex-col gap-6">
        {profiles.map((profile) => {
          const name = localized(profile.nameEn, profile.nameZh)
          const photo = imageUrl(profile.photo, 900)

          return (
            <article
              key={profile._id}
              className={`programs-section-1-box-1 missionary-profile ${
                photo ? "missionary-profile--with-photo" : ""
              }`}
            >
              {photo && (
                <div className="missionary-profile__photo">
                  <img
                    src={photo}
                    alt={name}
                    loading="lazy"
                  />
                </div>
              )}

              <div className="missionary-profile__content space-y-4">
                <h4 className="text-xl font-bold home-hero-section-1-title-1">
                  {name}
                </h4>

                <p className="whitespace-pre-line leading-relaxed home-hero-section-1-text-2">
                  {localized(
                    profile.descriptionEn,
                    profile.descriptionZh,
                  )}
                </p>

                {!!profile.testimonyLinks?.length && (
                  <ul className="space-y-3">
                    {profile.testimonyLinks.map((link) => (
                      <li key={link._key}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-4 home-hero-section-1-text-1"
                        >
                          {localized(link.labelEn, link.labelZh) ||
                            label("Testimony", "見證分享")}
                          {" ↗"}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          )
        })}
      </div>
    )
  }
  function jumpToSection(id: string) {
    const target = document.getElementById(id)
    if (!target) return

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    target.focus({ preventScroll: true })
    target.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "start",
    })
  }
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-6">
      {/* Introduction */}
      <header>
        <h2 className="mb-5 text-3xl font-bold home-hero-section-1-title-1">
          {text("programs.subheading-2")}
        </h2>

        <div className="max-w-3xl space-y-4 text-lg leading-relaxed home-hero-section-1-text-2">
          <p>
            {label(
              "We walk alongside retired medical missionaries in gratitude for their lifelong dedication.",
              "我們陪伴並支持已退休的醫護宣教士，感謝他們一生的委身。",
            )}
          </p>

          <p>
            {label(
              "We also provide spiritual, emotional, and practical support for medical missionaries who continue to serve on the field.",
              "我們也為仍在工場服事的醫護宣教士提供靈性、情感及實際需要上的支援。",
            )}
          </p>
        </div>
      </header>
      <nav
        aria-label={label("Missionary Care sections", "宣教士關懷內容")}
        className="flex flex-wrap gap-3"
      >
        <button
          type="button"
          onClick={() => jumpToSection("retired-missionaries")}
          className="rounded-full border border-current/25 px-5 py-3 font-semibold transition-colors hover:bg-teal-500/10"
        >
          {label("Retired Missionaries ↓", "退休宣教士 ↓")}
        </button>

        <button
          type="button"
          onClick={() => jumpToSection("current-missions")}
          className="rounded-full border border-current/25 px-5 py-3 font-semibold transition-colors hover:bg-teal-500/10"
        >
          {label("Current Missions ↓", "現役宣教事工 ↓")}
        </button>
      </nav>
      {loading && (
        <p role="status">{label("Loading…", "載入中……")}</p>
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

      {/* Introduction video */}
      {renderVideo(data?.introductionVideo)}

      {/* History */}
      {history && (
        <section aria-labelledby="missionary-history-heading">
          <h3
            id="missionary-history-heading"
            className="mb-6 text-2xl font-bold home-hero-section-1-title-1"
          >
            {label("Retired Medical Missionaries Connection, RMMC", "關懷退休醫護宣教士事工沿革")}
          </h3>

          <p className="max-w-3xl whitespace-pre-line leading-relaxed home-hero-section-1-text-2">
            {history}
          </p>
        </section>
      )}

      {/* Upcoming events */}
      <section aria-labelledby="missionary-events-heading">
        <h3
          id="missionary-events-heading"
          className="mb-6 text-2xl font-bold home-hero-section-1-title-1"
        >
          {label("Upcoming Events", "近期活動")}
        </h3>

        {data && !loading && !error && (
          data.events.length === 0 ? (
            <p>{label(
              "No upcoming events at the moment.",
              "目前暫無即將舉行的活動。",
            )}</p>
          ) : (
            <div className="grid items-start gap-6 md:grid-cols-2">
              {data.events.map((event) => {
                const title = localized(event.titleEn, event.titleZh)
                const poster = imageUrl(event.poster, 1200)
                const location = localized(
                  event.locationEn,
                  event.locationZh,
                )

                return (
                  <article
                    key={event._id}
                    className="upcoming-event-card programs-section-1-box-1 overflow-hidden rounded-2xl"
                  >
                    {poster && (
                      <a
                        href={poster}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label(
                          `Open poster: ${title}`,
                          `開啟海報：${title}`,
                        )}
                      >
                        <img
                          src={poster}
                          alt={label(
                            `Poster for ${title}`,
                            `${title}海報`,
                          )}
                          loading="lazy"
                          className="max-h-[32rem] w-full object-contain"
                        />
                      </a>
                    )}

                    <div className="space-y-4 p-6">
                      <h4 className="text-xl font-bold home-hero-section-1-title-1">
                        {title}
                      </h4>

                      <p className="text-sm home-hero-section-1-text-2">
                        <time dateTime={event.startsAt}>
                          {new Intl.DateTimeFormat(
                            lang === "zh" ? "zh-TW" : "en-US",
                            {
                              timeZone: "America/Los_Angeles",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                              timeZoneName: "short",
                            },
                          ).format(new Date(event.startsAt))}
                        </time>
                      </p>

                      {location && (
                        <p className="home-hero-section-1-text-2">
                          {location}
                        </p>
                      )}

                      <p className="whitespace-pre-line leading-relaxed home-hero-section-1-text-2">
                        {localized(
                          event.descriptionEn,
                          event.descriptionZh,
                        )}
                      </p>

                      {event.registrationUrl && (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block font-semibold underline underline-offset-4 home-hero-section-1-text-1"
                        >
                          {label(
                            "Event details / Register ↗",
                            "活動詳情／報名 ↗",
                          )}
                        </a>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )
        )}
      </section>

      {/* Retired missionaries */}
      <section
        id="retired-missionaries"
        tabIndex={-1}
        aria-labelledby="retired-missionaries-heading"
        className="scroll-mt-28"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3
            id="retired-missionaries-heading"
            tabIndex={-1}
            className="text-2xl font-bold home-hero-section-1-title-1"
          >
            {label("Retired Medical Missionaries", "退休醫護宣教士")}
          </h3>

          <button
            type="button"
            onClick={() => {
              const target = document.getElementById(
                "current-missionaries-heading",
              )
              if (!target) return

              const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
              ).matches

              target.focus({ preventScroll: true })
              target.scrollIntoView({
                behavior: reduceMotion ? "instant" : "smooth",
                block: "start",
              })
            }}
            className="text-sm font-semibold underline underline-offset-4 home-hero-section-1-text-1"
          >
            {label(
              "Jump to current missionaries ↓",
              "前往現役宣教士 ↓",
            )}
          </button>
        </div>

        {data && !loading && !error &&
          renderMissionaries(data.retired)}
      </section>
        
      <div
        id="current-missions"
        tabIndex={-1}
        className="scroll-mt-28"
      > 
      {/* Current missions video */}
      {data?.currentVideo && (
        <section aria-labelledby="current-missions-video-heading">
          <h3
            id="current-missions-video-heading"
            className="mb-6 text-2xl font-bold home-hero-section-1-title-1"
          >
            {label("Current Mission Work", "現役宣教事工")}
          </h3>

          {renderVideo(data.currentVideo)}
        </section>
      )}
      </div>

      {/* Currently supported missionaries */}
      <section aria-labelledby="current-missionaries-heading">
        <h3
          id="current-missionaries-heading"
          tabIndex={-1}
          className="mb-6 scroll-mt-28 text-2xl font-bold home-hero-section-1-title-1"
        >
          {label(
            "Currently Supported Medical Missionaries",
            "目前支持的醫護宣教士",
          )}
        </h3>

        {data && !loading && !error &&
          renderMissionaries(data.current)}
      </section>
    </div>
  )
}