import { add as addFunction, subtract } from "./mathUtils";

type User = {
  name: string;
  age: number;
};

type Team = {
  lead: {
    name: string;
    email: string;
  };
  size: number;
};

const ES6 = () => {
  // Arrow function
  const add = (a: number, b: number): number => a + b;

  // Arrow function fixing `this`
  const objFixed = {
    name: "Alice",
    greet: function (): void {
      setTimeout(() => {
        // `this` correctly refers to `objFixed`
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    },
  };

  // Object destructuring
  const user: User = { name: "Bob", age: 30 };
  const { name: userName, age } = user;

  // Array destructuring
  const colors: string[] = ["red", "green", "blue"];
  const [primary, secondary] = colors;

  // Nested destructuring
  const team: Team = {
    lead: { name: "Alice", email: "alice@example.com" },
    size: 5,
  };
  const {
    lead: { name: leadName },
  } = team;

  // String interpolation
  const charlieName: string = "Charlie";

  // Multi-line strings
  const message: string = `
  Dear ${charlieName},
  Thank you for your order.
`;

  // Expressions inside placeholders
  const a: number = 5;
  const b: number = 10;

  // 9. Demonstrate Modules (Named Exports/Imports & Default Export/Import)
  const mathSum = addFunction(a, b); // from mathUtils
  const mathDifference = subtract(a, b); // from mathUtils

  return (
    <div>
      <h1>ES6 Features Demo</h1>

      <h2>1. Arrow Function</h2>
      <p>Result of add(3, 4): {add(3, 4)}</p>

      <h2>2. Arrow Function Fixing "this"</h2>
      <button onClick={objFixed.greet}>
        Click to greet (Check the console)
      </button>

      <h2>3. Object Destructuring</h2>
      <p>User's Name: {userName}</p>
      <p>User's Age: {age}</p>

      <h2>4. Array Destructuring</h2>
      <p>Primary Color: {primary}</p>
      <p>Secondary Color: {secondary}</p>

      <h2>5. Nested Destructuring</h2>
      <p>Team Lead's Name: {leadName}</p>

      <h2>6. String Interpolation</h2>
      <p>{`Hello, ${charlieName}!`}</p>

      <h2>7. Multi-line Strings</h2>
      {/* Use <pre> so line breaks are visible */}
      <pre>{message}</pre>

      <h2>8. Expressions in Placeholders</h2>
      <p>{`The sum is ${a + b}.`}</p>

      <h2>9. ES6 Modules</h2>
      <p>
        Imported <code>add</code> result: {mathSum}
      </p>
      <p>
        Imported <code>subtract</code> result: {mathDifference}
      </p>
      <p>Check console for a logged message from the default export.</p>
    </div>
  );
};

export default ES6;
