// Before
export function greetTraditional(user: { name: string; age: number }) {
  return "Hello, " + user.name + "! You are " + user.age + " years old.";
}

// After (using template literals + destructuring)
export const greetEs6 = ({ name, age }: { name: string; age: number }) =>
  `Hello, ${name}! You are ${age} years old.`;
