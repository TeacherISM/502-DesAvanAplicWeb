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
  const add = (a: number, b: number): number => a + b;

  const objFixed = {
    name: "Alice",
    greet: function (): void {
      setTimeout(() => {
        console.log(`Hello, ${this.name}!`);
      }, 1000);
    },
  };

  const user: User = { name: "Bob", age: 30 };
  const { name: userName, age } = user;

  const colors: string[] = ["red", "green", "blue"];
  const [primary, secondary] = colors;

  const team: Team = {
    lead: { name: "Alice", email: "alice@example.com" },
    size: 5,
  };
  const {
    lead: { name: leadName },
  } = team;

  const charlieName: string = "Charlie";

  const message: string = `
  Dear ${charlieName},
  Thank you for your order.
`;

  const a: number = 5;
  const b: number = 10;

  const mathSum = addFunction(a, b);
  const mathDifference = subtract(a, b);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Class 1: ES6 Features Demo
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Arrow Function</h2>
        <p className="text-lg">
          Result of add(3, 4): <span className="font-mono">{add(3, 4)}</span>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Arrow Function Fixing "this"
        </h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => objFixed.greet()}
        >
          Click to greet (Check the console)
        </button>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Object Destructuring</h2>
        <p className="text-lg">User's Name: {userName}</p>
        <p className="text-lg">User's Age: {age}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Array Destructuring</h2>
        <p className="text-lg">Primary Color: {primary}</p>
        <p className="text-lg">Secondary Color: {secondary}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Nested Destructuring</h2>
        <p className="text-lg">Team Lead's Name: {leadName}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. String Interpolation</h2>
        <p className="text-lg">{`Hello, ${charlieName}!`}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Multi-line Strings</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-line">
          {message}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          8. Expressions in Placeholders
        </h2>
        <p className="text-lg">{`The sum is ${a + b}.`}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. ES6 Modules</h2>
        <p className="text-lg">
          Imported{" "}
          <code className="font-mono bg-gray-200 px-1 rounded">add</code>{" "}
          result: {mathSum}
        </p>
        <p className="text-lg">
          Imported{" "}
          <code className="font-mono bg-gray-200 px-1 rounded">subtract</code>{" "}
          result: {mathDifference}
        </p>
        <p className="text-sm text-gray-600">
          Check console for a logged message from the default export.
        </p>
      </section>
    </div>
  );
};

export default ES6;
