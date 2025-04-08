import { useReducer } from 'react';

const initialState = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: '',
};

function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

const TravelRequestForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    console.log('Solicitud de viaje:', state);
  };

  return (
    <div>
      <h2>Formulario de Solicitud de Viaje</h2>
      <input
        type="text"
        placeholder="Destino"
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
        placeholder="Propósito"
        value={state.purpose}
        onChange={(e) => handleChange('purpose', e.target.value)}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default TravelRequestForm;
