import { Routes, Route, Link } from "react-router-dom";
import JestPage from "./pages/JestPage";
import CypressPage from "./pages/CypressPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="container">
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          <li>
            <Link to="jest">Jest Testing</Link>
          </li>
          <li>
            <Link to="cypress">Cypress Testing</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/jest" element={<JestPage />} />
        <Route path="/cypress" element={<CypressPage />} />
        <Route
          path="/cypress/login"
          element={
            <LoginPage
              onLogin={(username) => console.log(`Logged in as: ${username}`)}
            />
          }
        />
        <Route path="/" element={<JestPage />} />
      </Routes>
    </div>
  );
};

export default App;
