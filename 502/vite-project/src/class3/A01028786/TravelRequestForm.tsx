import React, { useReducer, ChangeEvent } from "react";
import "./TravelRequestForm.css";

// Estado del formulario de solicitud de viaje
interface TravelState {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

// Acciones disponibles para el reducer
type TravelAction = {
  type: "MODIFICAR_CAMPO";
  campo: keyof TravelState;
  valor: string;
};

// Valores iniciales del formulario
const estadoInicial: TravelState = {
  destination: "",
  startDate: "",
  endDate: "",
  purpose: "",
};

// Reducer que actualiza los valores del formulario
const formularioReducer = (estado: TravelState, accion: TravelAction): TravelState => {
  switch (accion.type) {
    case "MODIFICAR_CAMPO":
      return { ...estado, [accion.campo]: accion.valor };
    default:
      return estado;
  }
};

// Componente que representa el formulario de solicitud de viaje
const TravelRequestForm: React.FC = () => {
  const [formulario, despachar] = useReducer(formularioReducer, estadoInicial);

  // Actualiza el campo correspondiente en el estado del formulario
  const actualizarCampo = (campo: keyof TravelState, valor: string) => {
    despachar({ type: "MODIFICAR_CAMPO", campo, valor });
  };

  // Acción al enviar el formulario
  const enviarFormulario = () => {
    console.log("Travel Request:", formulario);
  };

  return (
    <div className="form-container">
      <h1>Travel Request Form</h1>

      <input
        type="text"
        placeholder="Destination"
        value={formulario.destination}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          actualizarCampo("destination", e.target.value)
        }
        className="input"
      />

      <input
        type="date"
        placeholder="Start Date"
        value={formulario.startDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          actualizarCampo("startDate", e.target.value)
        }
        className="input"
      />

      <input
        type="date"
        placeholder="End Date"
        value={formulario.endDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          actualizarCampo("endDate", e.target.value)
        }
        className="input"
      />

      <textarea
        placeholder="Purpose"
        value={formulario.purpose}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          actualizarCampo("purpose", e.target.value)
        }
        className="textarea"
      />

      <button onClick={enviarFormulario} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default TravelRequestForm;
