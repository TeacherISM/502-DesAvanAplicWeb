// Menu.tsx
import React, { useState } from "react";
import App from "../../App.tsx";
import Es6 from "./Es6.tsx";
import Fundamentals from "../../class2/A01783704/fundamentals.tsx";
import Implementation from "../../class3/A01783704/Implementation.tsx";

const Menu = ({ goBack }: { goBack: () => void }) => {
  const [selectedClass, setSelectedClass] = useState("");

  const buttonStyle = {
    margin: "0.6rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    cursor: "pointer",
  };

  const renderSelectedClass = () => {
    switch (selectedClass) {
      case "class0":
        return <App />;
      case "class1":
        return <Es6 onBack={() => setSelectedClass("")} />;
      case "class2":
        return <Fundamentals onBack={() => setSelectedClass("")} />;
      case "class3":
        return <Implementation onBack={() => setSelectedClass("")} />;
      default:
        return (
          <div>
            <h2>Menu</h2>
            <button
              style={buttonStyle}
              onClick={() => setSelectedClass("class0")}
            >
              Class 0
            </button>
            <button
              style={buttonStyle}
              onClick={() => setSelectedClass("class1")}
            >
              Class 1
            </button>
            <button
              style={buttonStyle}
              onClick={() => setSelectedClass("class2")}
            >
              Class 2
            </button>
            <button
              style={buttonStyle}
              onClick={() => setSelectedClass("class3")}
            >
              Class 3
            </button>
            <br />
            <button style={buttonStyle} onClick={goBack}>
              Back to Root
            </button>
          </div>
        );
    }
  };

  return <div>{renderSelectedClass()}</div>;
};

export default Menu;
