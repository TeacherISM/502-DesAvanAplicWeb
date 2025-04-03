import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../class2/A01025119/Tarea_2/Input.tsx';
import Button from '../../class2/A01025119/Tarea_2/Button.tsx';

type State = {
  username: string;
  password: string;
  error: string;
  loading: boolean;
};

type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string }
  | { type: 'SET_ERROR'; message: string }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'RESET' };

const initialState: State = {
  username: '',
  password: '',
  error: '',
  loading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, error: action.message };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  
  const validate = (username: string, password: string): string => {
    if (!username || !password) return 'Please fill all fields';
    return '';
  };

  const handleSubmit = () => {
  const validationError = validate(state.username, state.password);

  if (validationError) {
    dispatch({ type: 'SET_ERROR', message: validationError });
    return;
  }

  dispatch({ type: 'SET_LOADING', loading: true });
  dispatch({ type: 'SET_ERROR', message: '' });

  setTimeout(() => {
    if (state.username === 'admin' && state.password === 'password') {
      console.log('Login successful');
      navigate('/travel-request', { state: { username: state.username } });
    } else {
      dispatch({ type: 'SET_ERROR', message: 'Invalid username or password' });
    }

    dispatch({ type: 'SET_LOADING', loading: false });
  }, 1000);
};

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      {state.error && <p style={styles.error}>{state.error}</p>}

      <InputField
        type="text"
        name="username"
        placeholder="Username"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'username', value: e.target.value })
        }
      />

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_FIELD', field: 'password', value: e.target.value })
        }
      />

      <Button
        label={state.loading ? 'Loading...' : 'Submit'}
        onClick={handleSubmit}
      />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center' as const,
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default Login;
