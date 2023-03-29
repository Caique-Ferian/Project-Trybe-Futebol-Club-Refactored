import { FormInfos } from "@atoms/Input/types";
import React, { useState } from "react";
import AppContextType, { User } from "./types";
import { useNavigate } from "react-router-dom";
export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user,setUser] = useState<User>({email:"",password:""});
  const [failedTryLogin,setFailedTryLogin] = useState<boolean>(false);
  const [isLogged,setIsLogged] = useState<boolean>(false);
  const navigate = useNavigate();
  const login = (data: FormInfos) => {
    if(!data.email || !data.password) setFailedTryLogin(true);
    else {
      setFailedTryLogin(false);
      setIsLogged(true);
      setUser(data);
      navigate("/matches");
    }
  }
  return(
    <AppContext.Provider value={
      { user, failedTryLogin, isLogged, login }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;