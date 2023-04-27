import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean|null>(null)
  useEffect(() => {
    const mediaMatch = window.matchMedia(query)
    if (matches === null) {
      setMatches(mediaMatch.matches)
    }
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mediaMatch.addEventListener('change', handler)
    return () => mediaMatch.removeEventListener('change', handler)
  }, [setMatches, matches, query])

  return matches
}

export default useMediaQuery
