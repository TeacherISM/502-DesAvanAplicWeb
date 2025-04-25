// import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const classLinks = [

    { title: 'Class 1', href: '/src/class1/A01028415/index.html' },
    { title: 'Class 2', href: '/src/class2/A01028415/index.html' },
    { title: 'Class 3', href: '/src/class3/A01028415/index.html' },
    { title: 'Class 4', href: '/src/class4/A01784045/index.html' },
    { title: 'Class 5', href: '/src/class5/A01784465/index.html' },
    { title: "Class 6", href: "/src/class6/A01784238/index.html" },
  ];


  return (
    <>
      <h1>Classes Menu Emiliano Romero</h1>
      <div className="card-container">
        {classLinks.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <h2>{title}</h2>
              <p>Go to {title.toLowerCase()} index page</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default App;
