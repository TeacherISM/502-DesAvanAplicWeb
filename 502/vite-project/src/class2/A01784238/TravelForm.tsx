import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

// ------------------------
// Definición de la interfaz para las propiedades del componente
interface TravelFormProps {
    title?: string;
    description?: string;
    date?: string;
    onClickFunction?: () => void;
}

// ------------------------
// Componente: TravelForm
// Componente reutilizable para solicitudes de viaje
const TravelForm: React.FC<TravelFormProps> = ({
    title = "Travel Request",
    description = "",
    date = new Date().toISOString().split('T')[0],
    onClickFunction
}) => {
    // Estado para almacenar los valores ingresados por el usuario
    const [destination, setDestination] = useState<string>('');
    const [travelDate, setTravelDate] = useState<string>(date);
    const [returnDate, setReturnDate] = useState<string>('');
    const [travelReason, setTravelReason] = useState<string>(description);

    // Función que maneja el envío del formulario
    const handleSubmit = () => {
        console.log('Travel request submitted:', {
            destination,
            travelDate,
            returnDate,
            travelReason
        });

        // Si se proporcionó una función onClick, ejecutarla
        if (onClickFunction) {
            onClickFunction();
        }
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
        >
            {/* Título del formulario */}
            <h2 style={titleStyle}>{title}</h2>

            {/* Contenedor del formulario con estilos flexbox */}
            <div style={formContainerStyle}>
                {/* Campo para el destino */}
                <InputField
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDestination(e.target.value)}
                />

                {/* Campo para la fecha de salida */}
                <InputField
                    type="date"
                    placeholder="Travel Date"
                    value={travelDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTravelDate(e.target.value)}
                />

                {/* Campo para la fecha de regreso */}
                <InputField
                    type="date"
                    placeholder="Return Date"
                    value={returnDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReturnDate(e.target.value)}
                />

                {/* Campo para el motivo del viaje */}
                <InputField
                    type="text"
                    placeholder="Reason for Travel"
                    value={travelReason}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTravelReason(e.target.value)}
                />

                {/* Botón de envío del formulario */}
                <Button label="Submit Request" onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default TravelForm;