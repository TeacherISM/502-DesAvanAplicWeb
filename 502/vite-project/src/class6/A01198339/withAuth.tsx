
const withAuth = (WrappedComponent : any) => {
  return (props:any) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (!isAuthenticated) {
        window.location.href = '/';

      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;