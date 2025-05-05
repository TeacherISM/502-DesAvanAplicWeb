// TravelAndLogin.tsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './TravelAndLogin.css';
import { Link } from 'react-router-dom';

// Validation schemas using Yup
const loginValidationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const travelValidationSchema = Yup.object({
  destination: Yup.string().required('Destination is required'),
  startDate: Yup.date()
    .required('Start date is required')
    .typeError('Invalid date'),
  endDate: Yup.date()
    .min(Yup.ref('startDate'), 'End date cannot be before start date')
    .required('End date is required')
    .typeError('Invalid date'),
  purpose: Yup.string().required('Purpose is required'),
});

// Login component using Formik and Yup
export const Login = () => (
  <Formik
    initialValues={{ username: '', password: '' }}
    validationSchema={loginValidationSchema}
    onSubmit={(values, { setSubmitting, setStatus }) => {
      setStatus(undefined);
      setSubmitting(true);
      setTimeout(() => {
        if (values.username === 'admin' && values.password === '1234') {
          setStatus({ success: `Welcome ${values.username}!` });
        } else {
          setStatus({ error: 'Login failed' });
        }
        setSubmitting(false);
      }, 2000);
    }}
  >
    {({ errors, touched, isSubmitting, status }) => (
      <Form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Field
            id="username"
            name="username"
            className={touched.username && errors.username ? 'input-error' : ''}
          />
          <ErrorMessage name="username" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            className={touched.password && errors.password ? 'input-error' : ''}
          />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn">
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        {status?.error && <div className="status-error">{status.error}</div>}
        {status?.success && <div className="status-success">{status.success}</div>}
      </Form>
    )}
  </Formik>
);

// Travel request form using Formik and Yup
export const TravelRequestForm = () => (
  <Formik
    initialValues={{ destination: '', startDate: '', endDate: '', purpose: '' }}
    validationSchema={travelValidationSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      console.log('Travel Request Submitted:', values);
      setTimeout(() => {
        alert('Travel request submitted successfully!');
        resetForm();
        setSubmitting(false);
      }, 1000);
    }}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form className="travel-form">
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <Field
            id="destination"
            name="destination"
            placeholder="Enter destination"
            className={touched.destination && errors.destination ? 'input-error' : ''}
          />
          <ErrorMessage name="destination" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <Field
            id="startDate"
            name="startDate"
            type="date"
            className={touched.startDate && errors.startDate ? 'input-error' : ''}
          />
          <ErrorMessage name="startDate" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <Field
            id="endDate"
            name="endDate"
            type="date"
            className={touched.endDate && errors.endDate ? 'input-error' : ''}
          />
          <ErrorMessage name="endDate" component="div" className="error" />
        </div>

        <div className="form-group">
          <label htmlFor="purpose">Purpose</label>
          <Field
            id="purpose"
            name="purpose"
            as="textarea"
            placeholder="Describe purpose"
            className={touched.purpose && errors.purpose ? 'input-error' : ''}
          />
          <ErrorMessage name="purpose" component="div" className="error" />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn">
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </Form>
    )}
  </Formik>
);

// Example App component rendering both forms
const App = () => (
  <div className="app-container">
    <h1>Login Page</h1>
    <Login />
    <hr />
    <h1>Travel Request Form</h1>
    <TravelRequestForm />

    <Link to="/" className="menu-button">
        Volver al Menú
      </Link>
  </div>
);

export default App;