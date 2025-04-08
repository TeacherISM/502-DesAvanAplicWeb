import React from "react";
import "./ClassesMenu.css";

// Componente principal que muestra el menú de navegación para las clases
const TasksMenu: React.FC = () => {
  
  // Redirecciona al usuario a la ruta especificada
  const irATarea = (ruta: string): void => {
    window.location.href = ruta;
  };

  return (
    <div className="container">
      <h1>Menú de Tareas - Francisco Urquizo</h1>
      <ul className="list">
        <li>
          <button onClick={() => irATarea("/src/class1/A01028786/menu/a01028786.html")}>
            Clase 1
          </button>
        </li>
        <li>
          <button onClick={() => irATarea("/src/class2/A01028786/a01028786.html")}>
            Clase 2
          </button>
        </li>
        <li>
          <button onClick={() => irATarea("/src/class3/A01028786/a01028786.html")}>
            Clase 3
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TasksMenu;
