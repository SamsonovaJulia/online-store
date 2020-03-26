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

  return (
    <ProductStyled>
      <img src={product.image} alt={product.name}></img>
      <Description>
        <h1>{product.name}</h1>
        <Price>p. {product.price}</Price>
        <About>{product.description}</About>
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
