import React, { useReducer, ChangeEvent } from 'react';

interface TravelState {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

type TravelAction = {
  type: 'UPDATE_FIELD';
  field: keyof TravelState;
  value: string;
};

const initialState: TravelState = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: '',
};

const reducer = (state: TravelState, action: TravelAction): TravelState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const TravelRequestForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: keyof TravelState, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    console.log('Travel Request:', state);
  };

  return (
    <div>
      <h1>Travel Request Form</h1>
      <input
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange('destination', e.target.value)
        }
      />
      <input
        type="date"
        placeholder="Start Date"
        value={state.startDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange('startDate', e.target.value)
        }
      />
      <input
        type="date"
        placeholder="End Date"
        value={state.endDate}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleChange('endDate', e.target.value)
        }
      />
      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          handleChange('purpose', e.target.value)
        }
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TravelRequestForm;
