import React, { useReducer, useEffect } from "react";
import InputComponent from "./components/Input";
import ButtonComponent from "./components/Button";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

// Definición del estado del formulario
interface LoginState {
  username: string;
  password: string;
  error: string;
  loading: boolean;
}

// Acciones para el reducer
type Action =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "RESET" };

const initialState: LoginState = {
  username: "",
  password: "",
  error: "",
  loading: false,
};

function reducer(state: LoginState, action: Action): LoginState {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const Clase3 = ({ onLogin }: LoginProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Login component montado");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reiniciar error y activar loading
    dispatch({ type: "SET_ERROR", payload: "" });
    dispatch({ type: "SET_LOADING", payload: true });

    // Simulación de petición asíncrona (por ejemplo, llamada a un API)
    setTimeout(() => {
      // Validación simple: los campos no deben estar vacíos
      if (state.username.trim() !== "" && state.password.trim() !== "") {
        dispatch({ type: "SET_LOADING", payload: false });
        // Se invoca la función onLogin para que el componente App asigne el rol.
        onLogin(state.username, state.password);
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({
          type: "SET_ERROR",
          payload: "Credenciales inválidas. Por favor, inténtalo de nuevo.",
        });
      }
    }, 1000); // simulación de 1 segundo
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trabajo de Clase 3</h1>
      <h2>Login con Roles y useReducer</h2>
      <p>
        <strong>Credenciales de prueba: </strong>Para el rol admin usa username:{" "}
        <em>admin.</em> Para manager usa username: <em>manager.</em> De lo
        contrario se asigna employee. Utiliza cualquier password.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username:{" "}
            <InputComponent
              type="text"
              placeholder="Ingresa el nombre de usuario"
              value={state.username}
              onChange={(e) =>
                dispatch({ type: "SET_USERNAME", payload: e.target.value })
              }
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password:{" "}
            <InputComponent
              type="password"
              placeholder="Ingresa la contraseña"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
            />
          </label>
        </div>
        {state.error && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            {state.error}
          </div>
        )}
        {state.loading ? (
          <div style={{ marginBottom: "10px" }}>Cargando...</div>
        ) : (
          <ButtonComponent type="submit" text="Login" />
        )}
      </form>
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

export default Clase3;
