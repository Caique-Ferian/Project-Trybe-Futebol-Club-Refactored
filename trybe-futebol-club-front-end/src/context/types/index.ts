import { Dispatch, SetStateAction } from "react";

export interface User {
  email: string;
  password: string;
}

type AppContextType = {
  user: User;
  failedTryLogin: boolean;
  isLogged: boolean;
  login: Function;
  currentLBFilter: string;
  setCurrentLBFilter: Dispatch<SetStateAction<string>>;
}

export default AppContextType;