import React from "react";
import ReactDOM from "react-dom/client";
import TasksMenu from "./TasksMenu";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <TasksMenu />
  </React.StrictMode>
);
