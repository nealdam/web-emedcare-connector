import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext({});

export const GlobalProvider = ({children}) => {
  
  const router = useRouter();

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [drawerSelectedItem, setDrawerSelectedItem] = useState("/");

  useEffect(() => {
    setDrawerSelectedItem(router.asPath)
  }, [router.asPath])

  const handleToggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  }

  return (
    <GlobalContext.Provider
      value={{ isMobileDrawerOpen, handleToggleMobileDrawer, drawerSelectedItem }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default function useGlobalContext() {
  const context = useContext(GlobalContext);

  return context;
}