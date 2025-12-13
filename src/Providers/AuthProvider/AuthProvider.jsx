import React, { useState } from "react";
import AuthContext from "./AuthContext";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null)


    const registerUSer = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

//   const user = { name: "sami", email: "sami@jami.com" };
  const authData = {
    user,
    setUser,
    registerUSer
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
