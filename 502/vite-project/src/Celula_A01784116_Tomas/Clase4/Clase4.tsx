import { useEffect, useReducer, ChangeEvent } from 'react';
import TravelFetcher from './TravelFetcher.tsx'; 
import TravelRequestList from './TravelRequestLists.tsx';

// 1. Definir el tipo del estado
type State = {
  username: string;
  password: string;
  loading: boolean;
  error: string;
  data: null | { user: string };
};

// 2. Definir el tipo de las acciones
type Action =
  | { type: 'UPDATE_FIELD'; field: keyof State; value: string }
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: string } }
  | { type: 'LOGIN_ERROR' };

// 3. Estado inicial tipado
const initialState: State = {
  username: '',
  password: '',
  loading: false,
  error: '',
  data: null,
};

// 4. Reducer con tipado
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'LOGIN_START':
      return { ...state, loading: true, error: '' };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: 'Login failed' };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = () => {
    dispatch({ type: 'LOGIN_START' });

    setTimeout(() => {
      if (state.username === 'admin' && state.password === '1234') {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user: 'admin' } });
      } else {
        dispatch({ type: 'LOGIN_ERROR' });
      }
    }, 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.placeholder.toLowerCase() as keyof State,
      value: e.target.value,
    });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => console.log('Fetched user:', data));
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={handleChange}
      />
      <button onClick={handleLogin}>Login</button>
      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.data && <p>Welcome {state.data.user}!</p>}

      {/* Mostrar el componente con logging */}
      <MensajeConLogging />

      <TravelRequestList />


      {/* Mostrar datos con Render Props */}
      <TravelFetcher
        render={(data) => (
          <div style={{ marginTop: '2rem' }}>
            <h2>Travel Requests (Render Props)</h2>
            <ul>
              {data.map((req) => (
                <li key={req.id}>
                  ✈️ {req.destination} - {req.reason}
                </li>
              ))}
            </ul>
          </div>
        )}
      />
    </div>
  );
};

  

export default Login;

// HOC que agrega logging
const withLogging = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    useEffect(() => {
      console.log(`📋 [LOG] Componente ${WrappedComponent.name} montado`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

// Componente simple
const Mensaje = () => {
  return <p>Este es un componente simple con logging automático.</p>;
};

// Componente con HOC aplicado
const MensajeConLogging = withLogging(Mensaje);
