import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react"

export type Lang = "zh" | "en"
export type Theme = "light" | "dark"
export const LangContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
}>({ lang: "en", setLang: () => {} })
export const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({ theme: "light", setTheme: () => {} })
export const useLang = () => useContext(LangContext)
export const useTheme = () => useContext(ThemeContext)

function saved(key: string) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* Private browsing can disable storage. */
  }
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [lang, updateLang] = useState<Lang>(() => {
    const value = saved("lcmm-language")
    return value === "en" || value === "zh"
      ? value
      : navigator.language.toLowerCase().startsWith("zh")
        ? "zh"
        : "en"
  })
  const [theme, updateTheme] = useState<Theme>(() => {
    const value = saved("lcmm-theme")
    return value === "light" || value === "dark"
      ? value
      : matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
  })
  const setLang = (value: Lang) => {
    save("lcmm-language", value)
    updateLang(value)
  }
  const setTheme = (value: Theme) => {
    save("lcmm-theme", value)
    updateTheme(value)
  }
  useLayoutEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en"
    document.documentElement.dataset.language = lang
    document.documentElement.dataset.theme = theme
  }, [lang, theme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LangContext.Provider value={{ lang, setLang }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}
