import React, { useState, useRef, FormEvent } from "react";
import "./Chat.css";

const Chat: React.FC = () => {
  const [name, setName] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  const handleNameSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const ws = new WebSocket("ws://localhost:8081");
    ws.binaryType = "arraybuffer";
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket conectado");
      setIsConnected(true);
    };

    ws.onmessage = async (event) => {
      let msg: string;
      if (typeof event.data === "string") {
        msg = event.data;
      } else if (event.data instanceof Blob) {
        msg = await event.data.text();
      } else if (event.data instanceof ArrayBuffer) {
        msg = new TextDecoder().decode(event.data);
      } else {
        msg = JSON.stringify(event.data);
      }
      setMessages((prev) => [...prev, msg]);
    };

    ws.onclose = () => {
      console.log("WebSocket desconectado");
      setIsConnected(false);
    };

    ws.onerror = (err) => {
      console.error("Error en WebSocket:", err);
    };
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (wsRef.current && messageInput.trim()) {
      const formatted = `${name}: ${messageInput}`;
      wsRef.current.send(formatted);
      setMessageInput("");
    }
  };

  return (
    <div className="dashboard-container">
      {!isConnected && (
        <form onSubmit={handleNameSubmit} className="name-form">
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Conectar</button>
        </form>
      )}

      {isConnected && (
        <>
          <h2>Conectado como: {name}</h2>{" "}
          <div className="messages-container">
            {messages.map((msg, idx) => (
              <div key={idx} className="message-item">
                {msg}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="send-form">
            <input
              type="text"
              placeholder="Escribe un mensaje"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>{" "}
        </>
      )}
    </div>
  );
};

export default Chat;
