import React from "react";

function CategoryFilter({ setCategory, category }) {
  return (
    <>
      <input
        type="checkbox"
        id="category1"
        name="category1"
        onChange={() =>
          setCategory({ ...category, category1: !category.category1 })
        }
      />
      <label for="category1"> category 1</label>

      <input
        type="checkbox"
        id="category2"
        name="category2"
        onChange={() =>
          setCategory({ ...category, category2: !category.category2 })
        }
      />
      <label for="category2"> category 2</label>
    </>
  );
}

export default CategoryFilter;
