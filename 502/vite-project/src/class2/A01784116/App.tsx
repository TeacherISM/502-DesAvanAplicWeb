import Login from "./LoginForm";
import Card from "./Card";
import "/src/App.css";

const App = () => {
  return (
    <div>
      <Login />
      <br/>
      <br/>
      <Card
      title="Card Example"
      description="blabla"
      date="5/04/25"/>
      <a href="/src/class1/A01784116/menu/index.html">Class Menu</a>
    </div>
  );
};

export default App;