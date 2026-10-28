import type { SessionMode } from '../types/session'

type SessionStatusProps = {
  mode: SessionMode
}

const SESSION_LABELS: Record<SessionMode, string> = {
  focus: 'Фокус',
  'short-break': 'Короткий перерыв',
  'long-break': 'Длинный перерыв',
}

function SessionStatus({ mode }: SessionStatusProps) {
  return (
    <span className={`session-status session-status--${mode}`}>
      {SESSION_LABELS[mode]}
    </span>
  )
}

export default SessionStatus