import React, { useReducer, useEffect } from 'react';
import InputField from '../../class2/A01784045/Components/InputField';
import Button from '../../class2/A01784045/Components/Botton';
import Card from '../../class2/A01784045/Components/Card';
import Counter from '../../class3/A01784045/Components/Counter';
import styles from '../../class2/A01784045/Login.module.css';

interface LoginFormData {
  username: string;
  password: string;
}

interface State {
  formData: LoginFormData;
  error: string;
  loading: boolean;
  isLogged: boolean;
  successMessage: string;
}

type Action =
  | { type: 'SET_USERNAME'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_LOGGED'; payload: boolean }
  | { type: 'SET_SUCCESS'; payload: string }
  | { type: 'RESET_MESSAGES' };

const initialState: State = {
  formData: { username: '', password: '' },
  error: '',
  loading: false,
  isLogged: false,
  successMessage: '',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, formData: { ...state.formData, username: action.payload } };
    case 'SET_PASSWORD':
      return { ...state, formData: { ...state.formData, password: action.payload } };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_LOGGED':
      return { ...state, isLogged: action.payload };
    case 'SET_SUCCESS':
      return { ...state, successMessage: action.payload };
    case 'RESET_MESSAGES':
      return { ...state, error: '', successMessage: '' };
    default:
      return state;
  }
}

const Login: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { formData, error, loading, isLogged, successMessage } = state;

  const validUser = {
    username: 'username',
    password: 'password',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    dispatch({
      type: type === 'password' ? 'SET_PASSWORD' : 'SET_USERNAME',
      payload: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      dispatch({ type: 'SET_ERROR', payload: 'Por favor completa todos los campos' });
      dispatch({ type: 'SET_LOGGED', payload: false });
      dispatch({ type: 'SET_SUCCESS', payload: '' });
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'RESET_MESSAGES' });
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        if (
          formData.username === validUser.username &&
          formData.password === validUser.password
        ) {
          dispatch({ type: 'SET_LOGGED', payload: true });
          dispatch({ type: 'SET_SUCCESS', payload: '✅ Acceso aceptado' });
        } else {
          dispatch({ type: 'SET_ERROR', payload: '❌ Credenciales incorrectas' });
          dispatch({ type: 'SET_LOGGED', payload: false });
        }
        dispatch({ type: 'SET_LOADING', payload: false });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loading, formData]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>
        <InputField type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
        <InputField type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {error && <p className={styles.error}>{error}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        <Button label={loading ? 'Cargando...' : 'Login'} onClick={handleSubmit} />
      </form>

      {isLogged && (
        <>
          <Card
            title="Viaje a Monterrey"
            description="Reunión con cliente importante"
            date="2025-04-10"
            onClick={() => console.log('Solicitud clicada')}
          />
          <Counter />
        </>
      )}
    </div>
  );
};

export default Login;
