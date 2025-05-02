import WebSocket, { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (ws) => {
  console.log('New client connected')

  ws.on('message', (message) => {
    console.log(`Received: ${message}`)
  })

  ws.on('close', () => {
    console.log('Client disconnected')
  })
})

const sendApprovalNotification = (employeeId: string, requestId: string) => {
  const message = JSON.stringify({
    type: 'approval',
    employeeId,
    requestId,
    message: 'Your travel request has been approved.',
  })

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message)
    }
  })
}

setTimeout(() => {
  sendApprovalNotification('A12345', 'REQ-987')
}, 5000)

console.log('WebSocket server is running on ws://localhost:8080')
