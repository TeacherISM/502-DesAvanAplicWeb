import React from 'react';

const ExerciseMenu = () => {
  const exercises = [
    { name: 'Ejercicio 1', link: '/src/class1/A01784045/index.html', label: 'Clase 1' },
    { name: 'Ejercicio 2', link: '/src/class2/A01784045/index.html', label: 'Clase 2' },
    { name: 'Ejercicio 3', link: '/src/class3/A01784045/class3.html', label: 'Clase 3' },
    { name: 'Ejercicio 4', link: '/ejercicio4.html', label: 'Clase 4' },
    { name: 'Ejercicio 5', link: '/ejercicio5.html', label: 'Clase 5' },
  ];

  return (
    <main
      style={{
        fontFamily: 'Tahoma, sans-serif',
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        padding: '40px 20px',
        textAlign: 'center'
      }}
    >
      <header>
        <h1 style={{ marginBottom: '30px', color: '#444' }}>Menú de Ejercicios</h1>
      </header>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center'
        }}
      >
        {exercises.map((exercise, index) => (
          <article
            key={index}
            style={{
              backgroundColor: 'white',
              width: '90%',
              maxWidth: '400px',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#333' }}>
              {exercise.name}
            </h2>
            <a
              href={exercise.link}
              style={{
                textDecoration: 'none',
                color: '#1e90ff',
                fontWeight: 'bold'
              }}
            >
              {exercise.label}
            </a>
          </article>
        ))}
      </section>
    </main>
  );
};

export default ExerciseMenu;
