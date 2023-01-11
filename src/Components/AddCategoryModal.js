import React, { useState } from "react";
import "../RemoveCategoryModal.css";
import * as Y from "yup";
//todo working on validation
function useCategoryValidation(category) {
  let [input, setInput] = useState({
    selected: category.selected,
    text: category.value,
    id: category.id,
  });
  let [error, setError] = useState({});
  return { input, error };
}
function AddCategoryModal({
  showAddCategory,
  hideAddCategory,
  categories,
  addCategory,
}) {
  let [input, setInput, error, setError] = useCategoryValidation({
    selected: false,
    text: "",
    id: null,
  });
  let findTheMaxId = () =>
    categories.reduce((prev, next) => {
      return Math.max(prev, next.id);
    }, 0);
  let findTheMaxIdUsingMap = () => {
    let idList = categories.map((category) => category.id);
    return Math.max(...idList);
  };
  /*  function onChange(event) {

    setNewCategory({
      selected: false,
      text: event.target.value,
      id: findTheMaxId(categories) + 1,
    });
  }*/
  async function onChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    let inputError = await schema
      .validateAt(name, { [name]: value }, { abortEarly: false })
      .then((_) => ({ [name]: "" }))
      .catch(convert);

    setInput((input) => ({
      ...input,
      name: value,
    }));
    setError(...error, inputError);

    setInput({
      selected: false,
      text: event.target.value,
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
            <label>Category</label> ({error || "*"})<br />
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
            addCategory(input);
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
  categoryName: Y.string().required().min(3).max(10),
});

let convert = (errors) => {
  return errors.inner.reduce((z, item) => {
    let name = (item.path || "").includes(".")
      ? item.path.split(".")[0]
      : item.path || "";
    return z[item.path || ""] ? z : { ...z, [name]: item.message };
  }, {});
};
export default AddCategoryModal;
