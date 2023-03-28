import React from "react";
import { PropsInput } from './types';

const Input: React.FC<PropsInput> = ({
  type,
  className,
  id,
  placeholder,
  formHook,
  formRegister,
}: PropsInput) => {
  return(<input 
    type={type}
    id={id}
    className={className}
    placeholder={placeholder}
    {...formHook?.register(formRegister)}
  />
);
}

export default Input;