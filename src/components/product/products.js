import React, { useState } from "react";
import {
  ProductsStyled,
  Product,
  Price,
  Img,
  Title
} from "./products.styled.js";
import ParseStoreData from "../../utils/parseStoreData";
import ProductPage from "./product-page/product-page";

function Products(goods) {
  const [product, setProduct] = useState();
  const goodsArray = ParseStoreData(goods);

  function getProduct(item) {
    const { name, image, hoverImage, price } = item;
    return (
      <Product onClick={() => setProduct(item)} key={name}>
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

  return (
    <ProductsStyled>
      {goodsArray.map(getProduct)}
      <ProductPage product={product} />
    </ProductsStyled>
  );
}

export default Products;
