import React, { useReducer, useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

// ------------------------
// Definición de la interfaz para las propiedades del componente
interface TravelFormProps {
  title?: string;
  description?: string;
  date?: string;
  onSubmit?: (formData: FormState) => void;
}

// ------------------------
// Definición del estado del formulario
interface FormState {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

// ------------------------
// Interface for form validation errors
interface FormErrors {
  destination?: string;
  startDate?: string;
  endDate?: string;
  purpose?: string;
}

// ------------------------
// Tipos de acciones para el reducer
type FormAction =
  | { type: "SET_DESTINATION"; payload: string }
  | { type: "SET_START_DATE"; payload: string }
  | { type: "SET_END_DATE"; payload: string }
  | { type: "SET_PURPOSE"; payload: string }
  | { type: "RESET_FORM" };

// ------------------------
// Reducer function para manejar cambios en el estado del formulario
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_DESTINATION":
      return { ...state, destination: action.payload };
    case "SET_START_DATE":
      return { ...state, startDate: action.payload };
    case "SET_END_DATE":
      return { ...state, endDate: action.payload };
    case "SET_PURPOSE":
      return { ...state, purpose: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

// Estado inicial del formulario
const initialState: FormState = {
  destination: "",
  startDate: new Date().toISOString().split("T")[0],
  endDate: "",
  purpose: "",
};

// ------------------------
// Componente: TravelForm
// Componente reutilizable para solicitudes de viaje usando useReducer con validación
const TravelForm: React.FC<TravelFormProps> = ({
  title = "Travel Request",
  description = "",
  date = new Date().toISOString().split("T")[0],
  onSubmit,
}) => {
  // Inicializar el estado con useReducer
  const [formState, dispatch] = useReducer(formReducer, {
    ...initialState,
    startDate: date,
    purpose: description,
  });

  // Estado para errores de validación
  const [errors, setErrors] = useState<FormErrors>({
    destination: "",
    startDate: "",
    endDate: "",
    purpose: "",
  });

  // Estado para indicar si el formulario ha sido enviado
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Destructuring del estado para facilitar el acceso
  const { destination, startDate, endDate, purpose } = formState;

  // Función para validar el formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      destination: "",
      startDate: "",
      endDate: "",
      purpose: "",
    };

    let isValid = true;

    if (!destination.trim()) {
      newErrors.destination = "Destination is required";
      isValid = false;
    }

    if (!startDate) {
      newErrors.startDate = "Start date is required";
      isValid = false;
    }

    if (!endDate) {
      newErrors.endDate = "End date is required";
      isValid = false;
    } else if (new Date(endDate) < new Date(startDate)) {
      newErrors.endDate = "End date must be after start date";
      isValid = false;
    }

    if (!purpose.trim()) {
      newErrors.purpose = "Purpose is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Función que maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const isValid = validateForm();

    if (isValid) {
      console.log("Travel request submitted:", formState);

      // Si se proporcionó una función onSubmit, ejecutarla
      if (onSubmit) {
        onSubmit(formState);
      }

      // Resetear el formulario después del envío
      dispatch({ type: "RESET_FORM" });
      setIsSubmitted(false);
      setErrors({
        destination: "",
        startDate: "",
        endDate: "",
        purpose: "",
      });
    }
  };

  // Estilos CSS-in-JS para el componente Card
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    backgroundColor: "black",
    maxWidth: "400px",
  };

  // Estilos para el contenedor del formulario
  const formContainerStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  };

  // Estilos para el título
  const titleStyle = {
    marginTop: 0,
    color: "#2c3e50",
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
  };

  // Estilos mejorados para los mensajes de error
  const errorStyle = {
    color: "#e74c3c",
    fontSize: "12px",
    marginTop: "5px",
    padding: "5px 0",
    fontWeight: "500",
    borderRadius: "3px",
    width: "100%",
    textAlign: "left" as const,
  };

  // Estilos para los grupos de campos
  const fieldGroupStyle = {
    display: "flex",
    flexDirection: "column" as const,
    marginBottom: "15px",
    position: "relative" as const,
  };

  // Estilos para las etiquetas
  const labelStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "bold" as const,
  };

  // Estilo para el contenedor de input
  const inputContainerStyle = {
    display: "flex",
    flexDirection: "column" as const,
    width: "100%",
  };

  // Estilo para inputs con error
  const inputErrorStyle = {
    borderColor: "#e74c3c",
  };

  return (
    <div style={cardStyle} data-testid="travel-form">
      {/* Título del formulario */}
      <h2 style={titleStyle}>{title}</h2>

      {/* Formulario con validación */}
      <form onSubmit={handleSubmit} style={formContainerStyle} noValidate>
        {/* Campo para el destino */}
        <div style={fieldGroupStyle}>
          <label htmlFor="destination" style={labelStyle}>
            Destination
          </label>
          <div style={inputContainerStyle}>
            <InputField
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "SET_DESTINATION", payload: e.target.value })
              }
              name="destination"
              id="destination"
              hasError={isSubmitted && !!errors.destination}
              errorStyle={inputErrorStyle}
            />
            {isSubmitted && errors.destination && (
              <div style={errorStyle} data-testid="destination-error">
                {errors.destination}
              </div>
            )}
          </div>
        </div>

        {/* Campo para la fecha de inicio */}
        <div style={fieldGroupStyle}>
          <label htmlFor="startDate" style={labelStyle}>
            Start Date
          </label>
          <div style={inputContainerStyle}>
            <InputField
              type="date"
              placeholder="Select start date"
              value={startDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "SET_START_DATE", payload: e.target.value })
              }
              name="startDate"
              id="startDate"
              hasError={isSubmitted && !!errors.startDate}
              errorStyle={inputErrorStyle}
            />
            {isSubmitted && errors.startDate && (
              <div style={errorStyle} data-testid="startDate-error">
                {errors.startDate}
              </div>
            )}
          </div>
        </div>

        {/* Campo para la fecha de fin */}
        <div style={fieldGroupStyle}>
          <label htmlFor="endDate" style={labelStyle}>
            End Date
          </label>
          <div style={inputContainerStyle}>
            <InputField
              type="date"
              placeholder="Select end date"
              value={endDate}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "SET_END_DATE", payload: e.target.value })
              }
              name="endDate"
              id="endDate"
              hasError={isSubmitted && !!errors.endDate}
              errorStyle={inputErrorStyle}
            />
            {isSubmitted && errors.endDate && (
              <div style={errorStyle} data-testid="endDate-error">
                {errors.endDate}
              </div>
            )}
          </div>
        </div>

        {/* Campo para el propósito del viaje */}
        <div style={fieldGroupStyle}>
          <label htmlFor="purpose" style={labelStyle}>
            Purpose
          </label>
          <div style={inputContainerStyle}>
            <InputField
              type="text"
              placeholder="Enter purpose of travel"
              value={purpose}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "SET_PURPOSE", payload: e.target.value })
              }
              name="purpose"
              id="purpose"
              hasError={isSubmitted && !!errors.purpose}
              errorStyle={inputErrorStyle}
            />
            {isSubmitted && errors.purpose && (
              <div style={errorStyle} data-testid="purpose-error">
                {errors.purpose}
              </div>
            )}
          </div>
        </div>

        {/* Botón de envío del formulario */}
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default TravelForm;
