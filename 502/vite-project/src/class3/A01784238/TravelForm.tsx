import React, { useReducer } from 'react';
import InputField from './InputField';
import Button from './Button';

// ------------------------
// Definición de la interfaz para las propiedades del componente
interface TravelFormProps {
    title?: string;
    description?: string;
    date?: string;
    onClick?: () => void;
}

// ------------------------
// Definición del estado del formulario
interface FormState {
    destination: string;
    travelDate: string;
    returnDate: string;
    travelReason: string;
}

// ------------------------
// Tipos de acciones para el reducer
type FormAction =
    | { type: 'SET_DESTINATION'; payload: string }
    | { type: 'SET_TRAVEL_DATE'; payload: string }
    | { type: 'SET_RETURN_DATE'; payload: string }
    | { type: 'SET_TRAVEL_REASON'; payload: string }
    | { type: 'RESET_FORM' };

// ------------------------
// Reducer function para manejar cambios en el estado del formulario
const formReducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
        case 'SET_DESTINATION':
            return { ...state, destination: action.payload };
        case 'SET_TRAVEL_DATE':
            return { ...state, travelDate: action.payload };
        case 'SET_RETURN_DATE':
            return { ...state, returnDate: action.payload };
        case 'SET_TRAVEL_REASON':
            return { ...state, travelReason: action.payload };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

// Estado inicial del formulario
const initialState: FormState = {
    destination: '',
    travelDate: new Date().toISOString().split('T')[0],
    returnDate: '',
    travelReason: ''
};

// ------------------------
// Componente: TravelForm
// Componente reutilizable para solicitudes de viaje usando useReducer
const TravelForm: React.FC<TravelFormProps> = ({
    title = "Travel Request",
    description = "",
    date = new Date().toISOString().split('T')[0],
    onClick
}) => {
    // Inicializar el estado con useReducer en lugar de useState individual
    const [formState, dispatch] = useReducer(formReducer, {
        ...initialState,
        travelDate: date,
        travelReason: description
    });

    // Destructuring del estado para facilitar el acceso
    const { destination, travelDate, returnDate, travelReason } = formState;

    // Función que maneja el envío del formulario
    const handleSubmit = () => {
        console.log('Travel request submitted:', formState);

        // Si se proporcionó una función onClick, ejecutarla
        if (onClick) {
            onClick();
        }

        // Opcional: resetear el formulario después del envío
        dispatch({ type: 'RESET_FORM' });
    };

    // Estilos CSS-in-JS para el componente Card
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        maxWidth: '400px',
        transition: 'transform 0.2s ease',
        cursor: 'pointer'
    };

    // Estilos para el contenedor del formulario
    const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '15px'
    };

    // Estilos para el título
    const titleStyle = {
        marginTop: 0,
        color: '#2c3e50',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px'
    };

    return (
        <div
            style={cardStyle}
            onClick={(e) => {
                // Evitar que el onClick se active al hacer clic en campos del formulario
                if (e.target === e.currentTarget) {
                    console.log('Card clicked');
                    if (onClick) onClick();
                }
            }}
        >
            {/* Título del formulario */}
            <h2 style={titleStyle}>{title}</h2>

            {/* Contenedor del formulario con estilos flexbox */}
            <div style={formContainerStyle} onClick={(e) => e.stopPropagation()}>
                {/* Campo para el destino */}
                <InputField
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'SET_DESTINATION', payload: e.target.value })}
                />

                {/* Campo para la fecha de salida */}
                <InputField
                    type="date"
                    placeholder="Travel Date"
                    value={travelDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'SET_TRAVEL_DATE', payload: e.target.value })}
                />

                {/* Campo para la fecha de regreso */}
                <InputField
                    type="date"
                    placeholder="Return Date"
                    value={returnDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'SET_RETURN_DATE', payload: e.target.value })}
                />

                {/* Campo para el motivo del viaje */}
                <InputField
                    type="text"
                    placeholder="Reason for Travel"
                    value={travelReason}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'SET_TRAVEL_REASON', payload: e.target.value })}
                />

                {/* Botón de envío del formulario */}
                <Button label="Submit Request" onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default TravelForm;