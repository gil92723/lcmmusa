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

export default function Contact() {
  const { text, attrs, label } = usePageCopy("contact")
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [draftRequested, setDraftRequested] = useState(false)
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    const data = new FormData(event.currentTarget)
    const subject =
      String(data.get("subject") ?? "").trim() ||
      label("LCMM website inquiry", "LCMM 網站詢問")
    const body = `${label("Name", "姓名")}: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    setDraftRequested(true)
    window.location.href = `mailto:lcmmusa@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <div className="transition-colors duration-300 home-hero-section-1">
        {/* contact-hero */}
        <section className="contact-hero about-hero-section-1">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p
              {...attrs(
                "contact-hero.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-4 about-hero-section-1-text-1",
              )}
              data-i18n="contact-hero.paragraph-1"
            >
              {text("contact-hero.paragraph-1")}
            </p>
            <h1
              {...attrs(
                "contact-hero.title-1",
                "text-5xl md:text-6xl font-bold mb-6 about-hero-section-1-title-1",
              )}
              data-i18n="contact-hero.title-1"
            >
              {text("contact-hero.title-1")}
            </h1>
            <p
              {...attrs(
                "contact-hero.paragraph-2",
                "text-lg max-w-xl mx-auto about-hero-section-1-text-2",
              )}
              data-i18n="contact-hero.paragraph-2"
            >
              {text("contact-hero.paragraph-2")}
            </p>
          </div>
        </section>
        {/* contact-details */}
        <section className="contact-details mission-vision-section-1">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h2
                {...attrs(
                  "contact-details.heading-1",
                  "text-2xl font-bold mb-6 home-hero-section-1-title-1",
                )}
                data-i18n="contact-details.heading-1"
              >
                {text("contact-details.heading-1")}
              </h2>
              <form
                id="contact-form"
                data-email="lcmmusa@yahoo.com"
                className="flex flex-col gap-4"
                onSubmit={submitContact}
              >
                <p
                  {...attrs("contact-details.paragraph-1", "form-note")}
                  data-i18n="contact-details.paragraph-1"
                >
                  {text("contact-details.paragraph-1")}
                </p>
                <div>
                  <label
                    {...attrs(
                      "contact-details.label-1",
                      "block text-xs font-semibold mb-1.5 home-hero-section-1-text-2",
                    )}
                    htmlFor="contact-name"
                    data-i18n="contact-details.label-1"
                  >
                    {text("contact-details.label-1")}
                  </label>
                  <input
                    {...attrs(
                      "contact-details.input-1",
                      "w-full rounded-lg px-4 py-3 text-sm outline-none transition-all programs-section-1-input-1",
                    )}
                    type="text"
                    id="contact-name"
                    required={true}
                    name="name"
                    defaultValue=""
                    data-i18n="contact-details.input-1"
                  />
                </div>
                <div>
                  <label
                    {...attrs(
                      "contact-details.label-2",
                      "block text-xs font-semibold mb-1.5 home-hero-section-1-text-2",
                    )}
                    htmlFor="contact-email"
                    data-i18n="contact-details.label-2"
                  >
                    {text("contact-details.label-2")}
                  </label>
                  <input
                    {...attrs(
                      "contact-details.input-2",
                      "w-full rounded-lg px-4 py-3 text-sm outline-none transition-all programs-section-1-input-1",
                    )}
                    type="email"
                    id="contact-email"
                    required={true}
                    name="email"
                    defaultValue=""
                    data-i18n="contact-details.input-2"
                  />
                </div>
                <div>
                  <label
                    {...attrs(
                      "contact-details.label-3",
                      "block text-xs font-semibold mb-1.5 home-hero-section-1-text-2",
                    )}
                    htmlFor="contact-subject"
                    data-i18n="contact-details.label-3"
                  >
                    {text("contact-details.label-3")}
                  </label>
                  <input
                    {...attrs(
                      "contact-details.input-3",
                      "w-full rounded-lg px-4 py-3 text-sm outline-none transition-all programs-section-1-input-1",
                    )}
                    type="text"
                    id="contact-subject"
                    name="subject"
                    defaultValue=""
                    data-i18n="contact-details.input-3"
                  />
                </div>
                <div>
                  <label
                    {...attrs(
                      "contact-details.label-4",
                      "block text-xs font-semibold mb-1.5 home-hero-section-1-text-2",
                    )}
                    htmlFor="contact-message"
                    data-i18n="contact-details.label-4"
                  >
                    {text("contact-details.label-4")}
                  </label>
                  <textarea
                    {...attrs(
                      "contact-details.textarea-1",
                      "w-full rounded-lg px-4 py-3 text-sm outline-none resize-none transition-all programs-section-1-input-1",
                    )}
                    id="contact-message"
                    name="message"
                    rows={5}
                    required={true}
                    data-i18n="contact-details.textarea-1"
                  ></textarea>
                </div>
                <button
                  {...attrs(
                    "contact-details.button-1",
                    "self-start px-7 py-3 font-semibold rounded transition-all hover:opacity-90 nav-link-3",
                  )}
                  type="submit"
                  data-i18n="contact-details.button-1"
                >
                  {text("contact-details.button-1")}
                </button>
                <p id="contact-status" role="status" className="form-note">
                  {draftRequested
                    ? label(
                        "Email draft requested. Nothing has been sent yet. If no app opens, email lcmmusa@yahoo.com.",
                        "已要求開啟郵件草稿，尚未寄出。若郵件程式未開啟，請寄信至 lcmmusa@yahoo.com。",
                      )
                    : ""}
                </p>
              </form>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h2
                  {...attrs(
                    "contact-details.heading-2",
                    "text-2xl font-bold mb-6 home-hero-section-1-title-1",
                  )}
                  data-i18n="contact-details.heading-2"
                >
                  {text("contact-details.heading-2")}
                </h2>
                <div className="rounded-xl p-6 flex flex-col gap-4 film-section-1-box-4">
                  <div className="flex items-start gap-3">
                    <span className="text-lg shrink-0 mt-0.5">{"📍"}</span>
                    <p className="text-sm film-section-1-text-1">
                      {"43433 Mission Blvd., Suite 102, Fremont, CA 94539"}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg shrink-0 mt-0.5">{"📞"}</span>
                    <AppLink
                      href="tel:510-366-9842"
                      className="text-sm transition-opacity hover:opacity-70 film-section-1-text-1"
                    >
                      {"510-366-9842"}
                    </AppLink>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg shrink-0 mt-0.5">{"✉️"}</span>
                    <AppLink
                      href="mailto:lcmmusa@yahoo.com"
                      className="text-sm transition-opacity hover:opacity-70 film-section-1-text-1"
                    >
                      {"lcmmusa@yahoo.com"}
                    </AppLink>
                  </div>
                  <div className="flex items-start gap-3 pt-2 border-t film-section-1-box-5">
                    <span className="text-lg shrink-0 mt-0.5">{"🕐"}</span>
                    <div>
                      <p
                        {...attrs(
                          "contact-details.paragraph-2",
                          "text-xs font-semibold mb-0.5 home-hero-section-1-text-2",
                        )}
                        data-i18n="contact-details.paragraph-2"
                      >
                        {text("contact-details.paragraph-2")}
                      </p>
                      <p
                        {...attrs(
                          "contact-details.paragraph-3",
                          "text-sm film-section-1-text-1",
                        )}
                        data-i18n="contact-details.paragraph-3"
                      >
                        {text("contact-details.paragraph-3")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden film-section-1-box-1">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=43433+Mission+Blvd+Fremont+CA&output=embed"
                  title="LCMM Office Location"
                  className="mission-vision-section-1-iframe-1"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* faq */}
        <section className="faq programs-section-1">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 home-hero-section-1-text-1">
              {"FAQ"}
            </p>
            <h2
              {...attrs(
                "faq.heading-1",
                "text-4xl font-bold mb-10 home-hero-section-1-title-1",
              )}
              data-i18n="faq.heading-1"
            >
              {text("faq.heading-1")}
            </h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden film-section-1-box-4">
                <button
                  data-faq="0"
                  aria-expanded={openFaq === "faq-0"}
                  aria-controls="faq-0"
                  className="w-full flex items-center justify-between p-5 text-left transition-all hover:opacity-80"
                  type="button"
                  onClick={() =>
                    setOpenFaq((current) =>
                      current === "faq-0" ? null : "faq-0",
                    )
                  }
                >
                  <span
                    {...attrs(
                      "faq.label-1",
                      "font-semibold text-base pr-4 film-section-1-text-1",
                    )}
                    data-i18n="faq.label-1"
                  >
                    {text("faq.label-1")}
                  </span>
                  <span>{openFaq === "faq-0" ? "−" : "+"}</span>
                </button>
                <div
                  hidden={openFaq !== "faq-0"}
                  id="faq-0"
                  className="px-5 pb-5"
                >
                  <p
                    {...attrs(
                      "faq.paragraph-1",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="faq.paragraph-1"
                  >
                    {text("faq.paragraph-1")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden film-section-1-box-4">
                <button
                  data-faq="1"
                  aria-expanded={openFaq === "faq-1"}
                  aria-controls="faq-1"
                  className="w-full flex items-center justify-between p-5 text-left transition-all hover:opacity-80"
                  type="button"
                  onClick={() =>
                    setOpenFaq((current) =>
                      current === "faq-1" ? null : "faq-1",
                    )
                  }
                >
                  <span
                    {...attrs(
                      "faq.label-2",
                      "font-semibold text-base pr-4 film-section-1-text-1",
                    )}
                    data-i18n="faq.label-2"
                  >
                    {text("faq.label-2")}
                  </span>
                  <span>{openFaq === "faq-1" ? "−" : "+"}</span>
                </button>
                <div
                  hidden={openFaq !== "faq-1"}
                  id="faq-1"
                  className="px-5 pb-5"
                >
                  <p
                    {...attrs(
                      "faq.paragraph-2",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="faq.paragraph-2"
                  >
                    {text("faq.paragraph-2")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden film-section-1-box-4">
                <button
                  data-faq="2"
                  aria-expanded={openFaq === "faq-2"}
                  aria-controls="faq-2"
                  className="w-full flex items-center justify-between p-5 text-left transition-all hover:opacity-80"
                  type="button"
                  onClick={() =>
                    setOpenFaq((current) =>
                      current === "faq-2" ? null : "faq-2",
                    )
                  }
                >
                  <span
                    {...attrs(
                      "faq.label-3",
                      "font-semibold text-base pr-4 film-section-1-text-1",
                    )}
                    data-i18n="faq.label-3"
                  >
                    {text("faq.label-3")}
                  </span>
                  <span>{openFaq === "faq-2" ? "−" : "+"}</span>
                </button>
                <div
                  hidden={openFaq !== "faq-2"}
                  id="faq-2"
                  className="px-5 pb-5"
                >
                  <p
                    {...attrs(
                      "faq.paragraph-3",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="faq.paragraph-3"
                  >
                    {text("faq.paragraph-3")}
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden film-section-1-box-4">
                <button
                  data-faq="3"
                  aria-expanded={openFaq === "faq-3"}
                  aria-controls="faq-3"
                  className="w-full flex items-center justify-between p-5 text-left transition-all hover:opacity-80"
                  type="button"
                  onClick={() =>
                    setOpenFaq((current) =>
                      current === "faq-3" ? null : "faq-3",
                    )
                  }
                >
                  <span
                    {...attrs(
                      "faq.label-4",
                      "font-semibold text-base pr-4 film-section-1-text-1",
                    )}
                    data-i18n="faq.label-4"
                  >
                    {text("faq.label-4")}
                  </span>
                  <span>{openFaq === "faq-3" ? "−" : "+"}</span>
                </button>
                <div
                  hidden={openFaq !== "faq-3"}
                  id="faq-3"
                  className="px-5 pb-5"
                >
                  <p
                    {...attrs(
                      "faq.paragraph-4",
                      "text-sm leading-relaxed home-hero-section-1-text-2",
                    )}
                    data-i18n="faq.paragraph-4"
                  >
                    {text("faq.paragraph-4")}
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
