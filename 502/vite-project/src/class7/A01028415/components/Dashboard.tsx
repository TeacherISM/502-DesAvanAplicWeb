import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "./UserContext";
import Button from "./Button";
import Table from "./Table";

const Dashboard: React.FC = () => {
  const { user } = useContext(UserContext);
  const ws = useRef<WebSocket | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");

    ws.current.onopen = () => {
      console.log("✅ WebSocket conectado");
    };

    ws.current.onclose = () => {
      console.log("🔌 WebSocket desconectado");
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    if (user.role === "solicitante" && ws.current) {
      ws.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === "approval" && data.employeeId === user.id) {
            setNotifications((prev) => [...prev, data.message]);
          }
        } catch {
          console.error("Mensaje inválido:", event.data);
        }
      };
    }
  }, [user]);

  const columnsSchema = [
    { key: "id", header: "ID" },
    { key: "destination", header: "Destino" },
    { key: "date", header: "Fecha" },
    { key: "action", header: "Acción" },
  ];

  const travelData = [
    { id: 1, destination: "Paris", date: "2023-10-01", employeeId: 1 },
    { id: 2, destination: "London", date: "2023-10-02", employeeId: 2 },
    { id: 3, destination: "New York", date: "2023-10-03", employeeId: 1 },
    { id: 4, destination: "Tokyo", date: "2023-10-04", employeeId: 2 },
  ];

  const travelDataWithAction = travelData.map((item) => ({
    ...item,
    action: (
      <Button
        label="Aprobar"
        onClick={() => {
          const message = JSON.stringify({
            type: "approval",
            employeeId: item.employeeId,
            requestId: `REQ-${item.id}`,
            message: `Tu solicitud de viaje a ${item.destination} ha sido aprobada.`,
          });

          ws.current?.send(message);
          alert(`✅ Aprobación enviada para ${item.destination}`);
        }}
      />
    ),
  }));

  const columnsUsersSchema = [
    { key: "id", header: "ID" },
    { key: "name", header: "Nombre" },
    { key: "email", header: "Correo Electrónico" },
    { key: "role", header: "Rol" },
    { key: "action", header: "Acción" },
  ];

  const usersData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "solicitante" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "aprobador" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "administrador" },
  ];

  const usersDataWithAction = usersData.map((item) => ({
    ...item,
    action: (
      <Button
        label="Eliminar"
        onClick={() => {
          alert(`User ${item.name} deleted!`);
        }}
      />
    ),
  }));

  return (
    <div>
      {/* Solicitante */}
      {user.role === "solicitante" && (
        <>
          <h1 className="text-2xl font-bold mb-4">Tablero de solicitantes</h1>
          <p className="mb-4">Bienvenido, {user.name}. Aquí puedes ver tus solicitudes de viaje.</p>
          <Table columns={columnsSchema} data={travelData} itemsPerPage={5} />

          {notifications.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Notificaciones</h2>
              <ul className="list-disc pl-6 text-green-700">
                {notifications.map((msg, i) => (
                  <li key={i}>{msg}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {/* Aprobador */}
      {user.role === "aprobador" && (
        <>
          <h1 className="text-2xl font-bold mb-4">Tablero de aprobadores</h1>
          <p className="mb-4">Bienvenido, {user.name}. Aquí puedes aprobar solicitudes de viaje.</p>
          <Table columns={columnsSchema} data={travelDataWithAction} itemsPerPage={5} />
        </>
      )}

      {/* Administrador */}
      {user.role === "administrador" && (
        <>
          <h1 className="text-2xl font-bold mb-4">Tablero de administradores</h1>
          <p className="mb-4">Bienvenido, {user.name}. Aquí puedes gestionar usuarios y solicitudes.</p>
          <Table columns={columnsUsersSchema} data={usersDataWithAction} itemsPerPage={5} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
