import Client from "./Client";
import "./styles.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>WebSocket</h1>
        <div className="clients">
          <Client id={1} />
          <Client id={2} />
        </div>
        <a href="/src/menu/A01028038/index.html" className="menu">
          Menu
        </a>
      </div>
    </>
  );
}
export default App;
