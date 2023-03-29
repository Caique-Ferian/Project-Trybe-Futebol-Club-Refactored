import React from "react";
import '@styles/pages/leaderboard.css';
import '@styles/components/leaderboardTable.css';
import LeaderboardTable from "@organisms/LeaderboardTable";


const LeaderboardPage: React.FC = () => {
  return(<LeaderboardTable />);
}

export default LeaderboardPage;