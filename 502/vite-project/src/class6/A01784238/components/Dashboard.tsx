import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import Button from "./Button";
import Table from "./Table";

const Dashboard: React.FC = () => {
  const { user } = useContext(UserContext);

  // Dummy data for the table
  const columnsSchema = [
    { key: "id", header: "ID" },
    { key: "destination", header: "Destino" },
    { key: "date", header: "Fecha" },
    { key: "action", header: "Acción" },
  ];
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

  return (
    <div>
      {user.role === "solicitante" && (
        <>
          <h1 className="text-2xl font-bold mb-4">Tablero de solicitantes</h1>
          <p className="mb-4">
            Bienvenido, {user.name}. Aquí puedes ver tus solicitudes de viaje.
          </p>
          <Table
            columns={columnsSchema}
            data={travelDataWithAction}
            itemsPerPage={5}
          />
        </>
      )}
      {user.role === "aprobador" && (
        <>
          <h1 className="text-2xl font-bold mb-4">Tablero de aprobadores</h1>
          <p className="mb-4">
            Bienvenido, {user.name}. Aquí puedes aprobar solicitudes de viaje.
          </p>
          <Table
            columns={columnsSchema}
            data={travelDataWithAction}
            itemsPerPage={5}
          />
        </>
      )}
      {user.role === "administrador" && (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Tablero de administradores
          </h1>
          <p className="mb-4">
            Bienvenido, {user.name}. Aquí puedes gestionar usuarios y
            solicitudes.
          </p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
