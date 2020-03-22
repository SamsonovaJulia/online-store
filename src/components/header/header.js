import React from "react";
import { HeaderStyled } from "./header.styled.js";

function Header() {
  return (
    <HeaderStyled>
      <p className="logo">Logo</p>
      
      <p>Login</p>
      <p className="basket">Basket</p>
    </HeaderStyled>
  );
}

export default Header;
