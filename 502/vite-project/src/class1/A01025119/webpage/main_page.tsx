import { useState, useEffect } from "react";
import { JsConceptsApp } from "../Tarea/JSconcepts";
import TravelRequests from "../../../class2/A01025119/travel_card";
import LoginEx from "../../../class2/A01025119/login_exp";
import Login from "../../../class3/A01025119/Login_page";
import TravelRequestForm from "../../../class3/A01025119/Travel_request";
import CustomLogin from "../../../class4/A01025119/customLogin";
import TravelRequest from "../../../class5/A01025119/TravelRequest";
import { UserProvider } from "../../../class6/A01025119/UserContext";
import ContextLogin from "../../../class6/A01025119/Login";
import ContextDashboard from "../../../class6/A01025119/Dashboard";
import WebSocketDemo from "../../../class7/A01025119/webSocket";

import "./main_design.css";
import "../../../App.css";

type Page =
  | "home"
  | "class1"
  | "class2-login"
  | "class2-travel"
  | "class3"
  | "travel-request"
  | "class4"
  | "class5"
  | "class6-login"
  | "class6-dashboard"
  | "class7-websocket"; // NUEVO

export const A01025119 = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  useEffect(() => {
    const loadFromHash = () => {
      const hash = window.location.hash.replace("#", "") as Page;
      if (
        [
          "home",
          "class1",
          "class2-login",
          "class2-travel",
          "class3",
          "travel-request",
          "class4",
          "class5",
          "class6-login",
          "class6-dashboard",
          "class7-websocket",
        ].includes(hash)
      ) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
    };

    loadFromHash();
    window.addEventListener("hashchange", loadFromHash);
    return () => window.removeEventListener("hashchange", loadFromHash);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
  };

  const handleLoginSuccess = (username: string) => {
    setLoggedInUser(username);
    navigateTo("travel-request");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "class1":
        return <JsConceptsApp />;
      case "class2-login":
        return <LoginEx />;
      case "class2-travel":
        return <TravelRequests />;
      case "class3":
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case "travel-request":
        return <TravelRequestForm username={loggedInUser ?? ""} />;
      case "class4":
        return <CustomLogin />;
      case "class5":
        return <TravelRequest />;
      case "class6-login":
        return (
          <UserProvider>
            <ContextLogin />
          </UserProvider>
        );
      case "class6-dashboard":
        return (
          <UserProvider>
            <ContextDashboard />
          </UserProvider>
        );
      case "class7-websocket":
        return <WebSocketDemo />;
      default:
        return (
          <div className="main-container">
            <h1>Página principal</h1>
            <ul>
              <li>Do Kyu (A01025119)</li>
              <li>Paul Araque</li>
              <li>Alberto Limon</li>
              <li>Francisco Urquizo</li>
            </ul>

            <div className="button-grid">
              <button className="main-button" onClick={() => navigateTo("class1")}>
                Class 1 Arrow Functions
              </button>
              <button className="main-button" onClick={() => navigateTo("class2-login")}>
                Class 2 Login
              </button>
              <button className="main-button" onClick={() => navigateTo("class2-travel")}>
                Class 2 Travel Form
              </button>
              <button className="main-button" onClick={() => navigateTo("class3")}>
                Class 3 Login Authentication
              </button>
              <button className="main-button" onClick={() => navigateTo("class4")}>
                Class 4 Custom Login
              </button>
              <button className="main-button" onClick={() => navigateTo("class5")}>
                Class 5 Custom Login
              </button>
              <button className="main-button" onClick={() => navigateTo("class6-login")}>
                Class 6: Role-Based Login
              </button>
              <button className="main-button" onClick={() => navigateTo("class7-websocket")}>
                Class 7: WebSocket
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="explanation-box">
                <h2 style={{ marginTop: 0 }}>Class 8: Testing con Jest y Cypress</h2>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", textAlign: "left" }}>
                  <li><strong>Para ejecutar la prueba con Jest:</strong></li>
                  <ul>
                    <li>Ve a la carpeta <code>vite-project</code>.</li>
                    <li>Ejecuta el comando <code>npm test</code>.</li>
                  </ul>
                  <li><strong>Para ejecutar la prueba con Cypress:</strong></li>
                  <ul>
                    <li>Ingresa a la carpeta <code>A01025119</code>, dentro de la clase 8.</li>
                    <li>Ejecuta el comando <code>npx cypress open</code>.</li>
                    <li>Desde la interfaz gráfica podrás visualizar y correr la prueba.</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return <>{renderPage()}</>;
};
