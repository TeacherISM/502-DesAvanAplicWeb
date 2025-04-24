import  { useState } from 'react';

const Counter = () => {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increase the count by 1
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrease the count by 1
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Function to reset the count to 0
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter Component</h1>
      <p style={{ fontSize: '2rem' }}>Count: {count}</p>
      <div>
        <button onClick={handleDecrement} style={{ marginRight: '10px' }}>
          Decrement
        </button>
        <button onClick={handleReset} style={{ marginRight: '10px' }}>
          Reset
        </button>
        <button onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
