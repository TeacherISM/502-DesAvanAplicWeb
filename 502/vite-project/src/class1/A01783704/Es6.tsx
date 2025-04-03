const Es6 = () => {
  // Example of arrow function
  const add = (a: number, b: number): number => a * b;
  const result = add(5, 10);
  // Example of template literals and destructuring
  const greet = ({ name, age }: { name: string; age: number }) =>
    `Hello, ${name}! You are ${age} years old.`;

  const user = { name: "Alice", age: 25 };

  // Example of array destructuring
  const colors = ["red", "green", "blue"];
  const [primary, secondary, tertiary] = colors;

  // Example of object destructuring
  const team = {
    lead: { name: "Bob", email: "bob@example.com" },
    size: 5,
  };
  const {
    lead: { name: leadName, email: leadEmail },
    size: teamSize,
  } = team;

  // Example of template literals with expressions
  const a = 5;
  const b = 10;
  const sumMessage = `The sum of ${a} and ${b} is ${a + b}.`;

  return (
    <>
      <h1>ES6</h1>
      <div>
        <p>{greet(user)}</p>
        <p>{`Result of add function: ${result}`}</p>
        <p>{`Primary color: ${primary}`}</p>
        <p>{`Secondary color: ${secondary}`}</p>
        <p>{`Tertiary color: ${tertiary}`}</p>
        <p>{`Team lead: ${leadName} (${leadEmail})`}</p>
        <p>{`Team size: ${teamSize}`}</p>
        <p>{sumMessage}</p>
      </div>
    </>
  );
};

export default Es6;
