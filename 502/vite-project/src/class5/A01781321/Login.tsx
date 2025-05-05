import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}
const Login = ({ onLogin }: LoginProps) => {
  const handleSubmit = (user: { username: string; password: string }) => {
    onLogin(user.username, user.password);
    console.log(user);
  };

  return (
    <>
    <div className="login-container">
    <h1 className="login-title">Login Page Class 5</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="field">
              <label htmlFor="username">Username</label>
              <Field id="username" placeholder="Enter your username" name="username" type="text" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <Field id="password" placeholder="Enter your password" name="password" type="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
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
