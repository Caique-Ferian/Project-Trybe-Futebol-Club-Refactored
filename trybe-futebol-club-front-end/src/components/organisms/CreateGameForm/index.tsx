import React, {useContext} from "react";
import Container from "@atoms/Container";
import Header from "@molecules/Header";
import SectionWithForm from "@molecules/SectionWithForm";
import FilterOptions from "@molecules/FIlterOptions";
import { AppContext } from '@context/index';
import AppContextType from "@context/types";
import UserInput  from '@molecules/UserInput';
import Button from "@atoms/Button";


const CreateGameForm: React.FC = () => {
  const {currentLBFilter} = useContext(AppContext) as AppContextType;
  return(
    <Container className="create-game-form">
      <Header
        content="ADICIONAR PARTIDA"
        classNameFirstButton="leaderboard-button"
        toFirstButton="/"
        contentFirstButton="Classificação"
        classNameSecondButton="login-button"
        toSecondButton="/login"
        contentSecondButton="Login" 
      />
      <SectionWithForm
        className="match-settings-section"
        classNameForm="match-settings-form"
        hasImage={false}
      >
        <Container className="match-settings-form-options">
          <FilterOptions
            types={[]}
            htmlFor="home-team-scoreboard"
            content="Time Mandante"
            currentFilter={currentLBFilter}
            formRegister="filterLb"
          />
          <UserInput
            type="number"
            className=""
            htmlFor="home-team-scoreboard"
            placeholder=""
            formRegister="filterLb"
            content="Gols"
          />
          <Container className="match-settings-form-versus">
            <span />
            <span>X</span>
          </Container>
          <FilterOptions
            types={[]}
            htmlFor="away-team-scoreboard"
            content="Time Visitante"
            currentFilter={currentLBFilter}
            formRegister="filterLb"
          />
          <UserInput
            type="number"
            className=""
            htmlFor="away-team-scoreboard"
            placeholder=""
            formRegister="filterLb"
            content="Gols"
          />
        </Container>
        <Container className="match-settings-form-buttons">
          <Button type="submit">Salvar Partida</Button>
          <Button type="button">Finalizar Partida</Button>
        </Container>
      </SectionWithForm>
    </Container>
  );
}

export default CreateGameForm;