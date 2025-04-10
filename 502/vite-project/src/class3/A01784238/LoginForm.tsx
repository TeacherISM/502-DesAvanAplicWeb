import React, { useReducer, FormEvent } from 'react';
import InputField from './InputField';
import Button from './Button';

// ------------------------
// Interface para el estado del formulario
interface LoginState {
    username: string;
    password: string;
    usernameError: string;
    passwordError: string;
    isValid: boolean;
}

// ------------------------
// Tipos de acciones para el reducer
type LoginAction =
    | { type: 'SET_USERNAME'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'VALIDATE_FORM' }
    | { type: 'RESET_FORM' };

// ------------------------
// Estado inicial del formulario
const initialState: LoginState = {
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
    isValid: false
};

// ------------------------
// Reducer para manejar los cambios de estado y validación
const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.payload,
                usernameError: action.payload.length < 3 ? 'Username must be at least 3 characters' : ''
            };

        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload,
                passwordError: action.payload.length < 6 ? 'Password must be at least 6 characters' : ''
            };

        case 'VALIDATE_FORM':
            const usernameError = state.username.length < 3 ? 'Username must be at least 3 characters' : '';
            const passwordError = state.password.length < 6 ? 'Password must be at least 6 characters' : '';

            return {
                ...state,
                usernameError,
                passwordError,
                isValid: !usernameError && !passwordError
            };

        case 'RESET_FORM':
            return initialState;

        default:
            return state;
    }
};

// ------------------------
// Interface para las props del componente Login
interface LoginProps {
    onClickFunction?: () => void;
}

// ------------------------
// Componente: Login
// Formulario de inicio de sesión con campos para username y password.
const Login: React.FC<LoginProps> = ({ onClickFunction }) => {
    // Usando useReducer para manejar el estado del formulario
    const [state, dispatch] = useReducer(loginReducer, initialState);

    // Destructuring para acceder fácilmente a los valores del estado
    const { username, password, usernameError, passwordError, isValid } = state;

    // Handle submit function
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: 'VALIDATE_FORM' });

        if (username.length >= 3 && password.length >= 6) {
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Form is valid:', isValid);

            // Llamar a la función de callback si fue proporcionada
            if (onClickFunction) {
                onClickFunction();
            }

        } else {
            console.log('Form has errors, please fix them');
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
                gap: '10px',
                padding: '20px',
                maxWidth: '300px',
                margin: '0 auto',
                border: '1px solid #eee',
                borderRadius: '8px'
            }}>
                <h3>Login</h3>

                {/* Campo de entrada para el nombre de usuario */}
                <InputField
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
                    name="username"
                />
                {/* Mostrar error de validación del nombre de usuario si existe */}
                {usernameError && <p style={{ color: 'red', margin: '0', fontSize: '0.8rem' }}>{usernameError}</p>}

                {/* Campo de entrada para la contraseña */}
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                    name="password"
                />
                {/* Mostrar error de validación de la contraseña si existe */}
                {passwordError && <p style={{ color: 'red', margin: '0', fontSize: '0.8rem' }}>{passwordError}</p>}

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