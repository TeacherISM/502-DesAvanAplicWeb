import { useState } from 'react';


interface User {
  name: string;
  age: number;}


function App() {
  const user = ({
    name: "Juan",
    age: 25,
  
  })
  const [posts,setPosts] = useState<any | null>(null);
  ;

  //fucnion que actualizar el artibuto de usuario segun el nombre del input
  // Before
function greet(user: User) {
  return "Hello, " + user.name + "! You are " + user.age + " years old.";
}

// After (using template literals + destructuring)
const greet_es6 = ({ name, age }: User) => `Hello, ${name}! You are ${age} years old.`;
const handleFetch = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  setPosts(data);
  

}

  return (
    <>
    <p>before es6</p>
    <p>{greet(user)}</p>
    <p>after es6</p>
    <p>{greet_es6(user)}</p>
    <button type="button" onClick={handleFetch}> Fetch API</button>
    <p>Posts:</p>
    <ul>
      {posts && posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>




    <a href="/src/menu/A01028038/index.html">Menu</a>
    </>
  )
}
export default App
