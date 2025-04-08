import React from "react";
import "./TasksMenu.css";

const TasksMenu: React.FC = () => {
  const openTask = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="tasks-menu-container">
      <h1>Menú de Tareas - Paúl Araque</h1>
      <ul className="tasks-menu-list">
        <li>
          <button
            onClick={() =>
              openTask("/src/class1/A01027626/menu/a01027626.html")
            }
          >
            Clase 1
          </button>
        </li>
        <li>
          <button
            onClick={() => openTask("/src/class2/A01027626/a01027626.html")}
          >
            Clase 2
          </button>
        </li>
        <li>
          <button
            onClick={() => openTask("/src/class3/A01027626/a01027626.html")}
          >
            Clase 3
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TasksMenu;
