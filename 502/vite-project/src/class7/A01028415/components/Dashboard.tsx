import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "./UserContext";
import Button from "./Button";
import Table from "./Table";

type Notification = {
  message: string;
  timestamp: string;
};

const Dashboard: React.FC = () => {
  const { user } = useContext(UserContext);
  const ws = useRef<WebSocket | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Cargar historial desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`notifications-${user.id}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setNotifications(parsed);
        }
      } catch {
        console.warn("No se pudo cargar historial local");
      }
    }
  }, [user]);

  // Conexión WebSocket
  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => console.log("✅ WebSocket conectado");
    ws.current.onclose = () => console.log("🔌 WebSocket desconectado");

    return () => {
      ws.current?.close();
    };
  }, []);

  // Manejo de mensajes WebSocket
  useEffect(() => {
    if (ws.current) {
      ws.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          const addNotification = (msg: string) => {
            const newNotification: Notification = {
              message: msg,
              timestamp: new Date().toISOString(),
            };

            setNotifications((prev) => {
              const updated = [...prev, newNotification];
              localStorage.setItem(`notifications-${user.id}`, JSON.stringify(updated));
              return updated;
            });
          };

          if (data.type === "approval" && data.employeeId === user.id) {
            addNotification(data.message);
          }

          if (data.type === "expense_approval" && data.employeeId === user.id) {
            addNotification(data.message);
          }

          if (data.type === "new_request" && user.role === "aprobador") {
            alert(`📥 Nueva solicitud: ${data.message}`);
          }

          if (data.type === "new_expense" && user.role === "aprobador") {
            alert(`📥 Nuevo gasto: ${data.message}`);
          }
        } catch {
          console.error("Mensaje inválido:", event.data);
        }
      };
    }
  }, [user]);

  // Guardar notificación local para pruebas
  const saveLocalNotification = (userId: number, msg: string) => {
    const key = `notifications-${userId}`;
    const existing: Notification[] = JSON.parse(localStorage.getItem(key) || "[]");
    const newItem: Notification = {
      message: msg,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify([...existing, newItem]));
  };

  // Datos simulados
  const travelData = [
    { id: 1, destination: "Paris", date: "2023-10-01", employeeId: 1 },
    { id: 2, destination: "London", date: "2023-10-02", employeeId: 1 },
  ];

  const expenseData = [
    { id: 1, concept: "Hotel", amount: 500, employeeId: 1 },
    { id: 2, concept: "Taxi", amount: 150, employeeId: 1 },
  ];

  // Acciones aprobador
  const travelDataWithAction = travelData.map((item) => ({
    ...item,
    action: (
      <Button
        label="Aprobar"
        onClick={() => {
          const msg = `Tu solicitud de viaje a ${item.destination} ha sido aprobada.`;
          const message = JSON.stringify({
            type: "approval",
            employeeId: item.employeeId,
            requestId: `REQ-${item.id}`,
            message: msg,
          });

          ws.current?.send(message);
          saveLocalNotification(item.employeeId, msg);
          alert(`✅ Aprobación enviada para ${item.destination}`);
        }}
      />
    ),
  }));

  const expenseDataWithAction = expenseData.map((item) => ({
    ...item,
    action: (
      <Button
        label="Aprobar gasto"
        onClick={() => {
          const msg = `Tu gasto de ${item.concept} por $${item.amount} ha sido aprobado.`;
          const message = JSON.stringify({
            type: "expense_approval",
            employeeId: item.employeeId,
            message: msg,
          });

          ws.current?.send(message);
          saveLocalNotification(item.employeeId, msg);
          alert(`✅ Gasto aprobado: ${item.concept}`);
        }}
      />
    ),
  }));

  const travelRequestColumns = [
    { key: "id", header: "ID" },
    { key: "destination", header: "Destino" },
    { key: "date", header: "Fecha" },
    { key: "action", header: "Acción" },
  ];

  const expenseColumns = [
    { key: "id", header: "ID" },
    { key: "concept", header: "Concepto" },
    { key: "amount", header: "Monto" },
    { key: "action", header: "Acción" },
  ];

  return (
    <div className="p-4">

      {/* Solicitante */}
      {user.role === "solicitante" && (
        <>
          <h1 className="text-2xl font-bold mb-4">Solicitante</h1>
          <p className="mb-4">Bienvenido, {user.name}</p>

          <div className="flex gap-2 mb-4">
            <Button
              label="Crear nueva solicitud de viaje"
              onClick={() => {
                const message = JSON.stringify({
                  type: "new_request",
                  message: `Solicitud de viaje a Roma de ${user.name}`,
                });
                ws.current?.send(message);
              }}
            />
            <Button
              label="Crear nuevo gasto"
              onClick={() => {
                const message = JSON.stringify({
                  type: "new_expense",
                  message: `Gasto de $300 por comida enviado por ${user.name}`,
                });
                ws.current?.send(message);
              }}
            />
            <Button
              label="🗑 Limpiar notificaciones"
              onClick={() => {
                localStorage.removeItem(`notifications-${user.id}`);
                setNotifications([]);
              }}
            />
          </div>

          {/* Historial persistente */}
          <div>
            <h2 className="text-lg font-semibold mb-2">📋 Historial de notificaciones</h2>
            {notifications.length > 0 ? (
              <ul className="list-disc pl-6 text-green-700">
                {notifications.map((n, i) => {
                  const date = new Date(n.timestamp);
                  const formatted = date.toLocaleString("es-MX", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                  return (
                    <li key={i}>
                      <strong>[{formatted}]</strong> {n.message}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-gray-500">No hay notificaciones aún.</p>
            )}
          </div>
        </>
      )}

      {/* Aprobador */}
      {user.role === "aprobador" && (
        <>
          <h1 className="text-2xl font-bold mb-4">Aprobador</h1>
          <p className="mb-4">Bienvenido, {user.name}</p>
          <Table columns={travelRequestColumns} data={travelDataWithAction} itemsPerPage={5} />
          <Table columns={expenseColumns} data={expenseDataWithAction} itemsPerPage={5} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
