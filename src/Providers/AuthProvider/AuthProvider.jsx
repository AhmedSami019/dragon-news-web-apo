import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUSer = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // for sing in user with email and password
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for update user profile
  const updateUserProfile = (userData)=>{
    return updateProfile(auth.currentUser, userData)
  }

  // for log out
  const logOut = () => {
    return signOut(auth);
  };

  //   to make sure is user logged in or not
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [auth]);

  // console.log(loading, user);

  //   const user = { name: "sami", email: "sami@jami.com" };
  const authData = {
    user,
    setUser,
    registerUSer,
    singInUser,
    logOut,
    loading,
    setLoading,
    updateUserProfile
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
