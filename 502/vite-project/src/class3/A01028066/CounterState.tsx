import { useState } from 'react';

const CounterState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Contador con useState</h3>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default CounterState;
