import { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}


const Login = ({ onLogin }: LoginProps) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value
        });
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin(user.username, user.password);
    }


    return (
        <>
            <h1>Login Page</h1>

            <form onSubmit={handleSubmit}>
                <InputField label="Username" name="username" type="text" handleChange={handleChange} />
                <InputField label="Password" name="password" type="password" handleChange={handleChange} />
                <Button type="submit" label="Login" />
            </form>
        </>
    )
}

export default Login;