import React, { useReducer } from 'react';
import styles from './TravelForm.module.css';

interface TravelState {
  title: string;
  description: string;
  date: string;
}

type Action =
  | { type: 'SET_TITLE'; payload: string }
  | { type: 'SET_DESCRIPTION'; payload: string }
  | { type: 'SET_DATE'; payload: string }
  | { type: 'RESET' };

const initialState: TravelState = {
  title: '',
  description: '',
  date: '',
};

function reducer(state: TravelState, action: Action): TravelState {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'SET_DATE':
      return { ...state, date: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const TravelForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Solicitud enviada:', state);
    dispatch({ type: 'RESET' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Solicitud de Viaje</h2>
      <input
        placeholder="Título"
        value={state.title}
        onChange={(e) => dispatch({ type: 'SET_TITLE', payload: e.target.value })}
      />
      <input
        placeholder="Descripción"
        value={state.description}
        onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })}
      />
      <input
        type="date"
        value={state.date}
        onChange={(e) => dispatch({ type: 'SET_DATE', payload: e.target.value })}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default TravelForm;
