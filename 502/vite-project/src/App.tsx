import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const navigateTo = (path: string) => {
    // You might want to use React Router instead of window.location
    window.location.href = path;
  };

  return (
    <div>
      <h1>Vite + React</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button
          onClick={() =>
            (window.location.href =
              "/src/class3/A01782557/dashboard/index.html")
          }
        >
          A01782557 Dashboard
        </button>
        <button
          onClick={() =>
            (window.location.href = "/src/class3/A01781321/index.html")
          }
        >
          A01781321 Class projects
        </button>
        <button>
          <a href="/src/class1/A01784521/menu/menu.html">
            A01784521 Activities index
          </a>
        </button>
        <button>
          <a href="/src/menu/A01028038/index.html">A01028038 Menú</a>
        </button>
        <p>
          <a href="/src/class1/A01783637/Homework_Index/index.html">
            Menu of Homeworks for Imanol Santisteban A01783637
          </a>
          <a
            href="/src/class1/A01025119/webpage/A01025119.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            A01025119 Pagina de Do Kyu
          </a>
        </p>
      </div>
      <div>
        <a
          href="/src/class2/A01784008/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leon Blanga Hasbani A01784008
        </a>
        <a href="/src/class1/A01781442/index.html">
          Rafael Blanga Hanono A01781442
        </a>
        <a href="src/class1/A01784238/menu/index.html">
          A01784238 Menú de José Manuel García Zumaya
        </a>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <a href="/src/class1/A01783808/index.html">
        Classes Diego Abdo - A01783808
      </a>
    </div>
  );
}

export default App;
