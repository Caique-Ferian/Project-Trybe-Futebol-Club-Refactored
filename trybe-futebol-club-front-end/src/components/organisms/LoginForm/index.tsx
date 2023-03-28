import Container from "@atoms/Container";
import Header from "@molecules/Header";
import React from "react";
import AddNewMatchButton from '@molecules/AddNewMatchButton';
import SectionWithForm from "@molecules/SectionWithForm";
import Title from "@atoms/Title";
import UserInput from "@molecules/UserInput";
import Button from "@atoms/Button";


const LoginForm: React.FC = () => {
  return(
    <Container className="login-form">
      <Header content="LOGIN" FirstNavigationLink={ AddNewMatchButton }/>
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
        <Button type="submit">Entrar</Button>
      </SectionWithForm>
    </Container>
  );
}

export default LoginForm;