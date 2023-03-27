import Container from '@atoms/Container';
import React from 'react';
import LogoWithTitleProps from './types';
import Image from '@atoms/Image';
import { negativeLogo } from '@images/';
import Title from '@atoms/Title';

const LogoWithTitle: React.FC<LogoWithTitleProps> = 
  ({ content }:LogoWithTitleProps) => {
  return(
    <Container className="title">
      <Container className="image-content">
        <Image src={ negativeLogo } alt="Trybe Futebol Clube Negative Logo"/>
      </Container>
      <Title content={ content } />
    </Container>
    
    );
};


export default LogoWithTitle;