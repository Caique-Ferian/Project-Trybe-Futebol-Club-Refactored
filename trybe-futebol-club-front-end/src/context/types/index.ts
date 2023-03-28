import { Dispatch, SetStateAction } from "react";

export interface User {
  email: string;
  password: string;
}

type AppContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export default AppContextType;