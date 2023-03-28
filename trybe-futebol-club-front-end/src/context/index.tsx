import React, { useState } from "react";
import AppContextType, { User } from "./types";

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user,setUser] = useState<User>({email:"",password:""});
  return(
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;