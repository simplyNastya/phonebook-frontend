import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/auth/auth-selectors";
import Loader from "../Loader/Loader";

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Loader />;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
