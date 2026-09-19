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

export default function Testimonies() {
  const { text, attrs, label } = usePageCopy("testimonies")
  const [activeTab, setActiveTab] = useState("testimonies")
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  return (
    <>
      <div className="transition-colors duration-300 home-hero-section-1">
        {/* archive-hero */}
        <section className="archive-hero archive-hero-section-1">
          <div className="max-w-4xl mx-auto px-6 text-center pb-10">
            <p
              {...attrs(
                "archive-hero.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-4 about-hero-section-1-text-1",
              )}
              data-i18n="archive-hero.paragraph-1"
            >
              {text("archive-hero.paragraph-1")}
            </p>
            <h1
              {...attrs(
                "archive-hero.title-1",
                "text-5xl md:text-6xl font-bold mb-4 about-hero-section-1-title-1",
              )}
              data-i18n="archive-hero.title-1"
            >
              {text("archive-hero.title-1")}
            </h1>
            <p
              {...attrs(
                "archive-hero.paragraph-2",
                "text-base max-w-xl mx-auto archive-hero-section-1-text-1",
              )}
              data-i18n="archive-hero.paragraph-2"
            >
              {text("archive-hero.paragraph-2")}
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-6">
            <div
              {...attrs(
                "archive-hero.div-1",
                "flex overflow-x-auto gap-1 pb-0 archive-hero-section-1-box-1",
              )}
              role="tablist"
              data-i18n="archive-hero.div-1"
            >
              <button
                {...attrs(
                  "archive-hero.button-1",
                  "shrink-0 px-5 py-3 text-sm font-semibold rounded-t-lg transition-all duration-200 whitespace-nowrap archive-hero-section-1-button-1",
                )}
                data-tab="testimonies"
                role="tab"
                id="tab-testimonies"
                aria-controls="panel-testimonies"
                aria-selected={activeTab === "testimonies"}
                tabIndex={activeTab === "testimonies" ? 0 : -1}
                data-i18n="archive-hero.button-1"
                type="button"
                onClick={() => setActiveTab("testimonies")}
                onKeyDown={(event) => navigateTabs(event, setActiveTab)}
              >
                {text("archive-hero.button-1")}
              </button>
              <button
                {...attrs(
                  "archive-hero.button-2",
                  "shrink-0 px-5 py-3 text-sm font-semibold rounded-t-lg transition-all duration-200 whitespace-nowrap archive-hero-section-1-button-2",
                )}
                data-tab="bioethics"
                role="tab"
                id="tab-bioethics"
                aria-controls="panel-bioethics"
                aria-selected={activeTab === "bioethics"}
                tabIndex={activeTab === "bioethics" ? 0 : -1}
                data-i18n="archive-hero.button-2"
                type="button"
                onClick={() => setActiveTab("bioethics")}
                onKeyDown={(event) => navigateTabs(event, setActiveTab)}
              >
                {text("archive-hero.button-2")}
              </button>
              <button
                {...attrs(
                  "archive-hero.button-3",
                  "shrink-0 px-5 py-3 text-sm font-semibold rounded-t-lg transition-all duration-200 whitespace-nowrap archive-hero-section-1-button-2",
                )}
                data-tab="missionaries"
                role="tab"
                id="tab-missionaries"
                aria-controls="panel-missionaries"
                aria-selected={activeTab === "missionaries"}
                tabIndex={activeTab === "missionaries" ? 0 : -1}
                data-i18n="archive-hero.button-3"
                type="button"
                onClick={() => setActiveTab("missionaries")}
                onKeyDown={(event) => navigateTabs(event, setActiveTab)}
              >
                {text("archive-hero.button-3")}
              </button>
              <button
                data-tab="msce"
                role="tab"
                id="tab-msce"
                aria-controls="panel-msce"
                aria-selected={activeTab === "msce"}
                tabIndex={activeTab === "msce" ? 0 : -1}
                className="shrink-0 px-5 py-3 text-sm font-semibold rounded-t-lg transition-all duration-200 whitespace-nowrap archive-hero-section-1-button-2"
                type="button"
                onClick={() => setActiveTab("msce")}
                onKeyDown={(event) => navigateTabs(event, setActiveTab)}
              >
                {"MSCE Stories"}
              </button>
              <button
                {...attrs(
                  "archive-hero.button-4",
                  "shrink-0 px-5 py-3 text-sm font-semibold rounded-t-lg transition-all duration-200 whitespace-nowrap archive-hero-section-1-button-2",
                )}
                data-tab="prayer"
                role="tab"
                id="tab-prayer"
                aria-controls="panel-prayer"
                aria-selected={activeTab === "prayer"}
                tabIndex={activeTab === "prayer" ? 0 : -1}
                data-i18n="archive-hero.button-4"
                type="button"
                onClick={() => setActiveTab("prayer")}
                onKeyDown={(event) => navigateTabs(event, setActiveTab)}
              >
                {text("archive-hero.button-4")}
              </button>
            </div>
          </div>
        </section>
        {/* archive-content */}
        <section className="archive-content archive-content-section-1">
          <div className="max-w-6xl mx-auto px-6">
            <div
              data-panel="testimonies"
              role="tabpanel"
              id="panel-testimonies"
              aria-labelledby="tab-testimonies"
              hidden={activeTab !== "testimonies"}
            >
              <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row mb-10 film-section-1-box-4">
                <div className="md:w-72 shrink-0">
                  <img
                    {...attrs(
                      "archive-content.image-1",
                      "w-full h-56 md:h-full object-cover",
                    )}
                    src={asset("assets/images/photo-07.jpg")}
                    decoding="async"
                    loading="lazy"
                    data-i18n="archive-content.image-1"
                  />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <p
                    {...attrs(
                      "archive-content.paragraph-1",
                      "text-xl md:text-2xl italic leading-relaxed mb-6 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-1"
                  >
                    {text("archive-content.paragraph-1")}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      {...attrs(
                        "archive-content.div-1",
                        "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold programs-section-1-box-2",
                      )}
                      data-i18n="archive-content.div-1"
                    >
                      {text("archive-content.div-1")}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-2",
                          "font-bold text-sm film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-2"
                      >
                        {text("archive-content.paragraph-2")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-3",
                          "text-xs home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-3"
                      >
                        {text("archive-content.paragraph-3")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-4",
                      "text-sm leading-relaxed mt-2 mb-4 home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-featured"]}
                    id="story-featured"
                    data-i18n="archive-content.paragraph-4"
                  >
                    {text("archive-content.paragraph-4")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-1",
                      "self-start text-sm font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="featured"
                    aria-expanded={!!expanded["story-featured"]}
                    aria-controls="story-featured"
                    data-i18n="archive-content.button-1"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-featured"]: !previous["story-featured"],
                      }))
                    }
                  >
                    {expanded["story-featured"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-1")}
                  </button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      {...attrs(
                        "archive-content.image-2",
                        "w-10 h-10 rounded-full object-cover shrink-0",
                      )}
                      src={asset("assets/images/photo-08.jpg")}
                      decoding="async"
                      loading="lazy"
                      data-i18n="archive-content.image-2"
                    />
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-5",
                          "font-bold text-sm leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-5"
                      >
                        {text("archive-content.paragraph-5")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-6",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-6"
                      >
                        {text("archive-content.paragraph-6")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-7",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-7"
                  >
                    {text("archive-content.paragraph-7")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-8",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-0"]}
                    id="story-t-0"
                    data-i18n="archive-content.paragraph-8"
                  >
                    {text("archive-content.paragraph-8")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-2",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-0"
                    aria-expanded={!!expanded["story-t-0"]}
                    aria-controls="story-t-0"
                    data-i18n="archive-content.button-2"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-0"]: !previous["story-t-0"],
                      }))
                    }
                  >
                    {expanded["story-t-0"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-2")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      {...attrs(
                        "archive-content.image-3",
                        "w-10 h-10 rounded-full object-cover shrink-0",
                      )}
                      src={asset("assets/images/photo-09.jpg")}
                      decoding="async"
                      loading="lazy"
                      data-i18n="archive-content.image-3"
                    />
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-9",
                          "font-bold text-sm leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-9"
                      >
                        {text("archive-content.paragraph-9")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-10",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-10"
                      >
                        {text("archive-content.paragraph-10")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-11",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-11"
                  >
                    {text("archive-content.paragraph-11")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-12",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-1"]}
                    id="story-t-1"
                    data-i18n="archive-content.paragraph-12"
                  >
                    {text("archive-content.paragraph-12")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-3",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-1"
                    aria-expanded={!!expanded["story-t-1"]}
                    aria-controls="story-t-1"
                    data-i18n="archive-content.button-3"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-1"]: !previous["story-t-1"],
                      }))
                    }
                  >
                    {expanded["story-t-1"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-3")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      {...attrs(
                        "archive-content.image-4",
                        "w-10 h-10 rounded-full object-cover shrink-0",
                      )}
                      src={asset("assets/images/photo-14.jpg")}
                      decoding="async"
                      loading="lazy"
                      data-i18n="archive-content.image-4"
                    />
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-13",
                          "font-bold text-sm leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-13"
                      >
                        {text("archive-content.paragraph-13")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-14",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-14"
                      >
                        {text("archive-content.paragraph-14")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-15",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-15"
                  >
                    {text("archive-content.paragraph-15")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-16",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-2"]}
                    id="story-t-2"
                    data-i18n="archive-content.paragraph-16"
                  >
                    {text("archive-content.paragraph-16")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-4",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-2"
                    aria-expanded={!!expanded["story-t-2"]}
                    aria-controls="story-t-2"
                    data-i18n="archive-content.button-4"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-2"]: !previous["story-t-2"],
                      }))
                    }
                  >
                    {expanded["story-t-2"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-4")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      {...attrs(
                        "archive-content.image-5",
                        "w-10 h-10 rounded-full object-cover shrink-0",
                      )}
                      src={asset("assets/images/photo-15.jpg")}
                      decoding="async"
                      loading="lazy"
                      data-i18n="archive-content.image-5"
                    />
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-17",
                          "font-bold text-sm leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-17"
                      >
                        {text("archive-content.paragraph-17")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-18",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-18"
                      >
                        {text("archive-content.paragraph-18")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-19",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-19"
                  >
                    {text("archive-content.paragraph-19")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-20",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-3"]}
                    id="story-t-3"
                    data-i18n="archive-content.paragraph-20"
                  >
                    {text("archive-content.paragraph-20")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-5",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-3"
                    aria-expanded={!!expanded["story-t-3"]}
                    aria-controls="story-t-3"
                    data-i18n="archive-content.button-5"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-3"]: !previous["story-t-3"],
                      }))
                    }
                  >
                    {expanded["story-t-3"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-5")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={asset("assets/images/photo-16.jpg")}
                      alt="RJ"
                      decoding="async"
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="font-bold text-sm leading-tight film-section-1-text-2">
                        {"RJ"}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-21",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-21"
                      >
                        {text("archive-content.paragraph-21")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-22",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-22"
                  >
                    {text("archive-content.paragraph-22")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-23",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-4"]}
                    id="story-t-4"
                    data-i18n="archive-content.paragraph-23"
                  >
                    {text("archive-content.paragraph-23")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-6",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-4"
                    aria-expanded={!!expanded["story-t-4"]}
                    aria-controls="story-t-4"
                    data-i18n="archive-content.button-6"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-4"]: !previous["story-t-4"],
                      }))
                    }
                  >
                    {expanded["story-t-4"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-6")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      {...attrs(
                        "archive-content.image-6",
                        "w-10 h-10 rounded-full object-cover shrink-0",
                      )}
                      src={asset("assets/images/photo-09.jpg")}
                      decoding="async"
                      loading="lazy"
                      data-i18n="archive-content.image-6"
                    />
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-24",
                          "font-bold text-sm leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-24"
                      >
                        {text("archive-content.paragraph-24")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-25",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-25"
                      >
                        {text("archive-content.paragraph-25")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-26",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-26"
                  >
                    {text("archive-content.paragraph-26")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-27",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-5"]}
                    id="story-t-5"
                    data-i18n="archive-content.paragraph-27"
                  >
                    {text("archive-content.paragraph-27")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-7",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-5"
                    aria-expanded={!!expanded["story-t-5"]}
                    aria-controls="story-t-5"
                    data-i18n="archive-content.button-7"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-5"]: !previous["story-t-5"],
                      }))
                    }
                  >
                    {expanded["story-t-5"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-7")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      {...attrs(
                        "archive-content.image-7",
                        "w-10 h-10 rounded-full object-cover shrink-0",
                      )}
                      src={asset("assets/images/photo-07.jpg")}
                      decoding="async"
                      loading="lazy"
                      data-i18n="archive-content.image-7"
                    />
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-28",
                          "font-bold text-sm leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-28"
                      >
                        {text("archive-content.paragraph-28")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-29",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-29"
                      >
                        {text("archive-content.paragraph-29")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-30",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-30"
                  >
                    {text("archive-content.paragraph-30")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-31",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-6"]}
                    id="story-t-6"
                    data-i18n="archive-content.paragraph-31"
                  >
                    {text("archive-content.paragraph-31")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-8",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-6"
                    aria-expanded={!!expanded["story-t-6"]}
                    aria-controls="story-t-6"
                    data-i18n="archive-content.button-8"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-6"]: !previous["story-t-6"],
                      }))
                    }
                  >
                    {expanded["story-t-6"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-8")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      {...attrs(
                        "archive-content.image-8",
                        "w-10 h-10 rounded-full object-cover shrink-0",
                      )}
                      src={asset("assets/images/photo-14.jpg")}
                      decoding="async"
                      loading="lazy"
                      data-i18n="archive-content.image-8"
                    />
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-32",
                          "font-bold text-sm leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-32"
                      >
                        {text("archive-content.paragraph-32")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-33",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-33"
                      >
                        {text("archive-content.paragraph-33")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-34",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-34"
                  >
                    {text("archive-content.paragraph-34")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-35",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-7"]}
                    id="story-t-7"
                    data-i18n="archive-content.paragraph-35"
                  >
                    {text("archive-content.paragraph-35")}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-9",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-7"
                    aria-expanded={!!expanded["story-t-7"]}
                    aria-controls="story-t-7"
                    data-i18n="archive-content.button-9"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-7"]: !previous["story-t-7"],
                      }))
                    }
                  >
                    {expanded["story-t-7"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-9")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={asset("assets/images/photo-08.jpg")}
                      alt="Cecilia Loh"
                      decoding="async"
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="font-bold text-sm leading-tight film-section-1-text-2">
                        {"Cecilia Loh"}
                      </p>
                      <p className="text-xs mt-0.5 home-hero-section-1-text-2">
                        {"Medical Missionary · Kenya"}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-36",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-36"
                  >
                    {
                      '"The call from Kenya came at a moment I least expected — but God\'s timing is always perfect."'
                    }
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-37",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-8"]}
                    id="story-t-8"
                    data-i18n="archive-content.paragraph-37"
                  >
                    {"(Full testimony coming soon)"}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-10",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-8"
                    aria-expanded={!!expanded["story-t-8"]}
                    aria-controls="story-t-8"
                    data-i18n="archive-content.button-10"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-8"]: !previous["story-t-8"],
                      }))
                    }
                  >
                    {expanded["story-t-8"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-10")}
                  </button>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={asset("assets/images/photo-15.jpg")}
                      alt="David H. Lee, MD"
                      decoding="async"
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <p className="font-bold text-sm leading-tight film-section-1-text-2">
                        {"David H. Lee, MD"}
                      </p>
                      <p className="text-xs mt-0.5 home-hero-section-1-text-2">
                        {"Physician · Little River Kwai Mission"}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-38",
                      "text-sm italic leading-relaxed flex-1 film-section-1-text-1",
                    )}
                    data-i18n="archive-content.paragraph-38"
                  >
                    {
                      '"Little River Kwai showed me that medicine without the Gospel is incomplete — and the Gospel without compassion is unconvincing."'
                    }
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-39",
                      "text-xs leading-relaxed home-hero-section-1-text-2",
                    )}
                    hidden={!expanded["story-t-9"]}
                    id="story-t-9"
                    data-i18n="archive-content.paragraph-39"
                  >
                    {"(Full testimony coming soon)"}
                  </p>
                  <button
                    {...attrs(
                      "archive-content.button-11",
                      "self-start text-xs font-semibold transition-opacity hover:opacity-70 home-hero-section-1-text-1",
                    )}
                    data-story="t-9"
                    aria-expanded={!!expanded["story-t-9"]}
                    aria-controls="story-t-9"
                    data-i18n="archive-content.button-11"
                    type="button"
                    onClick={() =>
                      setExpanded((previous) => ({
                        ...previous,
                        ["story-t-9"]: !previous["story-t-9"],
                      }))
                    }
                  >
                    {expanded["story-t-9"]
                      ? label("Show Less ↑", "收起 ↑")
                      : text("archive-content.button-11")}
                  </button>
                </div>
              </div>
            </div>
            <div
              data-panel="bioethics"
              role="tabpanel"
              id="panel-bioethics"
              aria-labelledby="tab-bioethics"
              hidden={activeTab !== "bioethics"}
            >
              <p
                {...attrs(
                  "archive-content.paragraph-40",
                  "text-xs font-semibold tracking-widest uppercase mb-2 home-hero-section-1-text-1",
                )}
                data-i18n="archive-content.paragraph-40"
              >
                {text("archive-content.paragraph-40")}
              </p>
              <h2
                {...attrs(
                  "archive-content.heading-1",
                  "text-3xl font-bold mb-8 home-hero-section-1-title-1",
                )}
                data-i18n="archive-content.heading-1"
              >
                {text("archive-content.heading-1")}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"01"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-41",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-41"
                  >
                    {text("archive-content.paragraph-41")}
                  </p>
                  <div>
                    <p
                      {...attrs(
                        "archive-content.paragraph-42",
                        "text-sm font-semibold home-hero-section-1-text-1",
                      )}
                      data-i18n="archive-content.paragraph-42"
                    >
                      {text("archive-content.paragraph-42")}
                    </p>
                    <p
                      {...attrs(
                        "archive-content.paragraph-43",
                        "text-xs mt-0.5 home-hero-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-43"
                    >
                      {text("archive-content.paragraph-43")}
                    </p>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-44",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-44"
                  >
                    {text("archive-content.paragraph-44")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"02"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-45",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-45"
                  >
                    {text("archive-content.paragraph-45")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-46",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-46"
                  >
                    {text("archive-content.paragraph-46")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"03"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-47",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-47"
                  >
                    {text("archive-content.paragraph-47")}
                  </p>
                  <div>
                    <p
                      {...attrs(
                        "archive-content.paragraph-48",
                        "text-sm font-semibold home-hero-section-1-text-1",
                      )}
                      data-i18n="archive-content.paragraph-48"
                    >
                      {text("archive-content.paragraph-48")}
                    </p>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-49",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-49"
                  >
                    {text("archive-content.paragraph-49")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"04"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-50",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-50"
                  >
                    {text("archive-content.paragraph-50")}
                  </p>
                  <div>
                    <p
                      {...attrs(
                        "archive-content.paragraph-51",
                        "text-sm font-semibold home-hero-section-1-text-1",
                      )}
                      data-i18n="archive-content.paragraph-51"
                    >
                      {text("archive-content.paragraph-51")}
                    </p>
                    <p
                      {...attrs(
                        "archive-content.paragraph-52",
                        "text-xs mt-0.5 home-hero-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-52"
                    >
                      {text("archive-content.paragraph-52")}
                    </p>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-53",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-53"
                  >
                    {text("archive-content.paragraph-53")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"05"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-54",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-54"
                  >
                    {text("archive-content.paragraph-54")}
                  </p>
                  <div>
                    <p
                      {...attrs(
                        "archive-content.paragraph-55",
                        "text-sm font-semibold home-hero-section-1-text-1",
                      )}
                      data-i18n="archive-content.paragraph-55"
                    >
                      {text("archive-content.paragraph-55")}
                    </p>
                    <p
                      {...attrs(
                        "archive-content.paragraph-56",
                        "text-xs mt-0.5 home-hero-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-56"
                    >
                      {text("archive-content.paragraph-56")}
                    </p>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-57",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-57"
                  >
                    {text("archive-content.paragraph-57")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"06"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-58",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-58"
                  >
                    {text("archive-content.paragraph-58")}
                  </p>
                  <div>
                    <p
                      {...attrs(
                        "archive-content.paragraph-59",
                        "text-sm font-semibold home-hero-section-1-text-1",
                      )}
                      data-i18n="archive-content.paragraph-59"
                    >
                      {text("archive-content.paragraph-59")}
                    </p>
                    <p
                      {...attrs(
                        "archive-content.paragraph-60",
                        "text-xs mt-0.5 home-hero-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-60"
                    >
                      {text("archive-content.paragraph-60")}
                    </p>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-61",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-61"
                  >
                    {text("archive-content.paragraph-61")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"07"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-62",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-62"
                  >
                    {text("archive-content.paragraph-62")}
                  </p>
                  <div>
                    <p
                      {...attrs(
                        "archive-content.paragraph-63",
                        "text-sm font-semibold home-hero-section-1-text-1",
                      )}
                      data-i18n="archive-content.paragraph-63"
                    >
                      {text("archive-content.paragraph-63")}
                    </p>
                    <p
                      {...attrs(
                        "archive-content.paragraph-64",
                        "text-xs mt-0.5 home-hero-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-64"
                    >
                      {text("archive-content.paragraph-64")}
                    </p>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-65",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-65"
                  >
                    {text("archive-content.paragraph-65")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"08"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-66",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-66"
                  >
                    {text("archive-content.paragraph-66")}
                  </p>
                  <div>
                    <p
                      {...attrs(
                        "archive-content.paragraph-67",
                        "text-sm font-semibold home-hero-section-1-text-1",
                      )}
                      data-i18n="archive-content.paragraph-67"
                    >
                      {text("archive-content.paragraph-67")}
                    </p>
                    <p
                      {...attrs(
                        "archive-content.paragraph-68",
                        "text-xs mt-0.5 home-hero-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-68"
                    >
                      {text("archive-content.paragraph-68")}
                    </p>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-69",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-69"
                  >
                    {text("archive-content.paragraph-69")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                    {"09"}
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-70",
                      "font-bold text-base leading-snug film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-70"
                  >
                    {text("archive-content.paragraph-70")}
                  </p>
                  <div>
                    <p
                      {...attrs(
                        "archive-content.paragraph-71",
                        "text-sm font-semibold home-hero-section-1-text-1",
                      )}
                      data-i18n="archive-content.paragraph-71"
                    >
                      {text("archive-content.paragraph-71")}
                    </p>
                    <p
                      {...attrs(
                        "archive-content.paragraph-72",
                        "text-xs mt-0.5 home-hero-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-72"
                    >
                      {text("archive-content.paragraph-72")}
                    </p>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-73",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-73"
                  >
                    {text("archive-content.paragraph-73")}
                  </p>
                </div>
              </div>
            </div>
            <div
              data-panel="missionaries"
              role="tabpanel"
              id="panel-missionaries"
              aria-labelledby="tab-missionaries"
              hidden={activeTab !== "missionaries"}
            >
              <p
                {...attrs(
                  "archive-content.paragraph-74",
                  "text-xs font-semibold tracking-widest uppercase mb-2 home-hero-section-1-text-1",
                )}
                data-i18n="archive-content.paragraph-74"
              >
                {text("archive-content.paragraph-74")}
              </p>
              <h2
                {...attrs(
                  "archive-content.heading-2",
                  "text-3xl font-bold mb-3 home-hero-section-1-title-1",
                )}
                data-i18n="archive-content.heading-2"
              >
                {text("archive-content.heading-2")}
              </h2>
              <p
                {...attrs(
                  "archive-content.paragraph-75",
                  "text-base mb-8 max-w-2xl home-hero-section-1-text-2",
                )}
                data-i18n="archive-content.paragraph-75"
              >
                {text("archive-content.paragraph-75")}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"R"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-76",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-76"
                      >
                        {text("archive-content.paragraph-76")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-77",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-77"
                      >
                        {text("archive-content.paragraph-77")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-78",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-78"
                  >
                    {text("archive-content.paragraph-78")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"F"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-79",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-79"
                      >
                        {text("archive-content.paragraph-79")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-80",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-80"
                      >
                        {text("archive-content.paragraph-80")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-81",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-81"
                  >
                    {text("archive-content.paragraph-81")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"C"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-82",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-82"
                      >
                        {text("archive-content.paragraph-82")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-83",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-83"
                      >
                        {text("archive-content.paragraph-83")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-84",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-84"
                  >
                    {text("archive-content.paragraph-84")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"R"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-85",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-85"
                      >
                        {text("archive-content.paragraph-85")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-86",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-86"
                      >
                        {text("archive-content.paragraph-86")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-87",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-87"
                  >
                    {text("archive-content.paragraph-87")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"M"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-88",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-88"
                      >
                        {text("archive-content.paragraph-88")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-89",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-89"
                      >
                        {text("archive-content.paragraph-89")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-90",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-90"
                  >
                    {text("archive-content.paragraph-90")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"B"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-91",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-91"
                      >
                        {text("archive-content.paragraph-91")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-92",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-92"
                      >
                        {text("archive-content.paragraph-92")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-93",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-93"
                  >
                    {text("archive-content.paragraph-93")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"S"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-94",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-94"
                      >
                        {text("archive-content.paragraph-94")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-95",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-95"
                      >
                        {text("archive-content.paragraph-95")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-96",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-96"
                  >
                    {text("archive-content.paragraph-96")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"J"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-97",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-97"
                      >
                        {text("archive-content.paragraph-97")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-98",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-98"
                      >
                        {text("archive-content.paragraph-98")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-99",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-99"
                  >
                    {text("archive-content.paragraph-99")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"C"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-100",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-100"
                      >
                        {text("archive-content.paragraph-100")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-101",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-101"
                      >
                        {text("archive-content.paragraph-101")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-102",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-102"
                  >
                    {text("archive-content.paragraph-102")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"G"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-103",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-103"
                      >
                        {text("archive-content.paragraph-103")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-104",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-104"
                      >
                        {text("archive-content.paragraph-104")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-105",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-105"
                  >
                    {text("archive-content.paragraph-105")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"O"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-106",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-106"
                      >
                        {text("archive-content.paragraph-106")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-107",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-107"
                      >
                        {text("archive-content.paragraph-107")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-108",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-108"
                  >
                    {text("archive-content.paragraph-108")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"B"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-109",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-109"
                      >
                        {text("archive-content.paragraph-109")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-110",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-110"
                      >
                        {text("archive-content.paragraph-110")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-111",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-111"
                  >
                    {text("archive-content.paragraph-111")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"D"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-112",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-112"
                      >
                        {text("archive-content.paragraph-112")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-113",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-113"
                      >
                        {text("archive-content.paragraph-113")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-114",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-114"
                  >
                    {text("archive-content.paragraph-114")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"K"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-115",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-115"
                      >
                        {text("archive-content.paragraph-115")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-116",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-116"
                      >
                        {text("archive-content.paragraph-116")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-117",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-117"
                  >
                    {text("archive-content.paragraph-117")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 programs-section-1-box-6">
                      {"D"}
                    </div>
                    <div>
                      <p
                        {...attrs(
                          "archive-content.paragraph-118",
                          "font-bold text-base leading-tight film-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-118"
                      >
                        {text("archive-content.paragraph-118")}
                      </p>
                      <p
                        {...attrs(
                          "archive-content.paragraph-119",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="archive-content.paragraph-119"
                      >
                        {text("archive-content.paragraph-119")}
                      </p>
                    </div>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-120",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-120"
                  >
                    {text("archive-content.paragraph-120")}
                  </p>
                </div>
              </div>
            </div>
            <div
              data-panel="msce"
              role="tabpanel"
              id="panel-msce"
              aria-labelledby="tab-msce"
              hidden={activeTab !== "msce"}
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-2 home-hero-section-1-text-1">
                {"MSCE Archive"}
              </p>
              <h2
                {...attrs(
                  "archive-content.heading-3",
                  "text-3xl font-bold mb-3 home-hero-section-1-title-1",
                )}
                data-i18n="archive-content.heading-3"
              >
                {text("archive-content.heading-3")}
              </h2>
              <p
                {...attrs(
                  "archive-content.paragraph-121",
                  "text-base mb-8 max-w-2xl home-hero-section-1-text-2",
                )}
                data-i18n="archive-content.paragraph-121"
              >
                {text("archive-content.paragraph-121")}
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded archive-content-section-1-label-1">
                      {"2011"}
                    </span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-122",
                      "font-bold text-base film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-122"
                  >
                    {text("archive-content.paragraph-122")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-123",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-123"
                  >
                    {text("archive-content.paragraph-123")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-124",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-124"
                  >
                    {text("archive-content.paragraph-124")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded archive-content-section-1-label-1">
                      {"2015"}
                    </span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-125",
                      "font-bold text-base film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-125"
                  >
                    {text("archive-content.paragraph-125")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-126",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-126"
                  >
                    {text("archive-content.paragraph-126")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-127",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-127"
                  >
                    {text("archive-content.paragraph-127")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded archive-content-section-1-label-1">
                      {"2020"}
                    </span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-128",
                      "font-bold text-base film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-128"
                  >
                    {text("archive-content.paragraph-128")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-129",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-129"
                  >
                    {text("archive-content.paragraph-129")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-130",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-130"
                  >
                    {text("archive-content.paragraph-130")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded archive-content-section-1-label-1">
                      {"2026"}
                    </span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-131",
                      "font-bold text-base film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-131"
                  >
                    {text("archive-content.paragraph-131")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-132",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-132"
                  >
                    {text("archive-content.paragraph-132")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-133",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-133"
                  >
                    {text("archive-content.paragraph-133")}
                  </p>
                </div>
              </div>
            </div>
            <div
              data-panel="prayer"
              role="tabpanel"
              id="panel-prayer"
              aria-labelledby="tab-prayer"
              hidden={activeTab !== "prayer"}
            >
              <p
                {...attrs(
                  "archive-content.paragraph-134",
                  "text-xs font-semibold tracking-widest uppercase mb-2 home-hero-section-1-text-1",
                )}
                data-i18n="archive-content.paragraph-134"
              >
                {text("archive-content.paragraph-134")}
              </p>
              <h2
                {...attrs(
                  "archive-content.heading-4",
                  "text-3xl font-bold mb-3 home-hero-section-1-title-1",
                )}
                data-i18n="archive-content.heading-4"
              >
                {text("archive-content.heading-4")}
              </h2>
              <p
                {...attrs(
                  "archive-content.paragraph-135",
                  "text-base mb-8 max-w-2xl home-hero-section-1-text-2",
                )}
                data-i18n="archive-content.paragraph-135"
              >
                {text("archive-content.paragraph-135")}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      {...attrs(
                        "archive-content.paragraph-136",
                        "font-bold text-base film-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-136"
                    >
                      {text("archive-content.paragraph-136")}
                    </p>
                    <span className="text-lg shrink-0">{"🙏"}</span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-137",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-137"
                  >
                    {text("archive-content.paragraph-137")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-138",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-138"
                  >
                    {text("archive-content.paragraph-138")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      {...attrs(
                        "archive-content.paragraph-139",
                        "font-bold text-base film-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-139"
                    >
                      {text("archive-content.paragraph-139")}
                    </p>
                    <span className="text-lg shrink-0">{"🙏"}</span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-140",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-140"
                  >
                    {text("archive-content.paragraph-140")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-141",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-141"
                  >
                    {text("archive-content.paragraph-141")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      {...attrs(
                        "archive-content.paragraph-142",
                        "font-bold text-base film-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-142"
                    >
                      {text("archive-content.paragraph-142")}
                    </p>
                    <span className="text-lg shrink-0">{"🙏"}</span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-143",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-143"
                  >
                    {text("archive-content.paragraph-143")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-144",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-144"
                  >
                    {text("archive-content.paragraph-144")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      {...attrs(
                        "archive-content.paragraph-145",
                        "font-bold text-base film-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-145"
                    >
                      {text("archive-content.paragraph-145")}
                    </p>
                    <span className="text-lg shrink-0">{"🙏"}</span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-146",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-146"
                  >
                    {text("archive-content.paragraph-146")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-147",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-147"
                  >
                    {text("archive-content.paragraph-147")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      {...attrs(
                        "archive-content.paragraph-148",
                        "font-bold text-base film-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-148"
                    >
                      {text("archive-content.paragraph-148")}
                    </p>
                    <span className="text-lg shrink-0">{"🙏"}</span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-149",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-149"
                  >
                    {text("archive-content.paragraph-149")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-150",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-150"
                  >
                    {text("archive-content.paragraph-150")}
                  </p>
                </div>
                <div className="rounded-xl p-5 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4">
                  <div className="flex items-start justify-between gap-2">
                    <p
                      {...attrs(
                        "archive-content.paragraph-151",
                        "font-bold text-base film-section-1-text-2",
                      )}
                      data-i18n="archive-content.paragraph-151"
                    >
                      {text("archive-content.paragraph-151")}
                    </p>
                    <span className="text-lg shrink-0">{"🙏"}</span>
                  </div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-152",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-152"
                  >
                    {text("archive-content.paragraph-152")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-153",
                      "text-xs mt-1 home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-153"
                  >
                    {text("archive-content.paragraph-153")}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 film-section-1-box-4">
                <div>
                  <p
                    {...attrs(
                      "archive-content.paragraph-154",
                      "font-bold text-lg mb-1 film-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-154"
                  >
                    {text("archive-content.paragraph-154")}
                  </p>
                  <p
                    {...attrs(
                      "archive-content.paragraph-155",
                      "text-sm home-hero-section-1-text-2",
                    )}
                    data-i18n="archive-content.paragraph-155"
                  >
                    {text("archive-content.paragraph-155")}
                  </p>
                </div>
                <AppLink
                  {...attrs(
                    "archive-content.link-1",
                    "shrink-0 px-6 py-3 font-semibold rounded transition-all hover:opacity-90 nav-link-3",
                  )}
                  href="contact.html"
                  data-i18n="archive-content.link-1"
                >
                  {text("archive-content.link-1")}
                </AppLink>
              </div>
            </div>
          </div>
        </section>
        {/* share-story */}
        <section className="share-story share-story-section-1">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              {...attrs(
                "share-story.heading-1",
                "text-2xl font-bold mb-3 text-white home-hero-section-1-label-2",
              )}
              data-i18n="share-story.heading-1"
            >
              {text("share-story.heading-1")}
            </h2>
            <p
              {...attrs("share-story.paragraph-1", "text-sm mb-6 footer-box-1")}
              data-i18n="share-story.paragraph-1"
            >
              {text("share-story.paragraph-1")}
            </p>
            <AppLink
              {...attrs(
                "share-story.link-1",
                "inline-block px-6 py-3 font-semibold rounded transition-all hover:opacity-90 msce-section-1-link-1",
              )}
              href="contact.html"
              data-i18n="share-story.link-1"
            >
              {text("share-story.link-1")}
            </AppLink>
          </div>
        </section>
      </div>
    </>
  )
}
