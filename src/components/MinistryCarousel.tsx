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

export default function MinistryCarousel() {
  const { text, attrs, label } = usePageCopy("index")
  const carousel = useCarousel(6)
  return (
    <div
      {...attrs(
        "home-hero.div-1",
        "relative rounded-2xl overflow-hidden select-none home-hero-section-1-box-1",
      )}
      {...carousel.region}
      data-carousel=""
      role="region"
      aria-roledescription="carousel"
      data-i18n="home-hero.div-1"
    >
      <div
        data-slide="0"
        className="absolute inset-0 transition-opacity duration-700 home-hero-section-1-box-2"
        data-active={String(carousel.current === 0)}
        aria-hidden={carousel.current !== 0}
      >
        <img
          {...attrs("home-hero.image-1", "w-full h-full object-cover")}
          src={asset("assets/images/photo-01.jpg")}
          decoding="async"
          data-i18n="home-hero.image-1"
        />
        <div className="absolute inset-0 home-hero-section-1-box-3"></div>
        <span
          {...attrs(
            "home-hero.label-1",
            "absolute bottom-4 left-5 text-white font-semibold text-sm tracking-wide home-hero-section-1-label-1",
          )}
          data-i18n="home-hero.label-1"
        >
          {text("home-hero.label-1")}
        </span>
      </div>
      <div
        data-slide="1"
        className="absolute inset-0 transition-opacity duration-700 home-hero-section-1-box-4"
        data-active={String(carousel.current === 1)}
        aria-hidden={carousel.current !== 1}
      >
        <img
          {...attrs("home-hero.image-2", "w-full h-full object-cover")}
          src={asset("assets/images/photo-02.jpg")}
          decoding="async"
          data-i18n="home-hero.image-2"
        />
        <div className="absolute inset-0 home-hero-section-1-box-3"></div>
        <span
          {...attrs(
            "home-hero.label-2",
            "absolute bottom-4 left-5 text-white font-semibold text-sm tracking-wide home-hero-section-1-label-1",
          )}
          data-i18n="home-hero.label-2"
        >
          {text("home-hero.label-2")}
        </span>
      </div>
      <div
        data-slide="2"
        className="absolute inset-0 transition-opacity duration-700 home-hero-section-1-box-4"
        data-active={String(carousel.current === 2)}
        aria-hidden={carousel.current !== 2}
      >
        <img
          {...attrs("home-hero.image-3", "w-full h-full object-cover")}
          src={asset("assets/images/photo-03.jpg")}
          decoding="async"
          data-i18n="home-hero.image-3"
        />
        <div className="absolute inset-0 home-hero-section-1-box-3"></div>
        <span
          {...attrs(
            "home-hero.label-3",
            "absolute bottom-4 left-5 text-white font-semibold text-sm tracking-wide home-hero-section-1-label-1",
          )}
          data-i18n="home-hero.label-3"
        >
          {text("home-hero.label-3")}
        </span>
      </div>
      <div
        data-slide="3"
        className="absolute inset-0 transition-opacity duration-700 home-hero-section-1-box-4"
        data-active={String(carousel.current === 3)}
        aria-hidden={carousel.current !== 3}
      >
        <img
          {...attrs("home-hero.image-4", "w-full h-full object-cover")}
          src={asset("assets/images/photo-04.jpg")}
          decoding="async"
          data-i18n="home-hero.image-4"
        />
        <div className="absolute inset-0 home-hero-section-1-box-3"></div>
        <span
          {...attrs(
            "home-hero.label-4",
            "absolute bottom-4 left-5 text-white font-semibold text-sm tracking-wide home-hero-section-1-label-1",
          )}
          data-i18n="home-hero.label-4"
        >
          {text("home-hero.label-4")}
        </span>
      </div>
      <div
        data-slide="4"
        className="absolute inset-0 transition-opacity duration-700 home-hero-section-1-box-4"
        data-active={String(carousel.current === 4)}
        aria-hidden={carousel.current !== 4}
      >
        <img
          {...attrs("home-hero.image-5", "w-full h-full object-cover")}
          src={asset("assets/images/photo-05.jpg")}
          decoding="async"
          data-i18n="home-hero.image-5"
        />
        <div className="absolute inset-0 home-hero-section-1-box-3"></div>
        <span
          {...attrs(
            "home-hero.label-5",
            "absolute bottom-4 left-5 text-white font-semibold text-sm tracking-wide home-hero-section-1-label-1",
          )}
          data-i18n="home-hero.label-5"
        >
          {text("home-hero.label-5")}
        </span>
      </div>
      <div
        data-slide="5"
        className="absolute inset-0 transition-opacity duration-700 home-hero-section-1-box-4"
        data-active={String(carousel.current === 5)}
        aria-hidden={carousel.current !== 5}
      >
        <img
          {...attrs("home-hero.image-6", "w-full h-full object-cover")}
          src={asset("assets/images/photo-06.jpg")}
          decoding="async"
          data-i18n="home-hero.image-6"
        />
        <div className="absolute inset-0 home-hero-section-1-box-3"></div>
        <span
          {...attrs(
            "home-hero.label-6",
            "absolute bottom-4 left-5 text-white font-semibold text-sm tracking-wide home-hero-section-1-label-1",
          )}
          data-i18n="home-hero.label-6"
        >
          {text("home-hero.label-6")}
        </span>
      </div>
      <button
        data-slide-step="-1"
        aria-label={label("Previous", "上一張")}
        className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110 home-hero-section-1-button-1"
        type="button"
        onClick={() => carousel.step(-1)}
      >
        {"‹"}
      </button>
      <button
        data-slide-step="1"
        aria-label={label("Next", "下一張")}
        className="absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110 home-hero-section-1-button-2"
        type="button"
        onClick={() => carousel.step(1)}
      >
        {"›"}
      </button>
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        <button
          data-slide-to="0"
          aria-label={label("Slide 1", "第 1 張")}
          className="rounded-full transition-all duration-300 home-hero-section-1-button-3"
          type="button"
          onClick={() => carousel.setCurrent(0)}
          aria-pressed={carousel.current === 0}
        ></button>
        <button
          data-slide-to="1"
          aria-label={label("Slide 2", "第 2 張")}
          className="rounded-full transition-all duration-300 home-hero-section-1-button-4"
          type="button"
          onClick={() => carousel.setCurrent(1)}
          aria-pressed={carousel.current === 1}
        ></button>
        <button
          data-slide-to="2"
          aria-label={label("Slide 3", "第 3 張")}
          className="rounded-full transition-all duration-300 home-hero-section-1-button-4"
          type="button"
          onClick={() => carousel.setCurrent(2)}
          aria-pressed={carousel.current === 2}
        ></button>
        <button
          data-slide-to="3"
          aria-label={label("Slide 4", "第 4 張")}
          className="rounded-full transition-all duration-300 home-hero-section-1-button-4"
          type="button"
          onClick={() => carousel.setCurrent(3)}
          aria-pressed={carousel.current === 3}
        ></button>
        <button
          data-slide-to="4"
          aria-label={label("Slide 5", "第 5 張")}
          className="rounded-full transition-all duration-300 home-hero-section-1-button-4"
          type="button"
          onClick={() => carousel.setCurrent(4)}
          aria-pressed={carousel.current === 4}
        ></button>
        <button
          data-slide-to="5"
          aria-label={label("Slide 6", "第 6 張")}
          className="rounded-full transition-all duration-300 home-hero-section-1-button-4"
          type="button"
          onClick={() => carousel.setCurrent(5)}
          aria-pressed={carousel.current === 5}
        ></button>
      </div>
      <button
        {...attrs("home-hero.button-1", "carousel-pause")}
        data-carousel-pause=""
        aria-pressed={carousel.paused}
        data-i18n="home-hero.button-1"
        type="button"
        onClick={() => carousel.setPaused(!carousel.paused)}
      >
        {carousel.paused
          ? label("Play slideshow", "播放輪播")
          : label("Pause slideshow", "暫停輪播")}
      </button>
    </div>
  )
}
