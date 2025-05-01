import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log(`Client connected: ${ws._socket.remoteAddress}`);
    // Send a welcome message to the newly connected client
    ws.send('Welcome to the WebSocket server!!');
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log(`Client disconnected: ${ws._socket.remoteAddress}`);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');