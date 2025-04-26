import React, { useEffect, useState } from 'react';

export const TemplateLiteral: React.FC = () => {
    const [output, setOutput] = useState({
      greeting: '',
      message: '',
      sum: ''
    });
  
    useEffect(() => {
      const name = "Do Kyu";
      const greeting = `Hello, ${name}!`;
  
      const message = `
        Dear ${name},
        Thank you for your order.
      `;
  
      const a = 5, b = 10;
      const sum = `The sum is ${a + b}.`;
  
      setOutput({ greeting, message, sum });
    }, []);
  
    return (
      <div>
        <h2>Template Literals Example</h2>
        <p>{output.greeting}</p>
        <pre>{output.message}</pre>
        <p>{output.sum}</p>
      </div>
    );
  };