import React from "react";
import LabelProps from "./types";


const Label: React.FC<LabelProps> = ({ children,htmlFor }: LabelProps) => {
  return(<label htmlFor={htmlFor}>{children}</label>);
}

export default Label;