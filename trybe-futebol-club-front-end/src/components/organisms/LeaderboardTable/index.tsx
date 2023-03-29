import Container from "@atoms/Container";
import Header from "@molecules/Header";
import React from "react";


const LeaderboardTable: React.FC = () => {
  return(
    <Container className="leaderboard-table">
      <Header
        content="CLASSIFICAÇÃO"
        classNameFirstButton="matches-button"
        toFirstButton="/matches"
        contentFirstButton="Partidas"
        classNameSecondButton="login-button"
        toSecondButton="/login"
        contentSecondButton="Login"
      />
    </Container>
  );
}


export default LeaderboardTable;