import { createBrowserRouter, createHashRouter, Link } from "react-router"
import Root from "@/app/Root"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Ministries from "@/pages/Ministries"
import Testimonies from "@/pages/Testimonies"
import Contact from "@/pages/Contact"
import Media from "@/pages/Media"
import Post from "@/pages/Post"

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p>Page not found / 找不到網頁</p>
      <Link to="/" className="mt-6 underline">
        Back to Home / 回首頁
      </Link>
    </div>
  )
}
const routes = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "posts/:slug", Component: Post },
      ...Object.entries({
        about: About,
        ministries: Ministries,
        testimonies: Testimonies,
        media: Media,
        contact: Contact,
      }).flatMap(([path, Component]) => [
        { path, Component },
        { path: `${path}.html`, Component },
      ]),
      { path: "index.html", Component: Home },
      { path: "*", Component: NotFound },
    ],
  },
]
// Figma keeps its normal paths. GitHub Pages uses #/about so refreshing a route works.
const useHash = import.meta.env.VITE_ROUTER_MODE === "hash"
if (useHash && !window.location.hash) {
  const legacy = window.location.pathname.match(
    /\/(about|ministries|testimonies|media|contact)\.html$/,
  )
  if (legacy)
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#/${legacy[1]}`,
    )
}
const basename =
  new URL(import.meta.env.BASE_URL, window.location.origin).pathname.replace(
    /\/$/,
    "",
  ) || "/"
export const router = useHash
  ? createHashRouter(routes)
  : createBrowserRouter(routes, { basename })
