import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const registerUSer = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // for sing in user with email and password
  const singInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  // for log out
  const logOut = ()=>{
    return signOut(auth)
  }


//   to make sure is user logged in or not
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  console.log(user);

  //   const user = { name: "sami", email: "sami@jami.com" };
  const authData = {
    user,
    setUser,
    registerUSer,
    singInUser,
    logOut
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
