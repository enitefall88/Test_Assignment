import React, { useState } from "react";
import "../RemoveCategoryModal.css";

//todo пока без валидации
function AddCategoryModal({
  showAddCategory,
  hideAddCategory,
  categories,
  addCategory,
}) {
  let [newCategory, setNewCategory] = useState({
    selected: false,
    text: "",
    id: null,
  });
  let findTheMaxId = (categories) => {
    let maxId = 0;
    categories.forEach((category) => {
      if (category.id > maxId) {
        maxId = category.id;
      }
    });
    return maxId;
  };

  function onChange(event) {
    setNewCategory({
      selected: false,
      text: event.target.value,
      //каждый раз по изменению высчитывается - не есть гуд
      id: findTheMaxId(categories) + 1,
    });
  }

  return (
    <div className="modal-background" onClick={() => showAddCategory()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="title-close-btn">
          <button onClick={() => hideAddCategory()}>X</button>
        </div>
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
          onClick={() => {
            addCategory(newCategory);
            hideAddCategory();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddCategoryModal;
