import { useLocation } from "react-router"
import { AppLink, asset, usePageCopy, pageKey } from "@/lib/ui"
export default function SiteFooter() {
  const { text, attrs } = usePageCopy(pageKey(useLocation().pathname))
  return (
    <footer className="site-footer footer-footer-1">
      <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4 justify-center text-center">
          <img
            src={asset("assets/images/lcmm-crest.png")}
            alt="LCMM Crest"
            decoding="async"
            loading="lazy"
            className="h-20 w-auto object-contain footer-image-1"
          />
          <p
            {...attrs(
              "footer.paragraph-1",
              "text-xs leading-relaxed footer-text-1",
            )}
            data-i18n="footer.paragraph-1"
          >
            {text("footer.paragraph-1")}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p
            {...attrs(
              "footer.paragraph-2",
              "text-xs font-semibold tracking-widest uppercase mb-1 footer-text-2",
            )}
            data-i18n="footer.paragraph-2"
          >
            {text("footer.paragraph-2")}
          </p>
          <div className="flex items-start gap-2 text-sm footer-box-1">
            <span className="mt-0.5 shrink-0">{"📍"}</span>
            <span>{"43433 Mission Blvd., Suite 102, Fremont, CA 94539"}</span>
          </div>
          <AppLink
            href="tel:510-366-9842"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70 footer-box-1"
          >
            <span>{"📞"}</span>
            {"510-366-9842"}
          </AppLink>
          <AppLink
            href="mailto:lcmmusa@yahoo.com"
            className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70 footer-box-1"
          >
            <span>{"✉️"}</span>
            {"lcmmusa@yahoo.com"}
          </AppLink>
        </div>
        <div className="flex flex-col gap-3">
          <p
            {...attrs(
              "footer.paragraph-3",
              "text-xs font-semibold tracking-widest uppercase mb-1 footer-text-2",
            )}
            data-i18n="footer.paragraph-3"
          >
            {text("footer.paragraph-3")}
          </p>
          <AppLink
            {...attrs(
              "footer.link-1",
              "text-sm flex items-center gap-2 transition-opacity hover:opacity-70 footer-box-1",
            )}
            href="contact.html"
            data-i18n="footer.link-1"
          >
            <span className="footer-label-1">{"→"}</span>
            <span
              {...attrs("footer.link-2.text", "")}
              data-i18n="footer.link-2.text"
            >
              {text("footer.link-2.text")}
            </span>
          </AppLink>
          <AppLink
            {...attrs(
              "footer.link-3",
              "text-sm flex items-center gap-2 transition-opacity hover:opacity-70 footer-box-1",
            )}
            href="contact.html"
            data-i18n="footer.link-3"
          >
            <span className="footer-label-1">{"→"}</span>
            <span
              {...attrs("footer.link-4.text", "")}
              data-i18n="footer.link-4.text"
            >
              {text("footer.link-4.text")}
            </span>
          </AppLink>
          <AppLink
            {...attrs(
              "footer.link-5",
              "text-sm flex items-center gap-2 transition-opacity hover:opacity-70 footer-box-1",
            )}
            href="about.html"
            data-i18n="footer.link-5"
          >
            <span className="footer-label-1">{"→"}</span>
            <span
              {...attrs("footer.link-6.text", "")}
              data-i18n="footer.link-6.text"
            >
              {text("footer.link-6.text")}
            </span>
          </AppLink>
          <AppLink
            {...attrs(
              "footer.link-7",
              "text-sm flex items-center gap-2 transition-opacity hover:opacity-70 footer-box-1",
            )}
            href="ministries.html"
            data-i18n="footer.link-7"
          >
            <span className="footer-label-1">{"→"}</span>
            <span
              {...attrs("footer.link-8.text", "")}
              data-i18n="footer.link-8.text"
            >
              {text("footer.link-8.text")}
            </span>
          </AppLink>
        </div>
      </div>
      <div className="border-t py-4 footer-box-2">
        <p
          {...attrs("footer.paragraph-4", "text-center text-xs footer-text-3")}
          data-i18n="footer.paragraph-4"
        >
          {"© 2026 Luke Christian Medical Mission. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
