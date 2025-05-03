import React, { useEffect, useState } from 'react';

const RealTimeNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event: MessageEvent) => {
      const message = event.data;
      setNotifications((prev) => [...prev, message]);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeNotifications;
