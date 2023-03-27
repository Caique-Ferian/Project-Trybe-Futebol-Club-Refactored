import React from 'react';
import '@styles/components/header.css'
import LogoWithTitle from '@molecules/HeaderWithLogo';
import HeaderProps from './types';
import Container from '@atoms/Container';
import Button from '@atoms/Button';
import Image from '@atoms/Image';
import { exitToAppImg } from '@images/';
import Title from '@atoms/Title';


const Header: React.FC<HeaderProps> = ({ content }:HeaderProps) => {
  return(
    <header className="common-header">
      <LogoWithTitle content={ content }/>
      {/* <Title contecommon-headernt={ content }/> */}
      <Container className="buttons-content">
        <Button type="button">
          <Image src={ exitToAppImg } alt="Sair do aplicativo"/>
        </Button>
      </Container>
    </header>
  );
}

export default Header;