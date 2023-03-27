import Header from "@molecules/Header";
import React from "react";
import AddNewMatchButton from '@molecules/AddNewMatchButton';


const LoginPage: React.FC = () => {
  return(<Header content="LOGIN" FirstNavigationLink={AddNewMatchButton}/>)
}

export default LoginPage;