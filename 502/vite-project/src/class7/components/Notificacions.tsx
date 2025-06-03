import React, { useEffect, useState } from 'react';
import { getWebSocket } from '../websocket'; 

interface User {
  email: string;
  password: string;
  role: 'employee' | 'manager' | 'admin';
  name: string;
}

interface NotificacionsProps {
  user: User;
}

const Notificacions: React.FC<NotificacionsProps> = ({ user }) => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    console.log('Conectando WebSocket solo una vez');
    const ws = getWebSocket();
  
    const handleMessage = (event: MessageEvent) => {
      try {
        const message = JSON.parse(event.data);
        if (
            message.type === 'expense-approval' &&
            message.employeeId === user.email
          ) {
            setNotifications((prev) => {
              if (!prev.includes(message.message)) {
                return [...prev, message.message];
              }
              return prev;
            });
          }
          
      } catch (error) {
        console.error('Error al parsear el mensaje WebSocket:', error);
      }
    };
  
    ws.addEventListener('message', handleMessage);
  
    // Enviar solicitud apenas se conecte
    if (ws.readyState === WebSocket.OPEN) {
      console.log('WebSocket LISTO, enviando solicitud');
      ws.send('GET_EXPENSE_NOTIFICATIONS');
    } else {
      ws.addEventListener('open', () => {
        console.log('WebSocket se acaba de abrir, enviando solicitud');
        ws.send('GET_EXPENSE_NOTIFICATIONS');
      });
    }
  
    return () => {
      console.log(' Limpieza del listener, no del socket');
      ws.removeEventListener('message', handleMessage);
    };
  }, [user.email]);
  

  if (notifications.length === 0) return null;

  return (
    <div style={{ marginBottom: '20px', backgroundColor: '#77AACE', padding: '15px', borderRadius: '8px' }}>
      <h3> Notificaciones</h3>
      <ul>
        {notifications.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notificacions;
