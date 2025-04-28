import { useReducer } from 'react';

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: state.count - 1 };
    case 'RESET': return { count: 0 };
    default: throw new Error();
  }
};

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>Contador con useReducer</h3>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default ReducerCounter;
