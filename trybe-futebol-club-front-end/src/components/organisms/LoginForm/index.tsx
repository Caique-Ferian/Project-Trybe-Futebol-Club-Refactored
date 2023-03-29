import React, { useContext } from "react";
import Container from "@atoms/Container";
import Header from "@molecules/Header";
import SectionWithForm from "@molecules/SectionWithForm";
import Title from "@atoms/Title";
import UserInput from "@molecules/UserInput";
import Button from "@atoms/Button";
import { AppContext } from '@context/index';
import AppContextType from "@context/types";
import Paragraph from "@atoms/Paragraph";


const LoginForm: React.FC = () => {
  const { failedTryLogin } = useContext(AppContext) as AppContextType;
  return(
    <Container className="login-form">
      <Header
        content="LOGIN"
        classNameFirstButton="leaderboard-button"
        toFirstButton="/leaderboard"
        contentFirstButton="Classificação"
        classNameSecondButton="matches-button"
        toSecondButton="/matches"
        contentSecondButton="Partidas"
      />
      <SectionWithForm className="user-login-area">
        <Title content="Área do usuário"/>
        <UserInput
          type="text"
          className="login__login_input"
          htmlFor="email-input"
          placeholder="Login"
          formRegister="email"
        />
        <UserInput
          type="password"
          className="login__password_input"
          htmlFor="password-input"
          placeholder="Senha"
          formRegister="password"
        />
        {failedTryLogin && <Paragraph content={`O endereço de e-mail ou a 
        senha não estão corretos. Por favor, tente novamente.`}/> }
        <Button type="submit">Entrar</Button>
      </SectionWithForm>
    </Container>
  );
}

export default LoginForm;