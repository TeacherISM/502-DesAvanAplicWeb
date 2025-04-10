import React, { useState, FormEvent } from "react";
import './styles.css';

function Login2({setIsLoggedIn}: {setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (username === "andresoide2000" && password === "test123") {
            setIsLoggedIn(true);
        } else {
            setError("Usuario o contraseña incorrectos");
        }
    };


    

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

function Dashboard() {
    const navigateTo = (path: string) => {
        // You might want to use React Router instead of window.location
        window.location.href = path;
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{ marginBottom: "20px" }}>
                <h2>Navigation</h2>
                <ul>
                    <li>
                        <button onClick={() => navigateTo("/src/class2/A01781321/index.html")}>
                            Class 2 Login
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigateTo("/src/class1/A01781321/index.html")}>
                            Class 1 Code
                        </button>
                    </li>
                </ul>
            </div>
            <div style={{ marginBottom: "20px" }}>
                <h2>User Info</h2>
                <p>Welcome, andresoide2000!</p>
                <button onClick={() => window.location.reload()}>Log Out</button>
            </div>
        </div>
    );
}

export { Login2, Dashboard };