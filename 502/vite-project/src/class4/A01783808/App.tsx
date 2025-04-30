import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

const App = () => {
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  return (
    <div>
      <main className="max-w-5xl mx-auto px-6 bg-gray-100 pb-24 ">
        {isAuth ? <Dashboard /> : <LoginPage />}
      </main>
    </div>
  );
};

export default App;
