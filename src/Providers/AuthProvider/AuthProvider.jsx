import React, { createContext } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = { name: "sami", email: "sami@jami.com" };
  const authData = {
    user,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
