import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "@pages/login";
import AppProvider from "@context/index";

const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppProvider><LoginPage/></AppProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;