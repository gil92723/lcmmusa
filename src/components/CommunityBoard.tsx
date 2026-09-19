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

export default function CommunityBoard() {
  const { text, attrs, label } = usePageCopy("index")
  const board = useDemoBoard()
  return (
    <section className="transition-colors duration-300 community programs-section-1">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p
              {...attrs(
                "community.paragraph-1",
                "text-xs font-semibold tracking-widest uppercase mb-2 programs-section-1-text-1",
              )}
              data-i18n="community.paragraph-1"
            >
              {text("community.paragraph-1")}
            </p>
            <h2
              {...attrs(
                "community.heading-1",
                "text-4xl font-bold home-hero-section-1-title-1",
              )}
              data-i18n="community.heading-1"
            >
              {text("community.heading-1")}
            </h2>
            <p
              {...attrs("community.paragraph-2", "form-note")}
              data-i18n="community.paragraph-2"
            >
              {text("community.paragraph-2")}
            </p>
          </div>
          <button
            {...attrs(
              "community.button-1",
              "px-4 py-2.5 rounded text-sm font-semibold transition-all hover:opacity-80 programs-section-1-button-1",
            )}
            data-post-toggle=""
            aria-expanded={board.open}
            aria-controls="post-editor"
            data-i18n="community.button-1"
            type="button"
            onClick={() => board.setOpen(!board.open)}
            ref={board.toggleRef}
          >
            {text("community.button-1")}
          </button>
        </div>
        <div
          id="post-editor"
          hidden={!board.open}
          className="rounded-xl p-6 mb-8 film-section-1-box-4"
        >
          <p
            {...attrs(
              "community.paragraph-3",
              "font-semibold mb-4 film-section-1-text-1",
            )}
            data-i18n="community.paragraph-3"
          >
            {text("community.paragraph-3")}
          </p>
          <input
            {...attrs(
              "community.input-1",
              "w-full rounded-lg px-4 py-2.5 text-sm mb-3 outline-none programs-section-1-input-1",
            )}
            type="text"
            id="post-title"
            data-i18n="community.input-1"
            value={board.title}
            onChange={(event) => board.setTitle(event.target.value)}
            ref={board.titleRef}
          />
          <textarea
            {...attrs(
              "community.textarea-1",
              "w-full rounded-lg px-4 py-2.5 text-sm mb-4 outline-none resize-none programs-section-1-input-1",
            )}
            rows={4}
            id="post-body"
            data-i18n="community.textarea-1"
            value={board.body}
            onChange={(event) => board.setBody(event.target.value)}
          ></textarea>
          <div className="flex gap-3 justify-end">
            <button
              {...attrs(
                "community.button-2",
                "px-4 py-2 text-sm rounded home-hero-section-1-text-2",
              )}
              data-post-cancel=""
              data-i18n="community.button-2"
              type="button"
              onClick={() => board.setOpen(false)}
            >
              {text("community.button-2")}
            </button>
            <button
              {...attrs(
                "community.button-3",
                "px-5 py-2 text-sm font-semibold rounded hover:opacity-80 programs-section-1-button-2",
              )}
              data-post-submit=""
              data-i18n="community.button-3"
              type="button"
              onClick={board.submit}
            >
              {text("community.button-3")}
            </button>
          </div>
          <p id="post-status" role="status" className="form-note">
            {board.invalid
              ? label("Please enter a title and message.", "請填寫標題與內容。")
              : ""}
          </p>
        </div>
        <div id="community-posts" className="flex flex-col gap-5">
          {board.posts.map((post) => (
            <DemoPostCard
              key={post.id}
              post={post}
              liked={!!board.likes[post.id]}
              onLike={() => board.toggleLike(post.id)}
            />
          ))}
          <div
            data-post="1"
            className="rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4"
          >
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                  {"王"}
                </div>
                <div>
                  <p
                    {...attrs(
                      "community.paragraph-4",
                      "text-sm font-semibold film-section-1-text-1",
                    )}
                    data-i18n="community.paragraph-4"
                  >
                    {"王牧師"}
                  </p>
                  <p className="text-xs home-hero-section-1-text-2">
                    {"顧問 · 2026-09-15"}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 programs-section-1-label-1">
                {"禱告"}
              </span>
            </div>
            <h3 className="font-bold text-base mb-1.5 film-section-1-text-2">
              {"為孟加拉工場禱告"}
            </h3>
            <p
              {...attrs(
                "community.paragraph-5",
                "text-sm leading-relaxed mb-4 home-hero-section-1-text-2",
              )}
              data-i18n="community.paragraph-5"
            >
              {
                "本週工場報告：診所本月接待了320名病患，其中45人初次聆聽福音。請為當地醫護人員的健康與力量禱告。"
              }
            </p>
            <button
              {...attrs(
                "community.button-4",
                "flex items-center gap-1.5 text-sm transition-all hover:scale-105 home-hero-section-1-text-2",
              )}
              data-like="1"
              aria-pressed={!!board.likes["1"]}
              data-i18n="community.button-4"
              type="button"
              onClick={() => board.toggleLike("1")}
            >
              <span>{board.likes["1"] ? "♥" : "♡"}</span>
              <span>{18 + (board.likes["1"] ? 1 : 0)}</span>
            </button>
          </div>
          <div
            data-post="2"
            className="rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4"
          >
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                  {"D"}
                </div>
                <div>
                  <p
                    {...attrs(
                      "community.paragraph-6",
                      "text-sm font-semibold film-section-1-text-1",
                    )}
                    data-i18n="community.paragraph-6"
                  >
                    {"Dr. Grace Chen"}
                  </p>
                  <p className="text-xs home-hero-section-1-text-2">
                    {"Board Member · 2026-09-12"}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 programs-section-1-label-2">
                {"Announcement"}
              </span>
            </div>
            <h3 className="font-bold text-base mb-1.5 film-section-1-text-2">
              {"MSCE 2026 Application Now Open"}
            </h3>
            <p
              {...attrs(
                "community.paragraph-7",
                "text-sm leading-relaxed mb-4 home-hero-section-1-text-2",
              )}
              data-i18n="community.paragraph-7"
            >
              {
                "We are excited to announce that applications for the 2026 Medical Students Cultural Exchange Program are now open!"
              }
            </p>
            <button
              {...attrs(
                "community.button-5",
                "flex items-center gap-1.5 text-sm transition-all hover:scale-105 home-hero-section-1-text-2",
              )}
              data-like="2"
              aria-pressed={!!board.likes["2"]}
              data-i18n="community.button-5"
              type="button"
              onClick={() => board.toggleLike("2")}
            >
              <span>{board.likes["2"] ? "♥" : "♡"}</span>
              <span>{31 + (board.likes["2"] ? 1 : 0)}</span>
            </button>
          </div>
          <div
            data-post="3"
            className="rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4"
          >
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                  {"林"}
                </div>
                <div>
                  <p
                    {...attrs(
                      "community.paragraph-8",
                      "text-sm font-semibold film-section-1-text-1",
                    )}
                    data-i18n="community.paragraph-8"
                  >
                    {"林傳道"}
                  </p>
                  <p className="text-xs home-hero-section-1-text-2">
                    {"事工同工 · 2026-09-08"}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 programs-section-1-label-3">
                {"事工更新"}
              </span>
            </div>
            <h3 className="font-bold text-base mb-1.5 film-section-1-text-2">
              {"台東部落星光：九月更新"}
            </h3>
            <p
              {...attrs(
                "community.paragraph-9",
                "text-sm leading-relaxed mb-4 home-hero-section-1-text-2",
              )}
              data-i18n="community.paragraph-9"
            >
              {
                "星光大使本月深入兩個部落，為孩子們帶去課業輔導及生命教育。感謝大家的代禱與奉獻支持！"
              }
            </p>
            <button
              {...attrs(
                "community.button-6",
                "flex items-center gap-1.5 text-sm transition-all hover:scale-105 home-hero-section-1-text-2",
              )}
              data-like="3"
              aria-pressed={!!board.likes["3"]}
              data-i18n="community.button-6"
              type="button"
              onClick={() => board.toggleLike("3")}
            >
              <span>{board.likes["3"] ? "♥" : "♡"}</span>
              <span>{24 + (board.likes["3"] ? 1 : 0)}</span>
            </button>
          </div>
          <div
            data-post="4"
            className="rounded-xl p-6 transition-all duration-200 hover:-translate-y-0.5 film-section-1-box-4"
          >
            <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0 programs-section-1-box-2">
                  {"N"}
                </div>
                <div>
                  <p
                    {...attrs(
                      "community.paragraph-10",
                      "text-sm font-semibold film-section-1-text-1",
                    )}
                    data-i18n="community.paragraph-10"
                  >
                    {"Newsletter Team"}
                  </p>
                  <p className="text-xs home-hero-section-1-text-2">
                    {"LCMM Staff · 2026-09-05"}
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full shrink-0 programs-section-1-label-4">
                {"Newsletter"}
              </span>
            </div>
            <h3 className="font-bold text-base mb-1.5 film-section-1-text-2">
              {"The Calling – September Issue"}
            </h3>
            <p
              {...attrs(
                "community.paragraph-11",
                "text-sm leading-relaxed mb-4 home-hero-section-1-text-2",
              )}
              data-i18n="community.paragraph-11"
            >
              {
                "The September issue of The Calling is now available. Focus: testimonies from our Namibia mission team and an article on faith and bioethics."
              }
            </p>
            <button
              {...attrs(
                "community.button-7",
                "flex items-center gap-1.5 text-sm transition-all hover:scale-105 home-hero-section-1-text-2",
              )}
              data-like="4"
              aria-pressed={!!board.likes["4"]}
              data-i18n="community.button-7"
              type="button"
              onClick={() => board.toggleLike("4")}
            >
              <span>{board.likes["4"] ? "♥" : "♡"}</span>
              <span>{14 + (board.likes["4"] ? 1 : 0)}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
