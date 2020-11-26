const { createContext, useContext, useState, useEffect } = require("react");
import { firebaseAuth, googleProvider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { isAllowedLoginDomain } from "../utils/emailUtil";
import { useRouter } from "next/router";
import { errorNotify, infoNotify, successNotify } from "../constants/notistackVariants";
import { useSnackbar } from "notistack";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [user, authLoading, authError] = useAuthState(firebaseAuth);

  useEffect(() => {
    console.debug("authLoading", authLoading);
  }, [authLoading]);

  useEffect(() => {
    authError && console.error("authError", authError);
  }, [authError]);

  useEffect(() => {
    if (user && user.uid) {
      console.debug("Validated gmail user")
      console.debug("Accepted login domain: " + process.env.allowedLoginDomain);
      if (isAllowedLoginDomain(user.email)) {
      console.debug("login successful")
        console.debug("set logged in user");
        enqueueSnackbar("Login successful", successNotify)
        setLoggedInUser(user);
      } else {
        console.debug("wrong email domain", user.email)
        setLoggedInUser(null);
        enqueueSnackbar("Must sign in with " + process.env.allowedLoginDomain + " domain", errorNotify)
        logout(false);
      }
    } else {
      setLoggedInUser(null);
    }
  }, [user]);

  useEffect(() => {
    if (loggedInUser) {
      console.debug("currentUser", loggedInUser.email);
    } else {
      console.debug("currentUser", loggedInUser);
    }
  }, [loggedInUser]);

  const login = () => {
    firebaseAuth
      .signInWithPopup(googleProvider)
      .then((result) => {
        // router.push("/")
      })
      .catch((error) => {
        enqueueSnackbar("Login failed contact Administrator for more information", errorNotify)
        console.error("bruno says", error);
      });
  };

  const logout = (pushMess) => {
    firebaseAuth
      .signOut()
      .then(() => {
        if (!!pushMess) enqueueSnackbar("Logout successful", infoNotify)
        console.log("sign out successful");
      })
      .catch((error) => {
        console.error("Error while sign out", error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, loggedInUser: loggedInUser || user, authLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
