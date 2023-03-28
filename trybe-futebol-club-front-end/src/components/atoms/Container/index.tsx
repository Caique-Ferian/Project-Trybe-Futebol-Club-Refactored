import React from 'react';
import ContainerProps from './types';


const Container: React.FC<ContainerProps> = ({
  children,
  className,
}:ContainerProps) => {
  return(<div className={className}>{children}</div>);
};

export default Container;