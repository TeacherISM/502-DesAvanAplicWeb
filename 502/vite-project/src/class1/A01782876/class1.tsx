import { greetEs6, greetTraditional } from "./practice_activity_1";

const Class1 = () => {
  const user = {
    name: "Marcos",
    age: 21,
  };

  return (
    <>
      <div>
        <h3>Activity 1</h3>

        <h4>Using Traditional TS</h4>
        {greetTraditional(user)}
        <br />
        <br />

        <h4>Using ES6+ JavaScript</h4>
        {greetEs6(user)}
      </div>
    </>
  );
};

export default Class1;
