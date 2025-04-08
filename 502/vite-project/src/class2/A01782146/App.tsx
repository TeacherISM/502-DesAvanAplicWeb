import { useState, useEffect } from "react";
import ExploradorClases from "./exploradorClases";
import Clase2 from "./Clase2";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const flag = localStorage.getItem("loggedIn");
    if (flag === "true") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {loggedIn ? (
        <ExploradorClases />
      ) : (
        <Clase2
          onLoginSuccess={() => {
            setLoggedIn(true);
            localStorage.setItem("loggedIn", "true");
          }}
        />
      )}
    </div>
  );
};

export default App;
