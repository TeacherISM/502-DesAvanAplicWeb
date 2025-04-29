import React, { useState, useReducer } from 'react';
import InputField from '../../class2/A01781442/form.tsx';
import Button from '../../class2/A01781442/button.tsx';

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

  const handleChange = (field: keyof TravelState, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    console.log('Travel Request:', state);
  };

  return (
    <div className="FormBlock">
      <h2>Travel Request Form</h2>
      <input
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e) => handleChange('destination', e.target.value)}
      />
      <input
        type="date"
        value={state.startDate}
        onChange={(e) => handleChange('startDate', e.target.value)}
      />
      <input
        type="date"
        value={state.endDate}
        onChange={(e) => handleChange('endDate', e.target.value)}
      />
      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e) => handleChange('purpose', e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
  
};

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    setSuccess(false);
    setError('');

    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        setSuccess(true);
        setError('');
      } else {
        setError('Invalid username or password');
        setSuccess(false);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='Center'>
      <h1>Login</h1>
      <a href='/src/class1/A01781442/index.html'>
      Regresar a Menú
      </a>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Login successful!</p>}
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
      <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />

      {/* TravelRequestForm aparece dentro del mismo contenedor */}
      {success && <TravelRequestForm />}
    </div>
  );
};

export default Login;
