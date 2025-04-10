import React, { useReducer, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import InputField from '../../class2/A01025119/Tarea_2/Input.tsx';
import Button from '../../class2/A01025119/Tarea_2/Button.tsx';
import Counter from './counter.tsx';
import './Travel_desing.css';

const initialState = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: '',
};

type Action = {
  type: 'UPDATE_FIELD';
  field: string;
  value: string;
};

const reducer = (state: typeof initialState, action: Action): typeof initialState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const TravelRequestForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const email = location.state?.email || location.state?.username;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleSubmit = () => {
    console.log('Travel Request:', state);
    alert('Travel request submitted!');
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h1>Travel Request Form</h1>
        {email && <p>Logged in as: <strong>{email}</strong></p>}
  
        <InputField
          type="text"
          name="destination"
          placeholder="Destination"
          value={state.destination}
          onChange={handleChange}
        />
  
        <InputField
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={state.startDate}
          onChange={handleChange}
        />
  
        <InputField
          type="date"
          name="endDate"
          placeholder="End Date"
          value={state.endDate}
          onChange={handleChange}
        />
  
        <textarea
          className="form-input"
          name="purpose"
          placeholder="Purpose"
          value={state.purpose}
          onChange={handleChange}
        />
  
        <Button label="Submit" onClick={handleSubmit} />
  
        <Counter />
      </div>
    </div>
  );  
};

export default TravelRequestForm;
