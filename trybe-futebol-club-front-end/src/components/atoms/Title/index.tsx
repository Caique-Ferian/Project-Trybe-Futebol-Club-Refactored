import React from "react";
import TitleProps from "./types";


const Title: React.FC<TitleProps> = ({ content }:TitleProps) => {
  return(<h1>{content}</h1>);
};

export default Title;
