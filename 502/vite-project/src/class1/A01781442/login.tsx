import './index.css';

const LoginPage: React.FC = () => (
  <div className="LoginContainer">
    <div className="LoginBox">
      <h1 className="LoginTitle">Inicia Sesión</h1>
      <form className="LoginForm">
        <FormGroup
          label="Email"
          type="email"
          id="email"
          placeholder="you@example.com"
        />
        <FormGroup
          label="Password"
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <button type="submit" className="LoginButton">Log In</button>
      </form>
    </div>
  </div>
);

// Subcomponente funcional
const FormGroup: React.FC<{
  label: string;
  type: string;
  id: string;
  placeholder: string;
}> = ({ label, type, id, placeholder }) => (
  <div className="FormGroup">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="FormInput"
    />
  </div>
);

export default LoginPage;
