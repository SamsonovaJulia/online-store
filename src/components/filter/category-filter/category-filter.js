import React, { useState } from "react";

function CategoryFilter({ getCategory }) {
  const [categoryOne, setCategoryOne] = useState("");
  const [categoryTwo, setCategoryTwo] = useState("");

  function onChangeOne() {
    if (categoryOne) {
      setCategoryOne("");
    } else {
      setCategoryOne("category1");
    }
    // console.log("categoryOne", categoryOne);
  }
  function onChangeTwo() {
    if (categoryTwo) {
      setCategoryOne("");
    } else {
      setCategoryTwo("category2");
    }
  }
  if (categoryOne && categoryTwo) {
    const category = categoryOne + "+" + categoryTwo;
    getCategory(category);
  } else if (categoryOne) {
    getCategory(categoryOne);
  } else if (categoryTwo) {
    getCategory(categoryTwo);
  }

  return (
    <>
      <input
        type="checkbox"
        id="category1"
        name="category1"
        value="category1"
        onChange={onChangeOne}
      />
      <label for="category1"> category 1</label>

      <input
        type="checkbox"
        id="category2"
        name="category2"
        value="category2"
        onChange={onChangeTwo}
      />
      <label for="category2"> category 2</label>
    </>
  );
}

export default CategoryFilter;
