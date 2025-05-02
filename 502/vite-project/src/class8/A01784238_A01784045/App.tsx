import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JestPage from "./pages/JestPage";
import CypressPage from "./pages/CypressPage";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
            <li>
              <Link to="/jest">Jest Testing</Link>
            </li>
            <li>
              <Link to="/cypress">Cypress Testing</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/jest" element={<JestPage />} />
          <Route path="/cypress" element={<CypressPage />} />
          <Route path="/" element={<JestPage />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
