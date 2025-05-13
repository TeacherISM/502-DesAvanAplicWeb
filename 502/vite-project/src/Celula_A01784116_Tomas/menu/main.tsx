// src/Celula_A01784116_Tomas/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import CelulaRouter from "./Router";
import { UserProvider } from "../Clase6/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <CelulaRouter />

    </UserProvider>
  </React.StrictMode>
);
