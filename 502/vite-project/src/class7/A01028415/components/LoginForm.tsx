import React, { useReducer, FormEvent, useContext } from "react";
import { UserContext } from "./UserContext";
import InputField from "./InputField";
import Button from "./Button";

// Hardcoded users moved from UserContext.tsx for authentication
const HardcodedUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "123456",
    role: "solicitante",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "123456",
    role: "aprobador",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "123456",
    role: "administrador",
  },
];

// ------------------------
// Interface para el estado del formulario
interface LoginState {
  username: string;
  password: string;
  usernameError: string;
  passwordError: string;
  authError: string;
  isValid: boolean;
}

// ------------------------
// Tipos de acciones para el reducer
type LoginAction =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "VALIDATE_FORM" }
  | { type: "SET_AUTH_ERROR"; payload: string }
  | { type: "RESET_FORM" };

// ------------------------
// Estado inicial del formulario
const initialState: LoginState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
  authError: "",
  isValid: false,
};

// ------------------------
// Reducer para manejar los cambios de estado y validación
const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
        usernameError:
          action.payload.length < 3
            ? "Username must be at least 3 characters"
            : "",
        authError: "", // Clear auth error when user changes input
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
        passwordError:
          action.payload.length < 6
            ? "Password must be at least 6 characters"
            : "",
        authError: "", // Clear auth error when user changes input
      };

    case "VALIDATE_FORM":
      const usernameError =
        state.username.length < 3
          ? "Username must be at least 3 characters"
          : "";
      const passwordError =
        state.password.length < 6
          ? "Password must be at least 6 characters"
          : "";

      return {
        ...state,
        usernameError,
        passwordError,
        isValid: !usernameError && !passwordError,
      };

    case "SET_AUTH_ERROR":
      return {
        ...state,
        authError: action.payload,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};

// ------------------------
// Interface para las props del componente Login
interface LoginProps {
  onLoginSuccess?: () => void;
}

// ------------------------
// Componente: Login
// Formulario de inicio de sesión con campos para username y password.
const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  // Access the UserContext
  const { login } = useContext(UserContext);

  // Usando useReducer para manejar el estado del formulario
  const [state, dispatch] = useReducer(loginReducer, initialState);

  // Destructuring para acceder fácilmente a los valores del estado
  const { username, password, usernameError, passwordError, authError } = state;

  // Authenticate user against hardcoded list
  const authenticateUser = (username: string, password: string) => {
    // Check if user exists in hardcoded list
    // Note: In a real app, you might want to check by email instead of username
    const foundUser = HardcodedUsers.find(
      (user) => user.email === username && user.password === password
    );

    if (foundUser) {
      return foundUser;
    }
    return null;
  };

  // Handle submit function
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_FORM" });

    if (username.length >= 3 && password.length >= 6) {
      // Try to authenticate user
      const user = authenticateUser(username, password);

      if (user) {
        console.log("User authenticated:", user.name);

        // Use the login function from context
        login(user);

        // Clear form
        dispatch({ type: "RESET_FORM" });

        // Call success callback if provided
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        // Set authentication error
        dispatch({
          type: "SET_AUTH_ERROR",
          payload: "Invalid username or password",
        });
        console.log("Authentication failed");
      }
    } else {
      console.log("Form has errors, please fix them");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Contenedor principal con estilos flexbox para alineación vertical */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
          maxWidth: "300px",
          margin: "0 auto",
          border: "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        <h3>Inicio de sesión</h3>

        {/* Campo de entrada para el nombre de usuario/email */}
        <InputField
          type="text"
          placeholder="Correo electrónico"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "SET_USERNAME", payload: e.target.value })
          }
          name="username"
        />
        {/* Mostrar error de validación del nombre de usuario si existe */}
        {usernameError && (
          <p style={{ color: "red", margin: "0", fontSize: "0.8rem" }}>
            {usernameError}
          </p>
        )}

        {/* Campo de entrada para la contraseña */}
        <InputField
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          name="password"
        />
        {/* Mostrar error de validación de la contraseña si existe */}
        {passwordError && (
          <p style={{ color: "red", margin: "0", fontSize: "0.8rem" }}>
            {passwordError}
          </p>
        )}

        {/* Mostrar error de autenticación si existe */}
        {authError && (
          <p style={{ color: "red", margin: "0", fontSize: "0.8rem" }}>
            {authError}
          </p>
        )}

        {/* Botón de envío del formulario */}
        <Button label="Entrar" type="submit" />
      </div>
    </form>
  );
};

export default Login;
