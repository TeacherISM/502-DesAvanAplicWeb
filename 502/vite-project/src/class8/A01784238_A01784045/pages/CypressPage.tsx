import { Link } from "react-router-dom";
import React from "react";

const CypressPage: React.FC = () => {
  return (
    <div>
      <h1>Cypress Testing</h1>
      <p>This page is for Cypress testing.</p>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          <li>
            <Link to="login">Login Test</Link>{" "}
            {/* Changed from "/cypress/login" to "login" */}
          </li>
          <li>
            <Link to="travel-form">Travel Form Test</Link>{" "}
            {/* Changed from "/cypress/travel-form" to "travel-form" */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CypressPage;
