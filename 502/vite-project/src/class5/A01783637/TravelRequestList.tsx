import React from "react";
import TravelRequestFetcher from "./TravelRequestFetcher";

const TravelRequestList: React.FC = () => (
  <TravelRequestFetcher
    render={({ travelRequests, loading, error }) => {
      if (loading) return <p className="text-gray-500">Cargando…</p>;
      if (error) return <p className="text-red-600">Error: {error.message}</p>;

      return (
        <ul className="space-y-2">
          {travelRequests.map((req) => (
            <li
              key={req.id}
              className="bg-white p-4 rounded shadow flex justify-between"
            >
              <span className="font-medium">{req.name}</span>
              <span className="text-sm text-gray-500">
                Capital {req.capital}
              </span>
            </li>
          ))}
        </ul>
      );
    }}
  />
);

export default TravelRequestList;
