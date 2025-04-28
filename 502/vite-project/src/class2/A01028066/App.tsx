import Greeting from '../components/Greeting';
import Counter from '../components/Counter';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState<{ email: string; role: string } | null>(null);

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#f8fafc',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      color: '#334155'
    }}>
      {userInfo && <Greeting email={userInfo.email} />}
      <Counter />
      <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />
      <LoginForm onLogin={(email, role) => setUserInfo({ email, role })} />

      {userInfo && (
        <p style={{ marginTop: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
          Logged in as: {userInfo.role}
        </p>
      )}
    </div>
  );
}

export default App;
