import React, { useState } from "react";
import AddToBasketButton from "./addToBasketButton/addToBasketButton";
import {
  ProductStyled,
  Price,
  Description,
  About,
} from "./product-page.styled.js";

function ProductPage({ product, addToBasket }) {
  const [quantity, changeQuantity] = useState(1);
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
          value={quantity}
          onChange={(event) => changeQuantity(event.target.value)}
        ></input>
        <AddToBasketButton
          onClick={addToBasket}
          product={product}
          quantity={quantity}
        />
      </Description>
    </ProductStyled>
  );
}

export default ProductPage;
