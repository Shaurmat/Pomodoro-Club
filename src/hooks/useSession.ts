import { useState } from 'react'
import { DEFAULT_CYCLE } from '../constants/defaultCycle'

export function useSession() {
  const [position, setPosition] = useState(0)

  const mode = DEFAULT_CYCLE[position]

  const goToNextSession = () => {
    setPosition((current) => (current + 1) % DEFAULT_CYCLE.length)
  }

  return { mode, goToNextSession }
}