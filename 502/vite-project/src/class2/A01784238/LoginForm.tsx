import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div>
            <h1>Login</h1>
            <InputField
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />
            <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <Button label="Submit" onClick={handleSubmit} />
        </div>
    );
};

export default Login;