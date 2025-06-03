const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');

  ws.on('message', (message) => {
     // Convertimos el buffer a string
    const msgStr = message.toString();
    console.log('Mensaje recibido:', msgStr);

    if (msgStr === 'GET_EXPENSE_NOTIFICATIONS') {
      const data = JSON.stringify({
        type: 'expense-approval',
        employeeId: 'employee@test.com',
        message: 'Tu gasto con ID EXP123 ha sido aprobado.',
      });

      // Mandamos la notificación al cliente
      ws.send(data); 
    }
  });

  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});

console.log('Servidor WebSocket en ws://localhost:8080');
