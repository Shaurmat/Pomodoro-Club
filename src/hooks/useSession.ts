import { useState } from 'react'
import type { SessionMode } from '../types/session'

export function useSession(cycle: SessionMode[]) {
  const [position, setPosition] = useState(0)

  const mode = cycle[position]

  const goToNextSession = () => {
    setPosition((current) => (current + 1) % cycle.length)
  }

  return { mode, goToNextSession }
}