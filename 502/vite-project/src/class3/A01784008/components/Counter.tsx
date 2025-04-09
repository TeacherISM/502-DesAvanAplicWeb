import { useState } from 'react';

export default function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor actual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <button onClick={() => setContador(contador - 1)}>-1</button>
    </div>
  );
}
