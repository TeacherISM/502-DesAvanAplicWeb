import React, { useEffect, useState } from 'react';

interface GreetExampleProps {
  name: string;
  age: number;
}

export const GreetExample: React.FC<GreetExampleProps> = ({ name, age }) => {
  const [output, setOutput] = useState('');

  const greet = ({ name, age }: { name: string; age: number }) =>
    `Hello, ${name}! You are ${age} years old.`;

  useEffect(() => {
    setOutput(greet({ name, age }));
  }, [name, age]);

  return (
    <div>
      <h2>Practice Activity - greet Refactor</h2>
      <p>{output}</p>
    </div>
  );
};
