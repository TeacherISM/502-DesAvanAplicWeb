import { useState, useEffect } from "react";

const Clase1 = () => {
  // Función "antes"
  function greetBefore(user: { name: string; age: number }) {
    return "Hola, " + user.name + "! Tienes " + user.age + " años.";
  }

  // Función "después" usando template literals, destructuring y arrow function
  const greetAfter = ({ name, age }: { name: string; age: number }) =>
    `Hola, ${name}! Tienes ${age} años.`;

  // Usuario para la demostración de las funciones (sin relación con el login)
  const demoUser = { name: "Juan", age: 25 };

  // Estados para el login básico
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  // Estado para los datos obtenidos del API
  const [apiData, setApiData] = useState<any>(null);

  // Efecto para obtener datos de la API al montar el componente
  useEffect(() => {
    const fetchMockData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/123"
        );
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error(`Error al obtener los datos: ${error}`);
      }
    };
    fetchMockData();
  }, []);

  // Función para manejar el login básico
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginUsername.trim() !== "" && loginPassword.trim() !== "") {
      setLoggedIn(true);
      alert(`Login exitoso! Bienvenido, ${loginUsername}`);
    } else {
      alert("Por favor, ingresa un username y password válidos.");
    }
  };

  // Mientras no se haya hecho login se muestra el formulario centrado
  if (!loggedIn) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1>Trabajo de Clase1</h1>
        <h2>Login básico</h2>

        <p>Ponga cualquier credencial</p>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Username:{" "}
              <input
                type="text"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Password:{" "}
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </label>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Login
          </button>
        </form>
        <button
          onClick={() => {
            window.location.href =
              "/src/class1/A01782146/explorador/index.html";
          }}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#3b82f6",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Regresar al menú
        </button>
      </div>
    );
  }

  // Una vez logueado se muestra el resto del contenido
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Trabajo de Clase1</h1>
      <h2>Actividad Práctica: Refactorizar código usando ES6+</h2>

      <h3>Login exitoso: Bienvenido, {loginUsername}!</h3>

      <h2>Antes</h2>
      <pre>
        {`function greet(user) {
  return "Hola, " + user.name + "! Tienes " + user.age + " años.";
}`}
      </pre>
      <p>
        <strong>Resultado:</strong> {greetBefore(demoUser)}
      </p>

      <h2>
        Después (usando template literals + destructuring + arrow functions)
      </h2>
      <pre>
        {`const greet = ({ name, age }) => \`Hola, \${name}! Tienes \${age} años.\`;`}
      </pre>
      <p>
        <strong>Resultado:</strong> {greetAfter(demoUser)}
      </p>

      <div style={{ marginTop: "20px" }}>
        <h2>Datos obtenidos de la API de mock utilizando fetch:</h2>
        {apiData ? (
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
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

export default Clase1;
