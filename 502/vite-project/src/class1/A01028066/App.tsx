import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Clase1 from './Clase1';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/clase1" element={<Clase1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
