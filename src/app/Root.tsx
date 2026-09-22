import { useEffect } from "react"
import { Outlet, useLocation } from "react-router"
import { PreferencesProvider } from "@/app/context"
import SiteHeader from "@/components/layout/SiteHeader"
import SiteFooter from "@/components/layout/SiteFooter"
import { pageKey, usePageCopy } from "@/lib/ui"

function SiteLayout() {
  const location = useLocation()
  const page = pageKey(location.pathname)
  const { text, title } = usePageCopy(page)
  const isPost = location.pathname.startsWith("/posts/")
  useEffect(() => {
    document.title = `${isPost ? "Article / 文章" : title} | LCMM`
    document.body.dataset.page = page
  }, [title, page, isPost])
  useEffect(() => {
    if (location.hash) {
      const timer = requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      )
      return () => cancelAnimationFrame(timer)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById("main-content")?.focus()
        }}
      >
        {text("page.link-1")}
      </a>
      <div className="site-shell site-box-1">
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
export default function Root() {
  return (
    <PreferencesProvider>
      <SiteLayout />
    </PreferencesProvider>
  )
}
