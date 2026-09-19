import { useEffect, useState } from "react"
import { client } from "./client"

// A browser request replaces the tutorial's async Next.js server component.
// The key prevents a previous post from flashing while a new slug loads.
export default function useSanityQuery<T>(query: string, slug?: string) {
  const key = JSON.stringify([query, slug])
  const [attempt, setAttempt] = useState(0)
  const [state, setState] = useState<{
    key: string; attempt: number; data?: T; error: boolean; loading: boolean
  }>({ key, attempt, error: false, loading: true })
  useEffect(() => {
    const controller = new AbortController()
    setState({ key, attempt, error: false, loading: true })
    client.fetch<T>(query, slug === undefined ? {} : { slug }, {
      signal: controller.signal,
    }).then(data => {
      if (!controller.signal.aborted)
        setState({ key, attempt, data, error: false, loading: false })
    }).catch(() => {
      if (!controller.signal.aborted)
        setState({ key, attempt, error: true, loading: false })
    })
    return () => controller.abort()
  }, [query, slug, key, attempt])
  const current = state.key === key && state.attempt === attempt
  return {
    data: current ? state.data : undefined,
    loading: !current || state.loading,
    error: current && state.error,
    retry: () => setAttempt(value => value + 1),
  }
}
