import Login from "./Login";
import React from "react";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      return <Login />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
