import { useState } from 'react';


interface User {
    name: string;
    age: number;
}

function App() {
    const [data, setData] = useState<string>('');
    const user = {
        name: 'Remy',
        age: 22, 
    }

    // Before
    function greet(user: User) {
      return "Hello, " + user.name + "! I am " + user.age + " years old.";
    }

    // After (using template literals + destructuring)
    const greetES6 = ({ name, age }: User) => `Hello, ${name}! I am ${age} years old.`;


  return (
    <>
        <p>Without ES6</p>
        <p>{greet(user)}</p>
        <p>With ES6</p>
        <p>{greetES6(user)}</p>


        <button
            onClick={async () => {
                const response = await fetch('https://catfact.ninja/fact');
                const data = await response.json();
                setData(data.fact);
            }}
            type="button"
        >
            Fetch Data
        </button>

        {data && (
          <>
            <p><strong>Data fetched from API:</strong></p>
            <p>{data}</p>
          </>
        )}

        <a href="/src/menu/A01784177/index.html">Menu</a>
    </>
  )
}

export default App
