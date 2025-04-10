import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

interface LoginPageProps {
  onLogin: () => void;
}

interface LoginState {
  username: string;
  password: string;
}

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string };

const initialState: LoginState = {
  username: '',
  password: '',
};

function reducer(state: LoginState, action: Action): LoginState {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = state;

    if (username === 'lis' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      onLogin();
      navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="text-center text-2xl font-bold text-green-900 mb-4">Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
        className="input"
      />
      <div className="button">
        <button type="submit" className="button">Login</button>
      </div>
    </form>
  );
};

export default LoginPage;
