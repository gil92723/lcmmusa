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

export default function Ministries() {
  const { text, attrs, label } = usePageCopy("ministries")

  return (
    <>
      <div className="transition-colors duration-300 home-hero-section-1">
        {/* ministries-hero */}
        <section className="ministries-hero about-hero-section-1">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p
              {...attrs(
                "ministries-hero.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-4 about-hero-section-1-text-1",
              )}
              data-i18n="ministries-hero.paragraph-1"
            >
              {text("ministries-hero.paragraph-1")}
            </p>
            <h1
              {...attrs(
                "ministries-hero.title-1",
                "text-5xl md:text-6xl font-bold mb-6 about-hero-section-1-title-1",
              )}
              data-i18n="ministries-hero.title-1"
            >
              {text("ministries-hero.title-1")}
            </h1>
            <p
              {...attrs(
                "ministries-hero.paragraph-2",
                "text-lg max-w-2xl mx-auto about-hero-section-1-text-2",
              )}
              data-i18n="ministries-hero.paragraph-2"
            >
              {text("ministries-hero.paragraph-2")}
            </p>
          </div>
        </section>
        {/* programs */}
        <section className="programs mission-vision-section-1">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 programs-section-1-box-1">
                <div className="text-4xl">{"🏥"}</div>
                <div>
                  <h3
                    {...attrs(
                      "programs.subheading-1",
                      "font-bold text-lg mb-2 home-hero-section-1-title-1",
                    )}
                    data-i18n="programs.subheading-1"
                  >
                    {text("programs.subheading-1")}
                  </h3>
                  <p
                    {...attrs(
                      "programs.paragraph-1",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="programs.paragraph-1"
                  >
                    {text("programs.paragraph-1")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 programs-section-1-box-1">
                <div className="text-4xl">{"🤲"}</div>
                <div>
                  <h3
                    {...attrs(
                      "programs.subheading-2",
                      "font-bold text-lg mb-2 home-hero-section-1-title-1",
                    )}
                    data-i18n="programs.subheading-2"
                  >
                    {text("programs.subheading-2")}
                  </h3>
                  <p
                    {...attrs(
                      "programs.paragraph-2",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="programs.paragraph-2"
                  >
                    {text("programs.paragraph-2")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 programs-section-1-box-1">
                <div className="text-4xl">{"🎓"}</div>
                <div>
                  <h3
                    {...attrs(
                      "programs.subheading-3",
                      "font-bold text-lg mb-2 home-hero-section-1-title-1",
                    )}
                    data-i18n="programs.subheading-3"
                  >
                    {text("programs.subheading-3")}
                  </h3>
                  <p
                    {...attrs(
                      "programs.paragraph-3",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="programs.paragraph-3"
                  >
                    {text("programs.paragraph-3")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 programs-section-1-box-1">
                <div className="text-4xl">{"🌏"}</div>
                <div>
                  <h3
                    {...attrs(
                      "programs.subheading-4",
                      "font-bold text-lg mb-2 home-hero-section-1-title-1",
                    )}
                    data-i18n="programs.subheading-4"
                  >
                    {text("programs.subheading-4")}
                  </h3>
                  <p
                    {...attrs(
                      "programs.paragraph-4",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="programs.paragraph-4"
                  >
                    {text("programs.paragraph-4")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 programs-section-1-box-1">
                <div className="text-4xl">{"⭐"}</div>
                <div>
                  <h3
                    {...attrs(
                      "programs.subheading-5",
                      "font-bold text-lg mb-2 home-hero-section-1-title-1",
                    )}
                    data-i18n="programs.subheading-5"
                  >
                    {text("programs.subheading-5")}
                  </h3>
                  <p
                    {...attrs(
                      "programs.paragraph-5",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="programs.paragraph-5"
                  >
                    {text("programs.paragraph-5")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 programs-section-1-box-1">
                <div className="text-4xl">{"📖"}</div>
                <div>
                  <h3
                    {...attrs(
                      "programs.subheading-6",
                      "font-bold text-lg mb-2 home-hero-section-1-title-1",
                    )}
                    data-i18n="programs.subheading-6"
                  >
                    {text("programs.subheading-6")}
                  </h3>
                  <p
                    {...attrs(
                      "programs.paragraph-6",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="programs.paragraph-6"
                  >
                    {text("programs.paragraph-6")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* fields */}
        <section className="fields programs-section-1">
          <div className="max-w-6xl mx-auto px-6">
            <p
              {...attrs(
                "fields.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-3 home-hero-section-1-text-1",
              )}
              data-i18n="fields.paragraph-1"
            >
              {text("fields.paragraph-1")}
            </p>
            <h2
              {...attrs(
                "fields.heading-1",
                "text-4xl font-bold mb-12 home-hero-section-1-title-1",
              )}
              data-i18n="fields.heading-1"
            >
              {text("fields.heading-1")}
            </h2>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 rounded-2xl overflow-hidden programs-section-1-box-7">
                  <img
                    {...attrs("fields.image-1", "w-full h-full object-cover")}
                    src={asset("assets/images/photo-10.jpg")}
                    decoding="async"
                    loading="lazy"
                    data-i18n="fields.image-1"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{"🇧🇩"}</span>
                    <div>
                      <h3
                        {...attrs(
                          "fields.subheading-1",
                          "font-bold text-2xl home-hero-section-1-title-1",
                        )}
                        data-i18n="fields.subheading-1"
                      >
                        {text("fields.subheading-1")}
                      </h3>
                      <p
                        {...attrs(
                          "fields.paragraph-2",
                          "text-sm home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-2"
                      >
                        {text("fields.paragraph-2")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mb-6">
                    <p
                      {...attrs(
                        "fields.paragraph-3",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-3"
                    >
                      {text("fields.paragraph-3")}
                    </p>
                    <p
                      {...attrs(
                        "fields.paragraph-4",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-4"
                    >
                      {text("fields.paragraph-4")}
                    </p>
                    <p
                      {...attrs(
                        "fields.paragraph-5",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-5"
                    >
                      {text("fields.paragraph-5")}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p className="font-bold text-lg mission-vision-section-1-text-1">
                        {"600+"}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-6",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-6"
                      >
                        {text("fields.paragraph-6")}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p className="font-bold text-lg mission-vision-section-1-text-1">
                        {"4"}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-7",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-7"
                      >
                        {text("fields.paragraph-7")}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p className="font-bold text-lg mission-vision-section-1-text-1">
                        {"2018"}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-8",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-8"
                      >
                        {text("fields.paragraph-8")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="flex-1 rounded-2xl overflow-hidden programs-section-1-box-7">
                  <img
                    {...attrs("fields.image-2", "w-full h-full object-cover")}
                    src={asset("assets/images/photo-11.jpg")}
                    decoding="async"
                    loading="lazy"
                    data-i18n="fields.image-2"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{"🇳🇦"}</span>
                    <div>
                      <h3
                        {...attrs(
                          "fields.subheading-2",
                          "font-bold text-2xl home-hero-section-1-title-1",
                        )}
                        data-i18n="fields.subheading-2"
                      >
                        {text("fields.subheading-2")}
                      </h3>
                      <p
                        {...attrs(
                          "fields.paragraph-9",
                          "text-sm home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-9"
                      >
                        {text("fields.paragraph-9")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mb-6">
                    <p
                      {...attrs(
                        "fields.paragraph-10",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-10"
                    >
                      {text("fields.paragraph-10")}
                    </p>
                    <p
                      {...attrs(
                        "fields.paragraph-11",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-11"
                    >
                      {text("fields.paragraph-11")}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p
                        {...attrs(
                          "fields.paragraph-12",
                          "font-bold text-lg mission-vision-section-1-text-1",
                        )}
                        data-i18n="fields.paragraph-12"
                      >
                        {text("fields.paragraph-12")}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-13",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-13"
                      >
                        {text("fields.paragraph-13")}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p className="font-bold text-lg mission-vision-section-1-text-1">
                        {"2019"}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-14",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-14"
                      >
                        {text("fields.paragraph-14")}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p
                        {...attrs(
                          "fields.paragraph-15",
                          "font-bold text-lg mission-vision-section-1-text-1",
                        )}
                        data-i18n="fields.paragraph-15"
                      >
                        {text("fields.paragraph-15")}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-16",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-16"
                      >
                        {text("fields.paragraph-16")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 rounded-2xl overflow-hidden programs-section-1-box-7">
                  <img
                    {...attrs("fields.image-3", "w-full h-full object-cover")}
                    src={asset("assets/images/photo-12.jpg")}
                    decoding="async"
                    loading="lazy"
                    data-i18n="fields.image-3"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{"🇹🇼"}</span>
                    <div>
                      <h3
                        {...attrs(
                          "fields.subheading-3",
                          "font-bold text-2xl home-hero-section-1-title-1",
                        )}
                        data-i18n="fields.subheading-3"
                      >
                        {text("fields.subheading-3")}
                      </h3>
                      <p
                        {...attrs(
                          "fields.paragraph-17",
                          "text-sm home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-17"
                      >
                        {text("fields.paragraph-17")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mb-6">
                    <p
                      {...attrs(
                        "fields.paragraph-18",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-18"
                    >
                      {text("fields.paragraph-18")}
                    </p>
                    <p
                      {...attrs(
                        "fields.paragraph-19",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-19"
                    >
                      {text("fields.paragraph-19")}
                    </p>
                    <p
                      {...attrs(
                        "fields.paragraph-20",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-20"
                    >
                      {text("fields.paragraph-20")}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p
                        {...attrs(
                          "fields.paragraph-21",
                          "font-bold text-lg mission-vision-section-1-text-1",
                        )}
                        data-i18n="fields.paragraph-21"
                      >
                        {text("fields.paragraph-21")}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-22",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-22"
                      >
                        {text("fields.paragraph-22")}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p className="font-bold text-lg mission-vision-section-1-text-1">
                        {"3+"}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-23",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-23"
                      >
                        {text("fields.paragraph-23")}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p className="font-bold text-lg mission-vision-section-1-text-1">
                        {"2017"}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-24",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-24"
                      >
                        {text("fields.paragraph-24")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="flex-1 rounded-2xl overflow-hidden programs-section-1-box-7">
                  <img
                    {...attrs("fields.image-4", "w-full h-full object-cover")}
                    src={asset("assets/images/photo-13.jpg")}
                    decoding="async"
                    loading="lazy"
                    data-i18n="fields.image-4"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{"🌏"}</span>
                    <div>
                      <h3
                        {...attrs(
                          "fields.subheading-4",
                          "font-bold text-2xl home-hero-section-1-title-1",
                        )}
                        data-i18n="fields.subheading-4"
                      >
                        {text("fields.subheading-4")}
                      </h3>
                      <p
                        {...attrs(
                          "fields.paragraph-25",
                          "text-sm home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-25"
                      >
                        {text("fields.paragraph-25")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mb-6">
                    <p
                      {...attrs(
                        "fields.paragraph-26",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-26"
                    >
                      {text("fields.paragraph-26")}
                    </p>
                    <p
                      {...attrs(
                        "fields.paragraph-27",
                        "text-base leading-relaxed home-hero-section-1-text-2",
                      )}
                      data-i18n="fields.paragraph-27"
                    >
                      {text("fields.paragraph-27")}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl p-3 text-center film-section-1-box-4 ce">
                      <p className="font-bold text-lg mission-vision-section-1-text-1">
                        {"2012"}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-28",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-28"
                      >
                        {text("fields.paragraph-28")}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p
                        {...attrs(
                          "fields.paragraph-29",
                          "font-bold text-lg mission-vision-section-1-text-1",
                        )}
                        data-i18n="fields.paragraph-29"
                      >
                        {text("fields.paragraph-29")}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-30",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-30"
                      >
                        {text("fields.paragraph-30")}
                      </p>
                    </div>
                    <div className="rounded-xl p-3 text-center film-section-1-box-4">
                      <p
                        {...attrs(
                          "fields.paragraph-31",
                          "font-bold text-lg mission-vision-section-1-text-1",
                        )}
                        data-i18n="fields.paragraph-31"
                      >
                        {text("fields.paragraph-31")}
                      </p>
                      <p
                        {...attrs(
                          "fields.paragraph-32",
                          "text-xs mt-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="fields.paragraph-32"
                      >
                        {text("fields.paragraph-32")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* msce */}
        <section className="msce msce-section-1">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2
              {...attrs(
                "msce.heading-1",
                "text-3xl font-bold mb-4 text-white home-hero-section-1-label-2",
              )}
              data-i18n="msce.heading-1"
            >
              {text("msce.heading-1")}
            </h2>
            <p
              {...attrs(
                "msce.paragraph-1",
                "text-base mb-8 about-hero-section-1-text-2",
              )}
              data-i18n="msce.paragraph-1"
            >
              {text("msce.paragraph-1")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <AppLink
                {...attrs(
                  "msce.link-1",
                  "px-7 py-3 font-semibold rounded transition-all hover:opacity-90 msce-section-1-link-1",
                )}
                href="contact.html"
                data-i18n="msce.link-1"
              >
                {text("msce.link-1")}
              </AppLink>
              <AppLink
                {...attrs(
                  "msce.link-2",
                  "px-7 py-3 font-semibold rounded border-2 transition-all hover:bg-white/10 msce-section-1-link-2",
                )}
                href="testimonies.html"
                data-i18n="msce.link-2"
              >
                {text("msce.link-2")}
              </AppLink>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
