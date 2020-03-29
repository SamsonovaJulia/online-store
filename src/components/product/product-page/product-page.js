import React, { useState } from "react";
import Button from "../../button/button";
import {
  ProductStyled,
  Price,
  Description,
  About
} from "./product-page.styled.js";

function ProductPage({ product }) {
  const [quantity, changeQuantity] = useState(0);
  const BasketContext = React.createContext([{}]);

  if (!product) return null;

  const { image, name, price, description } = product;
  let addProduct;

  if (quantity) {
    addProduct = { ...product, quantity };
  }

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
          onChange={event => changeQuantity(event.target.value)}
        ></input>
        <BasketContext.Provider value={addProduct}>
          <Button text="Add to basket" />
        </BasketContext.Provider>
      </Description>
    </ProductStyled>
  );
}

export default ProductPage;
