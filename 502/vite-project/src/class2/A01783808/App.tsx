import LoginPage from "./LoginPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="bg-white shadow mb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-6">
              <a
                href="/src/index.html"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Home
              </a>
              <a
                href="/src/class1/A01783808/index.html"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Class 1
              </a>
              <a
                href="/src/class3/A01783808/index.html"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Class 3
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        <LoginPage />
      </main>
    </div>
  );
};

export default App;
