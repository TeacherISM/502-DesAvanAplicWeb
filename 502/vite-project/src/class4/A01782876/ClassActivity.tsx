import TravelRequestForm from "./components/TravelRequestForm";
import WithAuth from "./components/WithAuth";
import "/src/App.css";

const ClassActivity = () => {
  const AuthenticatedTravelRequestForm = WithAuth(TravelRequestForm);

  return (
    <>
      <div className="mb-5 space-x-2">
        <h1 className="mb-5">Class 4</h1>
        <h2 className="text-xl">Marcos Dayan A01782876</h2>
      </div>

      <p>Authenticated travel request form example with HOC</p>
      <AuthenticatedTravelRequestForm />
    </>
  );
};

export default ClassActivity;
