import React, { useReducer, useEffect } from "react";
import InputComponent from "./Input";
import ButtonComponent from "./Button";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

interface LoginState {
  username: string;
  password: string;
  error: string;
  loading: boolean;
}

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

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Login component montado");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "SET_ERROR", payload: "" });
    dispatch({ type: "SET_LOADING", payload: true });

    // Simula una llamada asíncrona (por ejemplo, a un API)
    setTimeout(() => {
      // Validación simple
      if (state.username.trim() !== "" && state.password.trim() !== "") {
        dispatch({ type: "SET_LOADING", payload: false });
        onLogin(state.username, state.password);
      } else {
        dispatch({ type: "SET_LOADING", payload: false });
        dispatch({
          type: "SET_ERROR",
          payload: "Credenciales inválidas. Por favor, inténtalo de nuevo.",
        });
      }
    }, 1000);
  };

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
      <h1>Login con Roles</h1>
      <p>
        <strong>Credenciales de prueba:</strong>
        Para el rol admin usa username: <em>admin</em>
        <br />
        Para manager usa username: <em>manager</em>
        <br />
        De lo contrario se asigna employee.
        <br />
        Utiliza cualquier password.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "fit-content",
        }}
      >
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
    </div>
  );
};

export default Login;
