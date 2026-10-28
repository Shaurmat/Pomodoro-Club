type TimerControlsProps = {
  isRunning: boolean
  canReset: boolean
  onStart: () => void
  onPause: () => void
  onReset: () => void
}

function TimerControls({
  isRunning,
  canReset,
  onStart,
  onPause,
  onReset,
}: TimerControlsProps) {
  return (
    <div className="timer-controls">
      <button
        className="timer-controls__main-button"
        onClick={isRunning ? onPause : onStart}
      >
        {isRunning ? 'Пауза' : 'Старт'}
      </button>

      {canReset && (
        <button
          className="timer-controls__reset-button"
          onClick={onReset}
          aria-label="Сбросить таймер"
        >
          ↺
        </button>
      )}
    </div>
  )
}

export default TimerControls