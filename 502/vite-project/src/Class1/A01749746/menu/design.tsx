import React from 'react';

const Menu = () => {
  const exercises = [
    { name: 'Clase 1', link: '/src/class1/A01749746/index.html', label: 'Tarea 1' },
    { name: 'Clase 2', link: '/src/class2/A01749746/index.html', label: 'Tarea 2' },
    { name: 'Clase 3', link: '/src/class3/A01749746/index.html', label: 'Tarea 3' },
  ];

  const boxStyle: React.CSSProperties = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '20px',
    borderRadius: '12px',
    width: '250px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    padding: '40px 20px',
  };

  const boxesContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    marginTop: '30px',
  };

  const hoverEffect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const resetEffect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Menú de Ejercicios</h1>
      <div style={boxesContainerStyle}>
        {exercises.map((exercise, index) => (
          <a
            key={index}
            href={exercise.link}
            style={boxStyle}
            onMouseOver={hoverEffect}
            onMouseOut={resetEffect}
          >
            <h2 style={{ margin: 0 }}>{exercise.name}</h2>
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{exercise.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
