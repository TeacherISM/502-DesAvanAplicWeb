import React, { useEffect, useState } from 'react'

interface NotificationMessage {
  type: string
  employeeId?: string
  requestId?: string
  message: string
}

const RealTimeNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([])

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080')

    ws.onmessage = (event: MessageEvent) => {
      try {
        const data: NotificationMessage = JSON.parse(event.data)
        if (data.type === 'approval') {
          setNotifications((prev) => [...prev, data.message])
        }
      } catch {
        // fallback for plain string messages
        setNotifications((prev) => [...prev, event.data])
      }
    }

    return () => ws.close()
  }, [])

  return (
    <div>
      <h2>🔔 Real-Time Notifications</h2>
      <ul>
        {notifications.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  )
}

export default RealTimeNotifications
