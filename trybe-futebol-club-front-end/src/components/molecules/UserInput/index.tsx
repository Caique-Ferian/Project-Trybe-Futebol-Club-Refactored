import React from "react";
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import UserInputProps from "./types";
import { Replace } from "@utils/replace";


const UserInput: React.FC<Replace<UserInputProps,{id?:string}>> = ({
  type,
  className,
  placeholder,
  formHook,
  formRegister,
  htmlFor,
}:Replace<UserInputProps,{id?:string}>) => {
  return(
  <Label htmlFor={htmlFor}>
    <Input
      type={type}
      className={className}
      id={htmlFor}
      placeholder={placeholder}
      formHook={formHook}
      formRegister={formRegister}
    />
  </Label>
  );
}

export default UserInput;