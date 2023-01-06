import React, { useState } from "react";
import "../AddItemModal.css";

//todo пока без валидации
function AddCategoryModal({
  showAddCategory,
  hideAddCategory,
  categories,
  addCategory,
}) {
  let emptyCategory = { selected: false, text: "", id: 0 };
  let [createdCategory, setCreatedCategory] = useState(emptyCategory);

  function onChange(event) {
    setCreatedCategory(event.target.value);
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
            value={createdCategory.text}
            type="text"
          />
        </div>
      </form>
      <button
        className="save-btn"
        onClick={(event) => {
          addCategory(createdCategory);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default AddCategoryModal;
