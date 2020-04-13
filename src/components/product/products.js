import React from "react";
import { Link } from "react-router-dom";
import {
  ProductsStyled,
  Product,
  Price,
  Img,
  Title,
} from "./products.styled.js";
import ParseStoreData from "../../utils/parseStoreData";

function Products({ goods, onChoose, category }) {
  console.log("ssss", category);
  const goodsArray = ParseStoreData(goods, category);
  console.log("category", category);
  console.log("goodsArray", goodsArray);

  function getProduct(item) {
    const { name, image, hoverImage, price, id } = item;
    console.log("item", item);
    return (
      <Product onClick={() => onChoose(item)} key={name}>
        <Link to={`/product/:${id}`}>
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

  return (
    // <Link to={`/product/:${category}`}>
      <ProductsStyled>{goodsArray.map(getProduct)}</ProductsStyled>
    /* </Link> */
  );
}

export default Products;
