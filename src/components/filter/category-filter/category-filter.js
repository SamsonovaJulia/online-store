import React from "react";

function CategoryFilter() {
  return (
    <>
      <input
        type="checkbox"
        id="category1"
        name="category1"
        value="category1"
      />
      <label for="category1"> category 1</label>

      <input
        type="checkbox"
        id="category2"
        name="category2"
        value="category2"
      />
      <label for="category2"> category 2</label>
    </>
  );
}

export default CategoryFilter;
