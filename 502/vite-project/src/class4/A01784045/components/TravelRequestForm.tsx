import React, { useReducer, FC, ChangeEvent } from 'react'

interface TravelRequestState {
  destination: string
  startDate: string
  endDate: string
  purpose: string
}

type Action = {
  type: 'UPDATE_FIELD'
  field: keyof TravelRequestState
  value: string
}

const initialState: TravelRequestState = {
  destination: '',
  startDate: '',
  endDate: '',
  purpose: ''
}

const reducer = (state: TravelRequestState, action: Action): TravelRequestState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value }
    default:
      return state
  }
}

const TravelRequestForm: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (field: keyof TravelRequestState) => 
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({ type: 'UPDATE_FIELD', field, value: e.target.value })
    }

  const handleSubmit = () => {
    console.log('Travel Request:', state)
  }

  return (
    <div className="form-container">
      <h1>Travel Request Form</h1>
      <input
        type="text"
        placeholder="Destination"
        value={state.destination}
        onChange={handleChange('destination')}
        className="input"
      />
      <input
        type="date"
        placeholder="Start Date"
        value={state.startDate}
        onChange={handleChange('startDate')}
        className="input"
      />
      <input
        type="date"
        placeholder="End Date"
        value={state.endDate}
        onChange={handleChange('endDate')}
        className="input"
      />
      <textarea
        placeholder="Purpose"
        value={state.purpose}
        onChange={handleChange('purpose')}
        className="input"
      />
      <button onClick={handleSubmit} className="button">
        Submit
      </button>
    </div>
  )
}

export default TravelRequestForm
