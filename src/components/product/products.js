import React from "react";
import {
  ProductsStyled,
  Product,
  Price,
  Img,
  Title
} from "./products.styled.js";
import ParseStoreData from "../../utils/parseStoreData";

function Products({ goods, onChoose }) {
  const goodsArray = ParseStoreData(goods);

  function getProduct(item) {
    const { name, image, hoverImage, price } = item;
    return (
      <Product onClick={() => onChoose(item)} key={name}>
        <Img>
          <img src={image} alt={name}></img>
          <img src={hoverImage} className="img-top" alt={name}></img>
        </Img>
        <div>
          <Title>{name}</Title>
          <Price>p. {price}</Price>
        </div>
      </Product>
    );
  }

  return <ProductsStyled>{goodsArray.map(getProduct)}</ProductsStyled>;
}

export default Products;
