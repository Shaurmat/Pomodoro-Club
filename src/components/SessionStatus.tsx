type SessionStatusProps = {
  status: string
}

function SessionStatus({ status }: SessionStatusProps) {
  return (
    <span className="session-status">
      {status}
    </span>
  )
}

export default SessionStatus