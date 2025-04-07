import "/src/App.css"
const ES6Hw= ()=>{

  interface Datos {
    nombre: string;
    apellido: string;
    matricula: string;
  }

  const datos: Datos = {nombre:"Leon",apellido:"Blanga Hasbani", matricula:"A01784008"};

  //Función ajustada que incluye: arrow function, destructuring y template literals
  const greet = ({ nombre, apellido, matricula }: Datos) => 
    `Saludos ${nombre} ${apellido}! 
    Tu matricula es ${matricula}`;

  return(
    <>
    <h1>Tarea 1</h1>
    <h2>Advanced JavaScript Concepts (ES6+) Review</h2>
    <p>Destructuring, Template Literals, Arrow Functions</p>
    <div>
      {/* llamamos nuestra arrow function*/}
      {greet(datos)}
    </div>
    </>
  );
};
//4- Modules
export default ES6Hw;