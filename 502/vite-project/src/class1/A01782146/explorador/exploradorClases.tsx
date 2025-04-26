import "/src/App.css";

const ExploradorClases = () => {
  const clases = ["Clase 1", "Clase 2", "Clase 3", "Clase 4", "Clase 5"];

  const handleClassSelect = (className: string) => {
    // Redirige a una ruta determinada según la clase
    if (className === "Clase 1") {
      window.location.href = "/src/class1/A01782146/index.html";
    } else if (className === "Clase 2") {
      window.location.href = "/src/class2/A01782146/index.html";
    } else if (className === "Clase 3") {
      window.location.href = "/src/class3/A01782146/index.html";
    } else if (className === "Clase 4") {
      window.location.href = "/src/class4/A01782146/index.html";
    } else if (className === "Clase 5") {
      window.location.href = "/src/class5/A01782146/index.html";
    }
  };

  const handleLogout = () => {
    // Eliminar el flag de login en el localStorage
    localStorage.removeItem("loggedIn");
    console.log("loggedIn after remove:", localStorage.getItem("loggedIn")); // Debería imprimir null

    // Redirige a la ruta del login
    window.location.href = "/";
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
      {/* Botón para regresar al login */}
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#ef4444",
          color: "#fff",
          cursor: "pointer",
          marginTop: "30px",
        }}
      >
        Regresar al inicio
      </button>
    </div>
  );
};

export default ExploradorClases;
