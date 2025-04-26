import React, { useEffect, useState } from 'react';

export const Destructuring: React.FC = () => {
    const [values, setValues] = useState({
      name: '',
      primaryColor: '',
      leadName: ''
    });
  
    useEffect(() => {
      const user = { name: "Do Kyu", age: 30 };
      const { name } = user;
  
      const colors = ["red", "green", "blue"];
      const [primary] = colors;
  
      const team = {
        lead: { name: "Do Kyu", email: "A01025119@tec.mx" },
        size: 5,
      };
      const { lead: { name: leadName } } = team;
  
      setValues({
        name,
        primaryColor: primary,
        leadName
      });
    }, []);
  
    return (
      <div>
        <h2>Destructuring Example</h2>
        <p>Name: {values.name}</p>
        <p>Primary Color: {values.primaryColor}</p>
        <p>Lead Name: {values.leadName}</p>
      </div>
    );
  };