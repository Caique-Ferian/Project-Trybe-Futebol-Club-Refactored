import Container from "@atoms/Container";
import React from "react";
import { Link } from "react-router-dom";
import LinkedButtonProps from "./types";

const LinkedButton: React.FC<LinkedButtonProps> = ({
  className,
  to,
  content,
}:LinkedButtonProps) => {
  return(
    <Container className={ className }>
      <Link to={to}>{content}</Link>
    </Container>
  );
};

export default LinkedButton;