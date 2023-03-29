// import { Dispatch, SetStateAction } from "react";

export interface User {
  email: string;
  password: string;
}

type AppContextType = {
  user: User;
  failedTryLogin: boolean;
  login: Function;
}

export default AppContextType;