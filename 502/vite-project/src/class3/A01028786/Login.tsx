import React, { useReducer } from "react";
import InputField from "../../class2/A01028786/components/InputField";
import Button from "../../class2/A01028786/components/Button";
import "./Login.css";

// Estado que representa los valores del formulario
interface LoginState {
  username: string;
  password: string;
  error: string;
  loading: boolean;
}

// Acciones posibles para modificar el estado del formulario
type LoginAction =
  | { type: "ACTUALIZAR_CAMPO"; campo: "username" | "password"; valor: string }
  | { type: "MOSTRAR_ERROR"; mensaje: string }
  | { type: "CAMBIAR_CARGANDO"; valor: boolean }
  | { type: "REINICIAR" };

// Estado inicial del formulario
const estadoInicial: LoginState = {
  username: "",
  password: "",
  error: "",
  loading: false,
};

// Reducer que maneja las actualizaciones de estado
const loginReducer = (estado: LoginState, accion: LoginAction): LoginState => {
  switch (accion.type) {
    case "ACTUALIZAR_CAMPO":
      return { ...estado, [accion.campo]: accion.valor };
    case "MOSTRAR_ERROR":
      return { ...estado, error: accion.mensaje };
    case "CAMBIAR_CARGANDO":
      return { ...estado, loading: accion.valor };
    case "REINICIAR":
      return estadoInicial;
    default:
      return estado;
  }
};

// Componente principal de inicio de sesión con useReducer
const Login: React.FC = () => {
  const [formulario, despachar] = useReducer(loginReducer, estadoInicial);

  // Simula el envío del formulario con una validación
  const manejarEnvio = () => {
    despachar({ type: "CAMBIAR_CARGANDO", valor: true });

    setTimeout(() => {
      if (formulario.username === "admin" && formulario.password === "password") {
        console.log("Inicio de sesión exitoso");
        despachar({ type: "MOSTRAR_ERROR", mensaje: "" });
      } else {
        despachar({ type: "MOSTRAR_ERROR", mensaje: "Usuario o contraseña incorrectos" });
      }

      despachar({ type: "CAMBIAR_CARGANDO", valor: false });
    }, 1000);
  };

  return (
    <div className="container">
      <h1>Login</h1>

      {/* Mensaje de error si existe */}
      {formulario.error && <p className="error">{formulario.error}</p>}

      {/* Campo de usuario */}
      <InputField
        type="text"
        placeholder="Username"
        value={formulario.username}
        onChange={(e) =>
          despachar({
            type: "ACTUALIZAR_CAMPO",
            campo: "username",
            valor: e.target.value,
          })
        }
      />

      {/* Campo de contraseña */}
      <InputField
        type="password"
        placeholder="Password"
        value={formulario.password}
        onChange={(e) =>
          despachar({
            type: "ACTUALIZAR_CAMPO",
            campo: "password",
            valor: e.target.value,
          })
        }
      />

      {/* Botón para enviar el formulario */}
      <Button
        label={formulario.loading ? "Loading..." : "Submit"}
        onClick={manejarEnvio}
      />
    </div>
  );
};

export default Login;
