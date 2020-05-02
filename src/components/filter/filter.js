import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import CategoryFilter from "./category-filter/category-filter";

function Filter({ setCategory, categories }) {
  let history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    query.delete("category");
    Object.keys(categories).forEach((category) => {
      if (categories[category]) {
        query.append("category", category);
      }
    });
    history.push({
      search: "?" + query.toString(),
    });
  }, [categories]);

  console.log("history", history);

  return (
    <>
      <CategoryFilter setCategory={setCategory} categories={categories} />
    </>
  );
}

export default Filter;
