import Container from "@atoms/Container";
import React from "react";
import { Link } from "react-router-dom";
import AddNewMatchButtonProps from "./types";

const AddNewMatchButton: React.FC<AddNewMatchButtonProps> = ({
  to,
}:AddNewMatchButtonProps) => {
  return(
    <Container className="add-new-game-button">
      <Link to={to}> Adicionar nova partida </Link>
    </Container>
  );
};

export default AddNewMatchButton;