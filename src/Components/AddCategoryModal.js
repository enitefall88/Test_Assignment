import React, { useState } from "react";
import "../AddItemModal.css";

//todo пока без валидации
function AddCategoryModal({
  showAddCategory,
  hideAddCategory,
  categories,
  addCategory,
}) {
  let [newCategory, setNewCategory] = useState("");

  function onChange(event) {
    setNewCategory(event.target.value);
  }

  return (
    <div className="modal-background">
      <h1>Add a Category</h1>
      <form action="" className="input">
        <div>
          <input
            name="category"
            onChange={onChange}
            className="input-field"
            value={newCategory.text}
            type="text"
          />
        </div>
      </form>
      <button
        className="save-btn"
        onClick={(event) => {
          addCategory(newCategory);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default AddCategoryModal;
