import React, { useState } from 'react';
import '../../class2/A01025119/Button.tsx'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h3>Trip Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="main-button" >Increment</button>
      <button onClick={() => setCount(count - 1)} className="main-button" >Decrement</button>
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
