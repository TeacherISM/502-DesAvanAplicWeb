import React, { useReducer, useState } from 'react';
import InputField from '../../class2/A01781442/form.tsx';
import Button from '../../class2/A01781442/button.tsx';
import '/src/class1/A01781442/index.css';

type TravelState = {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
};

type TravelAction = {
  type: 'UPDATE_FIELD';
  field: keyof TravelState;
  value: string;
};

const travelInitialState: TravelState = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: '',
};

const travelReducer = (state: TravelState, action: TravelAction): TravelState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const TravelRequestForm: React.FC = () => {
  const [state, dispatch] = useReducer(travelReducer, travelInitialState);
  const [message, setMessage] = React.useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (field: keyof TravelState, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
    if (message) setMessage(null); 
  };

  const handleSubmit = () => {
    const { destination, startDate, endDate, purpose } = state;

    if (!destination || !startDate || !endDate || !purpose) {
      setMessage({ type: 'error', text: 'Por favor llena todos los campos antes de enviar.' });
      return;
    }

    setMessage({ type: 'success', text: '¡Solicitud enviada exitosamente!' });
    console.log('Travel Request:', state);
  };

  return (
    <div className="FormBlock">
      <h2>Travel Request Form</h2>

      {message && (
        <p style={{ color: message.type === 'success' ? 'green' : 'red' }}>{message.text}</p>
      )}

      <input
        className="FormInput"
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e) => handleChange('destination', e.target.value)}
      />
      <input
        className="FormInput"
        type="date"
        value={state.startDate}
        onChange={(e) => handleChange('startDate', e.target.value)}
      />
      <input
        className="FormInput"
        type="date"
        value={state.endDate}
        onChange={(e) => handleChange('endDate', e.target.value)}
      />
      <textarea
        className="FormInput"
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e) => handleChange('purpose', e.target.value)}
      />
      <button className="LoginButton" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

type LoginState = {
  username: string;
  password: string;
  loading: boolean;
  error: string;
  success: boolean;
};

type LoginAction =
  | { type: 'UPDATE_FIELD'; field: 'username' | 'password'; value: string }
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_ERROR'; message: string };

const loginInitialState: LoginState = {
  username: '',
  password: '',
  loading: false,
  error: '',
  success: false,
};

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'LOGIN_START':
      return { ...state, loading: true, error: '', success: false };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, success: true };
    case 'LOGIN_ERROR':
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

const Login: React.FC = () => {
  const [state, dispatch] = useReducer(loginReducer, loginInitialState);
  const [count, setCount] = useState(0);

  const handleChange = (field: 'username' | 'password', value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    dispatch({ type: 'LOGIN_START' });

    setTimeout(() => {
      if (state.username === 'admin' && state.password === 'password') {
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        dispatch({ type: 'LOGIN_ERROR', message: 'Invalid username or password' });
      }
    }, 1000);
  };

  return (
    <div className="Center">
      <div className="LoginBox">
        <h1 className="LoginTitle">Login</h1>
        <h5>Ingresa tu usuario y contraseña para solicitar un viaje <br /><br /> usr: admin <br /><br /> password: password</h5>
        <a href="/src/class1/A01781442/index.html">Regresar a Menú</a>

        {state.error && <p className="LoginError">{state.error}</p>}
        {state.success && <p className="LoginSuccess">Login successful!</p>}

        <div className="LoginForm">
          <InputField
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={(e) => handleChange('username', e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />

          <Button
            label={state.loading ? 'Loading...' : 'Submit'}
            onClick={handleSubmit}
          />
        </div>
      </div>

      {state.success && (
        <>
          <TravelRequestForm />

          <div className="CounterBlock">
            <h2 className="CounterTitle">Contador</h2>
            <p className="CounterValue">{count}</p>
            <div className="CounterButtons">
              <button className="CounterButton" onClick={() => setCount(count + 1)}>+1</button>
              <button className="CounterButton" onClick={() => setCount(count - 1)}>-1</button>
              <button className="CounterButton" onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
