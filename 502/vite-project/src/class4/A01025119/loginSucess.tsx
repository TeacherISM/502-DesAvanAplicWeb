import React from 'react';
import Button from '../../class2/A01025119/Button';

type Props = {
    username: string;
    onBack: () => void;
  };
  
  const LoginSuccess: React.FC<Props> = ({ username, onBack }) => {
    return (
      <div style={styles.page}>
        <h2>Welcome, {username}!</h2>
        <p>You have successfully logged in.</p>
  
        <Button label="Back to Login" onClick={onBack} />
      </div>
    );
  };
  
  const styles = {
    page: {
      textAlign: 'center' as const,
      marginTop: '50px',
    },
  };
  
  export default LoginSuccess;