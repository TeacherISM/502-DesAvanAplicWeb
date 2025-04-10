import Actividad from "./Actividad";
import "/src/App.css";

const App = () => {
  return (
    <div
      style={{
        color: "#000000",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#f0f0f0",
          borderRadius: "12px",
          padding: "2rem",
          width: "100%",
          maxWidth: "700px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Actividad />
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <a href="../class3/A01782557/dashboard.tsx">
            <button
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#0069d9")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#007BFF")
              }
            >
              Ir al Inicio
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
