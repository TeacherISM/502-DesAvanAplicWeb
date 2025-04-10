import { useReducer, ChangeEvent, FormEvent } from 'react';

// 1. Tipos para el estado y las acciones
type FormState = {
  destination: string;
  reason: string;
  date: string;
};

type Action =
  | { type: 'UPDATE_FIELD'; field: keyof FormState; value: string }
  | { type: 'RESET' };

// 2. Estado inicial con tipado
const initialForm: FormState = {
  destination: '',
  reason: '',
  date: '',
};

// 3. Reducer con tipado
const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialForm;
    default:
      return state;
  }
};

const TravelForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialForm);

  // 4. Tipamos el evento del submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Travel Request:', form);
    dispatch({ type: 'RESET' });
  };

  // 5. Tipamos el evento del input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name as keyof FormState, value: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Travel Request</h2>
      <input
        name="destination"
        type="text"
        placeholder="Destination"
        value={form.destination}
        onChange={handleChange}
      />
      <input
        name="reason"
        type="text"
        placeholder="Reason"
        value={form.reason}
        onChange={handleChange}
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TravelForm;
