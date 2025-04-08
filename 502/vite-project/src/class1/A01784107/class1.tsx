import React, { useEffect, useState } from 'react';
import './style.css'; // Importamos el CSS separado

// Arrow Functions Example
const ArrowFunctionExample = () => {
    const add = (a: number, b: number) => a + b;
    const result = add(2, 3);

    return (
        <div className="card">
            <h2>Arrow Functions</h2>
            <p>Result of 2 + 3 = {result}</p>
        </div>
    );
};

// Destructuring Example
const DestructuringExample = () => {
    const user = { name: "Joseph", age: 22 };
    const { name, age } = user;

    const colors = ["red", "green", "blue"];
    const [primary, secondary] = colors;

    return (
        <div className="card">
            <h2>Destructuring</h2>
            <p>Name: {name}, Age: {age}</p>
            <p>Primary Color: {primary}, Secondary Color: {secondary}</p>
        </div>
    );
};

// Template Literals Example
const TemplateLiteralsExample = () => {
    const user = { name: "Joseph", age: 22 };
    const message = `Hello, ${user.name}! You are ${user.age} years old.`;

    return (
        <div className="card">
            <h2>Template Literals</h2>
            <p>{message}</p>
        </div>
    );
};

// Modules Example
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

const ModulesExample = () => {
    const sum = add(5, 3);
    const difference = subtract(5, 3);

    return (
        <div className="card">
            <h2>Modules</h2>
            <p>5 + 3 = {sum}</p>
            <p>5 - 3 = {difference}</p>
        </div>
    );
};

// Login Component - Refactor ES6+
const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
        setForm(prev => ({ ...prev, [name]: value }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { username } = form;
        alert(`Logging in as ${username}`);
    };

    return (
        <div className="card login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};


// Dashboard Component
const Dashboard = () => {
    return (
        <div className="card dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to the Dashboard!</p>
        </div>
    );
};

// Fetch API Example
const FetchDataExample = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="card">
            <h2>Fetch API Example</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong><br />
                        {post.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Main component
const ExamplesComponent: React.FC = () => {
    return (
        <div className="container">
            <ArrowFunctionExample />
            <DestructuringExample />
            <TemplateLiteralsExample />
            <ModulesExample />
            <Login />
            <Dashboard />
            <FetchDataExample />
        </div>
    );
};

export default ExamplesComponent;
