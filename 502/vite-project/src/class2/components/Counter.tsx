import { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>Clase 2</h3>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Contador</h3>
      <div style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#1e40af' }}>
        Count: {count}
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button label="-" variant="default" onClick={() => setCount(count - 1)} />
        <Button label="+" variant="primary" onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
};

export default Counter;