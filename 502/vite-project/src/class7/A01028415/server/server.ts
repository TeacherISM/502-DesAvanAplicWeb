import * as WebSocket from 'ws';
const WebSocketServer = WebSocket.Server;


const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('🔌 Nuevo cliente conectado');

  ws.on('message', (message) => {
    console.log(` Recibido: ${message}`);

    // Reenvía a todos los clientes
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on('close', () => console.log('Cliente desconectado'));
});

console.log('WebSocket server running on ws://localhost:8080');
