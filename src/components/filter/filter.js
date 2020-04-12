import React from "react";
import CategoryFilter from "./category-filter/category-filter";
import { FilterStyled } from "./filter.styled.js";

function Filter() {
  return (
    <FilterStyled>
      <CategoryFilter />
    </FilterStyled>
  );
}

export default Filter;
