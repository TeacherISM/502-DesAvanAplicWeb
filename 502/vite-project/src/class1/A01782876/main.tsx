import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/index.css";
import ClassActivity from "./ClassActivity.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClassActivity />
  </StrictMode>
);
