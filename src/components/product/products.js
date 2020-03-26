import React from "react";
import { ProductsStyled, Product, Price, Img } from "./products.styled.js";
import ParseStoreData from "../../utils/parseStoreData";

function Products(goods) {
  const goodsArray = ParseStoreData(goods);

  function getProduct(item) {
    const name = item.name;
    const img = item.image;
    const hoverImage = item.hoverImage;
    const price = Number(item.price);
    return (
      <Product>
        <Img>
          <img src={img} alt={name}></img>
          <img src={hoverImage} class="img-top" alt={name}></img>
        </Img>
        <div>
          <p>{name}</p>
          <Price>p. {price}</Price>
        </div>
      </Product>
    );
  }

  return <ProductsStyled>{goodsArray.map(getProduct)}</ProductsStyled>;
}

export default Products;
