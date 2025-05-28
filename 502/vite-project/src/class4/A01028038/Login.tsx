import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}
const Login = ({ onLogin }: LoginProps) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //fucnion que actualizar el artibuto de usuario segun el nombre del input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(user.username, user.password);
    console.log(user);
  };

  return (
    <>
      <div className="login-container">
        <h1 className="login-title">Login Page Class 4</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <InputField
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
            handleChange={handleChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            handleChange={handleChange}
          />
          <Button type="submit" label="Submit" />
        </form>
      </div>


      <div className="notes">
        <h3>Para probarlo se puede usar los usuarios:</h3>
        <div className="users">
          <div>
            <p><strong>Admin</strong></p>
            <p><strong>username:</strong>admin</p>
            <p><strong>password:</strong>admin</p>
          </div>
          <div>
            <p><strong>Manager</strong></p>
            <p><strong>username:</strong>manager</p>
            <p><strong>password:</strong>manager</p>
          </div>
          <div>
            <p><strong>Employee</strong></p>
            <p><strong>username:</strong>employee</p>
            <p><strong>password:</strong>employee</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
