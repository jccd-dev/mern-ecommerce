import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();

  if (!currentUser) {
    return (
      <Navigate
        to={"/login"}
        replace
        state={{ from: location, fromCart: location.pathname === "/cart" }}
      />
    );
  }

  return children;
};

export default ProtectedRoutes;
