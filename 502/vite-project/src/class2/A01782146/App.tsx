import { useState } from "react";
import ExploradorClases from "./exploradorClases";
import Clase2 from "./Clase2";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <ExploradorClases />
      ) : (
        <Clase2 onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
