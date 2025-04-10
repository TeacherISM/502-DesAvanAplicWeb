import React, { useState } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="container">
      <p className="value">Count: {count}</p>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
