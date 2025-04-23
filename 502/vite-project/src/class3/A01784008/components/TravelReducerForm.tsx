import { useReducer, FormEvent } from 'react';

type State = {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
};

type Action =
  | { type: 'UPDATE_FIELD'; field: keyof State; value: string }
  | { type: 'RESET' };

const initialState: State = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: '',
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function TravelReducerForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: keyof State, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { destination, startDate, endDate, purpose } = state;

    if (!destination || !startDate || !endDate || !purpose) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      alert('La fecha de salida debe ser anterior a la fecha de regreso.');
      return;
    }

    console.log('Solicitud de viaje enviada:', state);
    dispatch({ type: 'RESET' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Solicitud de Viaje (useReducer)</h2>

      <label>
        Destino:
        <input
          type="text"
          placeholder="Destino"
          value={state.destination}
          onChange={(e) => handleChange('destination', e.target.value)}
        />
      </label>

      <label>
        Fecha de salida:
        <input
          type="date"
          value={state.startDate}
          onChange={(e) => handleChange('startDate', e.target.value)}
        />
      </label>

      <label>
        Fecha de regreso:
        <input
          type="date"
          value={state.endDate}
          onChange={(e) => handleChange('endDate', e.target.value)}
        />
      </label>

      <label>
        Motivo del viaje:
        <textarea
          placeholder="Motivo"
          value={state.purpose}
          onChange={(e) => handleChange('purpose', e.target.value)}
          rows={3}
        />
      </label>

      <button type="submit" className="btn">Enviar solicitud</button>
    </form>
  );
}
