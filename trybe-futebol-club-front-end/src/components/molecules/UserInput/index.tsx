import React from "react";
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import UserInputProps from "./types";
import { Replace } from "@utils/replace";


const UserInput: React.FC<Replace<UserInputProps,{id?:string, content?:string}>> = ({
  type,
  className,
  placeholder,
  formHook,
  formRegister,
  htmlFor,
  content,
}:Replace<UserInputProps,{id?:string, content?:string}>) => {
  return(
  <Label htmlFor={htmlFor}>
    {content ?? null}
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