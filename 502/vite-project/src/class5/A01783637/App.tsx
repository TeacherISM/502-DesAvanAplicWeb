import LoginPage from "./LoginPage";
import TravelRequestForm from "./TravelRequestForm";

const App = () => {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  
    return (
      <div>
        <main className="max-w-5xl mx-auto px-6 bg-gray-100 pb-24 ">
          {isAuth ? <TravelRequestForm /> : <LoginPage />}
        </main>
      </div>
    );
  
};

export default App;
