import { useState } from "react";
import ButtonComponent from "./Button";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        textAlign: "center",
      }}
    >
      <h2>Contador Simple</h2>
      <p>Valor del contador: {count}</p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <ButtonComponent
          type="button"
          text="Incrementar"
          onClick={() => setCount(count + 1)}
        />
        <ButtonComponent
          type="button"
          text="Decrementar"
          onClick={() => setCount(count - 1)}
        />
      </div>
    </div>
  );
};

export default CounterComponent;
