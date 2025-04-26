import React, { useReducer } from 'react';
import InputField from './Props/InputField';
import Button from './Props/Button';

type State = {
  username: string;
  password: string;
  error: string;
  loading: boolean;
};

type Action =
  | { type: 'SET_USERNAME'; kind: string }
  | { type: 'SET_PASSWORD'; kind: string }
  | { type: 'SET_ERROR'; kind: string }
  | { type: 'SET_LOADING'; kind: boolean }
  | { type: 'RESET_ERROR' };

const initialState: State = {
  username: '',
  password: '',
  error: '',
  loading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.kind };
    case 'SET_PASSWORD':
      return { ...state, password: action.kind };
    case 'SET_ERROR':
      return { ...state, error: action.kind };
    case 'RESET_ERROR':
      return { ...state, error: '' };
    case 'SET_LOADING':
      return { ...state, loading: action.kind };
    default:
      return state;
  }
};

const Login: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (): void => {
    dispatch({ type: 'SET_LOADING', kind: true });
    dispatch({ type: 'RESET_ERROR' });

    setTimeout(() => {
      if (state.username === 'admin' && state.password === 'password') {
        console.log('Login successful');
      } else {
        dispatch({ type: 'SET_ERROR', kind: 'Invalid username or password' });
      }
      dispatch({ type: 'SET_LOADING', kind: false });
    }, 1000);
  };

  return (
    <div>
      <h1>Login</h1>

      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}

      <InputField
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SET_USERNAME', kind: e.target.value })
        }

      />

      <InputField
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'SET_PASSWORD', kind: e.target.value })
        }

      />

      <Button
        label={state.loading ? 'Loading...' : 'Submit'}
        onClick={handleSubmit}

      />
    </div>
  );
};

export default Login;
