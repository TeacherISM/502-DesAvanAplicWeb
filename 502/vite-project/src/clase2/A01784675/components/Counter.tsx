import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-2">
      <p className="text-xl">Count: {count}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;

