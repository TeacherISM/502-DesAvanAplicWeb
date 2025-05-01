import withAuth from "./withAuth";
import ApiFetcher from "./ApiFetcher";
import useApiFetcher from "./useApiFetcher";

const Dashboard = ({ role }: { role: string }) => {
  const { posts, loading, error } = useApiFetcher();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <h1>Dashboard</h1>
      {role === "admin" && <p>Welcome, Admin!</p>}
      {role === "manager" && <p>Welcome, Manager!</p>}
      {role === "employee" && <p>Welcome, Employee!</p>}
      <h2> With Render Props Component</h2>
      <ApiFetcher
        render={({ posts, loading, error }: any) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <ul>
              {posts.slice(0, 10).map((post: any) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          );
        }}
      />
      <h2> With custom hook </h2>
      <ul>
        {posts.slice(0, 10).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleLogout} className="logout">
        Logout
      </button>
    </>
  );
};

export default withAuth(Dashboard);
