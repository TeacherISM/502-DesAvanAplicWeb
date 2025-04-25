import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}

// Higher-Order Component: withLogging
function withLogging<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function EnhancedComponent(props: P) {
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);
    return <WrappedComponent {...props} />;
  };
}

// Button Component
interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  variant: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

function Button({
  label,
  type = 'button',
  variant,
  onClick,
  fullWidth = false,
}: ButtonProps) {
  const buttonStyle: React.CSSProperties = {
    padding: '12px 20px',
    borderRadius: '6px',
    backgroundColor: variant === 'primary' ? '#3498db' : '#e5e7eb',
    color: variant === 'primary' ? '#fff' : '#1f2937',
    border: 'none',
    fontWeight: 500,
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: fullWidth ? '100%' : 'auto',
    boxShadow: variant === 'primary' ? '0 2px 6px rgba(0, 0, 0, 0.15)' : 'none',
  };

  return (
    <button type={type} onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
}

const ButtonWithLogging = withLogging<ButtonProps>(Button);

// Custom Hook: useFetch
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result as T);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

// LoginForm Component (Formik + Yup)
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
});

function LoginForm() {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: 'red' }}>{formik.errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}

// App Component
function App() {
  const outerContainer: React.CSSProperties = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const mainCard: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    padding: '35px',
    maxWidth: '800px',
    width: '100%',
  };

  const activityCard: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    marginBottom: '25px',
  };

  const { data: hookData, loading: hookLoading, error: hookError } =
    useFetch<User>('https://jsonplaceholder.typicode.com/users/2');

  return (
    <div style={outerContainer}>
      <div style={mainCard}>
        <h1 style={{ fontSize: '24px', color: '#2c3e50' }}>Mi Proyecto</h1>

        {/* Formulario con Formik + Yup */}
        <div style={activityCard}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Inicio de sesión</h2>
          <LoginForm />
        </div>

        {/* Custom Hook Ejemplo */}
        <div style={activityCard}>
          <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>Custom Hook</h2>
          {hookLoading && <p style={{ color: '#888' }}>Cargando...</p>}
          {hookError && <p style={{ color: 'red' }}>Error: {hookError.message}</p>}
          {hookData && (
            <div>
              <p><strong>Nombre:</strong> {hookData.name}</p>
              <p><strong>Email:</strong> {hookData.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
