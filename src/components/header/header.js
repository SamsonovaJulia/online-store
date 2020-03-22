import React from "react";
import { HeaderStyled, Logo, BasketLoginContainer } from "./header.styled.js";

function Header() {
  return (
    <HeaderStyled>
      <Logo>LOGO</Logo>
      <BasketLoginContainer>
        <a href="/">Login</a>
        <a href="/">Basket</a>
      </BasketLoginContainer>
    </HeaderStyled>
  );
}

export default Header;
