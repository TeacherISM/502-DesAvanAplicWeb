import React, { useReducer } from 'react';

const initialState = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: '',
};

type Action =
  | { type: 'UPDATE_FIELD'; field: string; value: string };

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const TravelRequestForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const handleSubmit = () => {
    console.log('Travel Request:', state);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow space-y-3">
      <h1 className="text-xl font-bold">Travel Request</h1>
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e) => handleChange('destination', e.target.value)}
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="date"
        value={state.startDate}
        onChange={(e) => handleChange('startDate', e.target.value)}
      />
      <input
        className="w-full p-2 border border-gray-300 rounded"
        type="date"
        value={state.endDate}
        onChange={(e) => handleChange('endDate', e.target.value)}
      />
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e) => handleChange('purpose', e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

export default TravelRequestForm;
