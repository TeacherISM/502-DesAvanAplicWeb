import Button from "./Button";
import TravelForm from "./TravelForm";
const App = () => {
  return (
    <div>
      <h1>Class 8</h1>
      <h2>A01784238 - A01784045</h2>
      <p>Welcome to the class 8 project!</p>
      <p>Button</p>
      <Button label="Click Me!" onClick={() => alert("Button clicked!")} />
      <p>Travel Form</p>
      <TravelForm />
    </div>
  );
};
export default App;
