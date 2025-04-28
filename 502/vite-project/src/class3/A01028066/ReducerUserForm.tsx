import { useReducer } from 'react';

// Tipado del estado inicial
interface State {
  name: string;
  email: string;
  isSubscribed: boolean;
}

// Tipado de acciones
type Action =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'TOGGLE_SUBSCRIPTION' }
  | { type: 'RESET' };

// Estado inicial
const initialState: State = {
  name: '',
  email: '',
  isSubscribed: false,
};

// Reducer puro
function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'TOGGLE_SUBSCRIPTION':
      return { ...state, isSubscribed: !state.isSubscribed };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function ReducerUserForm() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
      <h2 style={{ marginBottom: '1rem', fontWeight: 600 }}>User Profile Form</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Name:
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={state.isSubscribed}
            onChange={() => dispatch({ type: 'TOGGLE_SUBSCRIPTION' })}
          />
          Subscribe to newsletter
        </label>

        <button
          onClick={() => dispatch({ type: 'RESET' })}
          style={{
            padding: '0.75rem',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#475569' }}>
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Subscribed:</strong> {state.isSubscribed ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}
