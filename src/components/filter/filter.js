import React from "react";
import { Route, Switch } from "react-router-dom";

import CategoryFilter from "./category-filter/category-filter";

function Filter({ setCategory, category }) {
  return (
    <>
      <CategoryFilter setCategory={setCategory} category={category} />
    </>
  );
}

export default Filter;
