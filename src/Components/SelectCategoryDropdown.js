import React from "react";

function SelectCategoryDropdown({ categoryId, setCategoryId }) {
  let handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
  };

  let initialCategories = [
    { text: "First Category", id: 1 },
    { text: "Second Category", id: 2 },
    { text: "Third Category", id: 3 },
    { text: "Fourth Category", id: 4 },
    { text: "No category", id: 0 },
  ];
  return (
    <label>
      Select Category
      <select onChange={handleCategoryChange} value={categoryId}>
        {initialCategories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.text}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectCategoryDropdown;
