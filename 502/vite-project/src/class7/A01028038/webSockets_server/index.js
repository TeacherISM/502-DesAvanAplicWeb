import {WebSocketServer} from 'ws';
import {parse} from 'url';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws,req) => {
    const params = new URLSearchParams(parse(req.url,true).search);
    console.log(`Client connected: ${params.get('id')}`);
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            const jsonString = JSON.stringify({id: params.get("id"),message});
            client.send(jsonString);
        }
    });
  });

  ws.on('close', () => {
    console.log(`Client disconnected: ${params.get('id')}`);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');