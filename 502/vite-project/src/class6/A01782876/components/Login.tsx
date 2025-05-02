import "../../../class2/A01784008/App";
import "../App.css";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = (role: string) => {
    console.log("Login as:", role);
    login(role);
    navigate("/class6/A01782876/login-form");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => handleLogin("employee")}>Login as Employee</button>
      <button onClick={() => handleLogin("manager")}>Login as Manager</button>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
    </div>
  );
}
