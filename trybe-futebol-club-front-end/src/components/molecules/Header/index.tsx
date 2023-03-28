import React from 'react';
import '@styles/components/header.css'
import HeaderProps from './types';
import Container from '@atoms/Container';
import Button from '@atoms/Button';
import Image from '@atoms/Image';
import { exitToAppImg, negativeLogo } from '@images/';
import Title from '@atoms/Title';


const Header: React.FC<HeaderProps> = ({
  content,
  FirstNavigationLink,
}:HeaderProps) => {
  return(
    <header className="common-header">
      <Container className="image-content">
        <Image src={ negativeLogo } alt="Trybe Futebol Clube Negative Logo"/>
      </Container>
      <Title content={ content }/>
      <Container className="buttons-content">
        <Button type="button">
          <FirstNavigationLink to="/matches/settings"/>
          <Image src={ exitToAppImg } alt="Sair do aplicativo"/>
        </Button>
      </Container>
    </header>
  );
}

export default Header;