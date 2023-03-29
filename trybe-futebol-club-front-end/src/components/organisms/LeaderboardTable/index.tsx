import React, { useContext } from "react";
import Container from "@atoms/Container";
import Header from "@molecules/Header";
import SectionWithForm from "@molecules/SectionWithForm";
import FilterOptions from "@molecules/FIlterOptions";
import { AppContext } from '@context/index';
import AppContextType from "@context/types";
import Button from "@atoms/Button";
import { types, headers, classNames } from "./constants";
import SectionWithTable from "@molecules/SectionWithTable";

const LeaderboardTable: React.FC = () => {
  const { currentLBFilter } = useContext(AppContext) as AppContextType;
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
      <SectionWithForm 
        className="classification-handlers score-board-table-section"
        hasImage={false}
      >
        <FilterOptions
          types={types}
          currentFilter={currentLBFilter}
          htmlFor="classification-filter"
          content="Partidas:"
          formRegister="filter"
        />
        <Button type="submit">Buscar</Button>
      </SectionWithForm>
      <SectionWithTable 
        sectionClassName="score-board-table-section"
        tableClassName="score-board-table"
        headers={headers}
        classNames={classNames}
      />
    </Container>
  );
}


export default LeaderboardTable;