// pages/TravelRequestForm.tsx
import React, { useReducer } from "react";
import Input from "./Input";
import Button from "./Button";

interface TravelRequestState {
  destination: string;
  startDate: string;
  endDate: string;
  purpose: string;
}

type TravelRequestAction = {
  type: "UPDATE_FIELD";
  field: keyof TravelRequestState;
  value: string;
};

const initialState: TravelRequestState = {
  destination: "",
  startDate: "",
  endDate: "",
  purpose: "",
};

const reducer = (
  state: TravelRequestState,
  action: TravelRequestAction
): TravelRequestState => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const TravelRequestForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field: keyof TravelRequestState, value: string) =>
    dispatch({ type: "UPDATE_FIELD", field, value });

  const handleSubmit = () => {
    console.log("Travel Request:", state);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Travel Request Form</h1>

      <Input
        name="destination"
        label="Destination"
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={(e) => handleChange("destination", e.target.value)}
        className="w-full mb-3 px-4 py-2 border rounded-md"
      />

      <Input
        label="Start Date"
        name="startDate"
        type="date"
        placeholder="Start Date"
        value={state.startDate}
        onChange={(e) => handleChange("startDate", e.target.value)}
        className="w-full mb-3 px-4 py-2 border rounded-md"
      />

      <Input
        label="End Date"
        name="endDate"
        type="date"
        placeholder="End Date"
        value={state.endDate}
        onChange={(e) => handleChange("endDate", e.target.value)}
        className="w-full mb-3 px-4 py-2 border rounded-md"
      />

      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={(e) => handleChange("purpose", e.target.value)}
        className="w-full mb-4 px-4  py-2 border rounded-md"
      />

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default TravelRequestForm;
