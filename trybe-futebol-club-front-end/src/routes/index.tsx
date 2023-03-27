import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "@pages/login";

const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;