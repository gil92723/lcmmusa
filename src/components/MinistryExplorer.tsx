import { useEffect, type ReactNode } from "react"
import { Link, useLocation, useSearchParams } from "react-router"
import { usePageCopy } from "@/lib/ui"
import HealthMinistry from "@/components/HealthMinistry"

const ministries = [
  {
    id: "health",
    number: 1,
    icon: "🏥",
    en: "Health & Bioethics",
    zh: "健康與生命倫理",
  },
  {
    id: "missionary-care",
    number: 2,
    icon: "🤲",
    en: "Missionary Care",
    zh: "宣教士關懷",
  },
  {
    id: "next-gen",
    number: 3,
    icon: "🎓",
    en: "Next Generation",
    zh: "第二代培育",
  },
  {
    id: "overseas",
    number: 4,
    icon: "🌏",
    en: "Overseas Missions",
    zh: "海外事工",
  },
  {
    id: "starlight",
    number: 5,
    icon: "⭐",
    en: "Tribal Starlight",
    zh: "部落星光",
  },
  {
    id: "other",
    number: 6,
    icon: "📖",
    en: "Other Ministries",
    zh: "其他事工",
  },
]

const tabs = ministries.slice(0, 5)

// Shared by the homepage and Ministries page.
export function MinistryCards() {
  const { text, attrs, label } = usePageCopy("ministries")

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ministries.map((ministry) => (
        <Link
          key={ministry.id}
          to={`/ministries?tab=${ministry.id}`}
          className="programs-section-1-box-1 flex flex-col gap-4 rounded-xl p-6 transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span className="text-4xl" aria-hidden="true">
            {ministry.icon}
          </span>

          <h3
            {...attrs(
              `programs.subheading-${ministry.number}`,
              "text-lg font-bold home-hero-section-1-title-1",
            )}
          >
            {text(`programs.subheading-${ministry.number}`)}
          </h3>

          <p
            {...attrs(
              `programs.paragraph-${ministry.number}`,
              "text-sm leading-relaxed home-hero-section-1-text-2",
            )}
          >
            {text(`programs.paragraph-${ministry.number}`)}
          </p>

          <span className="mt-auto pt-2 text-sm font-semibold home-hero-section-1-text-1">
            {label("Learn more →", "了解更多 →")}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default function MinistryExplorer({
  children,
}: {
  children?: ReactNode
}) {
  const { text, attrs, label } = usePageCopy("ministries")
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  const requestedTab = searchParams.get("tab")
  const activeTab =
    tabs.find((tab) => tab.id === requestedTab)?.id ?? "health"

  // Scroll after the selected content has rendered.
  // This also handles incoming homepage links and browser Back/Forward.
  useEffect(() => {
    if (!ministries.some((item) => item.id === requestedTab)) return

    const frame = requestAnimationFrame(() => {
      const target =
        requestedTab === "other"
          ? "other-ministries"
          : "ministry-details"

      document.getElementById(target)?.scrollIntoView({
        block: "start",
        behavior: "instant",
      })
    })

    return () => cancelAnimationFrame(frame)
  }, [requestedTab, location.key])

  function selectTab(id: string) {
    const next = new URLSearchParams(searchParams)
    next.set("tab", id)
    setSearchParams(next)
  }

  return (
    <>
      <section className="programs mission-vision-section-1">
        <div className="mx-auto max-w-6xl px-6">
          <MinistryCards />
        </div>
      </section>

      <section
        id="ministry-details"
        className="scroll-mt-28 py-12"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div
            role="tablist"
            aria-label={label("Ministry categories", "事工類別")}
            className="mb-8 flex gap-2 overflow-x-auto border-b border-current/20 pb-3"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                id={`ministry-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`ministry-panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                onClick={() => selectTab(tab.id)}
                onKeyDown={(event) => {
                  let nextIndex = index

                  if (event.key === "ArrowRight") {
                    nextIndex = (index + 1) % tabs.length
                  } else if (event.key === "ArrowLeft") {
                    nextIndex =
                      (index - 1 + tabs.length) % tabs.length
                  } else if (event.key === "Home") {
                    nextIndex = 0
                  } else if (event.key === "End") {
                    nextIndex = tabs.length - 1
                  } else {
                    return
                  }

                  event.preventDefault()
                  const nextTab = tabs[nextIndex]
                  selectTab(nextTab.id)
                  document
                    .getElementById(`ministry-tab-${nextTab.id}`)
                    ?.focus()
                }}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "border-teal-800 bg-teal-800 text-white"
                    : "border-current/20 hover:bg-teal-500/10"
                }`}
              >
                {label(tab.en, tab.zh)}
              </button>
            ))}
          </div>
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`ministry-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`ministry-tab-${tab.id}`}
            hidden={activeTab !== tab.id}
            tabIndex={0}
          >
            {tab.id === "health" ? (
            activeTab === "health" && <HealthMinistry />
            ) : (
            <>
                <div className="mx-auto max-w-6xl px-6">
                <h2
                    {...attrs(
                    `programs.subheading-${tab.number}`,
                    "mb-5 text-3xl font-bold home-hero-section-1-title-1",
                    )}
                >
                    {text(`programs.subheading-${tab.number}`)}
                </h2>

                <p
                    {...attrs(
                    `programs.paragraph-${tab.number}`,
                    "max-w-3xl whitespace-pre-line text-lg leading-relaxed home-hero-section-1-text-2",
                    )}
                >
                    {text(`programs.paragraph-${tab.number}`)}
                </p>
                </div>

                {tab.id === "overseas" && activeTab === tab.id && children}
            </>
            )}
          </div>
        ))}
      </section>

      <section
        id="other-ministries"
        className="scroll-mt-28 py-12"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2
            {...attrs(
              "programs.subheading-6",
              "mb-5 text-3xl font-bold home-hero-section-1-title-1",
            )}
          >
            {text("programs.subheading-6")}
          </h2>

          <p
            {...attrs(
              "programs.paragraph-6",
              "max-w-3xl whitespace-pre-line text-lg leading-relaxed home-hero-section-1-text-2",
            )}
          >
            {text("programs.paragraph-6")}
          </p>
        </div>
      </section>
    </>
  )
}