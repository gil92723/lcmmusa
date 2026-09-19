/* LCMM interactions — plain JavaScript, no packages or build step. */
(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];
  let zh = document.documentElement.lang.startsWith("zh");
  const text = (en, chinese) => (zh ? chinese : en);
  const storage = {
    get(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        /* File previews may disable storage. */
      }
    },
  };

  // Language changes only text and presentation attributes; existing DOM state stays intact.
  const translations = window.LCMM_TRANSLATIONS?.[document.body.dataset.page];
  function translatedEntry(element) {
    return translations?.entries[element.dataset.i18n];
  }
  function defaultText(element) {
    return (
      translatedEntry(element)?.text?.[zh ? "zh" : "en"] || element.textContent
    );
  }
  function setLanguage(language, save = true, keepScroll = true) {
    if (!translations || !["en", "zh"].includes(language)) return;
    const position = { x: scrollX, y: scrollY };
    zh = language === "zh";
    document.documentElement.lang = zh ? "zh-Hant" : "en";
    document.documentElement.dataset.language = language;
    document.title = translations.title[language] + " | LCMM";
    $$("[data-i18n]").forEach((element) => {
      const entry = translatedEntry(element);
      if (!entry) return;
      if (entry.text) element.textContent = entry.text[language];
      for (const [attribute, values] of Object.entries(
        entry.attributes || {},
      )) {
        element.setAttribute(attribute, values[language]);
      }
      if (entry.classes) {
        [...entry.classes.en, ...entry.classes.zh].forEach((name) =>
          element.classList.remove(name),
        );
        entry.classes[language].forEach((name) => element.classList.add(name));
      }
    });
    $$("[data-language-toggle]").forEach((button) => {
      button.setAttribute(
        "aria-label",
        zh ? "Switch to English" : "切換為中文",
      );
      button.lang = zh ? "en" : "zh-Hant";
    });
    if (save) storage.set("lcmm-language", language);
    document.dispatchEvent(
      new CustomEvent("lcmm:languagechange", { detail: { language } }),
    );
    if (keepScroll)
      requestAnimationFrame(() => scrollTo(position.x, position.y));
  }
  $$("[data-language-toggle]").forEach((button) =>
    button.addEventListener("click", () => {
      setLanguage(zh ? "en" : "zh");
    }),
  );

  // Light/dark styling is independent of the selected language.
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    $$("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-pressed", String(theme === "dark"));
      button.setAttribute(
        "aria-label",
        theme === "dark"
          ? text("Use light theme", "使用淺色模式")
          : text("Use dark theme", "使用深色模式"),
      );
      $(".theme-icon", button).textContent = theme === "dark" ? "☀" : "☾";
    });
  }
  setTheme(
    document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  );
  document.addEventListener("lcmm:languagechange", () =>
    setTheme(document.documentElement.dataset.theme),
  );
  $$("[data-theme-toggle]").forEach((button) =>
    button.addEventListener("click", () => {
      const next =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(next);
      storage.set("lcmm-theme", next);
    }),
  );

  // Mobile navigation and the original header scroll treatment.
  const menuButton = $("[data-menu-toggle]");
  const menu = $("#mobile-menu");
  function closeMenu() {
    if (menu) menu.hidden = true;
    menuButton?.setAttribute("aria-expanded", "false");
  }
  menuButton?.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
    menuButton.setAttribute("aria-expanded", String(!menu.hidden));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu && !menu.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  const desktop = matchMedia("(min-width: 1024px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
  function updateHeader() {
    $(".site-header")?.classList.toggle("is-scrolled", scrollY > 20);
  }
  addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // Slideshow: pauses while hovered, focused, hidden, or explicitly paused.
  const carousel = $("[data-carousel]");
  if (carousel) {
    const slides = $$("[data-slide]", carousel);
    const dots = $$("[data-slide-to]", carousel);
    const pause = $("[data-carousel-pause]", carousel);
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let current = 0,
      paused = reducedMotion.matches,
      hovered = false,
      focused = false;
    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.dataset.active = String(i === current);
        slide.setAttribute("aria-hidden", String(i !== current));
      });
      dots.forEach((dot, i) =>
        dot.setAttribute("aria-pressed", String(i === current)),
      );
    }
    function updatePause() {
      pause.setAttribute("aria-pressed", String(paused));
      pause.textContent = paused
        ? text("Play slideshow", "播放輪播")
        : text("Pause slideshow", "暫停輪播");
    }
    $$("[data-slide-step]", carousel).forEach((button) =>
      button.addEventListener("click", () =>
        show(current + Number(button.dataset.slideStep)),
      ),
    );
    dots.forEach((button) =>
      button.addEventListener("click", () =>
        show(Number(button.dataset.slideTo)),
      ),
    );
    pause.addEventListener("click", () => {
      paused = !paused;
      updatePause();
    });
    carousel.addEventListener("mouseenter", () => {
      hovered = true;
    });
    carousel.addEventListener("mouseleave", () => {
      hovered = false;
    });
    carousel.addEventListener("focusin", () => {
      focused = true;
    });
    carousel.addEventListener("focusout", (event) => {
      focused = carousel.contains(event.relatedTarget);
    });
    reducedMotion.addEventListener("change", (event) => {
      if (event.matches) {
        paused = true;
        updatePause();
      }
    });
    setInterval(() => {
      if (!paused && !hovered && !focused && !document.hidden)
        show(current + 1);
    }, 4000);
    document.addEventListener("lcmm:languagechange", updatePause);
    show(0);
    updatePause();
  }

  // Archive tabs include keyboard navigation.
  const tabs = $$("[data-tab]");
  function selectTab(button, focus = false) {
    tabs.forEach((tab) => {
      const selected = tab === button;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    $$("[data-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.panel !== button.dataset.tab;
    });
    if (focus) button.focus();
  }
  tabs.forEach((button, index) => {
    button.addEventListener("click", () => selectTab(button));
    button.addEventListener("keydown", (event) => {
      let next;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft")
        next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        selectTab(tabs[next], true);
      }
    });
  });

  // Story and FAQ disclosure controls.
  $$("[data-story]").forEach((button) => {
    button.addEventListener("click", () => {
      const story = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      story.hidden = !story.hidden;
      button.setAttribute("aria-expanded", String(!story.hidden));
      button.textContent = story.hidden
        ? defaultText(button)
        : text("Show Less ↑", "收起 ↑");
    });
  });
  $$("[data-faq]").forEach((button) =>
    button.addEventListener("click", () => {
      const target = document.getElementById(
        button.getAttribute("aria-controls"),
      );
      const opening = target.hidden;
      $$("[data-faq]").forEach((other) => {
        const answer = document.getElementById(
          other.getAttribute("aria-controls"),
        );
        answer.hidden = other !== button || !opening;
        other.setAttribute("aria-expanded", String(!answer.hidden));
        other.lastElementChild.textContent = answer.hidden ? "+" : "−";
      });
    }),
  );

  // Media filters work with cards already present in HTML.
  $$("[data-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      $$("[data-filter]").forEach((other) =>
        other.setAttribute("aria-pressed", String(other === button)),
      );
      $$("[data-media-category]").forEach((card) => {
        card.hidden =
          button.dataset.filter !== "all" &&
          card.dataset.mediaCategory !== button.dataset.filter;
        if (card.hidden) {
          const iframe = $("iframe", card);
          if (iframe) {
            iframe.remove();
            $("[data-video-src]", card).hidden = false;
          }
        }
      });
    }),
  );
  function embed(src, title) {
    const frame = document.createElement("iframe");
    const url = new URL(src);
    url.searchParams.set("autoplay", "1");
    frame.src = url.href;
    frame.title = title;
    frame.allowFullscreen = true;
    frame.allow = "autoplay; encrypted-media; picture-in-picture";
    frame.className = "video-frame";
    return frame;
  }
  $$("[data-video-src]").forEach((control) => {
    function play() {
      const card = control.closest("[data-media-category]");
      control.parentElement.append(
        embed(
          control.dataset.videoSrc,
          $(".font-bold", card).textContent.trim(),
        ),
      );
      control.hidden = true;
    }
    control.addEventListener("click", play);
    control.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        play();
      }
    });
  });
  $("[data-play-feature]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const frame = $("iframe", button.parentElement);
    const url = new URL(frame.dataset.pendingSrc);
    url.searchParams.set("autoplay", "1");
    frame.src = url.href;
    button.hidden = true;
  });

  // Contact form opens an email draft. A static website cannot deliver mail itself.
  $("#contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject =
      data.get("subject").trim() ||
      text("LCMM website inquiry", "LCMM 網站詢問");
    const body = `${text("Name", "姓名")}: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    const href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $("#contact-status").textContent =
      text(
        "Email draft requested. Nothing has been sent yet. If no app opens, email ",
        "已要求開啟郵件草稿，尚未寄出。若郵件程式未開啟，請寄信至 ",
      ) +
      form.dataset.email +
      ".";
    window.location.href = href;
  });

  // Local board demo. User-entered text is inserted as text, never HTML.
  const editor = $("#post-editor");
  function setEditor(open) {
    editor.hidden = !open;
    $("[data-post-toggle]").setAttribute("aria-expanded", String(open));
    if (open) $("#post-title").focus();
    else $("[data-post-toggle]").focus();
  }
  $("[data-post-toggle]")?.addEventListener("click", () =>
    setEditor(editor.hidden),
  );
  $("[data-post-cancel]")?.addEventListener("click", () => setEditor(false));
  $("#community-posts")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-like]");
    if (!button) return;
    const liked = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!liked));
    button.children[0].textContent = liked ? "♡" : "♥";
    button.children[1].textContent =
      Number(button.children[1].textContent) + (liked ? -1 : 1);
  });
  $("[data-post-submit]")?.addEventListener("click", () => {
    const title = $("#post-title").value.trim(),
      body = $("#post-body").value.trim();
    if (!title || !body) {
      $("#post-status").textContent = text(
        "Please enter a title and message.",
        "請填寫標題與內容。",
      );
      return;
    }
    const post = $("[data-post]").cloneNode(true);
    // A cloned demo card must never overwrite user-entered content during translation.
    [post, ...$$("[data-i18n]", post)].forEach((element) =>
      element.removeAttribute("data-i18n"),
    );
    post.dataset.localPost = new Date().toISOString();
    post.dataset.post = String(Date.now());
    const heading = $("h3", post);
    heading.textContent = title;
    heading.nextElementSibling.textContent = body;
    heading.nextElementSibling.classList.add("user-post-body");
    const author = $(".w-9", post);
    author.textContent = text("C", "社");
    author.nextElementSibling.children[0].textContent = text(
      "Community Member",
      "社群成員",
    );
    author.nextElementSibling.children[1].textContent =
      text("Local preview", "本機預覽") +
      " · " +
      new Date().toLocaleDateString(zh ? "zh-TW" : "en-US");
    const tag = $("span.rounded-full", post);
    tag.textContent = text("Community", "社群");
    const like = $("[data-like]", post);
    like.dataset.like = post.dataset.post;
    like.setAttribute("aria-pressed", "false");
    like.children[0].textContent = "♡";
    like.children[1].textContent = "0";
    $("#community-posts").prepend(post);
    $("#post-title").value = "";
    $("#post-body").value = "";
    $("#post-status").textContent = "";
    setEditor(false);
  });
  function updateDynamicLabels() {
    $("[data-menu-toggle]")?.setAttribute(
      "aria-label",
      text("Toggle menu", "開啟或關閉選單"),
    );
    $$("[data-story]").forEach((button) => {
      button.textContent =
        button.getAttribute("aria-expanded") === "true"
          ? text("Show Less ↑", "收起 ↑")
          : defaultText(button);
    });
    $$("[data-slide-step]").forEach((button) =>
      button.setAttribute(
        "aria-label",
        Number(button.dataset.slideStep) === 1
          ? text("Next", "下一張")
          : text("Previous", "上一張"),
      ),
    );
    $$("[data-slide-to]").forEach((button) =>
      button.setAttribute(
        "aria-label",
        text("Slide ", "第 ") +
          (Number(button.dataset.slideTo) + 1) +
          (zh ? " 張" : ""),
      ),
    );
    $$("[data-like]").forEach((button) =>
      button.setAttribute(
        "aria-label",
        text("Like this update", "喜歡這則訊息"),
      ),
    );
    $$("[data-media-category]").forEach((card) => {
      const frame = $("iframe", card);
      if (frame) frame.title = $(".font-bold", card).textContent.trim();
    });
    if ($("#post-status")?.textContent) {
      $("#post-status").textContent = text(
        "Please enter a title and message.",
        "請填寫標題與內容。",
      );
    }
    if ($("#contact-status")?.textContent) {
      $("#contact-status").textContent =
        text(
          "Email draft requested. Nothing has been sent yet. If no app opens, email ",
          "已要求開啟郵件草稿，尚未寄出。若郵件程式未開啟，請寄信至 ",
        ) +
        $("#contact-form").dataset.email +
        ".";
    }
    $$("[data-local-post]").forEach((post) => {
      const author = $(".w-9", post);
      author.textContent = text("C", "社");
      author.nextElementSibling.children[0].textContent = text(
        "Community Member",
        "社群成員",
      );
      author.nextElementSibling.children[1].textContent =
        text("Local preview", "本機預覽") +
        " · " +
        new Date(post.dataset.localPost).toLocaleDateString(
          zh ? "zh-TW" : "en-US",
        );
      $("span.rounded-full", post).textContent = text("Community", "社群");
    });
  }
  document.addEventListener("lcmm:languagechange", updateDynamicLabels);
  setLanguage(document.documentElement.dataset.language || "en", false, false);
})();
