import type { Profile } from '../types/profile'

export const DEFAULT_PROFILE: Profile = {
  id: 'classic',
  name: 'Классика',
  durations: {
    focus: 25 * 60,
    'short-break': 5 * 60,
    'long-break': 15 * 60,
  },
  cycle: [
    'focus',
    'short-break',
    'focus',
    'short-break',
    'focus',
    'short-break',
    'focus',
    'long-break',
  ],
}