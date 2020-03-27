import React from "react";
import Button from "../../button/button";
import {
  ProductStyled,
  Price,
  Description,
  About
} from "./product-page.styled.js";

function ProductPage({ product }) {
  if (!product) return null;

  const { image, name, price, description } = product;

  return (
    <ProductStyled>
      <img src={image} alt={name}></img>
      <Description>
        <h1>{name}</h1>
        <Price>p. {price}</Price>
        <About>{description}</About>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          placeholder="1"
          min="1"
          max="100"
        ></input>
        <Button text="Add to basket" />
      </Description>
    </ProductStyled>
  );
}

export default ProductPage;
