import "/src/App.css";

const ClassActivity = () => {
  const user = {
    name: "Marcos",
    age: 21,
  };

  // Before
  function greetTraditional(user: { name: string; age: number }) {
    return "Hello, " + user.name + "! You are " + user.age + " years old.";
  }

  // After (using template literals + destructuring)
  const greetEs6 = ({ name, age }: { name: string; age: number }) =>
    `Hello, ${name}! You are ${age} years old.`;

  return (
    <div>
      <h3>Activity 1</h3>

      <h4>Using Traditional TS</h4>
      {greetTraditional(user)}
      <br />
      <br />

      <h4>Using ES6+ JavaScript</h4>
      {greetEs6(user)}
    </div>
  );
};

export default ClassActivity;
