const Dashboard = ({ role }: { role: string }) => {
  return (
    <>
      <h1>Dashboard</h1>
      {role === "admin" && <p>Welcome, Admin!</p>}
      {role === "manager" && <p>Welcome, Manager!</p>}
      {role === "employee" && <p>Welcome, Employee!</p>}
    </>
  );
}

export default Dashboard;