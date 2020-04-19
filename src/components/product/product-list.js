import React from "react";
import { Link } from "react-router-dom";
import {
  ProductsStyled,
  Product,
  Price,
  Img,
  Title,
} from "./product-list.styled.js";

function ProductList({ goodsArray, onChoose }) {
  function getProduct(item) {
    const { name, image, hoverImage, price, id } = item;
    return (
      <Product onClick={() => onChoose(item)} key={name}>
        <Link to={`/product/${id}`}>
          <Img>
            <img src={image} alt={name}></img>
            <img src={hoverImage} className="img-top" alt={name}></img>
          </Img>
          <div>
            <Title>{name}</Title>
            <Price>p. {price}</Price>
          </div>
        </Link>
      </Product>
    );
  }

  return <ProductsStyled>{goodsArray.map(getProduct)}</ProductsStyled>;
}

export default ProductList;
