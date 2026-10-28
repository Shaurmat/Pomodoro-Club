type TimerDisplayProps = {
  time: string
}

function TimerDisplay({ time }: TimerDisplayProps) {
  return (
    <div className="timer-display">
      {time}
    </div>
  )
}

export default TimerDisplay