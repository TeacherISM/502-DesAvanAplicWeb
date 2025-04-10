import Arfunc from "./tarea1";
import LoginPage from "./login";
import './index.css'


const App: React.FC = () => {
    return (
      <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
        <Arfunc />
        <div style={{ height: '60px' }} /> {/* Espaciador entre secciones */}
        <LoginPage />
      </div>
    );
  };
  

export default App;