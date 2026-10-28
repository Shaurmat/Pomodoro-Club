import type { SessionMode } from '../types/session'

export const SESSION_DURATIONS_SECONDS: Record<SessionMode, number> = {
  focus: 25 * 60,
  'short-break': 5 * 60,
  'long-break': 15 * 60,
}

export const FOCUS_SESSIONS_BEFORE_LONG_BREAK = 4