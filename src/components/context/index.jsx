import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect } from "react";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/reducers/addProductSlice";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContext = ({ children }) => {
  const dispatch = useDispatch();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function userData() {
    return onAuthStateChanged(auth, (user) => {
      dispatch(getUser(user));
    });
  }
  useEffect(() => {
    userData();
  }, []);

  let googleProvider = new GoogleAuthProvider();
  async function signInWithGoogle() {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.massage);
    }
  }

  function logOut() {
    return signOut(auth);
  }

  let values = {
    register,
    signInWithGoogle,
    logOut,
    logIn,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
