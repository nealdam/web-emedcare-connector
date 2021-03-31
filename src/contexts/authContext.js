const { createContext, useContext, useState, useEffect } = require("react");
import { firebaseAuth, googleProvider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { isAllowedLoginDomain } from "../utils/emailUtil";
import { useRouter } from "next/router";
import {
  errorNotify,
  infoNotify,
  successNotify,
} from "../constants/notistackVariants";
import { useSnackbar } from "notistack";
import { useLoginUsernameEmailPassword, useServerGoogleTokenLogin } from "../hooks/authHooks";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [googleUser, authLoading, authError] = useAuthState(firebaseAuth);
  const {
    user: serverUser,
    isLoading: isAuthServerLoading,
    isError: isAuthServerError,
    login: serverLogin,
  } = useServerGoogleTokenLogin();

  // auth loading watcher
  useEffect(() => {
    console.debug("Google Auth loading: " + authLoading + "\nServer Auth loading: " + isAuthServerLoading);

    if (authLoading || isAuthServerLoading) setIsLoading(true);
    // else if (!authLoading && !isAuthServerLoading) setIsLoading(false);

    console.debug("Is auth loading: " + isLoading);
  }, [authLoading, isAuthServerLoading]);

  // auth error watcher
  useEffect(() => {
    console.debug("Google Auth error: " + authError + "\nServer Auth error: " + isAuthServerError);
    
    if (authError || isAuthServerError)
      setIsError(authError ? authError : isAuthServerError);
    else if (!authError && !isAuthServerError) setIsError(null);
  }, [authError, isAuthServerError]);

  // google user watcher
  useEffect(() => {
    if (googleUser && googleUser.uid) {
      if (isAllowedLoginDomain(googleUser.email)) {
        serverLogin(googleUser.ya);
      } else {
        enqueueSnackbar(
          "Must sign in with " + process.env.allowedLoginDomain + " domain",
          errorNotify
        );
        logout(false);
      }
    }
  }, [googleUser]);

  // server user watcher
  useEffect(() => {
    if (serverUser) {
      setLoggedInUser(serverUser);

      localStorage.setItem("lastUser", JSON.stringify(serverUser));
    }

    if (!authLoading && !isAuthServerLoading) setIsLoading(false);
  }, [serverUser]);

  // logged in user watcher
  useEffect(() => {
    if (loggedInUser) {

      if (router.query.lastUrl) {
        router.push(router.query.lastUrl);
      } else if (!router.pathname.startsWith("/login")) {
        // do nothing
      } else {
        router.push("/");
      }
    }
  }, [loggedInUser]);

  // const handleServerLogin = (usernameOrEmail, password) => {
  //   serverLogin(usernameOrEmail, password);
  // };

  const googlePopupLogin = () => {
    firebaseAuth
      .signInWithPopup(googleProvider)
      .then((result) => {
        // router.push("/")
      })
      .catch((error) => {
        enqueueSnackbar(
          "Login failed contact Administrator for more information",
          errorNotify
        );
        console.error("bruno says", error);
      });
  };

  const firebaseEmailPasswordLogin = (email, password) => {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // router.push("/")
      })
      .catch((error) => {
        enqueueSnackbar(
          "Login failed contact Administrator for more information",
          errorNotify
        );
        console.error("bruno says", error);
      });
  };

  const logout = (pushMess) => {

    setLoggedInUser(undefined);

    firebaseAuth
      .signOut()
      .then(() => {
        if (!!pushMess) enqueueSnackbar("Logout successful", infoNotify);
        console.log("sign out successful");
      })
      .catch((error) => {
        console.error("Error while sign out", error);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!loggedInUser,
        loggedInUser: loggedInUser,
        authLoading: isLoading,
        googleLogin: googlePopupLogin,
        emailPasswordLogin: firebaseEmailPasswordLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
