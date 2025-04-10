import CounterComponent from "./Counter";

interface DashboardProps {
  role: string;
}

const Dashboard = ({ role }: DashboardProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Centrado vertical
        alignItems: "center", // Centrado horizontal
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Dashboard</h1>
      <p>
        Bienvenido, tu rol es: <strong>{role}</strong>
      </p>
      <CounterComponent />
      <button
        onClick={() => {
          window.location.href = "/src/class1/A01782146/explorador/index.html";
        }}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Regresar al menú
      </button>
    </div>
  );
};

export default Dashboard;
