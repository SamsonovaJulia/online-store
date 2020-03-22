import React from "react";
import { HeaderStyled } from "./header.styled.js";

function Header() {
  return (
    <HeaderStyled>
      <p className="logo">LOGO</p>
      <div className="basketLoginContainer">
        <a href='/'>Login</a>
        <a href='/'>Basket</a>
      </div>
    </HeaderStyled>
  );
}

export default Header;
