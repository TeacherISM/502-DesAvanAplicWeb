import React, { useState, FC } from 'react'

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '32px' }}>
      <h2>Counter: {count}</h2>
      <button className="button" onClick={() => setCount(count - 1)}>-</button>
      <button className="button" onClick={() => setCount(count + 1)} style={{ marginLeft: '10px' }}>+</button>
    </div>
  )
}

export default Counter