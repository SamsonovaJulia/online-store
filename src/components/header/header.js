import React from "react";
import { HeaderStyled } from "./header.styled.js";

function Header() {
  return (
    <HeaderStyled>
      <p className="logo">Logo</p>
      <div className="basketLoginContainer">
        <p>Login</p>
        <p>Basket</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
