// Counter.jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
        <p style={{ fontFamily: 'Arial, sans-serif', paddingLeft: '450px' }}>
            Este es un contador simple. Puedes aumentar, disminuir o reiniciar el contador.
        </p>
    </div>
  );
};

export default Counter;
