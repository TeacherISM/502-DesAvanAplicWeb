import React, { useEffect, useState } from 'react';

// HOC: withLogging
function withLogging<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function EnhancedComponent(props: P) {
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);
    return <WrappedComponent {...props} />;
  };
}

// Button y Props
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

//Tipo de usuario
interface User {
  id: number;
  name: string;
  email: string;
  [key: string]: unknown;
}

//Render Props
interface DataFetcherProps {
  url: string;
  children: (state: {
    data: User | null;
    loading: boolean;
    error: Error | null;
  }) => React.ReactNode;
}

function DataFetcher({ url, children }: DataFetcherProps) {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result as User);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return <>{children({ data, loading, error })}</>;
}

//Custom Hook: useFetch
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

// App
function App() {
  const outerContainer: React.CSSProperties = {
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
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

  const sectionTitle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '15px',
    color: '#1e293b',
  };

  const activityCard: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    marginBottom: '25px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px',
    borderBottom: '2px solid #3498db',
    paddingBottom: '15px',
  };

  const { data: hookData, loading: hookLoading, error: hookError } =
    useFetch<User>('https://jsonplaceholder.typicode.com/users/2');

  return (
    <div style={outerContainer}>
      <div style={mainCard}>
        <h1 style={titleStyle}>Clase 4 - Milestone 2</h1>

        {/* HOC Card */}
        <div style={activityCard}>
          <h2 style={sectionTitle}>Higher-Order Component (HOC)</h2>
          <ButtonWithLogging
            label="Click aquí"
            variant="primary"
            onClick={() => alert('Click registrado!')}
          />
        </div>

        {/* Render Props Card */}
        <div style={activityCard}>
          <h2 style={sectionTitle}>Render Props</h2>
          <DataFetcher url="https://jsonplaceholder.typicode.com/users/1">
            {({ data, loading, error }) => {
              if (loading) return <p style={{ color: '#888' }}>Cargando...</p>;
              if (error) return <p style={{ color: 'red' }}>Error: {error.message}</p>;
              return (
                <div>
                  <p><strong>Nombre:</strong> {data?.name}</p>
                  <p><strong>Email:</strong> {data?.email}</p>
                </div>
              );
            }}
          </DataFetcher>
        </div>

        {/* Custom Hook Card */}
        <div style={activityCard}>
          <h2 style={sectionTitle}>Custom Hook</h2>
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
