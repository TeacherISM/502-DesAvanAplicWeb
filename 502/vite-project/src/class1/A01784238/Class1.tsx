import React, { useState } from 'react';

// Definición de la interfaz para el usuario
interface User {
    name: string;
    age: number;
}

// Practice Activity:
// Función refactorizada usando arrow function, destructuring y template literals.
const greet = ({ name, age }: User): string =>
    `Hello, ${name}! You are ${age} years old.`;

// ------------------------
// Módulo simulado: Advanced JavaScript Practice
// Función para obtener datos de una API simulada usando fetch.
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchMockData = async (): Promise<Todo> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const data: Todo = await response.json();
    return data;
};

// ------------------------
// Componente: LoginPage
// Página de login simple con campos para username y password.
interface LoginPageProps {
    onLogin: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Para fines de demostración se ignora el password y se "loggea" al usuario
        onLogin(username);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

// ------------------------
// Componente: Dashboard
// Muestra un mensaje de bienvenida y un botón para obtener datos desde la API simulada.
interface DashboardProps {
    username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
    const [data, setData] = useState<Todo | null>(null);

    const handleFetchData = async () => {
        try {
            const fetchedData = await fetchMockData();
            setData(fetchedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Se utiliza la función greet para demostrar su uso (con datos de ejemplo)
    const sampleUser: User = { name: username, age: 25 };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome to the Dashboard, {username}!</h1>
            <p>{greet(sampleUser)}</p>
            <button onClick={handleFetchData}>Fetch Data</button>
            {data && (
                <div style={{ marginTop: '1rem' }}>
                    <h3>Data from Mock API:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

// ------------------------
// Componente Principal: Class1
// Maneja el estado de login y alterna entre la página de login y el dashboard.
const Class1: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username: string) => {
        setUsername(username);
        setLoggedIn(true);
    };

    return (
        <div>
            {!loggedIn ? (
                <LoginPage onLogin={handleLogin} />
            ) : (
                <Dashboard username={username} />
            )}
        </div>
    );
};

export default Class1;