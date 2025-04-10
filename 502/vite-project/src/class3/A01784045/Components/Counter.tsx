import React, { useState } from 'react';
import styles from './Counter.module.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <p className={styles.number}>Contador: {count}</p>
      <div className={styles.buttons}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
