import "/src/App.css";

const Actividad = () => {
  const user = {
    city: "Madrid",
    weather: "sunny",
  };

  const greet = ({ city, weather }: { city: string; weather: string }) =>
    `Hello, user from ${city}! The weather is ${weather}.`;

  return (
    <div>
      <h3>Actividad Clase 1</h3>

      <h4>Using ES6+ JavaScript</h4>
      {greet(user)}
    </div>
  );
};

export default Actividad;
