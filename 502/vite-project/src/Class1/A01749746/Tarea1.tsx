import './style.css';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="zonaApp">
      <Login />
      <Dashboard />
    </div>
  );
};

export default App;
