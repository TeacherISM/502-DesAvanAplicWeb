import './App.css';
import Counter from './Counter';
import Login from './Login';
import TravelRequestForm from './TravelRequestForm';

function App() {
  return (
    <div className="card">
      <h1>Clase 3: React Hooks</h1>
      <Counter />
      <hr />
      <Login />
      <hr />
      <TravelRequestForm />
    </div>
  );
}

export default App;
