import React, { useState } from 'react';

function App() {
  const [buttonText, setButtonText] = useState('Haz clic');
  const [buttonStyle, setButtonStyle] = useState({
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50', // Verde
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  });

  const cambiarBoton = () => {
    setButtonText('¡Funcionó!');
    setButtonStyle({ ...buttonStyle, backgroundColor: '#f44336' }); // Rojo

    // Opcional: Resetear después de 2 segundos
    setTimeout(() => {
      setButtonText('Haz clic');
      setButtonStyle({ ...buttonStyle, backgroundColor: '#4CAF50' });
    }, 2000);
  };

  return (
    <button id="miBoton" style={buttonStyle} onClick={cambiarBoton}>
      {buttonText}
    </button>
  );
}

export default App;