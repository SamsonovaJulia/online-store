import React from "react";
import { ButtonStyled } from "./button.styled";
import Basket from "../basket/basket";

function Button(props) {
  function addToBasket() {
    return <Basket />;
  }

  return <ButtonStyled onClick={addToBasket}>{props.text}</ButtonStyled>;
}

export default Button;
