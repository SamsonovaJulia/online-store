import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import ProductList from "../product/product-list";
import Filter from "../filter/filter";
import ParseStoreData from "../../utils/parseStoreData";

import { FilterStyled } from "./main-page.styled";

const MainPage = ({ goods, onChoose }) => {
  const [category, setCategory] = useState({
    category1: true,
    category2: true,
  });
  const goodsArray = ParseStoreData(goods, category);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryCategories = query.getAll("category");

    if (queryCategories.length) {
    }
  });

  return (
    <>
      <FilterStyled>
        <Filter setCategory={setCategory} category={category} />
      </FilterStyled>
      <ProductList goodsArray={goodsArray} onChoose={onChoose} />
    </>
  );
};

export default MainPage;
