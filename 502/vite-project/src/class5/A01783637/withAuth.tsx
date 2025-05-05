// withAuth.tsx
import { ComponentType, FC } from "react";
import LoginPage from "./LoginPage";

const withAuth = <P extends object>(Wrapped: ComponentType<P>): FC<P> => {
  const Protected: FC<P> = (props) => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";

    if (!isAuth) {
      return <LoginPage />;
    }

    /* El cast asegura que props cumple el contrato de P         ↓↓↓ */
    return <Wrapped {...(props as P)} />;
  };

  return Protected;
};

export default withAuth;
