import React, { useContext } from "react";
import Container from '@atoms/Container';
import Header from "@molecules/Header";
import SectionWithForm from "@molecules/SectionWithForm";
import FilterOptions from "@molecules/FIlterOptions";
import { types,headers,classNames, headersClassNames } from "./constants";
import { AppContext } from '@context/index';
import AppContextType from "@context/types";
import Button from '@atoms/Button';
import SectionWithTable from "@molecules/SectionWithTable";

const GameTable: React.FC = () => {
  const { currentMatchesFilter } = useContext(AppContext) as AppContextType;
  return(
    <Container className="game-table">
      <Header
        content="PARTIDAS"
        classNameFirstButton="leaderboard-button"
        toFirstButton="/"
        contentFirstButton="Classificação"
        classNameSecondButton="login-button"
        toSecondButton="/login"
        contentSecondButton="Login"
      />
      <SectionWithForm
        className="games-section games-handlers"
        hasImage={false}
      >
        <FilterOptions
          types={types}
          currentFilter={currentMatchesFilter}
          htmlFor="game-filter"
          content="Partidas:"
          formRegister="filterMatches"
        />
        <Button type="submit">Buscar</Button>
      </SectionWithForm>
      <SectionWithTable
        sectionClassName="games-table"
        tableClassName="score-board-table"
        headersClassNames={headersClassNames}
        headers={headers}
        classNames={classNames}
        
      />
    </Container>
  );
}


export default GameTable;