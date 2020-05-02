import React from "react";

function CategoryFilter({ setCategory, categories }) {
  return Object.keys(categories).map((category) => {
    return (
      <>
        <input
          type="checkbox"
          id={category}
          name={category}
          checked={categories[category]}
          onChange={() => {
            setCategory({ ...categories, [category]: !categories[category] });
          }}
        />
        <label for={category}> {category}</label>
      </>
    );
  });
}

export default CategoryFilter;
