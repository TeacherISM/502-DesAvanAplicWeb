// import React from 'react';

const ExerciseMenu = () => {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Menú de Ejercicios</h1>
      <table style={{ width: '50%', margin: '20px auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px' }}>Ejercicio</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Ejercicio 1</td>
            <td style={{ border: '1px solid black', padding: '10px' }}><a href="/src/class1/A01784107/index.html">Clase 1</a></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Ejercicio 2</td>
            <td style={{ border: '1px solid black', padding: '10px' }}><a href="/src/class2/A01784107/index.html">Clase 2</a></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Ejercicio 3</td>
            <td style={{ border: '1px solid black', padding: '10px' }}><a href="/src/class3/A01784107/class3.html">Clase 3</a></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Ejercicio 4</td>
            <td style={{ border: '1px solid black', padding: '10px' }}><a href="/ejercicio4.html">Clase 4</a></td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>Ejercicio 5</td>
            <td style={{ border: '1px solid black', padding: '10px' }}><a href="/ejercicio5.html">Clase 5</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseMenu;
