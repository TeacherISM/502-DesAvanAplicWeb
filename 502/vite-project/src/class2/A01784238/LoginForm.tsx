import React, { useState, FormEvent } from 'react';
import InputField from './InputField';
import Button from './Button';

// ------------------------
// Componente: Login
// Formulario de inicio de sesión con campos para username y password.
interface LoginProps {
    OnClickFunction?: () => void;
}

const Login: React.FC<LoginProps> = ({ OnClickFunction }) => {
    // Estado para almacenar los valores ingresados por el usuario
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // Función que maneja el envío del formulario
    // Muestra los valores ingresados en la consola
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // Prevenir el comportamiento por defecto del formulario (para que no se envie dos veces)
        e.preventDefault();

        console.log('Username:', username);
        console.log('Password:', password);

        // Si se proporcionó una función OnClickFunction, ejecutarla
        if (OnClickFunction) {
            OnClickFunction();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Contenedor principal con estilos flexbox para alineación vertical */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
            }}>
                <h3>Login</h3>
                {/* Campo de entrada para el nombre de usuario */}
                <InputField
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    required
                />
                {/* Campo de entrada para la contraseña */}
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    required
                />
                {/* Botón de envío del formulario */}
                <Button
                    label="Submit"
                    type="submit"
                />
            </div>
        </form>
    );
};

export default Login;