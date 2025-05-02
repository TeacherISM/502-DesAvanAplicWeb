import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8081 });
console.log("WebSocket server is running on ws://localhost:8081");

wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  ws.on("message", (message: string) => {
    console.log(`${message}`);
    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
