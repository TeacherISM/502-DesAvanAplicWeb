import React from "react";
import TravelRequestFetcher from "./TravelRequestFetcher";
import RequireRole from "./RequireRole"; 

const TravelRequestList: React.FC = () => (
  
  <div className="space-y-4">
    {/* Manager-only button */}
    <RequireRole allowed={["manager"]}>
      <div className="pt-4">
        <button className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          Approve Travel Requests
        </button>
      </div>
    </RequireRole>
    
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
  </div>
);

export default TravelRequestList;