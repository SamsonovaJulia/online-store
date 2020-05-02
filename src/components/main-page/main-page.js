import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ProductList from "../product/product-list";
import Filter from "../filter/filter";
import getProductsByCategories from "../../utils/getProductsByCategories";
import parseStoreData from "../../utils/parseStoreData";

import { FilterStyled } from "./main-page.styled";

const MainPage = ({ goods, onChoose }) => {
  const [categories, setCategory] = useState({
    category01: true,
    category02: true,
  });
  
  let goodsArray = getProductsByCategories(goods, categories);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryCategories = query.getAll("category");
    console.log("queryCategories", queryCategories);
    if (!queryCategories.length) {
      // filteredGoodsArray(parseStoreData(goods));
    }

    if (queryCategories.length) {
      // goodsArray = getProductsByCategories(goods, queryCategories);
      console.log("goodsArray", goodsArray);
      // getgoodsArray(goodsArrayByCategories);
      // console.log("filteredByCategory", filteredByCategory);
    }
  }, [location.search, categories]);

  return (
    <>
      <FilterStyled>
        <Filter setCategory={setCategory} categories={categories} />
      </FilterStyled>
      <ProductList goodsArray={goodsArray} onChoose={onChoose} />
    </>
  );
};

export default MainPage;
