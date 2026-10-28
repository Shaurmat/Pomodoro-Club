import { useState } from 'react'
import { FOCUS_SESSIONS_BEFORE_LONG_BREAK } from '../constants/sessionDurations'
import type { SessionMode } from '../types/session'

export function useSession() {
  const [mode, setMode] = useState<SessionMode>('focus')
  const [completedFocusSessions, setCompletedFocusSessions] = useState(0)

  const goToNextSession = () => {
    if (mode === 'focus') {
      const completed = completedFocusSessions + 1
      setCompletedFocusSessions(completed)
      setMode(
        completed % FOCUS_SESSIONS_BEFORE_LONG_BREAK === 0
          ? 'long-break'
          : 'short-break',
      )
    } else {
      setMode('focus')
    }
  }

  return { mode, goToNextSession }
}