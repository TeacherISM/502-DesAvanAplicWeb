import { useEffect, useRef, useState } from 'react';

function App() {
  const socketRef = useRef<WebSocket | null>(null);
  const [input, setInput] = useState('');
  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  useEffect(() => {
    // Connect to the WebSocket server
    socketRef.current = new WebSocket('ws://localhost:8080');

    socketRef.current.onopen = () => {
      console.log('✅ WebSocket connected');
    };

    socketRef.current.onmessage = (event: MessageEvent) => {
      console.log('📨 Message from server:', event.data);
      setReceivedMessages(prev => [...prev, event.data]);
    };

    socketRef.current.onerror = (event: Event) => {
      console.error('❌ WebSocket error:', event);
    };

    socketRef.current.onclose = () => {
      console.log('🔌 WebSocket closed');
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN && input.trim()) {
      socketRef.current.send(input);
      setSentMessages(prev => [...prev, input]);
      setInput('');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">🛰️ React + WebSocket Chat</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Sent Messages */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-blue-700">You</h2>
          <div className="border rounded bg-blue-50 p-4 h-64 overflow-y-auto">
            {sentMessages.map((msg, idx) => (
              <div key={idx} className="mb-1 text-blue-900 text-sm">
                {msg}
              </div>
            ))}
          </div>
        </div>

        {/* Received Messages */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-700">Server</h2>
          <div className="border rounded bg-gray-100 p-4 h-64 overflow-y-auto">
            {receivedMessages.map((msg, idx) => (
              <div key={idx} className="mb-1 text-gray-800 text-sm">
                {msg}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="flex space-x-3">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
