import { useEffect } from 'react'

const LoginFooter = () => {
  // Arrow function example
  const logMessage = (message: string) => {
    console.log(`[INFO]: ${message}`);
  };
  
  // Destructuring example
  const config = { environment: 'development', debug: true };
  const { environment, debug } = config;
  
  // Template literals example
  const welcomeMessage = `
    Application starting in ${environment} mode.
    Debug mode is ${debug ? 'enabled' : 'disabled'}.
  `;
  
  // Using the examples
  useEffect(() => {
    // Using the arrow function and template literals
    logMessage(welcomeMessage);
    
    // Another example with a hardcoded value for demonstration
    logMessage(`Login component is displayed`);
  }, []);
  
  return (
    <div className="login-footer">
      <h2>ES6+ Examples</h2>
      <p>Environment: {environment}</p>
      <p>Debug Mode: {debug ? 'On' : 'Off'}</p>
      <pre className="code-block">{welcomeMessage}</pre>
      
      <h3>Code Examples:</h3>
      <pre className="code-block">
        {`// Arrow Function
const logMessage = (message: string) => {
  console.log(\`[INFO]: \${message}\`);
};

// Destructuring
const config = { environment: 'development', debug: true };
const { environment, debug } = config;

// Template Literals
const welcomeMessage = \`
  Application starting in \${environment} mode.
  Debug mode is \${debug ? 'enabled' : 'disabled'}.
\`;`}
      </pre>
    </div>
  );
};

export default LoginFooter;
