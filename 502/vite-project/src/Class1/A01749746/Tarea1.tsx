import './style.css';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="container">
      <Login />
      <Dashboard />
    </div>
  );
};

export default App;
