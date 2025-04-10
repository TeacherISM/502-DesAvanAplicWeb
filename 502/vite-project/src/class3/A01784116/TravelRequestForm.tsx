import { useReducer, ChangeEvent, FormEvent } from 'react';

// Define the shape of your form state
interface FormState {
  destination: string;
  travelDate: string;
  purpose: string;
}

// Define a union type for the actions the reducer can handle
type FormAction =
  | { type: 'UPDATE_FIELD'; field: keyof FormState; value: string }
  | { type: 'RESET_FORM' };

// Define the initial state for the form
const initialState: FormState = {
  destination: '',
  travelDate: '',
  purpose: '',
};

// The reducer function now has explicit types for both `state` and `action`
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const TravelRequestForm = () => {
  // useReducer is now fully typed
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Handler to update state for each input field
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name as keyof FormState,
      value: e.target.value,
    });
  };

  // Handler to reset the form back to its initial state
  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  // Submit handler for the form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', state);
    // Optionally reset the form after submission
    handleReset();
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Travel Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Destination:
            <input
              type="text"
              name="destination"
              value={state.destination}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Travel Date:
            <input
              type="date"
              name="travelDate"
              value={state.travelDate}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Purpose:
            <textarea
              name="purpose"
              value={state.purpose}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div>
          <button type="submit" style={{ marginRight: '10px' }}>
            Submit Request
          </button>
          <button type="button" onClick={handleReset}>
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelRequestForm;
