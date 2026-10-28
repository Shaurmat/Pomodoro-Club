import SessionStatus from './components/SessionStatus'
import TimerDisplay from './components/TimerDisplay'
import TimerControls from './components/TimerControls'
import { useTimer } from './hooks/useTimer'
import { formatTime } from './utils/formatTime'
import './App.css'

const FOCUS_DURATION_SECONDS = 25 * 60

function App() {
  const { remainingMs, isRunning, start, pause, reset } = useTimer(
    FOCUS_DURATION_SECONDS,
  )
  const canReset = remainingMs < FOCUS_DURATION_SECONDS * 1000

  return (
    <div className="app">
      <div className="timer-card">
        <SessionStatus status="Фокус" />
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