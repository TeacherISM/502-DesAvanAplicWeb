import './index.css';

const LoginPage: React.FC = () => (
  <div className="LoginContainer">
    <div className="LoginBox">
      <h1 className="LoginTitle">Inicia Sesión</h1>
      <form className="LoginForm">
        <div className="FormGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="yourusername"
            className="FormInput"
          />
        </div>

        <div className="FormGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="FormInput"
          />
        </div>

        <button type="submit" className="LoginButton">Log In</button>
      </form>
    </div>
  </div>
);

export default LoginPage;
