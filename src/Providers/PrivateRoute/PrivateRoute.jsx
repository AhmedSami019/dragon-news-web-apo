import React, { Children, use } from "react";
import AuthContext from "../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../../Pages/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email && loading === false) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
