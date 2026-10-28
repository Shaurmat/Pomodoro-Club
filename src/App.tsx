import SessionStatus from './components/SessionStatus'
import TimerDisplay from './components/TimerDisplay'
import TimerControls from './components/TimerControls'
import { SESSION_DURATIONS_SECONDS } from './constants/sessionDurations'
import { useSession } from './hooks/useSession'
import { useTimer } from './hooks/useTimer'
import { formatTime } from './utils/formatTime'
import './App.css'

function App() {
  const { mode, goToNextSession } = useSession()
  const durationSeconds = SESSION_DURATIONS_SECONDS[mode]
  const { remainingMs, isRunning, start, pause, reset } = useTimer(
    durationSeconds,
    goToNextSession,
  )
  const canReset = remainingMs < durationSeconds * 1000

  return (
    <div className="app">
      <div className="timer-card">
        <SessionStatus mode={mode} />
        <TimerDisplay time={formatTime(remainingMs)} />
        <TimerControls
          isRunning={isRunning}
          canReset={canReset}
          onStart={start}
          onPause={pause}
          onReset={reset}
        />
      </div>
    </div>
  )
}

export default App