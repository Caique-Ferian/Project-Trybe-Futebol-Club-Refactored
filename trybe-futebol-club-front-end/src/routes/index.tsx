import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "@pages/login";
import AppProvider from "@context/index";
import LeaderboardPage from "@pages/leaderboard";
import MatchesPage from '@pages/matches';
import MatchSettingsPage from "@pages/match-settings";

const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<AppProvider><LeaderboardPage/></AppProvider>} />
      <Route path="/login" element={<AppProvider><LoginPage/></AppProvider>} />
      <Route path="/matches" element={<AppProvider><MatchesPage/></AppProvider>} />
      <Route path="/matches/settings" element={<AppProvider><MatchSettingsPage/></AppProvider>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;