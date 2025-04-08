import { useState } from "react";
import "/src/App.css";

const ExploradorClases = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const clases = ["Clase 1", "Clase 3", "Clase 4"];

  const handleClassSelect = (className: string) => {
    setSelectedClass(className);
    alert(`Clase seleccionada: ${className}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Explorador de Clases</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {clases.map((clase) => (
          <button
            key={clase}
            onClick={() => handleClassSelect(clase)}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {clase}
          </button>
        ))}
      </div>
      {selectedClass && (
        <div style={{ marginTop: "20px" }}>
          <p>
            Has seleccionado: <strong>{selectedClass}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ExploradorClases;
