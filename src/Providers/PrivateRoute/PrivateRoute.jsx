import React, { Children, use } from "react";
import AuthContext from "../AuthProvider/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }
  if (user && user?.email && loading === false) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
