import './index.css';


const concepts = [
  "Arrow Functions",
  "Destructuring",
  "Template Literals",
  "Modules"
];

const Arfunc = () => {
  const user = {
    name: "Rafael",
    lastName: "Blanga"
  };


  const welcomeMessage = ({ name, lastName }: typeof user) =>
    `Welcome, ${name} ${lastName}!`;

  return (
    <div className="Center">
      <h1>Tarea 1: Repaso de ES6+</h1>
      <p>{welcomeMessage(user)}</p>
      <h2>Conceptos cubiertos:</h2>
      <ul>
        {concepts.map((concept, index) => (
          <li key={index}>{concept}</li>
        ))}
      </ul>
      <a href="/src/class1/A01781442/index.html">Regresar a Menú</a>
    </div>
  );
};

export default Arfunc;
