import React from 'react';
import ButtonProps from './types';


const Button: React.FC<ButtonProps> = 
  ({type, onClick, children}:ButtonProps) => {
    return(<button type={type} onClick={onClick}>{children}</button>)
}

export default Button;