import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google login
  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update user
  const updateUser = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };

  // login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    localStorage.removeItem("accessToken");
    return signOut(auth);
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      try {
        if (currentUser === null || currentUser) {
          setUser(currentUser);
        }
      } finally {
        setLoading(false);
      }
    });

    return () => {
      unsub();
    };
  }, [loading]);

  const authInfo = {
    user,
    setLoading,
    loading,
    createUser,
    updateUser,
    login,
    googleLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
