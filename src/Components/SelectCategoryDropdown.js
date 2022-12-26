import React from "react";

function SelectCategoryDropdown({ categoryId, setCategoryId, categories }) {
  let handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  return (
    <label>
      Select Category
      <select onChange={handleCategoryChange} value={categoryId}>
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.text}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectCategoryDropdown;
