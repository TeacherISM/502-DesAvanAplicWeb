import React from 'react';
import Button from '../../class2/A01025119/Button';


type Props = {
  onBack: () => void;
};

const LoginFailed: React.FC<Props> = ({ onBack }) => {
  return (
    <div style={styles.page}>
      <h2>Login Failed</h2>
      <p>Invalid username or password.</p>
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

export default LoginFailed;
