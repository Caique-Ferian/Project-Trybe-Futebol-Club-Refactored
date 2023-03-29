import React, { useContext } from 'react';
import '@styles/components/header.css'
import HeaderProps from './types';
import Container from '@atoms/Container';
import Button from '@atoms/Button';
import Image from '@atoms/Image';
import { exitToAppImg, negativeLogo } from '@images/';
import Title from '@atoms/Title';
import { AppContext } from '@context/index';
import AppContextType from '@context/types';
import LinkedButton from '@molecules/LinkedButton';


const Header: React.FC<HeaderProps> = ({
  content,
  classNameFirstButton,
  contentFirstButton,
  toFirstButton,
  classNameSecondButton,
  contentSecondButton,
  toSecondButton,

  
}:HeaderProps) => {
  const { isLogged } = useContext(AppContext) as AppContextType;
  return(
    <header className="common-header">
      <Container className="image-content">
        <Image src={ negativeLogo } alt="Trybe Futebol Clube Negative Logo"/>
      </Container>
      <Title content={ content }/>
      <Container className="buttons-content">
        <LinkedButton 
          className={classNameFirstButton}
          to={toFirstButton}
          content={contentFirstButton}
        />
        {isLogged ? (
          <Button type="button">
            Sair
            <Image src={ exitToAppImg } alt="Sair do aplicativo"/>
          </Button>) : (
            <LinkedButton
              className={classNameSecondButton}
              to={toSecondButton}
              content={contentSecondButton}
            />)}
      </Container>
    </header>
  );
}

export default Header;