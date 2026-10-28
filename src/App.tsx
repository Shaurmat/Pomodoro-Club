import SessionStatus from './components/SessionStatus'
import TimerDisplay from './components/TimerDisplay'
import TimerControls from './components/TimerControls'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="timer-card">
        <SessionStatus status="Фокус" />
        <TimerDisplay time="25:00" />
        <TimerControls />
      </div>
    </div>
  )
}

export default App