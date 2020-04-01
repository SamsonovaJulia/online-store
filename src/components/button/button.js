import React from "react";
import { ButtonStyled } from "./button.styled";

function Button(props) {
  const buyProduct = {
    name: props.product.name,
    price: props.product.price,
    quantity: props.quantity
  };
  return (
    <ButtonStyled onClick={() => props.onClick(buyProduct)}>
      Add to basket
    </ButtonStyled>
  );
}

export default Button;
