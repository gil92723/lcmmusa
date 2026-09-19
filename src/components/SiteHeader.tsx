import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router"
import { useLang, useTheme } from "@/context"
import { AppLink, asset, usePageCopy, pageKey } from "@/lib/ui"
export default function SiteHeader() {
  const location = useLocation()
  const page = pageKey(location.pathname)
  const { text, attrs, label } = usePageCopy(page)
  const { lang, setLang } = useLang()
  const { theme, setTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20)
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        if (menuOpen) menuButtonRef.current?.focus()
      }
    }
    const click = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".site-header")) setMenuOpen(false)
    }
    const desktop = matchMedia("(min-width: 1024px)")
    const resize = () => {
      if (desktop.matches) setMenuOpen(false)
    }
    scroll()
    window.addEventListener("scroll", scroll, { passive: true })
    document.addEventListener("keydown", keydown)
    document.addEventListener("click", click)
    desktop.addEventListener("change", resize)
    return () => {
      window.removeEventListener("scroll", scroll)
      document.removeEventListener("keydown", keydown)
      document.removeEventListener("click", click)
      desktop.removeEventListener("change", resize)
    }
  }, [menuOpen])
  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 site-header nav-header-1" +
        (scrolled ? " is-scrolled" : "")
      }
    >
      <nav className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between gap-6 site-nav">
        <AppLink
          {...attrs("header.link-1", "shrink-0 overflow-hidden nav-link-1")}
          href="index.html"
          aria-current={page === "index" ? "page" : undefined}
          data-i18n="header.link-1"
        >
          <img
            src={asset("assets/images/lcmm-banner.png")}
            alt="Luke Christian Medical Mission / 北美路加醫療傳道會"
            decoding="async"
            className="w-auto object-cover transition-all duration-300 nav-image-1"
          />
        </AppLink>
        <div className="hidden md:flex items-center gap-5 flex-1 justify-end">
          <AppLink
            {...attrs(
              "header.link-2",
              "text-sm whitespace-nowrap transition-colors duration-150 hover:opacity-70 nav-link-2",
            )}
            href="about.html"
            data-i18n="header.link-2"
            aria-current={page === "about" ? "page" : undefined}
          >
            {text("header.link-2")}
          </AppLink>
          <AppLink
            {...attrs(
              "header.link-3",
              "text-sm whitespace-nowrap transition-colors duration-150 hover:opacity-70 nav-link-2",
            )}
            href="ministries.html"
            data-i18n="header.link-3"
            aria-current={page === "ministries" ? "page" : undefined}
          >
            {text("header.link-3")}
          </AppLink>
          <AppLink
            {...attrs(
              "header.link-4",
              "text-sm whitespace-nowrap transition-colors duration-150 hover:opacity-70 nav-link-2",
            )}
            href="testimonies.html"
            data-i18n="header.link-4"
            aria-current={page === "testimonies" ? "page" : undefined}
          >
            {text("header.link-4")}
          </AppLink>
          <AppLink
            {...attrs(
              "header.link-5",
              "text-sm whitespace-nowrap transition-colors duration-150 hover:opacity-70 nav-link-2",
            )}
            href="media.html"
            data-i18n="header.link-5"
            aria-current={page === "media" ? "page" : undefined}
          >
            {text("header.link-5")}
          </AppLink>
          <AppLink
            {...attrs(
              "header.link-6",
              "text-sm whitespace-nowrap transition-colors duration-150 hover:opacity-70 nav-link-2",
            )}
            href="contact.html"
            data-i18n="header.link-6"
            aria-current={page === "contact" ? "page" : undefined}
          >
            {text("header.link-6")}
          </AppLink>
        </div>
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            {...attrs(
              "header.link-7",
              "flex items-center gap-1 px-2.5 py-1 rounded-[5px] border text-sm font-medium transition-all duration-200 hover:opacity-70 nav-button-1",
            )}
            data-language-toggle=""
            data-i18n="header.link-7"
            type="button"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            aria-label={label("切換為中文", "Switch to English")}
            lang={lang === "en" ? "zh-Hant" : "en"}
          >
            <span className="nav-label-1">{"🌐"}</span>
            <span
              {...attrs("header.link-8.text", "")}
              data-i18n="header.link-8.text"
            >
              {text("header.link-8.text")}
            </span>
          </button>
          <button
            data-theme-toggle=""
            aria-label={
              theme === "dark"
                ? label("Use light theme", "使用淺色模式")
                : label("Use dark theme", "使用深色模式")
            }
            aria-pressed={theme === "dark"}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-70 nav-button-2"
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <span aria-hidden="true" className="theme-icon">
              {theme === "dark" ? "☀" : "☾"}
            </span>
          </button>
          <AppLink
            {...attrs(
              "header.link-9",
              "px-4 py-2 text-sm font-semibold rounded-[5px] transition-all duration-200 hover:opacity-90 whitespace-nowrap nav-link-3",
            )}
            href="contact.html"
            data-i18n="header.link-9"
            aria-current={page === "contact" ? "page" : undefined}
          >
            {text("header.link-9")}
          </AppLink>
        </div>
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <button
            {...attrs(
              "header.link-10",
              "flex items-center gap-1 px-2.5 py-1 rounded-[5px] border text-sm font-medium transition-all duration-200 hover:opacity-70 nav-button-1",
            )}
            data-language-toggle=""
            data-i18n="header.link-10"
            type="button"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            aria-label={label("切換為中文", "Switch to English")}
            lang={lang === "en" ? "zh-Hant" : "en"}
          >
            <span className="nav-label-1">{"🌐"}</span>
            <span
              {...attrs("header.link-11.text", "")}
              data-i18n="header.link-11.text"
            >
              {text("header.link-11.text")}
            </span>
          </button>
          <button
            data-theme-toggle=""
            aria-label={
              theme === "dark"
                ? label("Use light theme", "使用淺色模式")
                : label("Use dark theme", "使用深色模式")
            }
            aria-pressed={theme === "dark"}
            className="w-8 h-8 flex items-center justify-center rounded-full nav-button-2"
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <span aria-hidden="true" className="theme-icon">
              {theme === "dark" ? "☀" : "☾"}
            </span>
          </button>
          <button
            data-menu-toggle=""
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={label("Toggle menu", "開啟或關閉選單")}
            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            ref={menuButtonRef}
          >
            <span className="block w-5 h-0.5 transition-all duration-200 rounded-full nav-label-2"></span>
            <span className="block w-5 h-0.5 rounded-full transition-all duration-200 nav-label-3"></span>
            <span className="block w-5 h-0.5 rounded-full transition-all duration-200 nav-label-2"></span>
          </button>
        </div>
      </nav>
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="md:hidden px-6 pb-6 flex flex-col gap-1 nav-box-1"
      >
        <AppLink
          {...attrs(
            "header.link-12",
            "text-sm py-2.5 border-b transition-colors nav-link-4",
          )}
          href="about.html"
          data-i18n="header.link-12"
          aria-current={page === "about" ? "page" : undefined}
        >
          {text("header.link-12")}
        </AppLink>
        <AppLink
          {...attrs(
            "header.link-13",
            "text-sm py-2.5 border-b transition-colors nav-link-4",
          )}
          href="ministries.html"
          data-i18n="header.link-13"
          aria-current={page === "ministries" ? "page" : undefined}
        >
          {text("header.link-13")}
        </AppLink>
        <AppLink
          {...attrs(
            "header.link-14",
            "text-sm py-2.5 border-b transition-colors nav-link-4",
          )}
          href="testimonies.html"
          data-i18n="header.link-14"
          aria-current={page === "testimonies" ? "page" : undefined}
        >
          {text("header.link-14")}
        </AppLink>
        <AppLink
          {...attrs(
            "header.link-15",
            "text-sm py-2.5 border-b transition-colors nav-link-4",
          )}
          href="media.html"
          data-i18n="header.link-15"
          aria-current={page === "media" ? "page" : undefined}
        >
          {text("header.link-15")}
        </AppLink>
        <AppLink
          {...attrs(
            "header.link-16",
            "text-sm py-2.5 border-b transition-colors nav-link-4",
          )}
          href="contact.html"
          data-i18n="header.link-16"
          aria-current={page === "contact" ? "page" : undefined}
        >
          {text("header.link-16")}
        </AppLink>
        <AppLink
          {...attrs(
            "header.link-17",
            "text-sm py-2.5 border-b font-semibold nav-link-5",
          )}
          href="contact.html"
          data-i18n="header.link-17"
          aria-current={page === "contact" ? "page" : undefined}
        >
          {text("header.link-17")}
        </AppLink>
      </div>
    </header>
  )
}
