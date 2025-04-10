import React, { useEffect, useState } from 'react';

export const ArrowFunction: React.FC = () => {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      const objFixed = {
        name: "Do Kyu",
        greet: function () {
          setTimeout(() => {
            const msg = `Hello, ${this.name}`;
            console.log("Arrow:", msg);
            setMessage(msg);
          }, 1000);
        }
      };
  
      objFixed.greet();
    }, []);
  
    return (
      <div>
        <h2>Arrow Function Example</h2>
        <p>{message}</p>
      </div>
    );
  };