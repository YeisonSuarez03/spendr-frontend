import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * useDebounce
 * Returns a debounced version of a value after the specified delay.
 * If `delayMs` is undefined, falls back to env `VITE_FILTER_DEBOUNCE_MS` or 300ms.
 */
export function useDebounce<T>(value: T, delayMs?: number) {
  const envDelay = useMemo(() => {
    const d = Number(import.meta.env.VITE_FILTER_DEBOUNCE_MS)
    return Number.isFinite(d) && d > 0 ? d : 300
  }, [])

  const delay = typeof delayMs === 'number' && delayMs > 0 ? delayMs : envDelay
  const [debounced, setDebounced] = useState<T>(value)
  const timeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    // Clear any existing timeout and schedule new one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => {
      setDebounced(value)
    }, delay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [value, delay])

  return debounced
}
