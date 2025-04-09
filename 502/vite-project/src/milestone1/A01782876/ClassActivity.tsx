import { useState } from "react";
import Counter from "./Counter";
import Login from "./Login";
import TravelRequestForm from "./TravelRequestForm";
import "/src/App.css";

const ClassActivity = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="mb-5 space-x-2">
        <h1 className="mb-5">Milestone 1</h1>
        <h2 className="text-xl">Marcos Dayan A01782876</h2>
      </div>

      <Counter />
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
      {isLoggedIn && <TravelRequestForm />}
    </>
  );
};

export default ClassActivity;
