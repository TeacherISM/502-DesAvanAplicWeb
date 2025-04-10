import { useReducer } from "react";

interface State {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

const initialState: State = {
  destination: "",
  startDate: "",
  endDate: "",
  purpose: "",
};

interface Action {
  type: string;
  field: string;
  value: string;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const TravelRequestForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: string, value: string) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const handleSubmit = () => {
    console.log("Travel Request:", state);
  };

  return (
    <div>
      <h1>Travel Request Form</h1>
      <input
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e) => handleChange("destination", e.target.value)}
      />
      <input
        type="date"
        placeholder="Start Date"
        value={state.startDate}
        onChange={(e) => handleChange("startDate", e.target.value)}
      />
      <input
        type="date"
        placeholder="End Date"
        value={state.endDate}
        onChange={(e) => handleChange("endDate", e.target.value)}
      />
      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e) => handleChange("purpose", e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TravelRequestForm;
