import type { SessionMode } from './session'

export type Profile = {
  id: string
  name: string
  durations: Record<SessionMode, number>
  cycle: SessionMode[]
}