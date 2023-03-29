import React from "react";
import ParagraphProps from "./types";


const Paragraph: React.FC<ParagraphProps> = ({content}:ParagraphProps) => {
  return(<p>{content}</p>);
}

export default Paragraph;