import { useEffect, useRef, useState } from 'react'

const TICK_MS = 250

export function useTimer(durationSeconds: number) {
  const durationMs = durationSeconds * 1000

  const [remainingMs, setRemainingMs] = useState(durationMs)
  const [isRunning, setIsRunning] = useState(false)
  const endTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      const left = (endTimeRef.current ?? 0) - Date.now()

      if (left <= 0) {
        setRemainingMs(0)
        setIsRunning(false)
      } else {
        setRemainingMs(left)
      }
    }, TICK_MS)

    return () => clearInterval(intervalId)
  }, [isRunning])

  const start = () => {
    if (isRunning || remainingMs <= 0) return
    endTimeRef.current = Date.now() + remainingMs
    setIsRunning(true)
  }

  const pause = () => {
    if (!isRunning) return
    setRemainingMs(Math.max(0, (endTimeRef.current ?? 0) - Date.now()))
    setIsRunning(false)
  }

  const reset = () => {
    setIsRunning(false)
    setRemainingMs(durationMs)
  }

  return { remainingMs, isRunning, start, pause, reset }
}