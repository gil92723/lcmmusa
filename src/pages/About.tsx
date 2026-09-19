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

export default function About() {
  const { text, attrs, label } = usePageCopy("about")

  return (
    <>
      <div className="transition-colors duration-300 home-hero-section-1">
        {/* about-hero */}
        <section className="about-hero about-hero-section-1">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p
              {...attrs(
                "about-hero.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-4 about-hero-section-1-text-1",
              )}
              data-i18n="about-hero.paragraph-1"
            >
              {text("about-hero.paragraph-1")}
            </p>
            <h1
              {...attrs(
                "about-hero.title-1",
                "text-5xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line about-hero-section-1-title-1",
              )}
              data-i18n="about-hero.title-1"
            >
              {text("about-hero.title-1")}
            </h1>
            <p
              {...attrs(
                "about-hero.paragraph-2",
                "text-lg leading-relaxed max-w-2xl mx-auto about-hero-section-1-text-2",
              )}
              data-i18n="about-hero.paragraph-2"
            >
              {text("about-hero.paragraph-2")}
            </p>
          </div>
        </section>
        {/* mission-vision */}
        <section className="mission-vision mission-vision-section-1">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <p
                {...attrs(
                  "mission-vision.paragraph-1",
                  "text-xs font-semibold tracking-widest uppercase mb-3 home-hero-section-1-text-1",
                )}
                data-i18n="mission-vision.paragraph-1"
              >
                {text("mission-vision.paragraph-1")}
              </p>
              <h2
                {...attrs(
                  "mission-vision.heading-1",
                  "text-3xl font-bold mb-5 home-hero-section-1-title-1",
                )}
                data-i18n="mission-vision.heading-1"
              >
                {text("mission-vision.heading-1")}
              </h2>
              <p
                {...attrs(
                  "mission-vision.paragraph-2",
                  "text-base leading-relaxed mb-6 home-hero-section-1-text-2",
                )}
                data-i18n="mission-vision.paragraph-2"
              >
                {text("mission-vision.paragraph-2")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-5 text-center film-section-1-box-4">
                  <p className="text-3xl font-bold mb-1 mission-vision-section-1-text-1">
                    {"36+"}
                  </p>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-3",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-3"
                  >
                    {text("mission-vision.paragraph-3")}
                  </p>
                </div>
                <div className="rounded-xl p-5 text-center film-section-1-box-4">
                  <p className="text-3xl font-bold mb-1 mission-vision-section-1-text-1">
                    {"4"}
                  </p>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-4",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-4"
                  >
                    {text("mission-vision.paragraph-4")}
                  </p>
                </div>
                <div className="rounded-xl p-5 text-center film-section-1-box-4">
                  <p className="text-3xl font-bold mb-1 mission-vision-section-1-text-1">
                    {"16"}
                  </p>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-5",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-5"
                  >
                    {text("mission-vision.paragraph-5")}
                  </p>
                </div>
                <div className="rounded-xl p-5 text-center film-section-1-box-4">
                  <p className="text-3xl font-bold mb-1 mission-vision-section-1-text-1">
                    {"2"}
                  </p>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-6",
                      "text-xs home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-6"
                  >
                    {text("mission-vision.paragraph-6")}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p
                {...attrs(
                  "mission-vision.paragraph-7",
                  "text-xs font-semibold tracking-widest uppercase mb-3 home-hero-section-1-text-1",
                )}
                data-i18n="mission-vision.paragraph-7"
              >
                {text("mission-vision.paragraph-7")}
              </p>
              <h2
                {...attrs(
                  "mission-vision.heading-2",
                  "text-3xl font-bold mb-5 home-hero-section-1-title-1",
                )}
                data-i18n="mission-vision.heading-2"
              >
                {text("mission-vision.heading-2")}
              </h2>
              <ol className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 programs-section-1-box-2">
                    {"1"}
                  </span>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-8",
                      "text-base leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-8"
                  >
                    {text("mission-vision.paragraph-8")}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 programs-section-1-box-2">
                    {"2"}
                  </span>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-9",
                      "text-base leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-9"
                  >
                    {text("mission-vision.paragraph-9")}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 programs-section-1-box-2">
                    {"3"}
                  </span>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-10",
                      "text-base leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-10"
                  >
                    {text("mission-vision.paragraph-10")}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 programs-section-1-box-2">
                    {"4"}
                  </span>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-11",
                      "text-base leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-11"
                  >
                    {text("mission-vision.paragraph-11")}
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 programs-section-1-box-2">
                    {"5"}
                  </span>
                  <p
                    {...attrs(
                      "mission-vision.paragraph-12",
                      "text-base leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="mission-vision.paragraph-12"
                  >
                    {text("mission-vision.paragraph-12")}
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        {/* history */}
        <section className="history programs-section-1">
          <div className="max-w-4xl mx-auto px-6">
            <p
              {...attrs(
                "history.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-3 home-hero-section-1-text-1",
              )}
              data-i18n="history.paragraph-1"
            >
              {text("history.paragraph-1")}
            </p>
            <h2
              {...attrs(
                "history.heading-1",
                "text-4xl font-bold mb-12 home-hero-section-1-title-1",
              )}
              data-i18n="history.heading-1"
            >
              {text("history.heading-1")}
            </h2>
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px programs-section-1-box-3"></div>
              <div className="flex flex-col gap-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 shrink-0 text-right">
                    <span className="text-sm font-bold home-hero-section-1-text-1">
                      {"1988"}
                    </span>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full shrink-0 mt-0.5 z-10 programs-section-1-box-4"></div>
                    <div className="rounded-xl p-4 flex-1 film-section-1-box-4">
                      <p
                        {...attrs(
                          "history.paragraph-2",
                          "text-sm leading-relaxed home-hero-section-1-text-2",
                        )}
                        data-i18n="history.paragraph-2"
                      >
                        {text("history.paragraph-2")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 shrink-0 text-right">
                    <span className="text-sm font-bold home-hero-section-1-text-1">
                      {"2007"}
                    </span>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full shrink-0 mt-0.5 z-10 programs-section-1-box-4"></div>
                    <div className="rounded-xl p-4 flex-1 film-section-1-box-4">
                      <p
                        {...attrs(
                          "history.paragraph-3",
                          "text-sm leading-relaxed home-hero-section-1-text-2",
                        )}
                        data-i18n="history.paragraph-3"
                      >
                        {text("history.paragraph-3")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 shrink-0 text-right">
                    <span className="text-sm font-bold home-hero-section-1-text-1">
                      {"2011"}
                    </span>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full shrink-0 mt-0.5 z-10 programs-section-1-box-4"></div>
                    <div className="rounded-xl p-4 flex-1 film-section-1-box-4">
                      <p
                        {...attrs(
                          "history.paragraph-4",
                          "text-sm leading-relaxed home-hero-section-1-text-2",
                        )}
                        data-i18n="history.paragraph-4"
                      >
                        {text("history.paragraph-4")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 shrink-0 text-right">
                    <span className="text-sm font-bold home-hero-section-1-text-1">
                      {"2026"}
                    </span>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full shrink-0 mt-0.5 z-10 programs-section-1-box-5"></div>
                    <div className="rounded-xl p-4 flex-1 film-section-1-box-4">
                      <p
                        {...attrs(
                          "history.paragraph-5",
                          "text-sm leading-relaxed home-hero-section-1-text-2",
                        )}
                        data-i18n="history.paragraph-5"
                      >
                        {text("history.paragraph-5")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* invitation */}
        <section className="invitation mission-vision-section-1">
          <div className="max-w-4xl mx-auto px-6">
            <p
              {...attrs(
                "invitation.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-3 home-hero-section-1-text-1",
              )}
              data-i18n="invitation.paragraph-1"
            >
              {text("invitation.paragraph-1")}
            </p>
            <h2
              {...attrs(
                "invitation.heading-1",
                "text-4xl font-bold mb-10 home-hero-section-1-title-1",
              )}
              data-i18n="invitation.heading-1"
            >
              {text("invitation.heading-1")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-xl p-6 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 programs-section-1-box-2">
                    {"1"}
                  </span>
                  <p
                    {...attrs(
                      "invitation.paragraph-2",
                      "font-semibold text-sm film-section-1-text-1",
                    )}
                    data-i18n="invitation.paragraph-2"
                  >
                    {text("invitation.paragraph-2")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 programs-section-1-box-2">
                    {"2"}
                  </span>
                  <p
                    {...attrs(
                      "invitation.paragraph-3",
                      "font-semibold text-sm film-section-1-text-1",
                    )}
                    data-i18n="invitation.paragraph-3"
                  >
                    {text("invitation.paragraph-3")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 programs-section-1-box-2">
                    {"3"}
                  </span>
                  <p
                    {...attrs(
                      "invitation.paragraph-4",
                      "font-semibold text-sm film-section-1-text-1",
                    )}
                    data-i18n="invitation.paragraph-4"
                  >
                    {text("invitation.paragraph-4")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 programs-section-1-box-2">
                    {"4"}
                  </span>
                  <p
                    {...attrs(
                      "invitation.paragraph-5",
                      "font-semibold text-sm film-section-1-text-1",
                    )}
                    data-i18n="invitation.paragraph-5"
                  >
                    {text("invitation.paragraph-5")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-2 transition-all duration-200 hover:-translate-y-1 film-section-1-box-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 programs-section-1-box-2">
                    {"5"}
                  </span>
                  <p
                    {...attrs(
                      "invitation.paragraph-6",
                      "font-semibold text-sm film-section-1-text-1",
                    )}
                    data-i18n="invitation.paragraph-6"
                  >
                    {text("invitation.paragraph-6")}
                  </p>
                </div>
                <p
                  {...attrs(
                    "invitation.paragraph-7",
                    "text-xs leading-relaxed pl-10 home-hero-section-1-text-2",
                  )}
                  data-i18n="invitation.paragraph-7"
                >
                  {text("invitation.paragraph-7")}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <AppLink
                {...attrs(
                  "invitation.link-1",
                  "px-7 py-3 font-semibold rounded transition-all hover:opacity-90 nav-link-3",
                )}
                href="contact.html"
                data-i18n="invitation.link-1"
              >
                {text("invitation.link-1")}
              </AppLink>
              <AppLink
                {...attrs(
                  "invitation.link-2",
                  "px-7 py-3 font-semibold rounded border-2 transition-all mission-vision-section-1-link-1",
                )}
                href="ministries.html"
                data-i18n="invitation.link-2"
              >
                {text("invitation.link-2")}
              </AppLink>
            </div>
          </div>
        </section>
        {/* leadership */}
        <section className="leadership programs-section-1">
          <div className="max-w-6xl mx-auto px-6">
            <p
              {...attrs(
                "leadership.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-3 home-hero-section-1-text-1",
              )}
              data-i18n="leadership.paragraph-1"
            >
              {text("leadership.paragraph-1")}
            </p>
            <h2
              {...attrs(
                "leadership.heading-1",
                "text-4xl font-bold mb-10 home-hero-section-1-title-1",
              )}
              data-i18n="leadership.heading-1"
            >
              {text("leadership.heading-1")}
            </h2>
            <div className="mb-8">
              <p
                {...attrs(
                  "leadership.paragraph-2",
                  "text-xs font-semibold tracking-widest uppercase mb-4 home-hero-section-1-text-2",
                )}
                data-i18n="leadership.paragraph-2"
              >
                {text("leadership.paragraph-2")}
              </p>
              <div className="inline-flex items-center gap-4 rounded-xl px-6 py-4 film-section-1-box-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0 programs-section-1-box-2"></div>
                <div>
                  <p className="font-bold film-section-1-text-2">
                    {"陳哲宏博士"}
                  </p>
                  <p className="text-sm home-hero-section-1-text-2">
                    {"Dr. James Chen"}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <p
                {...attrs(
                  "leadership.paragraph-3",
                  "text-xs font-semibold tracking-widest uppercase mb-4 home-hero-section-1-text-2",
                )}
                data-i18n="leadership.paragraph-3"
              >
                {text("leadership.paragraph-3")}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="rounded-xl px-4 py-3 flex items-center gap-3 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 programs-section-1-box-6">
                    {"L"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight film-section-1-text-2">
                      {"蕭俐俐醫師"}
                    </p>
                    <p className="text-xs leading-tight mt-0.5 home-hero-section-1-text-2">
                      {"Dr. Li-Li Hsiao"}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl px-4 py-3 flex items-center gap-3 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 programs-section-1-box-6">
                    {"C"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight film-section-1-text-2">
                      {"吳秋芳"}
                    </p>
                    <p className="text-xs leading-tight mt-0.5 home-hero-section-1-text-2">
                      {"Chiu Wu"}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl px-4 py-3 flex items-center gap-3 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 programs-section-1-box-6">
                    {"S"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight film-section-1-text-2">
                      {"葉愛卿"}
                    </p>
                    <p className="text-xs leading-tight mt-0.5 home-hero-section-1-text-2">
                      {"Sylvia Yeh"}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl px-4 py-3 flex items-center gap-3 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 programs-section-1-box-6">
                    {"H"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight film-section-1-text-2">
                      {"陳恆德"}
                    </p>
                    <p className="text-xs leading-tight mt-0.5 home-hero-section-1-text-2">
                      {"Herng Der Chern"}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl px-4 py-3 flex items-center gap-3 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 programs-section-1-box-6">
                    {"D"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight film-section-1-text-2">
                      {"Douglas Stillman"}
                    </p>
                    <p className="text-xs leading-tight mt-0.5 home-hero-section-1-text-2">
                      {"Douglas Stillman"}
                    </p>
                  </div>
                </div>
                <div className="rounded-xl px-4 py-3 flex items-center gap-3 film-section-1-box-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 programs-section-1-box-6">
                    {"P"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-tight film-section-1-text-2">
                      {"鄭博仁醫師"}
                    </p>
                    <p className="text-xs leading-tight mt-0.5 home-hero-section-1-text-2">
                      {"Dr. Paul Cheng"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p
                {...attrs(
                  "leadership.paragraph-4",
                  "text-xs font-semibold tracking-widest uppercase mb-4 home-hero-section-1-text-2",
                )}
                data-i18n="leadership.paragraph-4"
              >
                {text("leadership.paragraph-4")}
              </p>
              <div className="flex flex-col gap-3">
                <div className="rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 film-section-1-box-4">
                  <p
                    {...attrs(
                      "leadership.paragraph-5",
                      "text-xs font-semibold shrink-0 sm:w-52 home-hero-section-1-text-1",
                    )}
                    data-i18n="leadership.paragraph-5"
                  >
                    {text("leadership.paragraph-5")}
                  </p>
                  <p
                    {...attrs(
                      "leadership.paragraph-6",
                      "text-sm film-section-1-text-1",
                    )}
                    data-i18n="leadership.paragraph-6"
                  >
                    {text("leadership.paragraph-6")}
                  </p>
                </div>
                <div className="rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 film-section-1-box-4">
                  <p
                    {...attrs(
                      "leadership.paragraph-7",
                      "text-xs font-semibold shrink-0 sm:w-52 home-hero-section-1-text-1",
                    )}
                    data-i18n="leadership.paragraph-7"
                  >
                    {text("leadership.paragraph-7")}
                  </p>
                  <p
                    {...attrs(
                      "leadership.paragraph-8",
                      "text-sm film-section-1-text-1",
                    )}
                    data-i18n="leadership.paragraph-8"
                  >
                    {"Philip Yuan · Jocelyn Wang"}
                  </p>
                </div>
                <div className="rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 film-section-1-box-4">
                  <p
                    {...attrs(
                      "leadership.paragraph-9",
                      "text-xs font-semibold shrink-0 sm:w-52 home-hero-section-1-text-1",
                    )}
                    data-i18n="leadership.paragraph-9"
                  >
                    {text("leadership.paragraph-9")}
                  </p>
                  <p
                    {...attrs(
                      "leadership.paragraph-10",
                      "text-sm film-section-1-text-1",
                    )}
                    data-i18n="leadership.paragraph-10"
                  >
                    {text("leadership.paragraph-10")}
                  </p>
                </div>
                <div className="rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 film-section-1-box-4">
                  <p
                    {...attrs(
                      "leadership.paragraph-11",
                      "text-xs font-semibold shrink-0 sm:w-52 home-hero-section-1-text-1",
                    )}
                    data-i18n="leadership.paragraph-11"
                  >
                    {text("leadership.paragraph-11")}
                  </p>
                  <p
                    {...attrs(
                      "leadership.paragraph-12",
                      "text-sm film-section-1-text-1",
                    )}
                    data-i18n="leadership.paragraph-12"
                  >
                    {"Angie Stillman · Betty Ning · Crystal Yuan · Diana Huang"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
