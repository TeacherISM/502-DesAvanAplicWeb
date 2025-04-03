import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h3>Trip Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={styles.button}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={styles.button}>Decrement</button>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '30px',
  },
  button: {
    margin: '5px',
    padding: '8px 16px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

export default Counter;
