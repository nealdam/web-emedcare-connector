import useAuthContext from "../contexts/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

export function protectRoute(Component) {
  return () => {
    const { isAuthenticated, authLoading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      console.log(
        "Auth loading: " +
          authLoading +
          "\nIs Authenticated: " +
          isAuthenticated
      );

      if (!authLoading && !isAuthenticated) {
        console.log("Pushed back to login page");
        router.push({
          pathname: "/login",
          query: { lastUrl: router.asPath },
        });
      }
    }, [authLoading, isAuthenticated]);

    if (!authLoading && isAuthenticated) return <Component {...arguments} />;
    else
      return (
        <Backdrop
          // className={classes.backdrop}
          open={true}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      );
  };
}
