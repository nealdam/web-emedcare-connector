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
import { useLoginUsernameEmailPassword } from "../hooks/authHooks";

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
  } = useLoginUsernameEmailPassword();

  // init get local lastuser
  useEffect(() => {
    console.debug("Get local jwt");

    let lastUserString = localStorage.getItem("lastUser");

    console.debug("Last user string: " + lastUserString);

    if (lastUserString) {
      let lastUser = JSON.parse(lastUserString);

      console.debug("set logged in user with last user");
      console.debug("Last usser: " + lastUser.email);
      setLoggedInUser(lastUser);
    }
  }, []);

  // auth loading watcher
  useEffect(() => {
    console.debug(
      "AUTH LOADING: " +
        "\nGoogle Auth: " +
        authLoading +
        "\nServer Auth: " +
        isAuthServerLoading
    );

    if (authLoading || isAuthServerLoading) setIsLoading(true);
    else if (!authLoading && !isAuthServerLoading) setIsLoading(false);
  }, [authLoading, isAuthServerLoading]);

  // auth error watcher
  useEffect(() => {
    console.error(
      "AUTH ERROR: " +
        "\nGoogle Auth Error: " +
        authError +
        "\nServer Auth Error: " +
        isAuthServerError
    );

    if (authError || isAuthServerError)
      setIsError(authError ? authError : isAuthServerError);
    else if (!authError && !isAuthServerError) setIsError(null);
  }, [authError, isAuthServerError]);

  // google user watcher
  useEffect(() => {
    if (googleUser && googleUser.uid) {
      console.debug("Google logged in user: " + googleUser.email);

      if (isAllowedLoginDomain(googleUser.email)) {
        // check allowed domain
        console.debug("Gmail domain is allowed");

        // TODO serverLogin with jwt
      } else {
        // wrong email domain
        console.debug("Gmail domain isn't allowed");

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
    console.log("Server user: " + serverUser);

    if (serverUser) {
      setLoggedInUser(serverUser);

      localStorage.setItem("lastUser", JSON.stringify(serverUser));
    }
  }, [serverUser]);

  // logged in user watcher
  useEffect(() => {
    if (loggedInUser) {
      console.debug("currentUser", loggedInUser.email);
      console.debug("pathname: " + router.pathname);
      console.debug("push to page");

      if (router.query.lastUrl) {
        router.push(router.query.lastUrl);
      } else if (!router.pathname.startsWith("/login")) {
        // do nothing
      } else {
        router.push("/");
      }
    } else {
      console.debug("currentUser", loggedInUser);
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
        serverLogin,
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
