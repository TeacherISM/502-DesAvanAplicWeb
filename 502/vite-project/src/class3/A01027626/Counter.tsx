import React, { useState } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-container">
      <p className="counter-value">Count: {count}</p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="counter-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
