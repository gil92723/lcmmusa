/* Read preferences before styles load, to reduce a flash of the wrong theme. */
(() => {
  let language, theme;
  try {
    language = localStorage.getItem("lcmm-language");
    theme = localStorage.getItem("lcmm-theme");
  } catch {
    /* Some direct-file and private previews disable storage. */
  }
  if (!["en", "zh"].includes(language)) {
    language = (navigator.language || "").toLowerCase().startsWith("zh")
      ? "zh"
      : "en";
  }
  if (!["light", "dark"].includes(theme)) {
    theme = matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";
  document.documentElement.dataset.language = language;
  document.documentElement.dataset.theme = theme;
})();
