import { useEffect, useRef, useState } from 'react'

const TICK_MS = 250

export function useTimer(durationSeconds: number, onComplete?: () => void) {
  const durationMs = durationSeconds * 1000

  const [remainingMs, setRemainingMs] = useState(durationMs)
  const [isRunning, setIsRunning] = useState(false)
  const [prevDurationMs, setPrevDurationMs] = useState(durationMs)
  const endTimeRef = useRef<number | null>(null)
  const onCompleteRef = useRef(onComplete)

  // Если длительность изменилась (начался новый режим), таймер начинается заново
  if (prevDurationMs !== durationMs) {
    setPrevDurationMs(durationMs)
    setRemainingMs(durationMs)
    setIsRunning(false)
  }

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      const left = (endTimeRef.current ?? 0) - Date.now()

      if (left <= 0) {
        setRemainingMs(durationMs)
        setIsRunning(false)
        onCompleteRef.current?.()
      } else {
        setRemainingMs(left)
      }
    }, TICK_MS)

    return () => clearInterval(intervalId)
  }, [isRunning, durationMs])

  const start = () => {
    if (isRunning) return
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