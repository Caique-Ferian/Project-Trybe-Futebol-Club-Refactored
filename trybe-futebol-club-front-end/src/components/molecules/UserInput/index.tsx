import React from "react";
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import UserInputProps from "./types";


const UserInput: React.FC<UserInputProps> = ({
  type,
  className,
  id,
  placeholder,
  formHook,
  formRegister,
  htmlFor,
}:UserInputProps) => {
  return(
  <Label htmlFor={htmlFor}>
    <Input
      type={type}
      className={className}
      id={id}
      placeholder={placeholder}
      formHook={formHook}
      formRegister={formRegister}
    />
  </Label>
  );
}

export default UserInput;