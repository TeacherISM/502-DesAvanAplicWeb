const Es6Example = () => {
    const car = {
      brand: "Toyota",
      model: "Corolla",
      year: 2022,
    };
  
    // Función tradicional
    function describeCar(car: { brand: string; model: string; year: number }) {
      return "Car: " + car.brand + " " + car.model + " (" + car.year + ")";
    }
  
    // Usando ES6+ (arrow function + template literals + destructuring)
    const describeCarEs6 = ({ brand, model, year }: typeof car) =>
      `Car: ${brand} ${model} (${year})`;
  
    return (
      <div>
        <h3>ES6+ Demo</h3>
  
        <p><strong>Traditional Function:</strong></p>
        <p>{describeCar(car)}</p>
  
        <p><strong>ES6+ Function:</strong></p>
        <p>{describeCarEs6(car)}</p>
      </div>
    );
  };
  
  export default Es6Example;
  