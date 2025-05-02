import React from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      navigate("/class6/A01782876/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
