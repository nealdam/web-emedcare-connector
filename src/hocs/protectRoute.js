import useAuthContext from "../contexts/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function protectRoute(Component) {
  return () => {
    const { isAuthenticated, authLoading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (!authLoading && !isAuthenticated) {
        console.log("Pushed back to login page")
        router.push({
          pathname: "/login",
          query: { lastUrl: router.asPath },
        });
      }
    }, [authLoading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
