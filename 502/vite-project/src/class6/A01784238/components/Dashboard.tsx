/*
 * Dashboard component that displays role-based content for users.
 * Depending on the user's role, it shows different tables and actions.
 *
 * Last edit: April 25, 2025
 * Authors: José Manuel García Zumaya
 */

import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import Button from "./Button";
import Table from "./Table";

/*
 * Component: Dashboard
 * Displays different content based on the user's role.
 * - Solicitante: Shows travel requests.
 * - Aprobador: Shows travel requests with approval actions.
 * - Administrador: Shows user management and travel requests.
 */
const Dashboard: React.FC = () => {
  /*
   * Context: UserContext
   * Access the current user's data and role from the UserContext.
   */
  const { user } = useContext(UserContext);

  /*
   * Schema: columnsSchema
   * Defines the structure of the travel requests table.
   */
  const columnsSchema = [
    { key: "id", header: "ID" },
    { key: "destination", header: "Destino" },
    { key: "date", header: "Fecha" },
    { key: "action", header: "Acción" },
  ];

  /*
   * Data: travelData
   * Dummy data representing travel requests.
   */
  const travelData = [
    { id: 1, destination: "Paris", date: "2023-10-01" },
    { id: 2, destination: "London", date: "2023-10-02" },
    { id: 3, destination: "New York", date: "2023-10-03" },
    { id: 4, destination: "Tokyo", date: "2023-10-04" },
    { id: 5, destination: "Sydney", date: "2023-10-05" },
    { id: 6, destination: "Berlin", date: "2023-10-06" },
    { id: 7, destination: "Madrid", date: "2023-10-07" },
    { id: 8, destination: "Rome", date: "2023-10-08" },
    { id: 9, destination: "Moscow", date: "2023-10-09" },
    { id: 10, destination: "Dubai", date: "2023-10-10" },
  ];

  /*
   * Data: travelDataWithAction
   * Adds an "Approve" button to each travel request for aprobadores.
   */
  const travelDataWithAction = travelData.map((item) => ({
    ...item,
    action: (
      <Button
        label="Aprobar"
        onClick={() => {
          alert(`Travel request for ${item.destination} approved!`);
        }}
      />
    ),
  }));

  /*
   * Schema: columnsUsersSchema
   * Defines the structure of the user management table.
   */
  const columnsUsersSchema = [
    { key: "id", header: "ID" },
    { key: "name", header: "Nombre" },
    { key: "email", header: "Correo Electrónico" },
    { key: "role", header: "Rol" },
    { key: "action", header: "Acción" },
  ];

  /*
   * Data: usersData
   * Dummy data representing users for the administrador role.
   */
  const usersData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "solicitante" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "aprobador" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "administrador",
    },
    { id: 4, name: "Bob Brown", email: "bob@example.com", role: "solicitante" },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie@example.com",
      role: "aprobador",
    },
  ];

  /*
   * Data: usersDataWithAction
   * Adds a "Delete" button to each user for administradores.
   */
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

  /*
   * Render: Role-based content
   * Displays different tables and actions based on the user's role.
   */
  return (
    <div>
      {/* Content for solicitante role */}
      {user.role === "solicitante" && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-4">Tablero de solicitantes</h1>
            <p className="mb-4">
              Bienvenido, {user.name}. Aquí puedes ver tus solicitudes de viaje.
            </p>
            <Table columns={columnsSchema} data={travelData} itemsPerPage={5} />
          </div>
        </>
      )}

      {/* Content for aprobador role */}
      {user.role === "aprobador" && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-4">Tablero de aprobadores</h1>
            <p className="mb-4">
              Bienvenido, {user.name}. Aquí puedes aprobar solicitudes de viaje.
            </p>
            <Table
              columns={columnsSchema}
              data={travelDataWithAction}
              itemsPerPage={5}
            />
          </div>
        </>
      )}

      {/* Content for administrador role */}
      {user.role === "administrador" && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold mb-4">
              Tablero de administradores
            </h1>
            <p className="mb-4">
              Bienvenido, {user.name}. Aquí puedes gestionar usuarios y
              solicitudes.
            </p>
            <Table
              columns={columnsUsersSchema}
              data={usersDataWithAction}
              itemsPerPage={5}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
