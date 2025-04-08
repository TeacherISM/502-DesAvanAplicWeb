import Input from "./Input";
import Button from "./Button";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form>
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
