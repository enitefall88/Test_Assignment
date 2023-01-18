import React, { useState } from "react";
import "../RemoveCategoryModal.css";
import * as Y from "yup";
import { convert } from "../validation_funcs";

function useCategoryValidation(category) {
  let [input, setInput] = useState({
    selected: category.selected,
    text: category.value,
    id: category.id,
  });

  let [error, setError] = useState({});
  return { input, error, setError, setInput };
}
function AddCategoryModal({
  showAddCategory,
  hideAddCategory,
  categories,
  addCategory,
}) {
  let { input, setInput, error, setError } = useCategoryValidation({
    selected: false,
    text: "",
    id: null,
  });
  let findTheMaxId = () =>
    categories.reduce((prev, next) => {
      return Math.max(prev, next.id);
    }, 0);
  let category = {};

  function createCategory(input) {
    category = {
      selected: false,
      text: input.category,
      id: findTheMaxId(categories) + 1,
    };
  }

  async function onChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    let inputError = await schema
      .validateAt(name, { [name]: value }, { abortEarly: false })
      .then((_) => ({ [name]: "" }))
      .catch(convert);

    setInput((input) => ({
      ...input,
      [name]: value,
    }));
    setError({ ...inputError });
    console.log(inputError, error);
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
            <label>Category</label> ({error?.category || "*"})
            <br />
            <input
              name="category"
              onChange={onChange}
              className="input-field"
              value={input.text}
              type="text"
            />
          </div>
        </form>
        <button
          className="save-btn"
          onClick={() => {
            console.log(input);
            createCategory(input);
            addCategory(category);
            hideAddCategory();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
//todo probably shema and validation functions should be imported as modules from a separate
//dedicated file
let schema = Y.object().shape({
  category: Y.string().required().min(3).max(10),
});

export default AddCategoryModal;
